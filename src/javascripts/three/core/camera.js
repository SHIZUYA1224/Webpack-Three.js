import * as THREE from 'three';

export function createCamera({ fov = 75, near = 0.1, far = 1000, aspect = window.innerWidth / window.innerHeight, position = [0, 0, 5] } = {}) {
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(...position);
  return camera;
}

