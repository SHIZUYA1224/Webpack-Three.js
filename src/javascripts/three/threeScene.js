import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { torus } from './sceneAssets.js';  // インポート
import { redMaterial, blueMaterial } from './materials.js';
import * as dat from 'dat.gui';
import vertexShader from './shaders/vertex.glsl';  // パスを調整
import fragmentShader from './shaders/fragment.glsl';  // パスを調整

// ===== メインオブジェクトの設定 =====
// ここでオブジェクトを変更（torus, cube, etc.）
const mainObject = torus;  // 変更: ここだけ変えればOK

// シーン、カメラ、レンダラーの作成
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas').appendChild(renderer.domElement);

// GLSLシェーダーマテリアルを作成（オプションで使用）
const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
});

// シーンにオブジェクトを追加
scene.add(mainObject);

// カメラの位置設定
camera.position.z = 5;

// GUIの初期化（位置変更）
const gui = new dat.GUI({ autoPlace: false });
document.body.appendChild(gui.domElement);  // DOMに追加
gui.domElement.style.position = 'absolute';
gui.domElement.style.top = '10px';   // 上から10px
gui.domElement.style.left = '50%';   // 左から50%（中央）
gui.domElement.style.transform = 'translateX(-50%)';  // 中央にシフト
gui.domElement.style.zIndex = '1001'; // ヘッダーより上

const materialFolder = gui.addFolder('Materials');

materialFolder.add(mainObject.material, 'wireframe').name('Wireframe');
materialFolder.addColor(mainObject.material, 'color').name('Color');
materialFolder.open();

// GUIでシェーダーマテリアルに切り替えられるように追加
const controls = {
    useShader: false,
};
materialFolder.add(controls, 'useShader').name('Use Shader').onChange((value) => {
    mainObject.material = value ? shaderMaterial : redMaterial;
});

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

    if (intersects.length > 0 && intersects[0].object === mainObject) {
        // カーソルがオブジェクト上にある場合、サイズを大きく
        mainObject.scale.set(1.2, 1.2, 1.2);
    } else {
        // そうでない場合、元のサイズに戻す
        mainObject.scale.set(1, 1, 1);
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
        if (clickedObject === mainObject) {
            // オブジェクトがクリックされたらマテリアルを切り替え（Red ↔ Blue）
            if (mainObject.material === redMaterial) {
                mainObject.material = blueMaterial;
            } else {
                mainObject.material = redMaterial;
            }
            // ページ遷移はコメントアウト（必要に応じて有効化）
            // window.location.href = '/another-page.html';
        }
    }
}

// イベントリスナーを追加
window.addEventListener('mousemove', onMouseMove);
window.addEventListener('click', onMouseClick);

// アニメーションループ
function animate() {
    requestAnimationFrame(animate);
    mainObject.rotation.x += 0.01;
    mainObject.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// ウィンドウリサイズ対応
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});