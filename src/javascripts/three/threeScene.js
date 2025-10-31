import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';  // 追加
import { aoTexture } from './materials.js';
import * as dat from 'dat.gui';
import vertexShader from './shaders/vertex.glsl';  // パスを調整
import fragmentShader from './shaders/fragment.glsl';  // パスを調整


const _aoTexture = aoTexture;

// ===== メインオブジェクトの設定 =====
// GLTFLoaderで全てロードするので削除

// シーン、カメラ、レンダラーの作成
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.getElementById('canvas').appendChild(renderer.domElement);

// ライトの追加
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // 環境光を調整
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // 方向光
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// GLSLシェーダーマテリアルを作成（オプションで使用）
const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
});

// シーンにオブジェクトを追加
// GLTFモデルのロード（uwagi）
const gltfLoader = new GLTFLoader();
let uwagiModel; 
let test_object; // ロード完了後に使用

// uwagiのロード
gltfLoader.load(
  '3dmodels/uwagi.glb',
  (gltf) => {
    uwagiModel = gltf.scene;
    uwagiModel.position.set(0, -1, 0);
    uwagiModel.scale.set(0.5, 0.5, 0.5);
    uwagiModel.traverse((child) => {
      if (child.isMesh) {
        child.material.side = THREE.DoubleSide;  // 裏面も表示
      }
    });
    scene.add(uwagiModel);
  },
  (progress) => {
    console.log('Loading uwagi progress:', progress);
  },
  (error) => {
    console.error('Error loading uwagi:', error);
  }
);

gltfLoader.load(
  '3dmodels/Test_object.glb',
  (gltf) => {
    test_object = gltf.scene;
    test_object.position.set(0, -1, 0);
    test_object.scale.set(0.5, 0.5, 0.5);
    test_object.traverse((child) => {
      if (child.isMesh) {
        // glTF メッシュに外部テクスチャを貼る: baseColor 用 map を設定
        // 画像の UV にそのまま従う（uv セットを使用）
        child.material.map = _aoTexture;  // ベースカラーのテクスチャ
        child.material.color.set(0xffffff);  // テクスチャに色を乗算しない
        // AO を使う場合は別途 aoMap に Linear テクスチャと uv2 を用意
        child.material.aoMap = null;
        // child.material.aoMapIntensity = 1.0;  // 使うときに設定
        child.material.side = THREE.DoubleSide;  // 裏面も表示
        child.material.needsUpdate = true;  // マテリアルを更新
      }
    });
    scene.add(test_object);
    // GUI設定を削除
  },
  (progress) => {
    console.log('Loading test_object progress:', progress);
  },
  (error) => {
    console.error('Error loading test_object:', error);
  }
);

// カメラの位置設定
camera.position.z = 5;

// OrbitControlsの追加
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;  // 慣性効果
controls.dampingFactor = 0.05;

// GUIの初期化（位置変更）
const gui = new dat.GUI({ autoPlace: false });
document.body.appendChild(gui.domElement);  // DOMに追加
gui.domElement.style.position = 'absolute';
gui.domElement.style.top = '10px';   // 上から10px
gui.domElement.style.left = '50%';   // 左から50%（中央）
gui.domElement.style.transform = 'translateX(-50%)';  // 中央にシフト
gui.domElement.style.zIndex = '1001'; // ヘッダーより上

const materialFolder = gui.addFolder('Materials');

// uwagiModelがロードされた後にGUIを設定（削除）
setTimeout(() => {
  // 削除
}, 1000);  // 適当な遅延

// Raycasterとマウスベクトルの初期化
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// マウス移動イベントリスナー（ホバー検知）
function onMouseMove(event) {
    // マウス位置を正規化（-1 to 1）
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Raycasterを更新
    raycaster.setFromCamera(mouse, camera);

    // シーン内のオブジェクトとの交差をチェック
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0 && intersects[0].object === uwagiModel) {
        // カーソルがuwagiModel上にある場合、サイズを大きく
        uwagiModel.scale.set(1.2, 1.2, 1.2);
    } else {
        // そうでない場合、元のサイズに戻す
        if (uwagiModel) uwagiModel.scale.set(0.5, 0.5, 0.5);
    }
}

// マウスクリックイベントリスナー
function onMouseClick(event) {
    // マウス位置を正規化（-1 to 1）
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Raycasterを更新
    raycaster.setFromCamera(mouse, camera);

    // シーン内のオブジェクトとの交差をチェック
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        if (clickedObject === uwagiModel) {
            // uwagiがクリックされたらベースカラーを切り替え
            uwagiModel.traverse((child) => {
              if (child.isMesh) {
                child.material.color.set(child.material.color.getHex() === 0xff0000 ? 0x0000ff : 0xff0000);
              }
            });
        }
    }
}

// イベントリスナーを追加
window.addEventListener('mousemove', onMouseMove);
window.addEventListener('click', onMouseClick);

// アニメーションループ
function animate() {
    requestAnimationFrame(animate);
    controls.update();  // 追加: コントロール更新
    renderer.render(scene, camera);
}
animate();

// ウィンドウリサイズ対応
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
