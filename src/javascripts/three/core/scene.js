import * as THREE from 'three';

export function createScene({ background = null } = {}) {
  const scene = new THREE.Scene();
  if (background !== null) scene.background = background;
  return scene;
}

