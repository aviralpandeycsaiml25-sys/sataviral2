import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

export interface GeoTarget {
  lat: number;
  lon: number;
  label: string;
  zoom?: number;
}

export const KNOWN_LOCATIONS: Record<string, GeoTarget> = {
  japan: { lat: 36.2048, lon: 138.2529, label: 'Japan (Honshu Region)' },
  tokyo: { lat: 35.6762, lon: 139.6503, label: 'Tokyo, Japan' },
  noto: { lat: 37.2842, lon: 136.9145, label: 'Noto Peninsula, Ishikawa, Japan' },
  ishikawa: { lat: 36.5947, lon: 136.6256, label: 'Ishikawa Prefecture, Japan' },
  osaka: { lat: 34.6937, lon: 135.5023, label: 'Osaka, Japan' },
  kyoto: { lat: 35.0116, lon: 135.7681, label: 'Kyoto, Japan' },
  assam: { lat: 26.2006, lon: 92.9376, label: 'Assam (Brahmaputra Basin), India' },
  brahmaputra: { lat: 26.1856, lon: 91.7485, label: 'Brahmaputra River, India' },
  kerala: { lat: 10.8505, lon: 76.2711, label: 'Kerala (Flood Plains), India' },
  uttarakhand: { lat: 30.0668, lon: 79.0193, label: 'Uttarakhand Himalayas, India' },
  bihar: { lat: 25.0961, lon: 85.3131, label: 'Bihar (Kosi Floodplain), India' },
  kosi: { lat: 25.4326, lon: 87.2711, label: 'Kosi River Zone, India' },
  nepal: { lat: 28.3949, lon: 84.1240, label: 'Nepal / Himalayan Arc' },
  himalaya: { lat: 27.9881, lon: 86.9250, label: 'Himalayan Range' },
  india: { lat: 20.5937, lon: 78.9629, label: 'India (Central Sector)' },
};

export function resolveLocationFromQuery(query: string, entities: string[] = []): GeoTarget | null {
  const text = (query + ' ' + entities.join(' ')).toLowerCase();
  for (const [key, loc] of Object.entries(KNOWN_LOCATIONS)) {
    if (text.includes(key)) {
      return loc;
    }
  }
  // Japanese keywords in Hindi/Devanagari
  if (text.includes('जापान') || text.includes('टोक्यो')) {
    return KNOWN_LOCATIONS.japan;
  }
  return null;
}

// Convert Lat/Lon to 3D Cartesian coordinates on sphere of radius R
function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Generate procedural realistic high-contrast Earth map on canvas
function createEarthCanvasTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  // Deep ocean gradient
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  oceanGrad.addColorStop(0, '#030816');
  oceanGrad.addColorStop(0.5, '#07152f');
  oceanGrad.addColorStop(1, '#030816');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Lat / Lon coordinate grid lines
  ctx.strokeStyle = 'rgba(59, 130, 246, 0.12)';
  ctx.lineWidth = 1;
  for (let lat = -80; lat <= 80; lat += 20) {
    const y = ((90 - lat) / 180) * canvas.height;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
  for (let lon = -180; lon <= 180; lon += 30) {
    const x = ((lon + 180) / 360) * canvas.width;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  // Draw simplified continents with high-tech glowing landmass aesthetic
  ctx.fillStyle = '#0f2744';
  ctx.strokeStyle = '#2563eb';
  ctx.lineWidth = 2;

  // Helper to map lat/lon coords to canvas
  const toXY = (lat: number, lon: number): [number, number] => [
    ((lon + 180) / 360) * canvas.width,
    ((90 - lat) / 180) * canvas.height,
  ];

  // Draw continental shapes (Asia/Eurasia, Americas, Africa, Australia, Japan)
  const drawRegion = (pts: [number, number][], fill = '#112d4e', stroke = '#3b82f6') => {
    if (pts.length === 0) return;
    ctx.beginPath();
    const [x0, y0] = toXY(pts[0][0], pts[0][1]);
    ctx.moveTo(x0, y0);
    for (let i = 1; i < pts.length; i++) {
      const [x, y] = toXY(pts[i][0], pts[i][1]);
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.strokeStyle = stroke;
    ctx.stroke();
  };

  // Eurasia & India
  drawRegion([
    [70, 25], [72, 60], [70, 100], [65, 140], [60, 170], [50, 155],
    [40, 130], [30, 122], [22, 114], [10, 105], [8, 77], [25, 68],
    [30, 60], [35, 45], [42, 28], [55, 10], [65, 15]
  ], '#122e4d', '#3b82f6');

  // Indian Subcontinent (detailed)
  drawRegion([
    [35, 74], [32, 79], [28, 88], [26, 95], [22, 89], [15, 80],
    [8, 77], [13, 74], [20, 72], [25, 68], [30, 70]
  ], '#15365e', '#60a5fa');

  // Japan Archipelago
  drawRegion([
    [45, 142], [43, 145], [40, 140], [36, 139], [34, 135], [32, 130],
    [33, 129], [35, 133], [38, 138], [42, 141]
  ], '#1d4ed8', '#93c5fd');

  // Africa
  drawRegion([
    [35, -5], [37, 10], [32, 32], [12, 51], [-5, 40], [-25, 33],
    [-34, 18], [-20, 12], [5, 10], [12, -15], [25, -15]
  ], '#112b46', '#2563eb');

  // North America
  drawRegion([
    [70, -165], [72, -130], [60, -85], [50, -55], [30, -80], [25, -80],
    [15, -90], [20, -105], [32, -117], [48, -125], [60, -145]
  ], '#112b46', '#2563eb');

  // South America
  drawRegion([
    [12, -72], [5, -52], [-10, -36], [-22, -41], [-45, -65], [-55, -68],
    [-40, -73], [-20, -70], [-5, -80]
  ], '#10273f', '#2563eb');

  // Australia
  drawRegion([
    [-12, 130], [-15, 145], [-25, 153], [-37, 150], [-38, 140],
    [-32, 115], [-22, 114], [-15, 124]
  ], '#122c47', '#3b82f6');

  // City lights scatter (glowing dots on landmasses)
  ctx.fillStyle = '#60a5fa';
  const majorCities: [number, number][] = [
    [35.6, 139.6], [28.6, 77.2], [19.0, 72.8], [13.0, 80.2], [22.5, 88.3],
    [26.2, 92.9], [31.2, 121.4], [39.9, 116.4], [51.5, -0.1], [40.7, -74.0],
    [48.8, 2.3], [37.7, -122.4], [1.3, 103.8], [34.0, -118.2]
  ];
  for (const [lat, lon] of majorCities) {
    const [x, y] = toXY(lat, lon);
    const radG = ctx.createRadialGradient(x, y, 0, x, y, 8);
    radG.addColorStop(0, 'rgba(147, 197, 253, 1)');
    radG.addColorStop(0.4, 'rgba(59, 130, 246, 0.6)');
    radG.addColorStop(1, 'rgba(59, 130, 246, 0)');
    ctx.fillStyle = radG;
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

interface EarthGlobeProps {
  targetLocation: GeoTarget | null;
  onResetTarget?: () => void;
}

export default function EarthGlobeBackground({ targetLocation, onResetTarget }: EarthGlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hudTarget, setHudTarget] = useState<GeoTarget | null>(null);
  const [cinematicMode, setCinematicMode] = useState(false);
  const [globeOpacity, setGlobeOpacity] = useState(0.85);

  // Animation refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const earthMeshRef = useRef<THREE.Mesh | null>(null);
  const beaconMeshRef = useRef<THREE.Mesh | null>(null);
  const beaconRingRef = useRef<THREE.Mesh | null>(null);
  const satelliteGroupRef = useRef<THREE.Group | null>(null);

  // Target camera state for interpolation
  const targetCamPosRef = useRef(new THREE.Vector3(0, 0, 3.8));
  const isZoomingRef = useRef(false);

  // Initialize Three.js scene
  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 3.8);
    cameraRef.current = camera;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // ── Lighting ────────────────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0x0f1d38, 1.8);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.5);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    const blueFillLight = new THREE.DirectionalLight(0x3b82f6, 1.2);
    blueFillLight.position.set(-5, -2, -3);
    scene.add(blueFillLight);

    // ── Starfield background ───────────────────────────────────────────────
    const starsGeo = new THREE.BufferGeometry();
    const starCount = 1200;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 100;
      starPositions[i + 1] = (Math.random() - 0.5) * 100;
      starPositions[i + 2] = (Math.random() - 0.5) * 100;
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starsMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.18,
      transparent: true,
      opacity: 0.75,
    });
    const starField = new THREE.Points(starsGeo, starsMat);
    scene.add(starField);

    // ── Globe Group ────────────────────────────────────────────────────────
    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;
    scene.add(globeGroup);

    // Earth Sphere
    const earthRadius = 1.0;
    const earthGeo = new THREE.SphereGeometry(earthRadius, 64, 64);
    const earthTex = createEarthCanvasTexture();
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthTex,
      roughness: 0.65,
      metalness: 0.15,
      emissive: new THREE.Color(0x0a1931),
      emissiveIntensity: 0.35,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthMeshRef.current = earthMesh;
    globeGroup.add(earthMesh);

    // Atmosphere Glow Sphere
    const atmoGeo = new THREE.SphereGeometry(earthRadius * 1.035, 48, 48);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    globeGroup.add(atmoMesh);

    // Outer Halo
    const haloGeo = new THREE.SphereGeometry(earthRadius * 1.15, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x1d4ed8,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    globeGroup.add(haloMesh);

    // ── Target Location Beacon Pin ─────────────────────────────────────────
    const beaconPinGeo = new THREE.SphereGeometry(0.025, 16, 16);
    const beaconPinMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.95,
    });
    const beaconMesh = new THREE.Mesh(beaconPinGeo, beaconPinMat);
    beaconMesh.visible = false;
    beaconMeshRef.current = beaconMesh;
    globeGroup.add(beaconMesh);

    // Radar pulse ring at beacon
    const ringGeo = new THREE.RingGeometry(0.02, 0.08, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    const beaconRing = new THREE.Mesh(ringGeo, ringMat);
    beaconRing.visible = false;
    beaconRingRef.current = beaconRing;
    globeGroup.add(beaconRing);

    // ── Orbiting Satellite (ISRO Cartosat/Sentinel Representation) ─────────
    const satGroup = new THREE.Group();
    satelliteGroupRef.current = satGroup;

    // Satellite body
    const satBody = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.06, 0.09),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.2 })
    );
    satGroup.add(satBody);

    // Solar panels
    const panelMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, metalness: 0.8, roughness: 0.3 });
    const leftPanel = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.005, 0.07), panelMat);
    leftPanel.position.set(-0.13, 0, 0);
    satGroup.add(leftPanel);
    const rightPanel = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.005, 0.07), panelMat);
    rightPanel.position.set(0.13, 0, 0);
    satGroup.add(rightPanel);

    // Radar scan cone beam down to Earth
    const coneGeo = new THREE.ConeGeometry(0.35, 0.8, 16, 1, true);
    const coneMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const scanCone = new THREE.Mesh(coneGeo, coneMat);
    scanCone.rotation.x = Math.PI;
    scanCone.position.set(0, -0.4, 0);
    satGroup.add(scanCone);

    scene.add(satGroup);

    // ── Animation Loop ─────────────────────────────────────────────────────
    let satAngle = 0;
    let ringScale = 1;
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const isDashboardVisible = window.scrollY > window.innerHeight * 0.35 || cinematicMode;
      if (!isDashboardVisible) return;

      // Idle globe rotation if not focused on target
      if (globeGroupRef.current && !isZoomingRef.current) {
        globeGroupRef.current.rotation.y += 0.0008;
      }

      // Orbiting satellite path
      satAngle += 0.012;
      const satOrbitR = 1.6;
      satGroup.position.set(
        Math.cos(satAngle) * satOrbitR,
        Math.sin(satAngle * 1.5) * 0.4,
        Math.sin(satAngle) * satOrbitR
      );
      satGroup.lookAt(0, 0, 0);

      // Pulse beacon ring animation
      if (beaconRingRef.current && beaconRingRef.current.visible) {
        ringScale += 0.03;
        if (ringScale > 2.2) ringScale = 0.8;
        beaconRingRef.current.scale.set(ringScale, ringScale, ringScale);
        (beaconRingRef.current.material as THREE.MeshBasicMaterial).opacity = Math.max(
          0,
          0.9 - (ringScale - 0.8) / 1.4
        );
      }

      // Smooth camera fly-to interpolation
      if (cameraRef.current) {
        cameraRef.current.position.lerp(targetCamPosRef.current, 0.045);
      }

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize handler ─────────────────────────────────────────────────────
    const handleResize = () => {
      if (!container || !cameraRef.current) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // ── Handle Target Location Changes (Fly-To Animation) ────────────────────
  useEffect(() => {
    if (!targetLocation || !globeGroupRef.current || !beaconMeshRef.current || !beaconRingRef.current) {
      if (!targetLocation) {
        targetCamPosRef.current.set(0, 0, 3.8);
        isZoomingRef.current = false;
        if (beaconMeshRef.current) beaconMeshRef.current.visible = false;
        if (beaconRingRef.current) beaconRingRef.current.visible = false;
        setHudTarget(null);
      }
      return;
    }

    setHudTarget(targetLocation);
    isZoomingRef.current = true;

    // Convert lat/lon to 3D point on unit sphere
    const targetPos = latLonToVector3(targetLocation.lat, targetLocation.lon, 1.0);

    // Place the beacon pin at the location
    beaconMeshRef.current.position.copy(targetPos);
    beaconMeshRef.current.visible = true;

    // Orient ring normal to the surface
    beaconRingRef.current.position.copy(targetPos.clone().multiplyScalar(1.005));
    beaconRingRef.current.lookAt(targetPos.clone().multiplyScalar(2));
    beaconRingRef.current.visible = true;

    // Calculate rotation to face the target position directly toward camera (+Z axis)
    const targetSpherical = new THREE.Spherical().setFromVector3(targetPos);
    const targetYRotation = -targetSpherical.theta + Math.PI / 2;
    const targetXRotation = targetSpherical.phi - Math.PI / 2;

    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.x = targetXRotation * 0.5;
      globeGroupRef.current.rotation.y = targetYRotation;
    }

    // Zoom in camera close to target
    targetCamPosRef.current.set(0, 0, targetLocation.zoom || 1.9);

    const timer = setTimeout(() => {
      isZoomingRef.current = false;
    }, 1500);

    return () => clearTimeout(timer);
  }, [targetLocation]);

  const handleReset = useCallback(() => {
    targetCamPosRef.current.set(0, 0, 3.8);
    isZoomingRef.current = false;
    if (beaconMeshRef.current) beaconMeshRef.current.visible = false;
    if (beaconRingRef.current) beaconRingRef.current.visible = false;
    setHudTarget(null);
    if (onResetTarget) onResetTarget();
  }, [onResetTarget]);

  return (
    <div
      className={`earth-background-wrapper ${cinematicMode ? 'cinematic-view' : ''}`}
      style={{ opacity: globeOpacity }}
    >
      {/* Three.js canvas mount container */}
      <div ref={mountRef} className="earth-canvas-container" />

      {/* Floating 3D Earth HUD Control Bar */}
      <div className="earth-hud-panel fade-in">
        <div className="earth-hud-badge">
          <span className="earth-status-dot" />
          <span className="earth-hud-title">3D Orbit: Sentinel / Cartosat</span>
        </div>

        {hudTarget && (
          <div className="earth-target-pill fade-in">
            <span className="target-radar-icon">🎯</span>
            <div className="target-info">
              <span className="target-label">{hudTarget.label}</span>
              <span className="target-coords">
                {hudTarget.lat >= 0 ? `${hudTarget.lat.toFixed(2)}°N` : `${Math.abs(hudTarget.lat).toFixed(2)}°S`} ·{' '}
                {hudTarget.lon >= 0 ? `${hudTarget.lon.toFixed(2)}°E` : `${Math.abs(hudTarget.lon).toFixed(2)}°W`}
              </span>
            </div>
            <button className="target-reset-btn" onClick={handleReset} title="Reset camera to global orbit">
              ✕
            </button>
          </div>
        )}

        <div className="earth-hud-actions">
          <button
            className={`earth-hud-btn ${cinematicMode ? 'active' : ''}`}
            onClick={() => setCinematicMode(!cinematicMode)}
            title={cinematicMode ? 'Exit full cinematic 3D mode' : 'Enter full cinematic 3D Earth mode'}
          >
            {cinematicMode ? '🖥 UI Mode' : '🎬 Cinematic 3D'}
          </button>
          <button
            className="earth-hud-btn"
            onClick={handleReset}
            title="Reset globe to full orbit"
          >
            🔄 Reset
          </button>
          <button
            className="earth-hud-btn opacity-btn"
            onClick={() => setGlobeOpacity(globeOpacity === 0.85 ? 0.45 : 0.85)}
            title="Toggle background brightness"
          >
            {globeOpacity === 0.85 ? '💡 Dim' : '✨ Bright'}
          </button>
        </div>
      </div>

      <style>{`
        .earth-background-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          transition: opacity 0.4s ease;
          overflow: hidden;
        }
        .earth-canvas-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        /* Cinematic view brings canvas on top with transparent UI pass-through */
        .cinematic-view {
          pointer-events: auto;
          z-index: 50;
          background: rgba(6, 10, 20, 0.4);
          backdrop-filter: blur(2px);
        }
        .earth-hud-panel {
          position: absolute;
          bottom: 1.5rem;
          right: 2rem;
          pointer-events: auto;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(13, 20, 36, 0.82);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(59, 130, 246, 0.28);
          border-radius: 999px;
          padding: 6px 14px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.15);
          z-index: 100;
        }
        .earth-hud-badge {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .earth-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulseDot 2s infinite ease-in-out;
        }
        .earth-hud-title {
          font-size: 0.75rem;
          letter-spacing: 0.02em;
        }
        .earth-target-pill {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          border-radius: 999px;
          padding: 2px 10px;
        }
        .target-radar-icon {
          font-size: 0.85rem;
        }
        .target-info {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .target-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #fca5a5;
        }
        .target-coords {
          font-size: 0.62rem;
          font-family: var(--font-mono);
          color: #f87171;
        }
        .target-reset-btn {
          background: transparent;
          border: none;
          color: #fca5a5;
          cursor: pointer;
          font-size: 0.7rem;
          padding: 0 2px;
          line-height: 1;
        }
        .earth-hud-actions {
          display: flex;
          gap: 0.35rem;
        }
        .earth-hud-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          padding: 3px 10px;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.18s ease;
          font-family: var(--font-sans);
        }
        .earth-hud-btn:hover {
          background: rgba(59, 130, 246, 0.22);
          border-color: rgba(59, 130, 246, 0.5);
          color: #fff;
        }
        .earth-hud-btn.active {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: #fff;
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
        }
        @media (max-width: 768px) {
          .earth-hud-panel {
            bottom: 0.75rem;
            right: 0.75rem;
            left: 0.75rem;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
}
