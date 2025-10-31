import * as THREE from 'three';

export function ensureUv2(geometry) {
  if (!geometry) return;
  const uv = geometry.attributes?.uv;
  const uv2 = geometry.attributes?.uv2;
  if (uv && !uv2) {
    geometry.setAttribute('uv2', uv);
  }
}

export function createStandardMaterial({ map, aoMap, aoMapIntensity = 1, color = 0xffffff, side = THREE.DoubleSide, metalness = 0, roughness = 1 } = {}) {
  const mat = new THREE.MeshStandardMaterial({ color, side, metalness, roughness });
  if (map) {
    mat.map = map;
    // baseColor map is color data
    if (map.flipY === undefined) map.flipY = false;
    if (map.colorSpace === undefined) map.colorSpace = THREE.SRGBColorSpace;
  }
  if (aoMap) {
    mat.aoMap = aoMap; // non-color data; default Linear
    mat.aoMapIntensity = aoMapIntensity;
  }
  mat.needsUpdate = true;
  return mat;
}

