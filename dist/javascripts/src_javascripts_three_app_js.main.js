"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_javascripts_three_app_js"],{

/***/ "./src/3dmodels/Test_object.glb":
/*!**************************************!*\
  !*** ./src/3dmodels/Test_object.glb ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/models/Test_object.glb";

/***/ }),

/***/ "./src/3dmodels/VRM.vrm":
/*!******************************!*\
  !*** ./src/3dmodels/VRM.vrm ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/models/VRM.vrm";

/***/ }),

/***/ "./src/3dmodels/uwagi.glb":
/*!********************************!*\
  !*** ./src/3dmodels/uwagi.glb ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/models/uwagi.glb";

/***/ }),

/***/ "./src/images/texture/Test_texture.png":
/*!*********************************************!*\
  !*** ./src/images/texture/Test_texture.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Test_texture.png";

/***/ }),

/***/ "./src/javascripts/three/app.js":
/*!**************************************!*\
  !*** ./src/javascripts/three/app.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initThreeApp: () => (/* binding */ initThreeApp)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");
/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");
/* harmony import */ var _core_scene_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/scene.js */ "./src/javascripts/three/core/scene.js");
/* harmony import */ var _core_camera_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/camera.js */ "./src/javascripts/three/core/camera.js");
/* harmony import */ var _core_renderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/renderer.js */ "./src/javascripts/three/core/renderer.js");
/* harmony import */ var _core_controls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/controls.js */ "./src/javascripts/three/core/controls.js");
/* harmony import */ var _loaders_assets_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loaders/assets.js */ "./src/javascripts/three/loaders/assets.js");
/* harmony import */ var _materials_factories_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./materials/factories.js */ "./src/javascripts/three/materials/factories.js");
/* harmony import */ var _systems_interaction_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./systems/interaction.js */ "./src/javascripts/three/systems/interaction.js");
/* harmony import */ var _systems_resize_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./systems/resize.js */ "./src/javascripts/three/systems/resize.js");
/* harmony import */ var _systems_loop_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./systems/loop.js */ "./src/javascripts/three/systems/loop.js");
/* harmony import */ var _3dmodels_uwagi_glb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/3dmodels/uwagi.glb */ "./src/3dmodels/uwagi.glb");
/* harmony import */ var _3dmodels_Test_object_glb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/3dmodels/Test_object.glb */ "./src/3dmodels/Test_object.glb");
/* harmony import */ var _images_texture_Test_texture_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/images/texture/Test_texture.png */ "./src/images/texture/Test_texture.png");
/* harmony import */ var _3dmodels_VRM_vrm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/3dmodels/VRM.vrm */ "./src/3dmodels/VRM.vrm");












// Assets (kept at current locations; import-managed)





async function initThreeApp() {
  let container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.getElementById('canvas');
  if (!container) return null; // ページに#canvasが無い場合は何もしない

  const scene = (0,_core_scene_js__WEBPACK_IMPORTED_MODULE_2__.createScene)();
  const camera = (0,_core_camera_js__WEBPACK_IMPORTED_MODULE_3__.createCamera)({
    position: [0, 0, 5]
  });
  const renderer = (0,_core_renderer_js__WEBPACK_IMPORTED_MODULE_4__.createRenderer)({
    container
  });
  const controls = (0,_core_controls_js__WEBPACK_IMPORTED_MODULE_5__.createControls)(camera, renderer, {});

  // Lights
  const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // Load assets
  const [uwagiGltf, testGltf, baseTex, aoTex, vrm] = await Promise.all([(0,_loaders_assets_js__WEBPACK_IMPORTED_MODULE_6__.loadGLTF)(_3dmodels_uwagi_glb__WEBPACK_IMPORTED_MODULE_11__), (0,_loaders_assets_js__WEBPACK_IMPORTED_MODULE_6__.loadGLTF)(_3dmodels_Test_object_glb__WEBPACK_IMPORTED_MODULE_12__), (0,_loaders_assets_js__WEBPACK_IMPORTED_MODULE_6__.loadTexture)(_images_texture_Test_texture_png__WEBPACK_IMPORTED_MODULE_13__, {
    colorSpace: three__WEBPACK_IMPORTED_MODULE_0__.SRGBColorSpace,
    flipY: false,
    minFilter: three__WEBPACK_IMPORTED_MODULE_0__.LinearMipmapLinearFilter,
    magFilter: three__WEBPACK_IMPORTED_MODULE_0__.LinearFilter
  }), (0,_loaders_assets_js__WEBPACK_IMPORTED_MODULE_6__.loadTexture)(_images_texture_Test_texture_png__WEBPACK_IMPORTED_MODULE_13__, {
    // AO is non-color data; keep Linear
    flipY: false,
    minFilter: three__WEBPACK_IMPORTED_MODULE_0__.LinearMipmapLinearFilter,
    magFilter: three__WEBPACK_IMPORTED_MODULE_0__.LinearFilter
  }), (0,_loaders_assets_js__WEBPACK_IMPORTED_MODULE_6__.loadVRM)(_3dmodels_VRM_vrm__WEBPACK_IMPORTED_MODULE_14__)]);

  // VRM model (add as-is; VRM plugin sets proper materials)
  let vrmModel = null;
  if (vrm && vrm.scene) {
    vrmModel = vrm;
    vrmModel.scene.position.set(2, 0, 0);
    vrmModel.scene.rotation.y = Math.PI; // face camera
    scene.add(vrmModel.scene);
  }

  // uwagi model
  const uwagiModel = uwagiGltf.scene;
  uwagiModel.position.set(0, 2, 0);
  uwagiModel.scale.set(0.5, 0.5, 0.5);
  uwagiModel.traverse(child => {
    if (child.isMesh) {
      // Ensure uv2 exists when using aoMap
      (0,_materials_factories_js__WEBPACK_IMPORTED_MODULE_7__.ensureUv2)(child.geometry);
      const mat = (0,_materials_factories_js__WEBPACK_IMPORTED_MODULE_7__.createStandardMaterial)({
        baseMap: baseTex,
        // 画像のベースカラー
        aoMap: aoTex,
        // AOマップ併用
        aoMapIntensity: 1.0,
        roughness: 1,
        metalness: 0,
        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide
      });
      child.material = mat;
    }
  });
  scene.add(uwagiModel);

  // test object model with base color texture
  const testObject = testGltf.scene;
  testObject.position.set(0, -1, 0);
  testObject.scale.set(0.5, 0.5, 0.5);
  testObject.traverse(child => {
    if (child.isMesh) {
      // Ensure uv2 exists when using aoMap
      (0,_materials_factories_js__WEBPACK_IMPORTED_MODULE_7__.ensureUv2)(child.geometry);
      const mat = (0,_materials_factories_js__WEBPACK_IMPORTED_MODULE_7__.createStandardMaterial)({
        //baseMap: baseTex,            // 画像のベースカラー
        baseColor: 0xffaa00,
        // 画像を使わない場合はカラーコードも可
        aoMap: aoTex,
        // AOマップ併用
        aoMapIntensity: 1.0,
        roughness: 1,
        metalness: 0,
        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide
      });
      child.material = mat;
    }
  });
  scene.add(testObject);

  // GUI (keep visual position)
  const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_1__.GUI({
    autoPlace: false
  });
  document.body.appendChild(gui.domElement);
  gui.domElement.style.position = 'absolute';
  gui.domElement.style.top = '10px';
  gui.domElement.style.left = '50%';
  gui.domElement.style.transform = 'translateX(-50%)';
  gui.domElement.style.zIndex = '1001';
  gui.addFolder('Materials');

  // Interactions
  const uwagiRef = {
    current: uwagiModel
  };
  const detachHover = (0,_systems_interaction_js__WEBPACK_IMPORTED_MODULE_8__.attachHoverScale)(scene, camera, uwagiRef);
  function hasAncestor(node, ancestor) {
    let n = node;
    while (n) {
      if (n === ancestor) return true;
      n = n.parent;
    }
    return false;
  }
  const detachClick = (0,_systems_interaction_js__WEBPACK_IMPORTED_MODULE_8__.attachClickToggle)(scene, camera, {
    onClick: obj => {
      if (!uwagiModel || !obj) return;
      if (!hasAncestor(obj, uwagiModel)) return;
      uwagiModel.traverse(child => {
        if (child.isMesh) {
          const current = child.material.color.getHex();
          child.material.color.set(current === 0xff0000 ? 0x0000ff : 0xff0000);
        }
      });
    }
  });

  // Resize + Loop
  const detachResize = (0,_systems_resize_js__WEBPACK_IMPORTED_MODULE_9__.attachResize)(camera, renderer);
  const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();
  const stopLoop = (0,_systems_loop_js__WEBPACK_IMPORTED_MODULE_10__.startLoop)({
    renderer,
    scene,
    camera,
    update: () => {
      const delta = clock.getDelta();
      controls.update();
      if (vrmModel && vrmModel.update) vrmModel.update(delta);
    }
  });

  // Return disposer for cleanup
  return function dispose() {
    var _gui$destroy, _renderer$dispose;
    detachHover === null || detachHover === void 0 || detachHover();
    detachClick === null || detachClick === void 0 || detachClick();
    detachResize === null || detachResize === void 0 || detachResize();
    stopLoop === null || stopLoop === void 0 || stopLoop();
    gui === null || gui === void 0 || (_gui$destroy = gui.destroy) === null || _gui$destroy === void 0 || _gui$destroy.call(gui);
    renderer === null || renderer === void 0 || (_renderer$dispose = renderer.dispose) === null || _renderer$dispose === void 0 || _renderer$dispose.call(renderer);
  };
}

// Auto-start only when #canvas exists
if (document.getElementById('canvas')) {
  initThreeApp().catch(e => console.error(e));
}

/***/ }),

/***/ "./src/javascripts/three/core/camera.js":
/*!**********************************************!*\
  !*** ./src/javascripts/three/core/camera.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCamera: () => (/* binding */ createCamera)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");

function createCamera() {
  let {
    fov = 75,
    near = 0.1,
    far = 1000,
    aspect = window.innerWidth / window.innerHeight,
    position = [0, 0, 5]
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(...position);
  return camera;
}

/***/ }),

/***/ "./src/javascripts/three/core/controls.js":
/*!************************************************!*\
  !*** ./src/javascripts/three/core/controls.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createControls: () => (/* binding */ createControls)
/* harmony export */ });
/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");

function createControls(camera, renderer) {
  let {
    enableDamping = true,
    dampingFactor = 0.05
  } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = enableDamping;
  controls.dampingFactor = dampingFactor;
  return controls;
}

/***/ }),

/***/ "./src/javascripts/three/core/renderer.js":
/*!************************************************!*\
  !*** ./src/javascripts/three/core/renderer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRenderer: () => (/* binding */ createRenderer)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");

function createRenderer() {
  let {
    container,
    antialias = true,
    alpha = false,
    pixelRatio = Math.min(window.devicePixelRatio, 2)
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (!container) throw new Error('Renderer requires a container element');
  const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({
    antialias,
    alpha
  });
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(container.clientWidth || window.innerWidth, container.clientHeight || window.innerHeight);
  renderer.outputColorSpace = three__WEBPACK_IMPORTED_MODULE_1__.SRGBColorSpace;
  container.appendChild(renderer.domElement);
  return renderer;
}

/***/ }),

/***/ "./src/javascripts/three/core/scene.js":
/*!*********************************************!*\
  !*** ./src/javascripts/three/core/scene.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createScene: () => (/* binding */ createScene)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");

function createScene() {
  let {
    background = null
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
  if (background !== null) scene.background = background;
  return scene;
}

/***/ }),

/***/ "./src/javascripts/three/loaders/assets.js":
/*!*************************************************!*\
  !*** ./src/javascripts/three/loaders/assets.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadGLTF: () => (/* binding */ loadGLTF),
/* harmony export */   loadTexture: () => (/* binding */ loadTexture),
/* harmony export */   loadVRM: () => (/* binding */ loadVRM),
/* harmony export */   onLoading: () => (/* binding */ onLoading)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var _pixiv_three_vrm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pixiv/three-vrm */ "./node_modules/@pixiv/three-vrm/lib/three-vrm.module.js");



const manager = new three__WEBPACK_IMPORTED_MODULE_0__.LoadingManager();
function onLoading(onProgress, onError) {
  if (onProgress) manager.onProgress = onProgress;
  if (onError) manager.onError = onError;
}
const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader(manager);
function loadTexture(url) {
  let {
    colorSpace,
    flipY,
    wrapS,
    wrapT,
    minFilter,
    magFilter,
    generateMipmaps
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise((resolve, reject) => {
    textureLoader.load(url, tex => {
      if (colorSpace !== undefined) tex.colorSpace = colorSpace;
      if (flipY !== undefined) tex.flipY = flipY;
      if (wrapS !== undefined) tex.wrapS = wrapS;
      if (wrapT !== undefined) tex.wrapT = wrapT;
      if (minFilter !== undefined) tex.minFilter = minFilter;
      if (magFilter !== undefined) tex.magFilter = magFilter;
      if (generateMipmaps !== undefined) tex.generateMipmaps = generateMipmaps;
      resolve(tex);
    }, undefined, err => reject(err));
  });
}
function loadGLTF(url) {
  const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader(manager);
  return new Promise((resolve, reject) => {
    loader.load(url, gltf => resolve(gltf), undefined, err => reject(err));
  });
}
function loadVRM(url) {
  const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader(manager);
  loader.register(parser => new _pixiv_three_vrm__WEBPACK_IMPORTED_MODULE_2__.VRMLoaderPlugin(parser));
  return new Promise((resolve, reject) => {
    loader.load(url, gltf => {
      const vrm = gltf.userData.vrm;
      if (vrm) {
        // Optional cleanup/optimization
        try {
          _pixiv_three_vrm__WEBPACK_IMPORTED_MODULE_2__.VRMUtils.removeUnnecessaryVertices(vrm.scene);
          _pixiv_three_vrm__WEBPACK_IMPORTED_MODULE_2__.VRMUtils.combineSkeletons(vrm.scene); // removeUnnecessaryJoints を combineSkeletons に置き換え
        } catch (_) {}
      }
      resolve(vrm !== null && vrm !== void 0 ? vrm : gltf);
    }, undefined, err => reject(err));
  });
}

/***/ }),

/***/ "./src/javascripts/three/materials/factories.js":
/*!******************************************************!*\
  !*** ./src/javascripts/three/materials/factories.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyStandardMaterialToMesh: () => (/* binding */ applyStandardMaterialToMesh),
/* harmony export */   createStandardMaterial: () => (/* binding */ createStandardMaterial),
/* harmony export */   ensureUv2: () => (/* binding */ ensureUv2)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");

function ensureUv2(geometry) {
  var _geometry$attributes, _geometry$attributes2;
  if (!geometry) return;
  const uv = (_geometry$attributes = geometry.attributes) === null || _geometry$attributes === void 0 ? void 0 : _geometry$attributes.uv;
  const uv2 = (_geometry$attributes2 = geometry.attributes) === null || _geometry$attributes2 === void 0 ? void 0 : _geometry$attributes2.uv2;
  if (uv && !uv2) {
    geometry.setAttribute('uv2', uv);
  }
}

// Flexible factory: accepts either baseMap (image) or baseColor (hex)
function createStandardMaterial() {
  var _ref;
  let {
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
    side = three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
    metalness = 0,
    roughness = 1
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const resolvedMap = baseMap !== null && baseMap !== void 0 ? baseMap : map;
  const resolvedColor = (_ref = baseColor !== null && baseColor !== void 0 ? baseColor : color) !== null && _ref !== void 0 ? _ref : 0xffffff;

  // If map provided, neutralize color to white to avoid tinting
  const mat = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({
    color: resolvedMap ? 0xffffff : resolvedColor,
    side,
    metalness,
    roughness
  });
  if (resolvedMap) {
    mat.map = resolvedMap;
    // baseColor map is color data
    if (resolvedMap.flipY === undefined) resolvedMap.flipY = false;
    if (resolvedMap.colorSpace === undefined) resolvedMap.colorSpace = three__WEBPACK_IMPORTED_MODULE_0__.SRGBColorSpace;
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
function applyStandardMaterialToMesh(mesh) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (options.aoMap) ensureUv2(mesh.geometry);
  mesh.material = createStandardMaterial(options);
  return mesh.material;
}

/***/ }),

/***/ "./src/javascripts/three/systems/interaction.js":
/*!******************************************************!*\
  !*** ./src/javascripts/three/systems/interaction.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachClickToggle: () => (/* binding */ attachClickToggle),
/* harmony export */   attachHoverScale: () => (/* binding */ attachHoverScale)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");

function isDescendant(parent, child) {
  if (!parent || !child) return false;
  let node = child;
  while (node) {
    if (node === parent) return true;
    node = node.parent;
  }
  return false;
}
function attachHoverScale(scene, camera, targetObjectRef) {
  let {
    scaleOnHover = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(1.2, 1.2, 1.2),
    defaultScale = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0.5, 0.5, 0.5)
  } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const raycaster = new three__WEBPACK_IMPORTED_MODULE_0__.Raycaster();
  const mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();
  function onMouseMove(event) {
    mouse.x = event.clientX / window.innerWidth * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0 && targetObjectRef.current && intersects[0].object && isDescendant(targetObjectRef.current, intersects[0].object)) {
      targetObjectRef.current.scale.copy(scaleOnHover);
    } else if (targetObjectRef.current) {
      targetObjectRef.current.scale.copy(defaultScale);
    }
  }
  window.addEventListener('mousemove', onMouseMove);
  return () => {
    window.removeEventListener('mousemove', onMouseMove);
  };
}
function attachClickToggle(scene, camera, _ref) {
  let {
    predicate,
    onClick
  } = _ref;
  const raycaster = new three__WEBPACK_IMPORTED_MODULE_0__.Raycaster();
  const mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();
  function onMouseClick(event) {
    mouse.x = event.clientX / window.innerWidth * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
      const obj = intersects[0].object;
      if (!predicate || predicate(obj)) onClick === null || onClick === void 0 || onClick(obj);
    }
  }
  window.addEventListener('click', onMouseClick);
  return () => window.removeEventListener('click', onMouseClick);
}

/***/ }),

/***/ "./src/javascripts/three/systems/loop.js":
/*!***********************************************!*\
  !*** ./src/javascripts/three/systems/loop.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startLoop: () => (/* binding */ startLoop)
/* harmony export */ });
function startLoop(_ref) {
  let {
    renderer,
    scene,
    camera,
    update = () => {}
  } = _ref;
  function onFrame(time) {
    update(time);
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(onFrame);
  return () => renderer.setAnimationLoop(null);
}

/***/ }),

/***/ "./src/javascripts/three/systems/resize.js":
/*!*************************************************!*\
  !*** ./src/javascripts/three/systems/resize.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachResize: () => (/* binding */ attachResize)
/* harmony export */ });
function attachResize(camera, renderer) {
  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onResize);
  return () => window.removeEventListener('resize', onResize);
}

/***/ })

}]);
//# sourceMappingURL=src_javascripts_three_app_js.main.js.map