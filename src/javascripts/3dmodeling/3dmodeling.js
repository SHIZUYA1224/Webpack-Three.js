import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { gsap } from 'gsap';  
import { models as MODEL_LIST, modelById } from './modelsData';

const VIEWPORT = { width: 1600, height: 900 };
const CAMERA = { fov: 75, near: 0.1, far: 1000 };

const state = {
  scene: null,
  camera: null,
  renderer: null,
  loader: null,
  currentModel: null,
  controls: null,
};

function setupScene() {
  state.scene = new THREE.Scene();
  state.scene.background = new THREE.Color(0xffffff); 
}

function setupCamera() {
  const aspect = VIEWPORT.width / VIEWPORT.height;
  state.camera = new THREE.PerspectiveCamera(CAMERA.fov, aspect, CAMERA.near, CAMERA.far);
  state.camera.position.z = 5;
}

function setupRenderer() {
  const canvas = document.getElementById('canvas-3d');
  state.renderer = new THREE.WebGLRenderer({ canvas });
  state.renderer.setSize(VIEWPORT.width, VIEWPORT.height);
}

function setupControls() {
  state.controls = new OrbitControls(state.camera, state.renderer.domElement);
  state.controls.enableDamping = true;
  state.controls.dampingFactor = 0.05;
}

function setupLoader() {
  state.loader = new GLTFLoader();
}

function setupLights() {
  const ambient = new THREE.AmbientLight(0xffffff, 1);
  state.scene.add(ambient);
  const dir = new THREE.DirectionalLight(0xffffff, 1);
  state.scene.add(dir);
}

function disposeObject3D(obj) {
  if (!obj) return;
  obj.traverse((child) => {
    if (child.isMesh) {
      child.geometry?.dispose?.();
      if (Array.isArray(child.material)) child.material.forEach((m) => m?.dispose?.());
      else child.material?.dispose?.();
    }
  });
}

function computeModelStats(root) {
  const stats = { vertices: 0, triangles: 0, meshes: 0, materials: 0 };
  const mats = new Set();
  if (!root) return stats;
  root.traverse((child) => {
    if (child.isMesh && child.geometry) {
      stats.meshes += 1;
      const geom = child.geometry;
      const pos = geom.attributes?.position;
      const idx = geom.index;
      if (pos) stats.vertices += pos.count;
      const tri = idx ? Math.floor(idx.count / 3) : (pos ? Math.floor(pos.count / 3) : 0);
      stats.triangles += tri;
      const mat = child.material;
      if (Array.isArray(mat)) mat.forEach((m) => m && mats.add(m.uuid));
      else if (mat) mats.add(mat.uuid);
    }
  });
  stats.materials = mats.size;
  return stats;
}

function updateStatsUI(stats) {
  const set = (sel, v) => { const el = document.querySelector(sel); if (el) el.textContent = (typeof v === 'number') ? v.toLocaleString() : (v ?? '-'); };
  set('#stat-polys', stats.triangles);
  set('#stat-verts', stats.vertices);
  set('#stat-meshes', stats.meshes);
  set('#stat-mats', stats.materials);
}

function loadModelById(id) {
  const item = modelById[id];
  if (!item) return;
  if (state.currentModel) {
    state.scene.remove(state.currentModel);
    disposeObject3D(state.currentModel);
    state.currentModel = null;
  }
  state.loader.load(item.glb, (gltf) => {
    state.currentModel = gltf.scene;
    state.scene.add(state.currentModel);
    gsap.to(gltf.scene.rotation, { y: Math.PI * 2, duration: 2, ease: 'power2.out' });  // 回転アニメーション
    const stats = computeModelStats(state.currentModel);
    updateStatsUI(stats);

    // 画角に収める（自動フレーミング）
    try {
      const box = new THREE.Box3().setFromObject(state.currentModel);
      const size = new THREE.Vector3();
      box.getSize(size);
      const center = new THREE.Vector3();
      box.getCenter(center);
      const maxSize = Math.max(size.x, size.y, size.z) || 1;
      const fitHeightDistance = maxSize / (2 * Math.tan(THREE.MathUtils.degToRad(state.camera.fov) / 2));
      const fitWidthDistance = fitHeightDistance / state.camera.aspect;
      const distance = Math.max(fitHeightDistance, fitWidthDistance);
      state.camera.position.copy(center);
      state.camera.position.x += distance;
      state.camera.position.y += distance * 0.2;
      state.camera.position.z += distance;
      state.camera.near = Math.max(0.01, distance / 100);
      state.camera.far = Math.max(1000, distance * 100);
      state.camera.updateProjectionMatrix();
      if (state.controls) {
        state.controls.target.copy(center);
        state.controls.update();
      }
    } catch (_) {}
  });
}

function renderMeta(model) {
  const titleEl = document.querySelector('.page-title');
  const descEl = document.querySelector('.description p');
  const authorEl = document.querySelector('.author-name');
  const dateEl = document.querySelector('#info-date');
  const softEl = document.querySelector('#info-software');
  const licEl = document.querySelector('#info-license');
  if (titleEl) titleEl.textContent = `【モデル】${model.title}`;
  if (descEl) descEl.textContent = model.description || '';
  if (authorEl) authorEl.textContent = model.author || '';
  if (dateEl) dateEl.textContent = model.date || '';
  if (softEl) softEl.textContent = model.software || '';
  if (licEl) licEl.textContent = model.license || '';
}

function renderRelated(selectedId) {
  const list = document.getElementById('related-list');
  if (!list) return;
  list.innerHTML = MODEL_LIST.map((m) => `
    <div class="item" data-id="${m.id}">
      <img class="thumb" src="${m.thumb}" alt="${m.title}" />
      <div class="text">
        <p class="title">${m.title}</p>
        <p class="meta">${m.date || ''}</p>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.item').forEach((el) => {
    el.addEventListener('click', () => {
      const id = el.getAttribute('data-id');
      const model = modelById[id];
      if (!model) return;
      loadModelById(id);
      renderMeta(model);
      list.querySelectorAll('.item').forEach((i) => i.classList.remove('active'));
      el.classList.add('active');
      history.replaceState(null, '', `?model=${encodeURIComponent(id)}`);
    });
  });

  const active = list.querySelector(`[data-id="${selectedId}"]`);
  active?.classList.add('active');
}

function animate() {
  requestAnimationFrame(animate);
  if (state.controls) state.controls.update();
  state.renderer.render(state.scene, state.camera);
}

function init() {
  setupScene();
  setupCamera();
  setupRenderer();
  setupControls();
  setupLoader();
  setupLights();
  const params = new URLSearchParams(location.search);
  const defaultId = params.get('model') || (MODEL_LIST[0]?.id ?? 'model1');
  const model = modelById[defaultId] || MODEL_LIST[0];
  renderRelated(model.id);
  renderMeta(model);
  loadModelById(model.id);
  animate();
}

// main.js から body クラスを見て動的 import されるため、
// DOM 構築後にロードされる。即時初期化でOK。
init();
