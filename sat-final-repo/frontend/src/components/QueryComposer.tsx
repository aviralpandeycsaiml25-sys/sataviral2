/**
 * QueryComposer — Main query input component for SatQuery AI.
 *
 * Features:
 *   - Text query input
 *   - Image upload (primary + secondary for bi-temporal)
 *   - Voice input via Web Speech API (en-IN / hi-IN toggle)
 *   - Voice transcription toast ("Heard: ...")
 *   - Language toggle
 *   - Submits via onAnalyze() — same code path for typed and voice input
 */
import React, { useState, useRef, useCallback, useEffect } from 'react';
import type { QueryRequest } from '../types';
import PolygonAnnotator, { type Point } from './PolygonAnnotator';

// ── Web Speech API type declarations ─────────────────────────────────────────
// Minimal shim — these are missing from older @types/web
interface SRResult { transcript: string; confidence: number; }
interface SRResultList { [index: number]: { [index: number]: SRResult }; }
interface SREvent extends Event { results: SRResultList; }
interface SpeechRecognitionInstance extends EventTarget {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onstart: ((ev: Event) => void) | null;
  onend: ((ev: Event) => void) | null;
  onerror: ((ev: Event) => void) | null;
  onresult: ((ev: SREvent) => void) | null;
  start(): void;
  stop(): void;
}
declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognitionInstance;
    webkitSpeechRecognition: new () => SpeechRecognitionInstance;
  }
}

interface QueryComposerProps {
  onAnalyze: (req: QueryRequest) => void;
  loading: boolean;
}


const isSpeechAvailable = (): boolean =>
  typeof window !== 'undefined' &&
  ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

// Common Hinglish keywords (Hindi grammar / vocabulary written in Latin script)
const HINGLISH_WORDS = new Set([
  'kya', 'hai', 'hain', 'kaise', 'kahan', 'kaha', 'kitna', 'kitni', 'kitne',
  'batao', 'bataiye', 'batana', 'pehle', 'baad', 'badlav', 'badla', 'nuksan',
  'dekh', 'dekho', 'dikh', 'dikhao', 'dikhaye', 'ye', 'yeh', 'wo', 'woh',
  'isme', 'ismein', 'mai', 'mein', 'ko', 'se', 'aur', 'ka', 'ki', 'ke', 'par',
  'hua', 'hui', 'huye', 'hue', 'hoga', 'hogi', 'honge', 'raha', 'rahi', 'rahe',
  'chahiye', 'karo', 'kare', 'karein', 'kijiye', 'tasveer', 'chhavi', 'pani',
  'baadh', 'imarat', 'nadi', 'kuch', 'sab', 'wala', 'wali', 'wale', 'bhi',
  'nahi', 'nahin', 'matlab', 'thoda', 'jyada', 'zyada', 'yahan', 'wahan',
  'khojo', 'dhundo', 'mil', 'mila', 'mile', 'farq', 'antar', 'bata', 'hume',
  'hum', 'aap', 'tum', 'kyun', 'kab', 'kis', 'kisko', 'kaun', 'sirf', 'jungle',
  'ped', 'sadak', 'bhavan', 'shehar', 'gaon', 'khet', 'fasal', 'sukha'
]);

// Helper for automatic language detection (English, Hindi, Hinglish, regional Indic scripts)
const detectLanguage = (text: string): { code: string; label: string; isHinglish?: boolean } => {
  if (!text || !text.trim()) {
    return { code: 'auto', label: 'Auto' };
  }
  // Devanagari script (Hindi, Marathi, Sanskrit, Nepali)
  if (/[\u0900-\u097F]/.test(text)) {
    return { code: 'hi-IN', label: 'हिंदी (Hindi)' };
  }
  // Bengali / Assamese
  if (/[\u0980-\u09FF]/.test(text)) {
    return { code: 'bn-IN', label: 'বাংলা (Bengali)' };
  }
  // Tamil
  if (/[\u0B80-\u0BFF]/.test(text)) {
    return { code: 'ta-IN', label: 'தமிழ் (Tamil)' };
  }
  // Telugu
  if (/[\u0C00-\u0C7F]/.test(text)) {
    return { code: 'te-IN', label: 'తెలుగు (Telugu)' };
  }

  // Check for Hinglish (Latin alphabet with Hindi loanwords/grammar)
  const words = text.toLowerCase().match(/\b[a-z]+\b/g) || [];
  const hasHinglish = words.some(w => HINGLISH_WORDS.has(w));
  if (hasHinglish) {
    return { code: 'hi-IN', label: 'Hinglish (हिन्दी/EN)', isHinglish: true };
  }

  return { code: 'en-IN', label: 'English' };
};

export default function QueryComposer({ onAnalyze, loading }: QueryComposerProps) {
  const [question, setQuestion] = useState('');
  const [imageB64, setImageB64] = useState<string | undefined>();
  const [image2B64, setImage2B64] = useState<string | undefined>();
  const [imageName, setImageName] = useState('');
  const [image2Name, setImage2Name] = useState('');
  const [imageSize, setImageSize] = useState('');
  const [image2Size, setImage2Size] = useState('');
  const [imagePreview, setImagePreview] = useState<string | undefined>();
  const [image2Preview, setImage2Preview] = useState<string | undefined>();
  const [drag1, setDrag1] = useState(false);
  const [drag2, setDrag2] = useState(false);
  const [polygon1, setPolygon1] = useState<Point[]>([]);
  const [polygon2, setPolygon2] = useState<Point[]>([]);
  const [drawing1, setDrawing1] = useState(false);
  const [drawing2, setDrawing2] = useState(false);
  const [syncPolygons, setSyncPolygons] = useState(true);
  const [showVisualizer, setShowVisualizer] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceToast, setVoiceToast] = useState('');
  const voiceSupported = isSpeechAvailable();
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fileRef1 = useRef<HTMLInputElement>(null);
  const fileRef2 = useRef<HTMLInputElement>(null);

  const activePolygon = polygon1.length >= 3 ? polygon1 : (polygon2.length >= 3 ? polygon2 : []);
  const hasActivePolygon = activePolygon.length >= 3;

  const handlePolygon1Change = (poly: Point[]) => {
    setPolygon1(poly);
    if (syncPolygons) {
      setPolygon2(poly);
    }
  };

  const handlePolygon2Change = (poly: Point[]) => {
    setPolygon2(poly);
    if (syncPolygons) {
      setPolygon1(poly);
    }
  };

  // Auto-detect language dynamically from the input
  const detected = detectLanguage(question);

  // ── Voice input ─────────────────────────────────────────────────────────
  const startVoice = useCallback(() => {
    if (!voiceSupported || listening) return;

    const SpeechRecognitionCtor: new () => SpeechRecognitionInstance =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = new SpeechRecognitionCtor();
    // Use detected language, browser language, or default to en-IN
    rec.lang = detected.code === 'hi-IN' ? 'hi-IN' : (navigator.language || 'en-IN');
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    recognitionRef.current = rec;

    rec.onstart = () => setListening(true);
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);

    rec.onresult = (event: SREvent) => {
      const transcript = event.results[0][0].transcript;
      setQuestion(transcript);

      // Show transcription toast for 3 seconds
      setVoiceToast(`Heard: "${transcript}"`);
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      toastTimerRef.current = setTimeout(() => setVoiceToast(''), 3000);
    };

    rec.start();
  }, [voiceSupported, listening, detected.code]);

  const stopVoice = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
  }, []);

  useEffect(() => () => { recognitionRef.current?.stop(); }, []);

  // ── Image upload helper ──────────────────────────────────────────────────
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const processFile = (
    file: File,
    setB64: (s: string | undefined) => void,
    setName: (s: string) => void,
    setSize: (s: string) => void,
    setPreview: (s: string | undefined) => void
  ) => {
    setName(file.name);
    setSize(formatFileSize(file.size));
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPreview(result);                   // full data-URL for <img> preview
      setB64(result.split(',')[1]);         // base64-only for API
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setB64: (s: string | undefined) => void,
    setName: (s: string) => void,
    setSize: (s: string) => void,
    setPreview: (s: string | undefined) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processFile(file, setB64, setName, setSize, setPreview);
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    setB64: (s: string | undefined) => void,
    setName: (s: string) => void,
    setSize: (s: string) => void,
    setPreview: (s: string | undefined) => void,
    setDrag: (b: boolean) => void
  ) => {
    e.preventDefault();
    setDrag(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      processFile(file, setB64, setName, setSize, setPreview);
    }
  };

  // ── Submit — single code path for typed + voice input ───────────────────
  const handleSubmit = () => {
    if (!question.trim() || loading) return;
    const detectedLang = detected.code !== 'auto' ? detected.code : 'en-IN';
    onAnalyze({
      question: question.trim(),
      image_b64: imageB64,
      image2_b64: image2B64,
      language: detectedLang,
      polygon: hasActivePolygon ? activePolygon : undefined,
      roi_mode: hasActivePolygon,
      target_scene: 'both',
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handleSubmit();
  };

  return (
    <div className="query-composer card fade-in-up" style={{ animationDelay: '0.1s' }}>
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="section-label">🛰 Query Input</p>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 700 }}>
            Ask your query
          </h2>
        </div>
        {/* Auto language detection indicator */}
        <div
          className={`auto-lang-badge ${detected.isHinglish ? 'badge-hinglish' : ''}`}
          title="Automatically detects language from your query"
        >
          <span className={`lang-pulse-dot ${detected.code !== 'auto' ? 'active' : ''} ${detected.isHinglish ? 'dot-hinglish' : ''}`} />
          <span>{detected.code !== 'auto' ? `Detected: ${detected.label}` : 'Auto Language Detection'}</span>
        </div>
      </div>

      {/* ── Text input ─────────────────────────────────────────────── */}
      <div className="textarea-wrap">
        <textarea
          id="query-input"
          className="query-textarea"
          placeholder="Ask your query in any language (English, हिंदी, Hinglish, etc.) — VQA, change detection, grounding, SAR-optical fusion…"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={3}
          aria-label="Query input"
        />
        {/* Voice button — only rendered when speech API is available */}
        {voiceSupported && (
          <button
            id="mic-button"
            className={`btn btn-icon mic-btn ${listening ? 'mic-active glow-pulse' : ''}`}
            onClick={listening ? stopVoice : startVoice}
            title={listening ? 'Stop listening' : 'Voice input (auto-detect)'}
            aria-label={listening ? 'Stop voice input' : 'Start voice input'}
            disabled={loading}
          >
            {listening ? '🔴' : '🎤'}
          </button>
        )}
      </div>

      {/* ── Voice transcription toast ───────────────────────────────── */}
      {voiceToast && (
        <div className="voice-toast fade-in" role="status" aria-live="polite">
          <span>🎙</span>
          <span>{voiceToast}</span>
        </div>
      )}


      {/* ── Temporal Scene Pair Upload ───────────────────────────── */}
      <div className="temporal-upload-section">
        <div className="temporal-upload-header">
          <span className="temporal-upload-icon">🛰</span>
          <span className="temporal-upload-title">Temporal Scene Pair</span>
          <span className="temporal-upload-badge">Bi-Temporal Change Detection</span>
          {(imagePreview || image2Preview) && (
            <button
              type="button"
              className="visualize-trigger-btn"
              onClick={() => setShowVisualizer(true)}
              title="Open large side-by-side visualizer and polygon annotator"
            >
              🔍 Visualize & Expand ROI
            </button>
          )}
        </div>

        <div className={`temporal-scenes-row ${(imagePreview || image2Preview) ? 'scenes-expanded' : ''}`}>
          {/* ── Scene 1 ─────────────────────────────────────── */}
          <div
            className={`temporal-scene-card scene-before ${drag1 ? 'drag-over' : ''} ${imageB64 ? 'has-image' : ''}`}
            onDragOver={e => { e.preventDefault(); setDrag1(true); }}
            onDragLeave={() => setDrag1(false)}
            onDrop={e => handleDrop(e, setImageB64, setImageName, setImageSize, setImagePreview, setDrag1)}
            id="scene-1-drop-zone"
          >
            <input
              ref={fileRef1}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={e => handleImageUpload(e, setImageB64, setImageName, setImageSize, setImagePreview)}
              id="image-upload-primary"
            />
            {imagePreview ? (
              <div className="scene-card-inner">
                <div className="scene-card-header">
                  <div className="flex items-center gap-2">
                    <span className="scene-tag-pill tag-before">T₁ · Before</span>
                    {imageName && <span className="scene-file-title" title={imageName}>📄 {imageName}</span>}
                    {imageSize && <span className="scene-file-size">{imageSize}</span>}
                  </div>
                  <div className="flex items-center gap-2" style={{ marginLeft: 'auto' }}>
                    <button
                      type="button"
                      className="scene-action-btn btn-expand"
                      onClick={() => setShowVisualizer(true)}
                      title="Expand to Fullscreen ROI Studio"
                    >
                      ⛶ Fullscreen
                    </button>
                    <button
                      type="button"
                      className="scene-action-btn btn-remove"
                      onClick={() => {
                        setImageB64(undefined); setImageName(''); setImageSize(''); setImagePreview(undefined); setPolygon1([]);
                      }}
                      title="Remove image"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                <div className="scene-preview-wrap">
                  <PolygonAnnotator
                    imageSrc={imagePreview}
                    polygon={polygon1}
                    onPolygonChange={handlePolygon1Change}
                    sceneLabel="Scene 1 (Before)"
                    isDrawing={drawing1}
                    onToggleDrawing={() => setDrawing1(!drawing1)}
                    accentColor="#38bdf8"
                  />
                </div>
              </div>
            ) : (
              <div className="scene-drop-body" onClick={() => fileRef1.current?.click()}>
                <span className="scene-drop-icon">{drag1 ? '📂' : '📡'}</span>
                <p className="scene-drop-heading">Upload Scene 1 (Before)</p>
                <p className="scene-drop-sub">Drag & drop or click to browse</p>
                <p className="scene-drop-hint">PNG · JPG · TIFF · GeoTIFF</p>
                <button type="button" className="btn btn-secondary btn-sm mt-3" onClick={() => fileRef1.current?.click()}>
                  Browse File
                </button>
              </div>
            )}
          </div>

          {/* ── Timeline connector ───────────────────────── */}
          <div className="temporal-connector">
            <div className="connector-line" />
            <div className="connector-node" title="Bi-Temporal Baseline">
              <span className="connector-icon">⏱</span>
            </div>
            <div className="connector-label">Δt</div>
            <div className="connector-line" />
          </div>

          {/* ── Scene 2 ─────────────────────────────────────── */}
          <div
            className={`temporal-scene-card scene-after ${drag2 ? 'drag-over' : ''} ${image2B64 ? 'has-image' : ''}`}
            onDragOver={e => { e.preventDefault(); setDrag2(true); }}
            onDragLeave={() => setDrag2(false)}
            onDrop={e => handleDrop(e, setImage2B64, setImage2Name, setImage2Size, setImage2Preview, setDrag2)}
            id="scene-2-drop-zone"
          >
            <input
              ref={fileRef2}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={e => handleImageUpload(e, setImage2B64, setImage2Name, setImage2Size, setImage2Preview)}
              id="image-upload-secondary"
            />
            {image2Preview ? (
              <div className="scene-card-inner">
                <div className="scene-card-header">
                  <div className="flex items-center gap-2">
                    <span className="scene-tag-pill tag-after">T₂ · After</span>
                    {image2Name && <span className="scene-file-title" title={image2Name}>📄 {image2Name}</span>}
                    {image2Size && <span className="scene-file-size">{image2Size}</span>}
                  </div>
                  <div className="flex items-center gap-2" style={{ marginLeft: 'auto' }}>
                    <button
                      type="button"
                      className="scene-action-btn btn-expand"
                      onClick={() => setShowVisualizer(true)}
                      title="Expand to Fullscreen ROI Studio"
                    >
                      ⛶ Fullscreen
                    </button>
                    <button
                      type="button"
                      className="scene-action-btn btn-remove"
                      onClick={() => {
                        setImage2B64(undefined); setImage2Name(''); setImage2Size(''); setImage2Preview(undefined); setPolygon2([]);
                      }}
                      title="Remove image"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                <div className="scene-preview-wrap">
                  <PolygonAnnotator
                    imageSrc={image2Preview}
                    polygon={polygon2}
                    onPolygonChange={handlePolygon2Change}
                    sceneLabel="Scene 2 (After)"
                    isDrawing={drawing2}
                    onToggleDrawing={() => setDrawing2(!drawing2)}
                    accentColor="#c084fc"
                  />
                </div>
              </div>
            ) : (
              <div className="scene-drop-body" onClick={() => fileRef2.current?.click()}>
                <span className="scene-drop-icon">{drag2 ? '📂' : '🌍'}</span>
                <p className="scene-drop-heading">Upload Scene 2 (After)</p>
                <p className="scene-drop-sub">Drag & drop or click to browse</p>
                <p className="scene-drop-hint">PNG · JPG · TIFF · GeoTIFF</p>
                <button type="button" className="btn btn-secondary btn-sm mt-3" onClick={() => fileRef2.current?.click()}>
                  Browse File
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── Active Polygon ROI Follow-up Query Panel ────────────── */}
        {hasActivePolygon && (
          <div className="roi-followup-panel fade-in">
            <div className="roi-header">
              <span className="roi-icon">📐</span>
              <span className="roi-title">Polygon ROI Constrained ({activePolygon.length} vertices)</span>
              <button
                type="button"
                className={`roi-sync-toggle ${syncPolygons ? 'synced' : ''}`}
                onClick={() => setSyncPolygons(!syncPolygons)}
                title={syncPolygons ? 'ROI coordinates are linked on both T1 and T2' : 'ROI coordinates are separate'}
              >
                {syncPolygons ? '🔗 Linked T₁ ↔ T₂' : '🔓 Independent'}
              </button>
            </div>
            <p className="roi-desc">
              Ask follow-up questions focused specifically on this marked area:
            </p>
            <div className="roi-chips-row">
              <button
                type="button"
                className="roi-chip"
                onClick={() => setQuestion('What changes occurred inside this marked polygon region?')}
              >
                🔄 What changed inside this polygon?
              </button>
              <button
                type="button"
                className="roi-chip"
                onClick={() => setQuestion('Calculate the flooded water extent within this marked ROI')}
              >
                💧 Calculate flood extent in this ROI
              </button>
              <button
                type="button"
                className="roi-chip"
                onClick={() => setQuestion('Are there any damaged buildings or infrastructure in this polygon?')}
              >
                🏢 Are buildings in this polygon damaged?
              </button>
            </div>
          </div>
        )}

        {(imageB64 && image2B64) && (
          <div className="temporal-ready-banner">
            <span>✅</span>
            <span>Both scenes loaded — ready for bi-temporal analysis</span>
            <button
              type="button"
              className="visualize-banner-btn"
              onClick={() => setShowVisualizer(true)}
            >
              🔍 Open Fullscreen Visualizer
            </button>
          </div>
        )}
      </div>

      {/* ── Submit ──────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mt-4" style={{ gap: '1rem' }}>
        <p className="text-xs text-muted">Ctrl+Enter to run · Voice auto-submits after pause</p>
        <button
          id="analyze-button"
          className="btn btn-primary btn-lg"
          onClick={handleSubmit}
          disabled={!question.trim() || loading}
        >
          {loading ? (
            <><span className="spinner" /><span>Analyzing…</span></>
          ) : (
            <><span>⚡</span><span>Analyze</span></>
          )}
        </button>
      </div>

      {/* ── Fullscreen / Expanded Visualizer Modal ──────────────────── */}
      {showVisualizer && (
        <div className="visualizer-modal-backdrop fade-in" onClick={() => setShowVisualizer(false)}>
          <div className="visualizer-modal-dialog" onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div className="visualizer-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.4rem' }}>🛰</span>
                <div>
                  <h3 className="visualizer-title">Satellite Scene Visualizer & ROI Precision Studio</h3>
                  <p className="visualizer-subtitle">Large canvas inspection · Draw bounding polygons · Center ROI preset</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <button
                  type="button"
                  className={`roi-sync-toggle ${syncPolygons ? 'synced' : ''}`}
                  onClick={() => setSyncPolygons(!syncPolygons)}
                >
                  {syncPolygons ? '🔗 Linked T₁ ↔ T₂' : '🔓 Independent'}
                </button>
                <button
                  type="button"
                  className="visualizer-close-btn"
                  onClick={() => setShowVisualizer(false)}
                  title="Close visualizer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Side-by-side Large Maps */}
            <div className="visualizer-stage-grid">
              {/* Scene 1 */}
              <div className="visualizer-stage-panel panel-before">
                <div className="stage-panel-header">
                  <span className="stage-panel-tag tag-before">T₁ · Scene 1 (Before)</span>
                  {imageName && <span className="stage-file-name">📄 {imageName}</span>}
                  {polygon1.length >= 3 && <span className="stage-poly-badge">📐 {polygon1.length} Vertices</span>}
                </div>
                <div className="stage-annotator-container">
                  {imagePreview ? (
                    <PolygonAnnotator
                      imageSrc={imagePreview}
                      polygon={polygon1}
                      onPolygonChange={handlePolygon1Change}
                      sceneLabel="Scene 1 (Before)"
                      isDrawing={drawing1}
                      onToggleDrawing={() => setDrawing1(!drawing1)}
                      accentColor="#38bdf8"
                    />
                  ) : (
                    <div className="stage-empty-placeholder" onClick={() => fileRef1.current?.click()}>
                      <span>📡</span>
                      <p>No Image Loaded for Scene 1</p>
                      <button className="btn btn-secondary btn-sm mt-2">Upload Scene 1</button>
                    </div>
                  )}
                </div>
              </div>

              {/* Scene 2 */}
              <div className="visualizer-stage-panel panel-after">
                <div className="stage-panel-header">
                  <span className="stage-panel-tag tag-after">T₂ · Scene 2 (After)</span>
                  {image2Name && <span className="stage-file-name">📄 {image2Name}</span>}
                  {polygon2.length >= 3 && <span className="stage-poly-badge">📐 {polygon2.length} Vertices</span>}
                </div>
                <div className="stage-annotator-container">
                  {image2Preview ? (
                    <PolygonAnnotator
                      imageSrc={image2Preview}
                      polygon={polygon2}
                      onPolygonChange={handlePolygon2Change}
                      sceneLabel="Scene 2 (After)"
                      isDrawing={drawing2}
                      onToggleDrawing={() => setDrawing2(!drawing2)}
                      accentColor="#c084fc"
                    />
                  ) : (
                    <div className="stage-empty-placeholder" onClick={() => fileRef2.current?.click()}>
                      <span>🌍</span>
                      <p>No Image Loaded for Scene 2</p>
                      <button className="btn btn-secondary btn-sm mt-2">Upload Scene 2</button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Controls & Analysis Dispatch */}
            <div className="visualizer-footer">
              <div className="visualizer-footer-left">
                <div className="visualizer-footer-prompt">
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Query:</span>
                  <input
                    type="text"
                    className="visualizer-prompt-input"
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    placeholder="Enter query or select a quick ROI prompt below..."
                    onKeyDown={handleKeyDown}
                  />
                </div>
                <div className="visualizer-chips">
                  <button
                    type="button"
                    className="roi-chip"
                    onClick={() => setQuestion('What changes occurred inside this marked polygon region?')}
                  >
                    🔄 What changed in polygon?
                  </button>
                  <button
                    type="button"
                    className="roi-chip"
                    onClick={() => setQuestion('Calculate the flooded water extent within this marked ROI')}
                  >
                    💧 Calculate flood extent
                  </button>
                  <button
                    type="button"
                    className="roi-chip"
                    onClick={() => setQuestion('Are there any damaged buildings or infrastructure in this polygon?')}
                  >
                    🏢 Check damaged structures
                  </button>
                </div>
              </div>

              <div className="visualizer-footer-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowVisualizer(false)}
                  style={{ padding: '0.65rem 1.25rem' }}
                >
                  Done Editing
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    setShowVisualizer(false);
                    handleSubmit();
                  }}
                  disabled={!question.trim() || loading}
                  style={{ padding: '0.65rem 1.5rem', whiteSpace: 'nowrap' }}
                >
                  {loading ? 'Analyzing…' : '⚡ Analyze'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .query-composer { position: relative; }
        .auto-lang-badge {
          display: flex; align-items: center; gap: 0.45rem;
          background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.22);
          border-radius: 999px; padding: 4px 12px;
          font-size: 0.78rem; font-weight: 600; color: var(--text-accent);
          transition: all 0.2s ease;
        }
        .auto-lang-badge.badge-hinglish {
          background: rgba(245, 158, 11, 0.12);
          border-color: rgba(245, 158, 11, 0.35);
          color: #fbbf24;
        }
        .lang-pulse-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #10b981; box-shadow: 0 0 6px #10b981;
          display: inline-block; animation: pulseDot 2s infinite ease-in-out;
        }
        .lang-pulse-dot.active {
          background: #38bdf8; box-shadow: 0 0 8px #38bdf8;
        }
        .lang-pulse-dot.dot-hinglish {
          background: #f59e0b;
          box-shadow: 0 0 8px #f59e0b;
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 0.6; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        .textarea-wrap { position: relative; }
        .query-textarea {
          width: 100%; padding: 0.9rem 3.2rem 0.9rem 1rem;
          background: rgba(0,0,0,0.35); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md); color: var(--text-primary);
          font-family: var(--font-sans); font-size: 0.95rem; line-height: 1.55;
          resize: vertical; outline: none; transition: border-color 0.2s;
          min-height: 90px;
        }
        .query-textarea:focus { border-color: var(--accent-primary); box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }
        .query-textarea::placeholder { color: var(--text-muted); }
        .mic-btn { position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.07); border: 1px solid var(--border-card); color: var(--text-secondary); font-size: 1rem; transition: all 0.2s; }
        .mic-btn:hover { background: rgba(255,255,255,0.12); }
        .mic-active { background: rgba(239,68,68,0.15) !important; border-color: rgba(239,68,68,0.5) !important; }
        .voice-toast {
          margin-top: 0.5rem; padding: 0.55rem 1rem;
          background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.35);
          border-radius: var(--radius-md); color: #6ee7b7;
          font-size: 0.85rem; display: flex; gap: 0.5rem; align-items: center;
        }
        /* ── Temporal Upload Section ─────────────────────────── */
        .temporal-upload-section {
          margin-top: 1rem;
          background: rgba(0,0,0,0.22);
          border: 1px solid rgba(59,130,246,0.15);
          border-radius: var(--radius-lg);
          padding: 1rem;
        }
        .temporal-upload-header {
          display: flex; align-items: center; gap: 0.55rem;
          margin-bottom: 0.85rem;
        }
        .temporal-upload-icon { font-size: 1rem; }
        .temporal-upload-title {
          font-size: 0.82rem; font-weight: 700; color: var(--text-secondary);
          text-transform: uppercase; letter-spacing: 0.07em;
        }
        .temporal-upload-badge {
          margin-left: auto;
          font-size: 0.68rem; font-weight: 600;
          padding: 2px 10px;
          background: rgba(139,92,246,0.12);
          border: 1px solid rgba(139,92,246,0.28);
          border-radius: 999px;
          color: #c4b5fd;
          letter-spacing: 0.03em;
        }
        /* scenes row */
        .temporal-scenes-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 1rem;
          align-items: stretch;
          transition: all 0.3s ease;
        }
        .temporal-scenes-row.scenes-expanded {
          min-height: 520px;
        }
        /* individual scene card */
        .temporal-scene-card {
          position: relative;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.22s ease;
          overflow: hidden;
          min-height: 220px;
          display: flex; flex-direction: column;
        }
        .temporal-scenes-row.scenes-expanded .temporal-scene-card {
          min-height: 520px;
        }
        .scene-card-inner {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          flex: 1;
          min-height: 480px;
        }
        .scene-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: rgba(0, 0, 0, 0.55);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          flex-shrink: 0;
          z-index: 5;
        }
        .scene-tag-pill {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 9px;
          border-radius: 999px;
          letter-spacing: 0.03em;
        }
        .tag-before { background: rgba(6, 182, 212, 0.22); color: #67e8f9; border: 1px solid rgba(6, 182, 212, 0.45); }
        .tag-after  { background: rgba(139, 92, 246, 0.22); color: #c4b5fd; border: 1px solid rgba(139, 92, 246, 0.45); }
        .scene-file-title {
          font-size: 0.74rem;
          color: var(--text-secondary);
          max-width: 160px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .scene-file-size {
          font-size: 0.68rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.06);
          padding: 1px 6px;
          border-radius: 4px;
        }
        .scene-action-btn {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 6px;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #e2e8f0;
          transition: all 0.15s ease;
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .scene-action-btn.btn-expand:hover {
          background: rgba(14, 165, 233, 0.3);
          border-color: rgba(56, 189, 248, 0.6);
          color: #fff;
        }
        .scene-action-btn.btn-remove:hover {
          background: rgba(239, 68, 68, 0.25);
          border-color: rgba(239, 68, 68, 0.5);
          color: #fca5a5;
        }
        .scene-before {
          background: rgba(6,182,212,0.04);
          border: 1.5px dashed rgba(6,182,212,0.3);
        }
        .scene-after {
          background: rgba(139,92,246,0.04);
          border: 1.5px dashed rgba(139,92,246,0.3);
        }
        .temporal-scene-card:hover {
          box-shadow: 0 8px 30px rgba(0,0,0,0.35);
        }
        .scene-before:hover { border-color: rgba(6,182,212,0.65); background: rgba(6,182,212,0.08); }
        .scene-after:hover  { border-color: rgba(139,92,246,0.65); background: rgba(139,92,246,0.08); }
        .temporal-scene-card.drag-over {
          transform: scale(1.01);
          box-shadow: 0 0 0 3px rgba(59,130,246,0.45), 0 12px 40px rgba(0,0,0,0.4);
          border-style: solid;
        }
        .temporal-scene-card.has-image { border-style: solid; }
        /* empty drop body */
        .scene-drop-body {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 0.4rem; padding: 2rem 1.5rem;
          text-align: center;
        }
        .scene-drop-icon { font-size: 2.2rem; line-height: 1; }
        .scene-drop-heading { font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin-top: 0.3rem; }
        .scene-drop-sub { font-size: 0.78rem; color: var(--text-muted); }
        .scene-drop-hint { font-size: 0.7rem; color: var(--text-muted); opacity: 0.7; margin-top: 0.2rem; }
        /* preview */
        .scene-preview-wrap {
          position: relative;
          flex: 1;
          min-height: 440px;
          width: 100%;
          height: 100%;
          display: flex;
        }
        /* connector */
        .temporal-connector {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 0.3rem; padding: 0.5rem 0;
          flex-shrink: 0;
        }
        .connector-line {
          width: 2px; flex: 1;
          background: linear-gradient(to bottom, transparent, rgba(59,130,246,0.4), transparent);
          min-height: 20px;
        }
        .connector-node {
          width: 38px; height: 38px; border-radius: 50%;
          background: rgba(59,130,246,0.12);
          border: 1.5px solid rgba(59,130,246,0.45);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem;
          box-shadow: 0 0 12px rgba(59,130,246,0.2);
        }
        .connector-label {
          font-size: 0.65rem; font-weight: 700;
          color: var(--text-accent);
          letter-spacing: 0.08em;
        }
        /* ready banner */
        .temporal-ready-banner {
          margin-top: 0.75rem;
          display: flex; align-items: center; gap: 0.5rem;
          padding: 0.65rem 1rem;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: var(--radius-md);
          font-size: 0.8rem; color: #6ee7b7;
          font-weight: 500;
          animation: fadeIn 0.3s ease;
        }
        /* ROI follow-up query panel */
        .roi-followup-panel {
          margin-top: 0.85rem;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.32);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          animation: fadeIn 0.3s ease;
        }
        .roi-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.35rem;
        }
        .roi-icon { font-size: 1rem; }
        .roi-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: #7dd3fc;
          letter-spacing: 0.02em;
        }
        .roi-sync-toggle {
          margin-left: auto;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--text-secondary);
          padding: 3px 12px;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
          font-family: inherit;
        }
        .roi-sync-toggle:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
        }
        .roi-sync-toggle.synced {
          background: rgba(59, 130, 246, 0.25);
          border-color: rgba(59, 130, 246, 0.5);
          color: #93c5fd;
        }
        .roi-desc {
          font-size: 0.76rem;
          color: var(--text-secondary);
          margin-bottom: 0.55rem;
        }
        .roi-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .roi-chip {
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #bae6fd;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
          font-family: inherit;
        }
        .roi-chip:hover {
          background: rgba(56, 189, 248, 0.25);
          border-color: rgba(56, 189, 248, 0.6);
          color: #fff;
          transform: translateY(-1px);
        }
        .visualize-trigger-btn {
          margin-left: auto;
          background: linear-gradient(135deg, rgba(14, 165, 233, 0.25), rgba(99, 102, 241, 0.3));
          border: 1.5px solid rgba(56, 189, 248, 0.6);
          color: #bae6fd;
          padding: 5px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.25);
        }
        .visualize-trigger-btn:hover {
          background: linear-gradient(135deg, rgba(14, 165, 233, 0.45), rgba(99, 102, 241, 0.5));
          border-color: #38bdf8;
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
        }
        .visualize-banner-btn {
          margin-left: auto;
          background: rgba(16, 185, 129, 0.25);
          border: 1px solid rgba(16, 185, 129, 0.5);
          color: #a7f3d0;
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 0.74rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .visualize-banner-btn:hover {
          background: rgba(16, 185, 129, 0.4);
          color: #fff;
        }
        /* ── Fullscreen Visualizer Modal Styles ──────────────── */
        .visualizer-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(3, 7, 18, 0.94);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .visualizer-modal-dialog {
          width: 98vw;
          max-width: 1750px;
          height: 96vh;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(56, 189, 248, 0.35);
          border-radius: 16px;
          box-shadow: 0 30px 80px -15px rgba(0, 0, 0, 0.85), 0 0 50px rgba(56, 189, 248, 0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .visualizer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background: rgba(0, 0, 0, 0.45);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          flex-shrink: 0;
        }
        .visualizer-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
          margin: 0;
        }
        .visualizer-subtitle {
          font-size: 0.76rem;
          color: var(--text-secondary);
          margin: 2px 0 0 0;
        }
        .visualizer-close-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: var(--text-secondary);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.15s ease;
        }
        .visualizer-close-btn:hover {
          background: rgba(239, 68, 68, 0.25);
          border-color: rgba(239, 68, 68, 0.6);
          color: #fca5a5;
        }
        .visualizer-stage-grid {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          padding: 1.25rem;
          overflow: hidden;
          min-height: 520px;
        }
        .visualizer-stage-panel {
          display: flex;
          flex-direction: column;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
          min-height: 0;
        }
        .panel-before { border-color: rgba(6, 182, 212, 0.35); }
        .panel-after  { border-color: rgba(139, 92, 246, 0.35); }
        .stage-panel-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.65rem 1.1rem;
          background: rgba(0, 0, 0, 0.35);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          flex-shrink: 0;
        }
        .stage-panel-tag {
          font-size: 0.74rem;
          font-weight: 700;
          padding: 2px 9px;
          border-radius: 999px;
        }
        .stage-file-name {
          font-size: 0.74rem;
          color: var(--text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 200px;
        }
        .stage-poly-badge {
          margin-left: auto;
          font-size: 0.72rem;
          font-weight: 600;
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.35);
          padding: 2px 8px;
          border-radius: 999px;
        }
        .stage-annotator-container {
          flex: 1;
          position: relative;
          min-height: 480px;
          height: 100%;
          overflow: hidden;
          display: flex;
        }
        .stage-annotator-container .polygon-annotator-container {
          width: 100%;
          height: 100%;
          min-height: 480px;
        }
        .stage-empty-placeholder {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          font-size: 0.88rem;
          cursor: pointer;
        }
        .stage-empty-placeholder span { font-size: 2.8rem; margin-bottom: 0.6rem; }
        .visualizer-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1rem 1.5rem;
          background: rgba(0, 0, 0, 0.55);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          flex-shrink: 0;
        }
        .visualizer-footer-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 0;
        }
        .visualizer-footer-prompt {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .visualizer-prompt-input {
          flex: 1;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 8px;
          padding: 0.65rem 0.95rem;
          color: #ffffff;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.15s ease;
        }
        .visualizer-prompt-input:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.25);
        }
        .visualizer-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .visualizer-footer-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-shrink: 0;
        }
        @media (max-width: 860px) {
          .visualizer-stage-grid { grid-template-columns: 1fr; }
          .visualizer-footer { flex-direction: column; align-items: stretch; }
          .visualizer-footer-actions { justify-content: flex-end; }
        }
        @media (max-width: 640px) {
          .temporal-scenes-row { grid-template-columns: 1fr; }
          .temporal-connector { flex-direction: row; }
          .connector-line { width: 100%; height: 2px; flex: 1; min-height: unset; }
        }
      `}</style>
    </div>
  );
}
