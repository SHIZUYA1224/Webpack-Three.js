// src/3dmodels/display 配下の .glb/.gltf/.vrm を自動収集してメタデータを生成
// 備考: require.context は webpack 専用の動的収集機能
import thumbUrl from '@/images/sample-artwork.jpg';

function prettyTitle(id) {
  try {
    return decodeURIComponent(id).replace(/[_-]+/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
  } catch (_) {
    return id;
  }
}

// display フォルダを走査（このファイルからの相対パスを使用）
const ctxDisplay = require.context('../../3dmodels/display', false, /\.(glb|gltf|vrm)$/i);
// ルート(3dmodels直下)も走査（display 配下とは重複しない）
const ctxRoot = require.context('../../3dmodels', false, /\.(glb|gltf|vrm)$/i);

function entryFromContext(ctx, key) {
  const url = ctx(key);
  const filename = key.replace(/^\.\//, '');
  const id = filename.replace(/\.(glb|gltf|vrm)$/i, '');
  return {
    id,
    title: prettyTitle(id),
    author: '作者名',
    date: '',
    software: '',
    license: '',
    glb: url,
    thumb: thumbUrl,
    description: '',
  };
}

const scanned = [
  ...ctxDisplay.keys().map((k) => entryFromContext(ctxDisplay, k)),
  ...ctxRoot.keys().map((k) => entryFromContext(ctxRoot, k)),
];

// id 重複排除（最後に現れたものを優先）
const uniqMap = new Map(scanned.map((m) => [m.id, m]));
export const models = Array.from(uniqMap.values());
export const modelById = Object.fromEntries(models.map((m) => [m.id, m]));
export default models;
