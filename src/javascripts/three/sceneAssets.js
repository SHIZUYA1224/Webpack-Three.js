import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';  // GLTFLoaderをインポート
import * as materials from './materials.js';  // マテリアルをインポート

// ===== マテリアル定義 =====
// 基本マテリアル（materials.jsからインポート済みなので削除）

// 高度なマテリアル（雛形: コメントアウトで後で解除）
// export const normalMapMaterial = new THREE.MeshStandardMaterial({
//   color: 0xffffff,
//   normalMap: new THREE.TextureLoader().load('path/to/normal.jpg'),  // ノーマルマップ
//   roughness: 0.5,
//   metalness: 0.0,
// });

// ===== オブジェクト定義 =====
// 基本オブジェクト
const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
export const torus = new THREE.Mesh(torusGeometry, materials.greenMaterial);

// 高度なオブジェクト（雛形: コメントアウトで後で解除）
// const advancedGeometry = new THREE.SphereGeometry(1, 32, 32);
// export const advancedObject = new THREE.Mesh(advancedGeometry, normalMapMaterial);
// advancedObject.position.set(2, 0, 0);  // 位置設定
// advancedObject.castShadow = true;  // 影の設定



// ===== GLTFモデルの追加方法（コメントアウト） =====
// GLTFファイルを読み込んでシーンに追加する場合:
// const gltfLoader = new GLTFLoader();
// gltfLoader.load(
//   'path/to/your-model.gltf',  // GLTFファイルのパス
//   (gltf) => {
//     const model = gltf.scene;
//     model.position.set(0, 0, 0);  // 位置設定
//     model.scale.set(1, 1, 1);     // スケール設定
//     scene.add(model);             // シーンに追加（threeScene.jsで実行）
//   },
//   (progress) => {
//     console.log('Loading progress:', progress);
//   },
//   (error) => {
//     console.error('Error loading GLTF:', error);
//   }
// );

// OBJファイルの場合（OBJLoaderが必要）:
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
// const objLoader = new OBJLoader();
// objLoader.load('path/to/model.obj', (object) => {
//   scene.add(object);
// });

// FBXファイルの場合（FBXLoaderが必要）:
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
// const fbxLoader = new FBXLoader();
// fbxLoader.load('path/to/model.fbx', (object) => {
//   scene.add(object);
// });