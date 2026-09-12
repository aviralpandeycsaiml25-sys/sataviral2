"""EarthQuery Compiler — Natural Language → Structured EarthQuerySpec.

Implements rule-based + keyword intent classification for the demo.
In production this would call a fine-tuned LLM (e.g. Gemini 1.5 Pro)
to produce the spec; the schema and pipeline remain identical.
"""
from __future__ import annotations
import re
from backend.schemas.response import EarthQuerySpec


# Intent keyword maps — ordered by specificity (more specific first)
_INTENT_PATTERNS: list[tuple[str, str, str]] = [
    # (pattern_regex, task_type, human_intent_label)
    (r"\b(sar|radar|synthetic aperture|backscatter)\b.*\b(optical|rgb|multispectral)\b", "sar_optical_joint", "Optical↔SAR Joint Analysis"),
    (r"\b(optical|rgb|multispectral)\b.*\b(sar|radar|synthetic aperture)\b", "sar_optical_joint", "Optical↔SAR Joint Analysis"),
    (r"(what (happened|changed)|how (much|many).*(changed|different)|कितना.*(बदला|नुकसान|अंतर|परिवर्तन)|क्या बदलाव|क्या बदला|kya badla|kitna badlav|kya hua|kitna nuksan|kitna asar)", "change_vqa", "Change-VQA"),
    (r"(change|changed|difference|before.?after|temporal|flood|deforest|urban.?sprawl|damage|बदलाव|परिवर्तन|अंतर|बाढ़|नुकसान|पहले.*बाद|badlav|parivartan|nuksan|pehle.*baad|farq|kya difference)", "change_detection", "Bi-temporal Change Detection"),
    (r"(where|locate|find|detect|identify|show me|ground|bounding box|कहाँ|कहां|पहचानो|खोजो|दिखाओ|ढूंढो|kahan|dikhaye|dikhao|khojo|dhundo|mark karo|highlight karo)", "grounding", "Visual Grounding"),
    (r"(describe|caption|what (is|are) (in|shown|visible)|summarize|overview|वर्णन|विवरण|तस्वीर में क्या|चित्र में क्या|बताएं|बताओ|bataiye|batao|kya dikh raha|kya hai isme|explain karo)", "captioning", "Image Captioning"),
    (r"(what|how many|is there|are there|count|classify|label|क्या|कितने|कितना|kya|kitne|kitna|hai kya|kya ye)", "vqa", "Visual Question Answering"),
]

_SENSOR_PATTERNS: list[tuple[str, str]] = [
    (r"\b(sar|radar|sentinel-1|synthetic aperture)\b", "sar"),
    (r"\b(optical|rgb|sentinel-2|landsat|multispectral|colour|color)\b", "optical"),
]

_ENTITY_PATTERNS = [
    r"\b(flood|fire|deforestation|urban|building|road|river|lake|cloud|snow|vegetation|crop|soil|sand|ice)\b",
    r"(बाढ़|आग|जंगल|इमारत|भवन|सड़क|नदी|झील|बादल|बर्फ|वनस्पति|फसल|मिट्टी|पेड़)",
    r"\b(baadh|pani|building|sadak|imarat|nadi|jungle|ped|fasal)\b",
    r"\b(before|after|change|damage|expansion|growth|loss)\b",
    r"(पहले|बाद|परिवर्तन|बदलाव|नुकसान|विस्तार)",
    r"\b(pehle|baad|badlav|nuksan|farq)\b",
    r"\b(nepal|assam|kerala|uttarakhand|bihar|himalaya|bangladesh|india|kosi|brahmaputra|japan|tokyo|kyoto|osaka|ishikawa|noto)\b",
    r"(नेपाल|असम|केरल|उत्तराखंड|बिहार|हिमालय|भारत|गंगा|कोसी|ब्रह्मपुत्र|जापान|टोक्यो)",
    r"\b(20\d\d)\b",
]


def compile_query(question: str) -> EarthQuerySpec:
    """Classify the natural-language question into a structured EarthQuerySpec."""
    q = question.lower()

    # Intent classification
    task_type = "vqa"  # default
    intent = "Visual Question Answering"
    for pattern, ttype, label in _INTENT_PATTERNS:
        if re.search(pattern, q):
            task_type = ttype
            intent = label
            break

    # Sensor hint
    sensor_hint = "any"
    for pattern, sensor in _SENSOR_PATTERNS:
        if re.search(pattern, q):
            sensor_hint = sensor
            break
    if task_type == "sar_optical_joint":
        sensor_hint = "both"

    # Requires two images?
    requires_two = task_type in ("change_detection", "change_vqa", "sar_optical_joint")

    # Temporal context
    temporal_context = None
    if requires_two:
        years = re.findall(r"\b(20\d\d)\b", q)
        before_match = re.search(r"(?:before|पहले|pehle)\s+([\w\s,]+?)(?:and|और|aur|,|$)", q)
        after_match = re.search(r"(?:after|बाद|baad)\s+([\w\s,]+?)(?:and|और|aur|,|$)", q)
        if len(years) >= 2:
            temporal_context = f"before: {years[0]} (T0) | after: {years[1]} (T1)"
        elif before_match or after_match:
            temporal_context = (
                f"before: {before_match.group(1).strip() if before_match else 'T0'} | "
                f"after: {after_match.group(1).strip() if after_match else 'T1'}"
            )
        else:
            temporal_context = "before: T0 | after: T1"

    # Extract entities
    entities: list[str] = []
    for pattern in _ENTITY_PATTERNS:
        entities.extend(re.findall(pattern, q))
    entities = list(dict.fromkeys(entities))  # deduplicate preserving order

    # Classification confidence (heuristic: penalize if question is very short)
    conf = 0.92 if len(question.split()) >= 5 else 0.72

    return EarthQuerySpec(
        intent=intent,
        task_type=task_type,
        requires_two_images=requires_two,
        sensor_hint=sensor_hint,
        temporal_context=temporal_context,
        extracted_entities=entities,
        confidence=conf,
    )
