const SVG_NS = 'http://www.w3.org/2000/svg';
const SAVED_KEY = 'contour:saved:v1';

const TRAILS = [
  {
    id: 'alder-lake-loop',
    number: '01',
    name: 'Alder Lake Loop',
    difficulty: 'Easy',
    distance: 4.2,
    time: '1 h 20',
    ascent: 68,
    type: 'Loop',
    condition: 'Dry',
    season: 'Year round',
    tags: ['Lake', 'Family', 'Birdlife'],
    description: 'A soft loop around the lake with three picnic clearings and a boardwalk through the reeds. The western shore stays shaded until late morning.',
    path: 'M 118 500 C 108 454 138 410 186 402 C 238 394 276 424 284 470 C 292 514 256 550 206 554 C 154 558 126 540 118 500 Z',
    profile: [420, 424, 430, 438, 444, 451, 458, 466, 471, 468, 462, 456, 451, 447, 442, 438, 432, 428, 424, 420],
    waypoints: [
      { name: 'Alder trailhead', type: 'Parking', at: 0, x: 118, y: 500 },
      { name: 'Lake overlook', type: 'Viewpoint', at: 1.2, x: 268, y: 430 },
      { name: 'Bird blind', type: 'Wildlife', at: 2.4, x: 284, y: 496 },
      { name: 'East beach', type: 'Access', at: 3.4, x: 200, y: 552 }
    ]
  },
  {
    id: 'kestrel-ridge-traverse',
    number: '02',
    name: 'Kestrel Ridge Traverse',
    difficulty: 'Hard',
    distance: 11.8,
    time: '4 h 45',
    ascent: 890,
    type: 'Point to point',
    condition: 'Exposed',
    season: 'Jun–Oct',
    tags: ['Ridge', 'Views', 'Camp'],
    description: 'A long, exposed line from the valley floor to the northern gate. The ridge stays above the trees for four kilometres, with water at the camp and nowhere else.',
    path: 'M 96 620 C 160 584 196 540 248 512 C 304 482 330 436 380 404 C 430 372 468 344 512 310 C 560 274 600 240 648 204 C 692 170 736 126 800 90',
    profile: [420, 448, 486, 532, 580, 636, 694, 748, 806, 868, 934, 1002, 1064, 1128, 1186, 1234, 1278, 1310, 1288, 1240, 1172, 1096, 1008, 912, 820],
    waypoints: [
      { name: 'Valley trailhead', type: 'Parking', at: 0, x: 96, y: 620 },
      { name: 'Cedar junction', type: 'Junction', at: 3.1, x: 248, y: 512 },
      { name: 'Ridge camp', type: 'Camp', at: 7.4, x: 512, y: 310 },
      { name: 'Kestrel lookout', type: 'Viewpoint', at: 9.6, x: 648, y: 204 },
      { name: 'North gate', type: 'Access', at: 11.8, x: 800, y: 90 }
    ]
  },
  {
    id: 'cedar-hollow-trail',
    number: '03',
    name: 'Cedar Hollow Trail',
    difficulty: 'Moderate',
    distance: 6.5,
    time: '2 h 10',
    ascent: 260,
    type: 'Out and back',
    condition: 'Muddy patches',
    season: 'May–Nov',
    tags: ['Forest', 'Creek', 'Old growth'],
    description: 'A shaded there-and-back through cedar and hemlock. The last kilometre follows the creek over roots and two short boardwalks.',
    path: 'M 330 560 C 370 536 392 508 428 492 C 466 474 500 480 536 460 C 570 440 590 416 626 410 C 660 404 690 424 694 454',
    profile: [512, 520, 534, 552, 574, 596, 618, 638, 654, 662, 656, 642, 628, 616, 608, 596, 582, 566, 548, 534, 522, 512],
    waypoints: [
      { name: 'Alder spur', type: 'Junction', at: 0, x: 330, y: 560 },
      { name: 'Creek crossing', type: 'Bridge', at: 1.7, x: 428, y: 492 },
      { name: 'Cedar grove', type: 'Old growth', at: 3.4, x: 536, y: 460 },
      { name: 'Moss bench', type: 'Rest', at: 5.2, x: 626, y: 410 },
      { name: 'Hollow turn', type: 'Turnaround', at: 6.5, x: 694, y: 454 }
    ]
  },
  {
    id: 'granite-pass-scramble',
    number: '04',
    name: 'Granite Pass Scramble',
    difficulty: 'Hard',
    distance: 9.6,
    time: '5 h 30',
    ascent: 1120,
    type: 'Point to point',
    condition: 'Loose rock',
    season: 'Jul–Oct',
    tags: ['Alpine', 'Scramble', 'Summit'],
    description: 'A steep line over talus and granite slabs. Hands are useful above the pass, and the summit is not the place to be in weather.',
    path: 'M 470 620 C 492 578 480 544 508 510 C 536 476 520 436 548 400 C 576 364 568 326 594 292 C 620 258 616 214 636 180 C 650 154 660 124 650 92 C 644 76 620 68 600 66',
    profile: [468, 502, 548, 602, 664, 732, 806, 884, 968, 1054, 1138, 1220, 1302, 1386, 1462, 1536, 1604, 1658, 1692, 1718, 1704, 1642, 1560, 1470, 1382],
    waypoints: [
      { name: 'South trailhead', type: 'Parking', at: 0, x: 470, y: 620 },
      { name: 'Talus field', type: 'Caution', at: 2.1, x: 508, y: 510 },
      { name: 'Granite slabs', type: 'Scramble', at: 4.4, x: 548, y: 400 },
      { name: 'The pass', type: 'Saddle', at: 6.7, x: 594, y: 292 },
      { name: 'North summit', type: 'Summit', at: 9.6, x: 600, y: 66 }
    ]
  },
  {
    id: 'moss-creek-falls',
    number: '05',
    name: 'Moss Creek Falls',
    difficulty: 'Easy',
    distance: 3.1,
    time: '55 min',
    ascent: 95,
    type: 'Out and back',
    condition: 'Dry',
    season: 'Year round',
    tags: ['Waterfall', 'Family', 'Creek'],
    description: 'A short walk to two tiers of falling water. The footbridge is the only steep step, and the lower pool is a good place to stop.',
    path: 'M 770 590 C 748 560 760 532 740 504 C 720 476 736 444 720 416 C 704 388 716 364 740 360',
    profile: [430, 436, 444, 454, 466, 478, 490, 502, 514, 524, 518, 508, 498, 488, 478, 468, 458, 448, 438, 430],
    waypoints: [
      { name: 'Moss Creek lot', type: 'Parking', at: 0, x: 770, y: 590 },
      { name: 'Footbridge', type: 'Bridge', at: 1.4, x: 740, y: 504 },
      { name: 'Lower falls', type: 'Falls', at: 2.5, x: 720, y: 416 },
      { name: 'Upper falls', type: 'Falls', at: 3.1, x: 740, y: 360 }
    ]
  },
  {
    id: 'lookout-hill-loop',
    number: '06',
    name: 'Lookout Hill Loop',
    difficulty: 'Moderate',
    distance: 7.4,
    time: '2 h 50',
    ascent: 410,
    type: 'Loop',
    condition: 'Firm',
    season: 'Apr–Nov',
    tags: ['Summit', 'Fire tower', 'Spring'],
    description: 'A steady climb to the old fire lookout, then a rolling return past a hillside spring. The tower platform is open but the cabin is locked.',
    path: 'M 700 380 C 670 350 676 304 706 276 C 736 248 782 244 812 270 C 842 296 844 342 818 370 C 792 398 744 404 700 380 Z',
    profile: [486, 504, 528, 558, 594, 634, 676, 718, 760, 796, 824, 846, 858, 850, 832, 806, 776, 742, 706, 670, 634, 600, 568, 536, 486],
    waypoints: [
      { name: 'Lookout trailhead', type: 'Parking', at: 0, x: 700, y: 380 },
      { name: 'North switchback', type: 'Junction', at: 1.9, x: 706, y: 276 },
      { name: 'Fire lookout', type: 'Lookout', at: 4.2, x: 812, y: 270 },
      { name: 'Hillside spring', type: 'Water', at: 5.7, x: 836, y: 330 },
      { name: 'South gate', type: 'Access', at: 6.6, x: 744, y: 404 }
    ]
  }
];

const mapWorld = document.getElementById('mapWorld');
const terrainLayer = document.getElementById('terrainLayer');
const trailLayer = document.getElementById('trailLayer');
const waypointLayer = document.getElementById('waypointLayer');
const map = document.getElementById('map');
const mapWrap = document.getElementById('mapWrap');
const mapTooltip = document.getElementById('mapTooltip');
const mapTooltipName = document.getElementById('mapTooltipName');
const mapTooltipMeta = document.getElementById('mapTooltipMeta');
const trailCount = document.getElementById('routeCount');
const totalDistance = document.getElementById('totalDistance');
const totalAscent = document.getElementById('totalAscent');
const routeList = document.getElementById('routeList');
const routeVisible = document.getElementById('routeVisible');
const routeEmpty = document.getElementById('routeEmpty');
const searchInput = document.getElementById('searchInput');
const savedFilter = document.getElementById('savedFilter');
const savedCount = document.getElementById('savedCount');
const chipButtons = [...document.querySelectorAll('.chip')];
const detailStripe = document.getElementById('detailStripe');
const detailNumber = document.getElementById('detailNumber');
const detailName = document.getElementById('detailName');
const detailDifficulty = document.getElementById('detailDifficulty');
const detailDescription = document.getElementById('detailDescription');
const detailTags = document.getElementById('detailTags');
const detailDistance = document.getElementById('detailDistance');
const detailTime = document.getElementById('detailTime');
const detailAscent = document.getElementById('detailAscent');
const detailType = document.getElementById('detailType');
const detailCondition = document.getElementById('detailCondition');
const detailSeason = document.getElementById('detailSeason');
const waypointList = document.getElementById('waypointList');
const waypointCount = document.getElementById('waypointCount');
const saveRoute = document.getElementById('saveRoute');
const saveLabel = document.getElementById('saveLabel');
const focusRoute = document.getElementById('focusRoute');
const profileTitle = document.getElementById('profileTitle');
const profileGain = document.getElementById('profileGain');
const profileRange = document.getElementById('profileRange');
const profileSvg = document.getElementById('profileSvg');
const profileGrid = document.getElementById('profileGrid');
const profileArea = document.getElementById('profileArea');
const profileLine = document.getElementById('profileLine');
const profileCursor = document.getElementById('profileCursor');
const profileCursorLine = document.getElementById('profileCursorLine');
const profileCursorDot = document.getElementById('profileCursorDot');
const profileDistanceLabels = document.getElementById('profileDistanceLabels');
const profileChart = document.getElementById('profileChart');
const profileTip = document.getElementById('profileTip');
const profileTipElev = document.getElementById('profileTipElev');
const profileTipDist = document.getElementById('profileTipDist');
const layerContours = document.getElementById('layerContours');
const layerWaypoints = document.getElementById('layerWaypoints');
const zoomIn = document.getElementById('zoomIn');
const zoomOut = document.getElementById('zoomOut');
const fitRouteButton = document.getElementById('fitRoute');
const resetMapButton = document.getElementById('resetMap');

let selectedId = 'kestrel-ridge-traverse';
let activeFilter = 'all';
let searchQuery = '';
let savedOnly = false;
let saved = loadSaved();
let zoom = 1;
let panX = 0;
let panY = 0;
let dragging = false;
let dragMoved = false;
let dragStartX = 0;
let dragStartY = 0;
let dragStartPanX = 0;
let dragStartPanY = 0;
let suppressClick = false;
let currentProfile = null;
let treeSeed = 17;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function pseudoRandom() {
  treeSeed = (treeSeed * 1664525 + 1013904223) >>> 0;
  return treeSeed / 4294967296;
}

function difficultyColor(difficulty) {
  if (difficulty === 'Easy') return '#2f7a68';
  if (difficulty === 'Moderate') return '#b98324';
  return '#b3472f';
}

function getTrail(id) {
  return TRAILS.find((trail) => trail.id === id);
}

function loadSaved() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SAVED_KEY) || '[]');
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((id) => TRAILS.some((trail) => trail.id === id));
  } catch (error) {
    return [];
  }
}

function persistSaved() {
  try {
    localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
  } catch (error) {
    return;
  }
}

function contourPath(cx, cy, rx, ry, rotation, wobble, seed) {
  const steps = 96;
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);
  let path = '';
  for (let index = 0; index <= steps; index += 1) {
    const angle = (index / steps) * Math.PI * 2;
    const offset = 1 + Math.sin(angle * 3 + seed) * wobble + Math.cos(angle * 5 - seed * 1.7) * wobble * 0.42;
    const localX = Math.cos(angle) * rx * offset;
    const localY = Math.sin(angle) * ry * offset;
    const x = cx + localX * cos - localY * sin;
    const y = cy + localX * sin + localY * cos;
    path += `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return `${path}Z`;
}

function buildTerrain() {
  const peaks = [
    { cx: 608, cy: 138, rx: 232, ry: 154, rotation: -0.28, rings: 13, seed: 1.3, wobble: 0.05 },
    { cx: 818, cy: 350, rx: 104, ry: 78, rotation: 0.18, rings: 10, seed: 3.7, wobble: 0.07 },
    { cx: 612, cy: 522, rx: 146, ry: 98, rotation: -0.12, rings: 10, seed: 5.1, wobble: 0.06 },
    { cx: 164, cy: 232, rx: 152, ry: 116, rotation: 0.32, rings: 10, seed: 7.4, wobble: 0.08 }
  ];

  peaks.forEach((peak) => {
    const wash = document.createElementNS(SVG_NS, 'ellipse');
    wash.setAttribute('cx', String(peak.cx));
    wash.setAttribute('cy', String(peak.cy));
    wash.setAttribute('rx', String(peak.rx * 1.25));
    wash.setAttribute('ry', String(peak.ry * 1.3));
    wash.setAttribute('transform', `rotate(${(peak.rotation * 180) / Math.PI} ${peak.cx} ${peak.cy})`);
    wash.setAttribute('class', 'peak-wash');
    terrainLayer.appendChild(wash);

    for (let index = 0; index < peak.rings; index += 1) {
      const ratio = 0.16 + ((index + 1) / peak.rings) * 0.84;
      const path = document.createElementNS(SVG_NS, 'path');
      const classes = ['contour'];
      if (index % 4 === 0) classes.push('index');
      if (index < 2) classes.push('soft');
      path.setAttribute('class', classes.join(' '));
      path.setAttribute('d', contourPath(peak.cx, peak.cy, peak.rx * ratio, peak.ry * ratio, peak.rotation, peak.wobble, peak.seed + index * 0.8));
      terrainLayer.appendChild(path);
    }
  });

  const zones = [
    { x: 44, y: 44, w: 210, h: 156, count: 16 },
    { x: 42, y: 330, w: 146, h: 240, count: 16 },
    { x: 716, y: 468, w: 148, h: 146, count: 14 },
    { x: 312, y: 318, w: 142, h: 126, count: 12 },
    { x: 786, y: 44, w: 82, h: 120, count: 8 }
  ];

  zones.forEach((zone) => {
    for (let index = 0; index < zone.count; index += 1) {
      const tree = document.createElementNS(SVG_NS, 'use');
      const x = zone.x + pseudoRandom() * zone.w;
      const y = zone.y + pseudoRandom() * zone.h;
      const scale = 0.45 + pseudoRandom() * 0.65;
      tree.setAttribute('href', '#tree');
      tree.setAttribute('width', '12');
      tree.setAttribute('height', '20');
      tree.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${scale.toFixed(2)})`);
      tree.setAttribute('color', pseudoRandom() > 0.5 ? '#3c614b' : '#547259');
      tree.setAttribute('class', 'tree');
      terrainLayer.appendChild(tree);
    }
  });
}

function buildTrails() {
  TRAILS.forEach((trail) => {
    const group = document.createElementNS(SVG_NS, 'g');
    group.setAttribute('class', 'trail-group');
    group.setAttribute('data-id', trail.id);
    group.setAttribute('tabindex', '0');
    group.setAttribute('role', 'button');
    group.setAttribute('aria-label', `${trail.name}, ${trail.distance.toFixed(1)} kilometres, ${trail.difficulty}`);

    const halo = document.createElementNS(SVG_NS, 'path');
    halo.setAttribute('class', 'trail-halo');
    halo.setAttribute('d', trail.path);

    const line = document.createElementNS(SVG_NS, 'path');
    line.setAttribute('class', 'trail-line');
    line.setAttribute('d', trail.path);
    line.setAttribute('stroke', difficultyColor(trail.difficulty));

    const hit = document.createElementNS(SVG_NS, 'path');
    hit.setAttribute('class', 'trail-hit');
    hit.setAttribute('d', trail.path);

    group.appendChild(halo);
    group.appendChild(line);
    group.appendChild(hit);
    group.addEventListener('click', () => {
      if (suppressClick) return;
      hideTooltip();
      selectTrail(trail.id);
    });
    group.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectTrail(trail.id);
      }
    });
    group.addEventListener('pointerenter', (event) => {
      if (!dragging) showTooltip(event, trail);
    });
    group.addEventListener('pointermove', (event) => {
      if (!dragging) showTooltip(event, trail);
    });
    group.addEventListener('pointerleave', hideTooltip);
    trailLayer.appendChild(group);
  });
}

function showTooltip(event, trail) {
  const rect = mapWrap.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  mapTooltipName.textContent = trail.name;
  mapTooltipMeta.textContent = `${trail.distance.toFixed(1)} km / ${trail.difficulty}`;
  mapTooltip.style.left = `${clamp(x, 8, rect.width - 160)}px`;
  mapTooltip.style.top = `${clamp(y, 34, rect.height - 28)}px`;
  mapTooltip.hidden = false;
}

function hideTooltip() {
  mapTooltip.hidden = true;
}

function renderWaypoints(trail) {
  waypointLayer.innerHTML = '';
  const color = difficultyColor(trail.difficulty);
  trail.waypoints.forEach((waypoint) => {
    const group = document.createElementNS(SVG_NS, 'g');
    group.setAttribute('class', 'waypoint');
    group.setAttribute('transform', `translate(${waypoint.x} ${waypoint.y})`);

    const ring = document.createElementNS(SVG_NS, 'circle');
    ring.setAttribute('class', 'wp-ring');
    ring.setAttribute('r', '6.5');
    ring.setAttribute('stroke', color);

    const core = document.createElementNS(SVG_NS, 'circle');
    core.setAttribute('class', 'wp-core');
    core.setAttribute('r', '2.2');

    const label = document.createElementNS(SVG_NS, 'text');
    label.setAttribute('x', '10');
    label.setAttribute('y', '3.5');
    label.textContent = waypoint.name;

    const title = document.createElementNS(SVG_NS, 'title');
    title.textContent = `${waypoint.name} / ${waypoint.type}`;

    group.appendChild(title);
    group.appendChild(ring);
    group.appendChild(core);
    group.appendChild(label);
    waypointLayer.appendChild(group);
  });
}

function selectTrail(id) {
  const trail = getTrail(id);
  if (!trail) return;
  selectedId = id;
  trailLayer.querySelectorAll('.trail-group').forEach((group) => {
    group.classList.toggle('is-selected', group.dataset.id === id);
  });
  renderWaypoints(trail);
  renderDetail(trail);
  renderProfile(trail);
  syncListSelection();
}

function renderDetail(trail) {
  const color = difficultyColor(trail.difficulty);
  detailStripe.style.background = color;
  detailNumber.textContent = `Route ${trail.number}`;
  detailName.textContent = trail.name;
  detailDifficulty.textContent = trail.difficulty;
  detailDifficulty.className = `difficulty ${trail.difficulty.toLowerCase()}`;
  detailDescription.textContent = trail.description;
  detailTags.innerHTML = trail.tags.map((tag) => `<span class="tag">${tag}</span>`).join('');
  detailDistance.textContent = `${trail.distance.toFixed(1)} km`;
  detailTime.textContent = trail.time;
  detailAscent.textContent = `${trail.ascent.toLocaleString('en-US')} m`;
  detailType.textContent = trail.type;
  detailCondition.textContent = trail.condition;
  detailSeason.textContent = trail.season;
  waypointCount.textContent = String(trail.waypoints.length);
  waypointList.innerHTML = trail.waypoints.map((waypoint) => `
    <li>
      <span class="wp-dot" style="background:${color}"></span>
      <span><span class="wp-name">${waypoint.name}</span><span class="wp-type">${waypoint.type}</span></span>
      <span class="wp-dist">${waypoint.at.toFixed(1)} km</span>
    </li>
  `).join('');
  updateSaveUI();
}

function updateSaveUI() {
  const isSaved = saved.includes(selectedId);
  saveRoute.classList.toggle('is-saved', isSaved);
  saveRoute.setAttribute('aria-pressed', String(isSaved));
  saveLabel.textContent = isSaved ? 'Saved' : 'Save route';
  savedCount.textContent = String(saved.length);
}

function getVisibleTrails() {
  const query = searchQuery.trim().toLowerCase();
  return TRAILS.filter((trail) => {
    const matchesDifficulty = activeFilter === 'all' || trail.difficulty === activeFilter;
    const matchesSaved = !savedOnly || saved.includes(trail.id);
    const haystack = `${trail.name} ${trail.difficulty} ${trail.tags.join(' ')} ${trail.description} ${trail.type}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    return matchesDifficulty && matchesSaved && matchesQuery;
  });
}

function renderRouteList(visible = getVisibleTrails()) {
  routeList.innerHTML = visible.map((trail) => {
    const isSaved = saved.includes(trail.id);
    return `
      <button class="route-item" type="button" data-id="${trail.id}">
        <span class="route-num">${trail.number}</span>
        <span>
          <span class="route-name">${trail.name}</span>
          <span class="route-meta">
            <span>${trail.distance.toFixed(1)} km</span>
            <span>${trail.time}</span>
            ${isSaved ? '<span class="route-flag">Saved</span>' : ''}
          </span>
        </span>
        <span class="dot ${trail.difficulty.toLowerCase()}" aria-label="${trail.difficulty}"></span>
      </button>
    `;
  }).join('');
  routeList.querySelectorAll('.route-item').forEach((item) => {
    item.addEventListener('click', () => selectTrail(item.dataset.id));
  });
  routeVisible.textContent = `${visible.length} / ${TRAILS.length}`;
  routeEmpty.hidden = visible.length > 0;
  routeEmpty.textContent = savedOnly && saved.length === 0 ? 'No saved routes yet. Save a route to keep it here.' : 'No routes match that search.';
  syncListSelection();
}

function syncListSelection() {
  routeList.querySelectorAll('.route-item').forEach((item) => {
    const active = item.dataset.id === selectedId;
    item.classList.toggle('is-active', active);
    if (active) {
      item.setAttribute('aria-current', 'true');
    } else {
      item.removeAttribute('aria-current');
    }
  });
}

function applyFilters() {
  const visible = getVisibleTrails();
  renderRouteList(visible);
  if (visible.length > 0 && !visible.some((trail) => trail.id === selectedId)) {
    selectTrail(visible[0].id);
  }
}

function updateTotals() {
  const distance = TRAILS.reduce((sum, trail) => sum + trail.distance, 0);
  const ascent = TRAILS.reduce((sum, trail) => sum + trail.ascent, 0);
  trailCount.textContent = String(TRAILS.length);
  totalDistance.textContent = distance.toFixed(1);
  totalAscent.textContent = ascent.toLocaleString('en-US');
}

function setZoom(nextZoom, focusX = 450, focusY = 330) {
  const target = clamp(nextZoom, 1, 4);
  const factor = target / zoom;
  panX = focusX - (focusX - panX) * factor;
  panY = focusY - (focusY - panY) * factor;
  zoom = target;
  applyMapTransform();
}

function applyMapTransform() {
  const maxX = 900 * (zoom - 1);
  const maxY = 660 * (zoom - 1);
  panX = clamp(panX, -maxX, 0);
  panY = clamp(panY, -maxY, 0);
  mapWorld.setAttribute('transform', `translate(${panX.toFixed(2)} ${panY.toFixed(2)}) scale(${zoom.toFixed(3)})`);
}

function svgPoint(clientX, clientY) {
  const rect = map.getBoundingClientRect();
  return {
    x: ((clientX - rect.left) / rect.width) * 900,
    y: ((clientY - rect.top) / rect.height) * 660
  };
}

function fitSelectedTrail() {
  const trail = getTrail(selectedId);
  if (!trail) return;
  const path = trailLayer.querySelector(`[data-id="${trail.id}"] .trail-line`);
  if (!path) return;
  const box = path.getBBox();
  const width = Math.max(box.width, 80);
  const height = Math.max(box.height, 80);
  const nextZoom = clamp(Math.min(780 / width, 540 / height), 1.1, 3.3);
  zoom = nextZoom;
  panX = 450 - (box.x + box.width / 2) * zoom;
  panY = 330 - (box.y + box.height / 2) * zoom;
  applyMapTransform();
}

function resetMapView() {
  zoom = 1;
  panX = 0;
  panY = 0;
  applyMapTransform();
}

function setLayer(name, enabled) {
  mapWrap.classList.toggle(`hide-${name}`, !enabled);
  const button = name === 'contours' ? layerContours : layerWaypoints;
  button.classList.toggle('is-on', enabled);
  button.setAttribute('aria-pressed', String(enabled));
}

function renderProfile(trail) {
  profileGrid.setAttribute('class', 'profile-grid');
  profileDistanceLabels.setAttribute('class', 'profile-labels');
  const values = trail.profile;
  const width = 900;
  const height = 220;
  const pad = { left: 44, right: 18, top: 20, bottom: 34 };
  const chartWidth = width - pad.left - pad.right;
  const chartHeight = height - pad.top - pad.bottom;
  const baseY = height - pad.bottom;
  const minValue = Math.floor(Math.min(...values) / 50) * 50;
  const maxValue = Math.ceil(Math.max(...values) / 50) * 50;
  const span = Math.max(maxValue - minValue, 50);
  const points = values.map((value, index) => {
    const ratio = index / (values.length - 1);
    return {
      x: pad.left + ratio * chartWidth,
      y: pad.top + (1 - (value - minValue) / span) * chartHeight,
      value,
      distance: ratio * trail.distance
    };
  });
  const line = points.map((point, index) => `${index === 0 ? 'M' : 'L'}${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join('');
  profileLine.setAttribute('d', line);
  profileLine.setAttribute('stroke', difficultyColor(trail.difficulty));
  profileArea.setAttribute('d', `M${points[0].x.toFixed(1)} ${baseY}${line.replace(/^M/, 'L')}L${points[points.length - 1].x.toFixed(1)} ${baseY}Z`);
  profileArea.setAttribute('fill', difficultyColor(trail.difficulty));
  profileArea.setAttribute('fill-opacity', '0.12');

  profileGrid.innerHTML = '';
  for (let index = 0; index <= 3; index += 1) {
    const value = minValue + (span * index) / 3;
    const y = pad.top + (1 - (value - minValue) / span) * chartHeight;
    const gridLine = document.createElementNS(SVG_NS, 'line');
    gridLine.setAttribute('x1', String(pad.left));
    gridLine.setAttribute('x2', String(width - pad.right));
    gridLine.setAttribute('y1', y.toFixed(1));
    gridLine.setAttribute('y2', y.toFixed(1));
    if (index === 0) gridLine.setAttribute('class', 'base');
    profileGrid.appendChild(gridLine);
    const label = document.createElementNS(SVG_NS, 'text');
    label.setAttribute('x', String(pad.left - 9));
    label.setAttribute('y', (y + 3).toFixed(1));
    label.setAttribute('text-anchor', 'end');
    label.textContent = Math.round(value).toLocaleString('en-US');
    profileGrid.appendChild(label);
  }
  [0, 0.25, 0.5, 0.75, 1].forEach((ratio) => {
    const x = pad.left + ratio * chartWidth;
    const vertical = document.createElementNS(SVG_NS, 'line');
    vertical.setAttribute('x1', x.toFixed(1));
    vertical.setAttribute('x2', x.toFixed(1));
    vertical.setAttribute('y1', String(pad.top));
    vertical.setAttribute('y2', String(baseY));
    profileGrid.appendChild(vertical);
  });

  profileDistanceLabels.innerHTML = '';
  [0, 0.25, 0.5, 0.75, 1].forEach((ratio) => {
    const x = pad.left + ratio * chartWidth;
    const label = document.createElementNS(SVG_NS, 'text');
    label.setAttribute('x', x.toFixed(1));
    label.setAttribute('y', String(height - 11));
    label.setAttribute('text-anchor', ratio === 0 ? 'start' : ratio === 1 ? 'end' : 'middle');
    label.textContent = ratio === 1 ? `${trail.distance.toFixed(1)} km` : (trail.distance * ratio).toFixed(1);
    profileDistanceLabels.appendChild(label);
  });

  profileCursorLine.setAttribute('x1', String(pad.left));
  profileCursorLine.setAttribute('x2', String(pad.left));
  profileCursorLine.setAttribute('y1', String(pad.top));
  profileCursorLine.setAttribute('y2', String(baseY));
  profileCursorDot.setAttribute('cx', String(pad.left));
  profileCursorDot.setAttribute('cy', String(points[0].y));
  profileCursorDot.setAttribute('stroke', difficultyColor(trail.difficulty));
  profileCursor.hidden = true;
  profileTip.hidden = true;

  profileTitle.textContent = trail.name;
  profileGain.textContent = `+${trail.ascent.toLocaleString('en-US')} m`;
  profileRange.textContent = `${minValue.toLocaleString('en-US')}–${maxValue.toLocaleString('en-US')} m`;
  profileSvg.setAttribute('aria-label', `Elevation profile for ${trail.name}, ${minValue} to ${maxValue} metres over ${trail.distance.toFixed(1)} kilometres`);
  currentProfile = { trail, points, width, height, pad, baseY };
}

function updateProfileCursor(event) {
  if (!currentProfile) return;
  const rect = profileSvg.getBoundingClientRect();
  const svgX = ((event.clientX - rect.left) / rect.width) * currentProfile.width;
  if (svgX < currentProfile.pad.left || svgX > currentProfile.width - currentProfile.pad.right) {
    profileCursor.hidden = true;
    profileTip.hidden = true;
    return;
  }
  const ratio = clamp((svgX - currentProfile.pad.left) / (currentProfile.width - currentProfile.pad.left - currentProfile.pad.right), 0, 1);
  const index = Math.round(ratio * (currentProfile.points.length - 1));
  const point = currentProfile.points[index];
  profileCursorLine.setAttribute('x1', point.x.toFixed(1));
  profileCursorLine.setAttribute('x2', point.x.toFixed(1));
  profileCursorDot.setAttribute('cx', point.x.toFixed(1));
  profileCursorDot.setAttribute('cy', point.y.toFixed(1));
  profileCursor.hidden = false;
  profileTipElev.textContent = `${point.value.toLocaleString('en-US')} m`;
  profileTipDist.textContent = `${point.distance.toFixed(1)} km`;
  profileTip.style.left = `${clamp((point.x / currentProfile.width) * 100, 8, 92)}%`;
  profileTip.style.top = `${(point.y / currentProfile.height) * 100}%`;
  profileTip.hidden = false;
}

function bindEvents() {
  layerContours.addEventListener('click', () => {
    const enabled = layerContours.getAttribute('aria-pressed') !== 'true';
    setLayer('contours', enabled);
  });
  layerWaypoints.addEventListener('click', () => {
    const enabled = layerWaypoints.getAttribute('aria-pressed') !== 'true';
    setLayer('waypoints', enabled);
  });
  zoomIn.addEventListener('click', () => setZoom(zoom * 1.22));
  zoomOut.addEventListener('click', () => setZoom(zoom / 1.22));
  fitRouteButton.addEventListener('click', fitSelectedTrail);
  resetMapButton.addEventListener('click', resetMapView);
  focusRoute.addEventListener('click', fitSelectedTrail);

  saveRoute.addEventListener('click', () => {
    if (saved.includes(selectedId)) {
      saved = saved.filter((id) => id !== selectedId);
    } else {
      saved = [...saved, selectedId];
    }
    persistSaved();
    updateSaveUI();
    renderRouteList();
  });

  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value;
    applyFilters();
  });
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      searchInput.value = '';
      searchQuery = '';
      applyFilters();
      searchInput.blur();
    }
  });
  chipButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      chipButtons.forEach((chip) => chip.classList.toggle('is-active', chip === button));
      applyFilters();
    });
  });
  savedFilter.addEventListener('click', () => {
    savedOnly = !savedOnly;
    savedFilter.setAttribute('aria-pressed', String(savedOnly));
    applyFilters();
  });

  mapWrap.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    hideTooltip();
    dragging = true;
    dragMoved = false;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    dragStartPanX = panX;
    dragStartPanY = panY;
    mapWrap.classList.add('is-dragging');
    mapWrap.setPointerCapture(event.pointerId);
  });
  mapWrap.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    const rect = mapWrap.getBoundingClientRect();
    const dx = event.clientX - dragStartX;
    const dy = event.clientY - dragStartY;
    if (Math.abs(dx) + Math.abs(dy) > 4) dragMoved = true;
    panX = dragStartPanX + (dx / rect.width) * 900;
    panY = dragStartPanY + (dy / rect.height) * 660;
    applyMapTransform();
  });
  const finishDrag = (event) => {
    if (!dragging) return;
    dragging = false;
    mapWrap.classList.remove('is-dragging');
    if (mapWrap.hasPointerCapture(event.pointerId)) mapWrap.releasePointerCapture(event.pointerId);
    if (dragMoved) {
      suppressClick = true;
      window.setTimeout(() => {
        suppressClick = false;
      }, 0);
    }
  };
  mapWrap.addEventListener('pointerup', finishDrag);
  mapWrap.addEventListener('pointercancel', finishDrag);
  mapWrap.addEventListener('click', (event) => {
    if (!suppressClick) return;
    event.preventDefault();
    event.stopPropagation();
  }, true);
  mapWrap.addEventListener('wheel', (event) => {
    event.preventDefault();
    const point = svgPoint(event.clientX, event.clientY);
    setZoom(zoom * (event.deltaY < 0 ? 1.12 : 0.89), point.x, point.y);
  }, { passive: false });

  profileChart.addEventListener('pointermove', updateProfileCursor);
  profileChart.addEventListener('pointerleave', () => {
    profileCursor.hidden = true;
    profileTip.hidden = true;
  });
}

buildTerrain();
buildTrails();
bindEvents();
updateTotals();
setLayer('contours', true);
setLayer('waypoints', true);
renderRouteList();
selectTrail(selectedId);
applyMapTransform();
