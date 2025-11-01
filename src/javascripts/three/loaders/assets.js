import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm';

const manager = new THREE.LoadingManager();
export function onLoading(onProgress, onError) {
  if (onProgress) manager.onProgress = onProgress;
  if (onError) manager.onError = onError;
}

const textureLoader = new THREE.TextureLoader(manager);

export function loadTexture(url, { colorSpace, flipY, wrapS, wrapT, minFilter, magFilter, generateMipmaps } = {}) {
  return new Promise((resolve, reject) => {
    textureLoader.load(
      url,
      (tex) => {
        if (colorSpace !== undefined) tex.colorSpace = colorSpace;
        if (flipY !== undefined) tex.flipY = flipY;
        if (wrapS !== undefined) tex.wrapS = wrapS;
        if (wrapT !== undefined) tex.wrapT = wrapT;
        if (minFilter !== undefined) tex.minFilter = minFilter;
        if (magFilter !== undefined) tex.magFilter = magFilter;
        if (generateMipmaps !== undefined) tex.generateMipmaps = generateMipmaps;
        resolve(tex);
      },
      undefined,
      (err) => reject(err)
    );
  });
}

export function loadGLTF(url) {
  const loader = new GLTFLoader(manager);
  return new Promise((resolve, reject) => {
    loader.load(url, (gltf) => resolve(gltf), undefined, (err) => reject(err));
  });
}

export function loadVRM(url) {
  const loader = new GLTFLoader(manager);
  loader.register((parser) => new VRMLoaderPlugin(parser));
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      (gltf) => {
        const vrm = gltf.userData.vrm;
        if (vrm) {
          // Optional cleanup/optimization
          try {
            VRMUtils.removeUnnecessaryVertices(vrm.scene);
            VRMUtils.combineSkeletons(vrm.scene);  // removeUnnecessaryJoints を combineSkeletons に置き換え
          } catch (_) {}
        }
        resolve(vrm ?? gltf);
      },
      undefined,
      (err) => reject(err)
    );
  });
}
