import * as THREE from 'three';
import { materialConfig } from './config.js';

// Redマテリアル
export const redMaterial = new THREE.MeshBasicMaterial(materialConfig.red);

// Blueマテリアル
export const blueMaterial = new THREE.MeshBasicMaterial(materialConfig.blue);

// デフォルトのGreenマテリアル
export const greenMaterial = new THREE.MeshBasicMaterial(materialConfig.green);

// ===== Blenderテクスチャマップの適用例（コメントアウト） =====
// Blenderで出力したテクスチャマップをMeshStandardMaterialに適用する場合:
// const textureLoader = new THREE.TextureLoader();

// // テクスチャのロード（portfolio-webpack/src/images/texture/ に配置予定）
// const baseColorTexture = textureLoader.load('images/texture/base_color.jpg');  // Base Color (Diffuse)
// const normalTexture = textureLoader.load('images/texture/normal.jpg');          // Normal
// const roughnessTexture = textureLoader.load('images/texture/roughness.jpg');    // Roughness
// const metallicTexture = textureLoader.load('images/texture/metallic.jpg');      // Metallic
// const aoTexture = textureLoader.load('images/texture/ao.jpg');                  // Ambient Occlusion
// const emissiveTexture = textureLoader.load('images/texture/emissive.jpg');      // Emission
// const alphaTexture = textureLoader.load('images/texture/alpha.jpg');            // Alpha (Transparency)

// // MeshStandardMaterialに適用
// export const texturedMaterial = new THREE.MeshStandardMaterial({
//   map: baseColorTexture,           // ベースカラー
//   normalMap: normalTexture,        // 法線マップ
//   roughnessMap: roughnessTexture,  // 粗さマップ
//   metalnessMap: metallicTexture,   // 金属マップ
//   aoMap: aoTexture,                // AOマップ
//   emissiveMap: emissiveTexture,    // 発光マップ
//   alphaMap: alphaTexture,          // 透明マップ
//   transparent: true,               // 透明マップ使用時はtrue
// });

// // 追加設定（必要に応じて）
// texturedMaterial.normalMap.encoding = THREE.LinearEncoding;  // 法線マップのエンコーディング
// texturedMaterial.aoMapIntensity = 1.0;  // AO強度
// texturedMaterial.emissiveIntensity = 1.0;  // 発光強度