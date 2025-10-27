import * as THREE from 'three';
import { greenMaterial, redMaterial, blueMaterial } from './materials.js';  // マテリアルをインポート

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
const cubeGeometry = new THREE.BoxGeometry();
export const cube = new THREE.Mesh(cubeGeometry, greenMaterial);

// 高度なオブジェクト（雛形: コメントアウトで後で解除）
// const advancedGeometry = new THREE.SphereGeometry(1, 32, 32);
// export const advancedObject = new THREE.Mesh(advancedGeometry, normalMapMaterial);
// advancedObject.position.set(2, 0, 0);  // 位置設定
// advancedObject.castShadow = true;  // 影の設定