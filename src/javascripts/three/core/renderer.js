import * as THREE from 'three';

export function createRenderer({ container, antialias = true, alpha = false, pixelRatio = Math.min(window.devicePixelRatio, 2) } = {}) {
  if (!container) throw new Error('Renderer requires a container element');
  const renderer = new THREE.WebGLRenderer({ antialias, alpha });
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(container.clientWidth || window.innerWidth, container.clientHeight || window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);
  return renderer;
}

