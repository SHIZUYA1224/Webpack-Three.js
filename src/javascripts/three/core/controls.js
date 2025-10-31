import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function createControls(camera, renderer, { enableDamping = true, dampingFactor = 0.05 } = {}) {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = enableDamping;
  controls.dampingFactor = dampingFactor;
  return controls;
}

