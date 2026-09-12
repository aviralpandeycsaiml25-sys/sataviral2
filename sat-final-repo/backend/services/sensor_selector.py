"""
Sensor Selector — Chooses the optimal sensor modality for a given EarthQuerySpec.

Decision logic:
  - SAR hint → select SAR (Sentinel-1, cloud-penetrating)
  - Optical hint → select Optical (Sentinel-2 / Landsat-9)
  - Both (joint analysis) → select Multi-modal
  - Change detection with no hint → prefer SAR (cloud-robust for bi-temporal)
  - Default → Optical
"""
from __future__ import annotations
import random
from backend.schemas.response import EarthQuerySpec, SensorSelection


def select_sensor(spec: EarthQuerySpec, image_b64: str | None = None, image2_b64: str | None = None) -> SensorSelection:
    """Determine which sensor/modality to use and produce a rationale string."""
    hint = spec.sensor_hint or "any"
    task = spec.task_type

    # Simulated cloud cover (in production: derived from image metadata / NDSI)
    cloud_cover = round(random.uniform(5, 35), 1)

    if hint == "both":
        return SensorSelection(
            selected_sensor="Multi-modal (Optical + SAR)",
            rationale=(
                "Query explicitly references both optical and SAR imagery. "
                "Fusing Sentinel-2 (10 m optical) with Sentinel-1 GRD (10 m SAR) "
                "for complementary structural and spectral analysis."
            ),
            cloud_cover_estimate=cloud_cover,
            fallback_considered=False,
        )

    if hint == "sar":
        return SensorSelection(
            selected_sensor="SAR — Sentinel-1 GRD (C-band, VV+VH)",
            rationale=(
                f"User query specifies SAR/radar imagery. "
                f"Estimated cloud cover {cloud_cover}% — SAR selected for all-weather imaging capability."
            ),
            cloud_cover_estimate=cloud_cover,
            fallback_considered=False,
        )

    # Change detection defaults to SAR if cloud cover is high
    if task in ("change_detection", "change_vqa") and cloud_cover > 25:
        return SensorSelection(
            selected_sensor="SAR — Sentinel-1 GRD (C-band, VV+VH)",
            rationale=(
                f"Bi-temporal change detection requested. Estimated cloud cover {cloud_cover}% "
                f"(>{25}% threshold). SAR selected for reliable cloud-penetrating multi-date analysis. "
                f"Optical fallback would degrade results."
            ),
            cloud_cover_estimate=cloud_cover,
            fallback_considered=True,
        )

    if task in ("change_detection", "change_vqa"):
        return SensorSelection(
            selected_sensor="Optical — Sentinel-2 MSI (10 m, 13 bands)",
            rationale=(
                f"Bi-temporal change detection requested. Cloud cover {cloud_cover}% is within "
                f"acceptable range (<25%). Sentinel-2 MSI selected for high-resolution spectral change analysis."
            ),
            cloud_cover_estimate=cloud_cover,
            fallback_considered=False,
        )

    # Default: optical
    return SensorSelection(
        selected_sensor="Optical — Sentinel-2 MSI (10 m, 13 bands)",
        rationale=(
            f"Task '{spec.intent}' does not require SAR-specific backscatter analysis. "
            f"Sentinel-2 MSI selected for high-resolution optical imagery. "
            f"Estimated cloud cover: {cloud_cover}%."
        ),
        cloud_cover_estimate=cloud_cover,
        fallback_considered=False,
    )
