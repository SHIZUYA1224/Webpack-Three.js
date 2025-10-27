import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { cube } from './sceneAssets.js';
import { redMaterial, blueMaterial } from './materials.js';
import * as dat from 'dat.gui';
import vertexShader from './shaders/vertex.glsl';  // パスを調整
import fragmentShader from './shaders/fragment.glsl';  // パスを調整

// シーン、カメラ、レンダラーの作成
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('app').appendChild(renderer.domElement);

// GLSLシェーダーマテリアルを作成（オプションで使用）
const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
});

// シーンにオブジェクトを追加
scene.add(cube);

// カメラの位置設定
camera.position.z = 5;

// GUIの初期化
const gui = new dat.GUI();
const materialFolder = gui.addFolder('Materials');
materialFolder.add(cube.material, 'wireframe').name('Wireframe');
materialFolder.addColor(cube.material, 'color').name('Color');
materialFolder.open();

// GUIでシェーダーマテリアルに切り替えられるように追加
const controls = {
    useShader: false,
};
materialFolder.add(controls, 'useShader').name('Use Shader').onChange((value) => {
    cube.material = value ? shaderMaterial : redMaterial;  // 例: シェーダー or 通常マテリアル
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

    if (intersects.length > 0 && intersects[0].object === cube) {
        // カーソルがキューブ上にある場合、サイズを大きく
        cube.scale.set(1.2, 1.2, 1.2);
    } else {
        // そうでない場合、元のサイズに戻す
        cube.scale.set(1, 1, 1);
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
        if (clickedObject === cube) {
            // キューブがクリックされたらマテリアルを切り替え（Red ↔ Blue）
            if (cube.material === redMaterial) {
                cube.material = blueMaterial;
            } else {
                cube.material = redMaterial;
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
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// ウィンドウリサイズ対応
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});