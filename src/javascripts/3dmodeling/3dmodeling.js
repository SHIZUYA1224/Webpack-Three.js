import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// 既存の3Dモデルを参照（src/3dmodels/ 配下）
const models = {
  model1: { url: require('../../3dmodels/model1.glb'), name: 'Test Object' },
  model2: { url: require('../../3dmodels/model2.glb'), name: 'Uwagi' },
};

let currentModel = null;
let scene, camera, renderer, loader;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-3d') });
  renderer.setSize(600, 400);  // サイズを小さく
  loader = new GLTFLoader();

  // ライトを追加
  const light = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  scene.add(directionalLight);

  camera.position.z = 5;

  // 初期モデルをロード
  loadModel('model1');

  // ボタンイベント
  document.getElementById('model1-btn').addEventListener('click', () => loadModel('model1'));
  document.getElementById('model2-btn').addEventListener('click', () => loadModel('model2'));

  animate();
}

function loadModel(key) {
  if (currentModel) {
    scene.remove(currentModel);
  }
  loader.load(models[key].url, (gltf) => {
    currentModel = gltf.scene;
    scene.add(currentModel);
  });
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

document.addEventListener('DOMContentLoaded', init);
