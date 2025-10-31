import * as THREE from 'three';
import * as dat from 'dat.gui';

import { createScene } from './core/scene.js';
import { createCamera } from './core/camera.js';
import { createRenderer } from './core/renderer.js';
import { createControls } from './core/controls.js';
import { loadGLTF, loadTexture } from './loaders/assets.js';
import { createStandardMaterial } from './materials/factories.js';
import { attachHoverScale, attachClickToggle } from './systems/interaction.js';
import { attachResize } from './systems/resize.js';
import { startLoop } from './systems/loop.js';

// Assets (kept at current locations; import-managed)
import uwagiUrl from '@/3dmodels/uwagi.glb';
import testObjectUrl from '@/3dmodels/Test_object.glb';
import baseTexUrl from '@/images/texture/Test_texture.png';

export async function initThreeApp(container = document.getElementById('canvas')) {
  if (!container) throw new Error('Container element #canvas not found');

  const scene = createScene();
  const camera = createCamera({ position: [0, 0, 5] });
  const renderer = createRenderer({ container });
  const controls = createControls(camera, renderer, {});

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // Load assets
  const [uwagiGltf, testGltf, baseTex] = await Promise.all([
    loadGLTF(uwagiUrl),
    loadGLTF(testObjectUrl),
    loadTexture(baseTexUrl, {
      colorSpace: THREE.SRGBColorSpace,
      flipY: false,
      minFilter: THREE.LinearMipmapLinearFilter,
      magFilter: THREE.LinearFilter,
    })
  ]);

  // uwagi model
  const uwagiModel = uwagiGltf.scene;
  uwagiModel.position.set(0, -1, 0);
  uwagiModel.scale.set(0.5, 0.5, 0.5);
  uwagiModel.traverse((child) => {
    if (child.isMesh) {
      child.material.side = THREE.DoubleSide;
    }
  });
  scene.add(uwagiModel);

  // test object model with base color texture
  const testObject = testGltf.scene;
  testObject.position.set(0, -1, 0);
  testObject.scale.set(0.5, 0.5, 0.5);
  testObject.traverse((child) => {
    if (child.isMesh) {
      const mat = createStandardMaterial({ map: baseTex, color: 0xffffff, roughness: 1, metalness: 0, side: THREE.DoubleSide });
      child.material = mat;
    }
  });
  scene.add(testObject);

  // GUI (keep visual position)
  const gui = new dat.GUI({ autoPlace: false });
  document.body.appendChild(gui.domElement);
  gui.domElement.style.position = 'absolute';
  gui.domElement.style.top = '10px';
  gui.domElement.style.left = '50%';
  gui.domElement.style.transform = 'translateX(-50%)';
  gui.domElement.style.zIndex = '1001';
  gui.addFolder('Materials');

  // Interactions
  const uwagiRef = { current: uwagiModel };
  const detachHover = attachHoverScale(scene, camera, uwagiRef);
  function hasAncestor(node, ancestor) {
    let n = node;
    while (n) { if (n === ancestor) return true; n = n.parent; }
    return false;
  }
  const detachClick = attachClickToggle(scene, camera, {
    onClick: (obj) => {
      if (!uwagiModel || !obj) return;
      if (!hasAncestor(obj, uwagiModel)) return;
      uwagiModel.traverse((child) => {
        if (child.isMesh) {
          const current = child.material.color.getHex();
          child.material.color.set(current === 0xff0000 ? 0x0000ff : 0xff0000);
        }
      });
    }
  });

  // Resize + Loop
  const detachResize = attachResize(camera, renderer);
  const stopLoop = startLoop({ renderer, scene, camera, update: () => controls.update() });

  // Return disposer for cleanup
  return function dispose() {
    detachHover?.();
    detachClick?.();
    detachResize?.();
    stopLoop?.();
    gui?.destroy?.();
    renderer?.dispose?.();
  };
}

// Auto-start for current app behaviour
initThreeApp().catch((e) => console.error(e));
