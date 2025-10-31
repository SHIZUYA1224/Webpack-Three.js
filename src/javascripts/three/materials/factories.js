import * as THREE from 'three';

export function ensureUv2(geometry) {
  if (!geometry) return;
  const uv = geometry.attributes?.uv;
  const uv2 = geometry.attributes?.uv2;
  if (uv && !uv2) {
    geometry.setAttribute('uv2', uv);
  }
}

// Flexible factory: accepts either baseMap (image) or baseColor (hex)
export function createStandardMaterial({
  // base color input (choose one). If baseMap is provided, baseColor is ignored (assumed white)
  baseMap,
  baseColor,
  // backward-compat aliases
  map,
  color,
  // AO
  aoMap,
  aoMapIntensity = 1,
  // PBR / rendering
  side = THREE.DoubleSide,
  metalness = 0,
  roughness = 1,
} = {}) {
  const resolvedMap = baseMap ?? map;
  const resolvedColor = baseColor ?? color ?? 0xffffff;

  // If map provided, neutralize color to white to avoid tinting
  const mat = new THREE.MeshStandardMaterial({
    color: resolvedMap ? 0xffffff : resolvedColor,
    side,
    metalness,
    roughness,
  });

  if (resolvedMap) {
    mat.map = resolvedMap;
    // baseColor map is color data
    if (resolvedMap.flipY === undefined) resolvedMap.flipY = false;
    if (resolvedMap.colorSpace === undefined) resolvedMap.colorSpace = THREE.SRGBColorSpace;
  }

  if (aoMap) {
    mat.aoMap = aoMap; // non-color data; keep Linear
    mat.aoMapIntensity = aoMapIntensity;
    if (aoMap.flipY === undefined) aoMap.flipY = false;
  }

  mat.needsUpdate = true;
  return mat;
}

// Helper to apply and ensure uv2 when aoMap is used
export function applyStandardMaterialToMesh(mesh, options = {}) {
  if (options.aoMap) ensureUv2(mesh.geometry);
  mesh.material = createStandardMaterial(options);
  return mesh.material;
}
