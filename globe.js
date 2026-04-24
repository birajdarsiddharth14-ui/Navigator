/* ============================================
   Globe.js — 3D Earth Visualization for Navigator
   Uses Three.js (loaded via CDN in HTML)
   ============================================ */

(function () {
  'use strict';

  /* ============================================
     1. Location Coordinates (lat/lng/zoom)
     ============================================ */

  var locationCoords = {
    /* --- Country default --- */
    india: { lat: 20.5937, lng: 78.9629, zoom: 2.8 },

    /* --- States (approximate centers) --- */
    andhrapradesh: { lat: 15.9129, lng: 79.7400, zoom: 2.2 },
    arunachalpradesh: { lat: 28.2180, lng: 94.7278, zoom: 2.2 },
    assam: { lat: 26.2006, lng: 92.9376, zoom: 2.2 },
    bihar: { lat: 25.0961, lng: 85.3131, zoom: 2.2 },
    chhattisgarh: { lat: 21.2787, lng: 81.8661, zoom: 2.2 },
    goa: { lat: 15.2993, lng: 74.1240, zoom: 1.8 },
    gujarat: { lat: 22.2587, lng: 71.1924, zoom: 2.2 },
    haryana: { lat: 29.0588, lng: 76.0856, zoom: 2.2 },
    himachalpradesh: { lat: 31.1048, lng: 77.1734, zoom: 2.2 },
    jharkhand: { lat: 23.6102, lng: 85.2799, zoom: 2.2 },
    karnataka: { lat: 15.3173, lng: 75.7139, zoom: 2.2 },
    kerala: { lat: 10.8505, lng: 76.2711, zoom: 2.2 },
    madhyapradesh: { lat: 22.9734, lng: 78.6569, zoom: 2.2 },
    maharashtra: { lat: 19.7515, lng: 75.7139, zoom: 2.2 },
    manipur: { lat: 24.6637, lng: 93.9063, zoom: 2.0 },
    meghalaya: { lat: 25.4670, lng: 91.3662, zoom: 2.0 },
    mizoram: { lat: 23.1645, lng: 92.9376, zoom: 2.0 },
    nagaland: { lat: 26.1584, lng: 94.5624, zoom: 2.0 },
    odisha: { lat: 20.9517, lng: 85.0985, zoom: 2.2 },
    punjab: { lat: 31.1471, lng: 75.3412, zoom: 2.2 },
    rajasthan: { lat: 27.0238, lng: 74.2179, zoom: 2.2 },
    sikkim: { lat: 27.5330, lng: 88.5122, zoom: 1.8 },
    tamilnadu: { lat: 11.1271, lng: 78.6569, zoom: 2.2 },
    telangana: { lat: 18.1124, lng: 79.0193, zoom: 2.2 },
    tripura: { lat: 23.9408, lng: 91.9882, zoom: 2.0 },
    uttarpradesh: { lat: 26.8467, lng: 80.9462, zoom: 2.2 },
    uttarakhand: { lat: 30.0668, lng: 79.0193, zoom: 2.2 },
    westbengal: { lat: 22.9868, lng: 87.8550, zoom: 2.2 },
    delhi: { lat: 28.7041, lng: 77.1025, zoom: 1.8 },
    jammukashmir: { lat: 33.7782, lng: 76.5762, zoom: 2.2 },
    ladakh: { lat: 34.1526, lng: 77.5771, zoom: 2.0 },
    chandigarh: { lat: 30.7333, lng: 76.7794, zoom: 1.8 },
    puducherry: { lat: 11.9416, lng: 79.8083, zoom: 1.8 },

    /* --- Cities (from data object in navigator.js) --- */
    sangli: { lat: 16.8524, lng: 74.5815, zoom: 1.5 },
    nagpur: { lat: 21.1458, lng: 79.0882, zoom: 1.5 },
    mumbai: { lat: 19.0760, lng: 72.8777, zoom: 1.5 },
    pune: { lat: 18.5204, lng: 73.8567, zoom: 1.5 },
    kolhapur: { lat: 16.7050, lng: 74.2433, zoom: 1.5 },
    nashik: { lat: 19.9975, lng: 73.7898, zoom: 1.5 },
    solapur: { lat: 17.6599, lng: 75.9064, zoom: 1.5 },
    jalgaon: { lat: 21.0077, lng: 75.5626, zoom: 1.5 },
    thane: { lat: 19.2183, lng: 72.9781, zoom: 1.5 },
    aurangabad: { lat: 19.8762, lng: 75.3433, zoom: 1.5 },
    akola: { lat: 20.7002, lng: 77.0082, zoom: 1.5 },
    navimumbai: { lat: 19.0330, lng: 73.0297, zoom: 1.5 },
    mirabhayandar: { lat: 19.2952, lng: 72.8544, zoom: 1.5 },
    kalyan: { lat: 19.2437, lng: 73.1355, zoom: 1.5 },
    dombivli: { lat: 19.2183, lng: 73.0867, zoom: 1.5 },
    vasaivirar: { lat: 19.3919, lng: 72.8397, zoom: 1.5 },
    panvel: { lat: 18.9894, lng: 73.1175, zoom: 1.5 },
    ulhasnagar: { lat: 19.2215, lng: 73.1645, zoom: 1.5 },
    bhiwandi: { lat: 19.2813, lng: 73.0483, zoom: 1.5 },
    ambarnath: { lat: 19.1860, lng: 73.1876, zoom: 1.5 },
    badlapur: { lat: 19.1545, lng: 73.2286, zoom: 1.5 },
    palghar: { lat: 19.6968, lng: 72.7654, zoom: 1.5 },
    ahmednagar: { lat: 19.0948, lng: 74.7480, zoom: 1.5 },
    amravati: { lat: 20.9320, lng: 77.7523, zoom: 1.5 },
    latur: { lat: 18.3916, lng: 76.5604, zoom: 1.5 },
    nanded: { lat: 19.1383, lng: 77.3210, zoom: 1.5 },
    dhule: { lat: 20.9042, lng: 74.7749, zoom: 1.5 },
    malegaon: { lat: 20.5579, lng: 74.5089, zoom: 1.5 },
    chandrapur: { lat: 19.9615, lng: 79.2961, zoom: 1.5 },
    parbhani: { lat: 19.2610, lng: 76.7748, zoom: 1.5 },
    jalna: { lat: 19.8347, lng: 75.8816, zoom: 1.5 },
    wardha: { lat: 20.7453, lng: 78.5978, zoom: 1.5 },
    yavatmal: { lat: 20.3888, lng: 78.1204, zoom: 1.5 },
    washim: { lat: 20.1121, lng: 77.1331, zoom: 1.5 },
    gondia: { lat: 21.4624, lng: 80.1920, zoom: 1.5 },
    nandurbar: { lat: 21.3700, lng: 74.2400, zoom: 1.5 },
    lonavala: { lat: 18.7546, lng: 73.4062, zoom: 1.5 },
    mahabaleshwar: { lat: 17.9307, lng: 73.6477, zoom: 1.5 },
    shirdi: { lat: 19.7668, lng: 74.4770, zoom: 1.5 },
    matheran: { lat: 18.9866, lng: 73.2681, zoom: 1.5 },
    alibag: { lat: 18.6414, lng: 72.8722, zoom: 1.5 },
    ratnagiri: { lat: 16.9944, lng: 73.3000, zoom: 1.5 },
    sawantwadi: { lat: 15.9044, lng: 73.8178, zoom: 1.5 },
    sindhudurg: { lat: 16.0000, lng: 73.4614, zoom: 1.5 },
    kudal: { lat: 16.0126, lng: 73.6886, zoom: 1.5 },
    murud: { lat: 18.3266, lng: 72.9620, zoom: 1.5 },
    pen: { lat: 18.7369, lng: 73.0953, zoom: 1.5 },
    wai: { lat: 17.9565, lng: 73.8905, zoom: 1.5 },
    bhor: { lat: 18.1517, lng: 73.8440, zoom: 1.5 },
    khopoli: { lat: 18.7877, lng: 73.3426, zoom: 1.5 },
    karjat: { lat: 18.9105, lng: 73.3249, zoom: 1.5 },
    kolad: { lat: 18.4064, lng: 73.1359, zoom: 1.5 },
    mahad: { lat: 18.0834, lng: 73.4120, zoom: 1.5 },
    pandharpur: { lat: 17.6772, lng: 75.3269, zoom: 1.5 },
    miraj: { lat: 16.8264, lng: 74.6442, zoom: 1.5 },
    ichalkaranji: { lat: 16.6906, lng: 74.4596, zoom: 1.5 },
    karad: { lat: 17.2862, lng: 74.1839, zoom: 1.5 },
    satara: { lat: 17.6805, lng: 74.0183, zoom: 1.5 },
    baramati: { lat: 18.1515, lng: 74.5815, zoom: 1.5 },
    sinner: { lat: 19.8421, lng: 74.0047, zoom: 1.5 },
    osmanabad: { lat: 18.1860, lng: 76.0444, zoom: 1.5 },
    raigad: { lat: 18.5158, lng: 73.1822, zoom: 1.5 }
  };

  /* ============================================
     2. Three.js Scene Setup
     ============================================ */

  var container = document.getElementById('globe-container');
  var canvas = document.getElementById('globe-canvas');

  if (!container || !canvas || typeof THREE === 'undefined') {
    console.warn('Globe: missing container, canvas, or Three.js');
    return;
  }

  var scene = new THREE.Scene();

  /* Camera */
  var camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 4.5);

  /* Renderer */
  var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true   /* transparent background — inherits page white */
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);

  /* ============================================
     3. Globe Geometry (Wireframe Monochrome)
     ============================================ */

  var GLOBE_RADIUS = 1.5;

  /* Inner solid sphere — subtle fill */
  var innerGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
  var innerMat = new THREE.MeshBasicMaterial({
    color: 0xf9f9f9,
    transparent: true,
    opacity: 0.95
  });
  var innerSphere = new THREE.Mesh(innerGeo, innerMat);
  scene.add(innerSphere);

  /* Wireframe sphere — primary visual */
  var wireGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 36, 18);
  var wireMat = new THREE.MeshBasicMaterial({
    color: 0xd4d4d4,
    wireframe: true,
    transparent: true,
    opacity: 0.6
  });
  var wireSphere = new THREE.Mesh(wireGeo, wireMat);
  scene.add(wireSphere);

  /* Graticule lines (meridians + parallels for more detail) */
  var graticuleGroup = new THREE.Group();

  /* Create meridian lines (longitude) */
  for (var i = 0; i < 24; i++) {
    var angle = (i / 24) * Math.PI * 2;
    var points = [];
    for (var j = 0; j <= 64; j++) {
      var phi = (j / 64) * Math.PI;
      points.push(new THREE.Vector3(
        GLOBE_RADIUS * 1.001 * Math.sin(phi) * Math.cos(angle),
        GLOBE_RADIUS * 1.001 * Math.cos(phi),
        GLOBE_RADIUS * 1.001 * Math.sin(phi) * Math.sin(angle)
      ));
    }
    var lineGeo = new THREE.BufferGeometry().setFromPoints(points);
    var lineMat = new THREE.LineBasicMaterial({
      color: 0xe5e5e5,
      transparent: true,
      opacity: 0.4
    });
    graticuleGroup.add(new THREE.Line(lineGeo, lineMat));
  }

  /* Create parallel lines (latitude) */
  for (var k = 1; k < 12; k++) {
    var phi2 = (k / 12) * Math.PI;
    var parallelPoints = [];
    for (var l = 0; l <= 64; l++) {
      var theta = (l / 64) * Math.PI * 2;
      parallelPoints.push(new THREE.Vector3(
        GLOBE_RADIUS * 1.001 * Math.sin(phi2) * Math.cos(theta),
        GLOBE_RADIUS * 1.001 * Math.cos(phi2),
        GLOBE_RADIUS * 1.001 * Math.sin(phi2) * Math.sin(theta)
      ));
    }
    var pLineGeo = new THREE.BufferGeometry().setFromPoints(parallelPoints);
    var pLineMat = new THREE.LineBasicMaterial({
      color: 0xe5e5e5,
      transparent: true,
      opacity: 0.3
    });
    graticuleGroup.add(new THREE.Line(pLineGeo, pLineMat));
  }

  scene.add(graticuleGroup);

  /* Subtle outer glow ring */
  var glowGeo = new THREE.RingGeometry(GLOBE_RADIUS * 1.02, GLOBE_RADIUS * 1.08, 64);
  var glowMat = new THREE.MeshBasicMaterial({
    color: 0xe5e5e5,
    transparent: true,
    opacity: 0.15,
    side: THREE.DoubleSide
  });
  var glowRing = new THREE.Mesh(glowGeo, glowMat);
  glowRing.lookAt(camera.position);
  scene.add(glowRing);

  /* Location marker (reusable — hidden by default) */
  var markerGeo = new THREE.SphereGeometry(0.025, 16, 16);
  var markerMat = new THREE.MeshBasicMaterial({ color: 0x2563EB });
  var marker = new THREE.Mesh(markerGeo, markerMat);
  marker.visible = false;
  scene.add(marker);

  /* Marker pulse ring */
  var pulseGeo = new THREE.RingGeometry(0.03, 0.05, 32);
  var pulseMat = new THREE.MeshBasicMaterial({
    color: 0x2563EB,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide
  });
  var pulseRing = new THREE.Mesh(pulseGeo, pulseMat);
  pulseRing.visible = false;
  scene.add(pulseRing);

  /* ============================================
     4. Globe Group (for unified rotation)
     ============================================ */

  var globeGroup = new THREE.Group();
  globeGroup.add(innerSphere);
  globeGroup.add(wireSphere);
  globeGroup.add(graticuleGroup);
  globeGroup.add(marker);
  globeGroup.add(pulseRing);
  scene.add(globeGroup);

  /* Remove individual additions since they are now in group */
  scene.remove(innerSphere);
  scene.remove(wireSphere);
  scene.remove(graticuleGroup);
  scene.remove(marker);
  scene.remove(pulseRing);

  /* ============================================
     5. Animation State
     ============================================ */

  var state = {
    isRotating: true,
    rotationSpeed: 0.003,
    /* Camera animation */
    animating: false,
    animStartTime: 0,
    animDuration: 1200, /* ms */
    /* Start/end values for animation */
    startRotX: 0,
    startRotY: 0,
    targetRotX: 0,
    targetRotY: 0,
    startZoom: 4.5,
    targetZoom: 4.5,
    /* Pulse animation */
    pulsePhase: 0
  };

  /* ============================================
     6. Coordinate Conversion Helpers
     ============================================ */

  /**
   * Convert lat/lng to globe rotation angles.
   * We rotate the globe so the target point faces the camera.
   */
  function latLngToRotation(lat, lng) {
    /* Convert degrees to radians */
    var latRad = lat * (Math.PI / 180);
    var lngRad = lng * (Math.PI / 180);

    /*
     * To face a point (lat, lng) toward +Z camera:
     *   rotateY by -(lng + 90°) to bring longitude to front
     *   rotateX by -lat to bring latitude to center
     */
    return {
      x: -latRad,
      y: -(lngRad + Math.PI / 2)
    };
  }

  /**
   * Convert lat/lng to 3D point on sphere surface (for marker).
   */
  function latLngToPoint(lat, lng, radius) {
    var latRad = lat * (Math.PI / 180);
    var lngRad = lng * (Math.PI / 180);
    return new THREE.Vector3(
      radius * Math.cos(latRad) * Math.cos(lngRad),
      radius * Math.sin(latRad),
      radius * Math.cos(latRad) * Math.sin(lngRad)
    );
  }

  /* Ease in-out cubic */
  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  /* Normalize angle to [-PI, PI] */
  function normalizeAngle(angle) {
    while (angle > Math.PI) angle -= 2 * Math.PI;
    while (angle < -Math.PI) angle += 2 * Math.PI;
    return angle;
  }

  /* Shortest angular path */
  function shortestAngleDelta(from, to) {
    var delta = normalizeAngle(to - from);
    return delta;
  }

  /* ============================================
     7. Camera Animation System
     ============================================ */

  function animateToLocation(locationKey) {
    var coords = locationCoords[locationKey];
    if (!coords) {
      /* Try partial match — strip spaces and special chars */
      var cleanKey = locationKey.toLowerCase().replace(/[\s\-&]/g, '');
      coords = locationCoords[cleanKey];
    }
    if (!coords) {
      /* Fallback to India */
      coords = locationCoords.india;
    }

    var rot = latLngToRotation(coords.lat, coords.lng);

    /* Set animation start values */
    state.startRotX = globeGroup.rotation.x;
    state.startRotY = globeGroup.rotation.y;
    state.targetRotX = rot.x;
    state.targetRotY = state.startRotY + shortestAngleDelta(state.startRotY, rot.y);
    state.startZoom = camera.position.z;
    state.targetZoom = coords.zoom || 2.8;

    state.animating = true;
    state.isRotating = false;
    state.animStartTime = performance.now();

    /* Place marker on surface */
    var point = latLngToPoint(coords.lat, coords.lng, GLOBE_RADIUS * 1.01);
    marker.position.copy(point);
    marker.visible = true;

    /* Position pulse ring at same point, facing outward */
    pulseRing.position.copy(point);
    pulseRing.lookAt(new THREE.Vector3(0, 0, 0));
    pulseRing.visible = true;
    state.pulsePhase = 0;
  }

  function resetGlobe() {
    state.isRotating = true;
    state.animating = false;
    marker.visible = false;
    pulseRing.visible = false;

    /* Smooth zoom out */
    state.startZoom = camera.position.z;
    state.targetZoom = 4.5;
    state.startRotX = globeGroup.rotation.x;
    state.startRotY = globeGroup.rotation.y;
    state.targetRotX = 0;
    state.targetRotY = globeGroup.rotation.y;
    state.animating = true;
    state.animStartTime = performance.now();
  }

  /* ============================================
     8. Render Loop
     ============================================ */

  function animate() {
    requestAnimationFrame(animate);

    var now = performance.now();

    /* Handle camera/rotation animation */
    if (state.animating) {
      var elapsed = now - state.animStartTime;
      var t = Math.min(elapsed / state.animDuration, 1);
      var eased = easeInOutCubic(t);

      globeGroup.rotation.x = state.startRotX + (state.targetRotX - state.startRotX) * eased;
      globeGroup.rotation.y = state.startRotY + (state.targetRotY - state.startRotY) * eased;
      camera.position.z = state.startZoom + (state.targetZoom - state.startZoom) * eased;

      if (t >= 1) {
        state.animating = false;
      }
    }

    /* Idle rotation */
    if (state.isRotating && !state.animating) {
      globeGroup.rotation.y += state.rotationSpeed;
    }

    /* Pulse ring animation */
    if (pulseRing.visible) {
      state.pulsePhase += 0.03;
      var scale = 1 + 0.5 * Math.sin(state.pulsePhase);
      pulseRing.scale.set(scale, scale, scale);
      pulseMat.opacity = 0.5 * (1 - 0.3 * Math.sin(state.pulsePhase));
    }

    /* Keep glow ring facing camera */
    glowRing.lookAt(camera.position);

    renderer.render(scene, camera);
  }

  animate();

  /* ============================================
     9. Resize Handler
     ============================================ */

  function onResize() {
    if (!container) return;
    var w = container.clientWidth;
    var h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  window.addEventListener('resize', onResize);

  /* Also observe container size changes (for layout transition) */
  if (typeof ResizeObserver !== 'undefined') {
    var ro = new ResizeObserver(onResize);
    ro.observe(container);
  }

  /* ============================================
     10. Public API (integration hooks)
     ============================================ */

  /**
   * Focus globe on a location.
   * @param {string} locationKey — city key, state name, or 'india'
   */
  window.globeFocusLocation = function (locationKey) {
    animateToLocation(locationKey);
  };

  /**
   * Reset globe to idle rotation.
   */
  window.globeReset = function () {
    resetGlobe();
  };

})();
