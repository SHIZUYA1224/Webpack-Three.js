// ===== config.js マニュアル =====
// このファイルはThree.jsプロジェクトの設定を管理します。
// マテリアルやオブジェクトの共通設定をここに定義し、他のファイルからインポートして使用します。
// これにより、設定の一元管理が可能になり、変更が容易になります。

// ===== materialConfig =====
// マテリアルの設定オブジェクト。
// Three.jsのMeshBasicMaterialやMeshStandardMaterialに適用するプロパティを定義。
// 例: color, opacity, transparent など。
export const materialConfig = {
  green: { color: 0x00ff00 },  // 緑色 (16進数)
  red: { color: 0xff0000 },    // 赤色
  blue: { color: 0x0000ff },   // 青色
};

// 使用例 (materials.jsで):
// import { materialConfig } from './config.js';
// export const redMaterial = new THREE.MeshBasicMaterial(materialConfig.red);

// 追加方法:
// 新しいマテリアルを追加する場合:
// materialConfig.yellow = { color: 0xffff00, transparent: true, opacity: 0.5 };
// 他のファイルで使用可能。

// ===== objectConfig =====
// オブジェクトの設定オブジェクト。
// ジオメトリのサイズや形状を定義。
// 例: size, width, height, radius など。
export const objectConfig = {
  torus: { size: 1 },  // キューブのサイズ (BoxGeometryの引数)
};

// 使用例 (sceneAssets.jsで):
// import { objectConfig } from './config.js';
// const cubeGeometry = new THREE.BoxGeometry(objectConfig.cube.size, objectConfig.cube.size, objectConfig.cube.size);

// 追加方法:
// 新しいオブジェクト設定を追加する場合:
// objectConfig.sphere = { radius: 1, widthSegments: 32, heightSegments: 32 };
// 他のファイルで使用可能。

// ===== 注意点 =====
// - 色は16進数 (0xRRGGBB) で指定。
// - 設定を変更すると、インポートした全てのファイルに反映されます。
// - 複雑な設定は別ファイルに分けることを検討。
// - デバッグ時はconsole.logで確認: console.log(materialConfig.red);

// ===== 拡張例 =====
// 高度な設定を追加する場合:
// export const lightConfig = {
//   ambient: { color: 0xffffff, intensity: 0.5 },
//   directional: { color: 0xffffff, intensity: 1.0, position: [10, 10, 5] },
// };

// 使用例:
// import { lightConfig } from './config.js';
// const ambientLight = new THREE.AmbientLight(lightConfig.ambient.color, lightConfig.ambient.intensity);