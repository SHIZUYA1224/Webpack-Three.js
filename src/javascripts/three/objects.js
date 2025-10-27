import * as THREE from 'three';
import { greenMaterial } from './materials.js';  // パスを調整（同じフォルダ内）

// キューブの作成
const geometry = new THREE.BoxGeometry();
export const cube = new THREE.Mesh(geometry, greenMaterial);

// 他のオブジェクトを追加可能
// export const anotherObject = new THREE.Mesh(anotherGeometry, anotherMaterial);