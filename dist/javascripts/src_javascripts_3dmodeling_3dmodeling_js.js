(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_javascripts_3dmodeling_3dmodeling_js"],{

/***/ "./src/3dmodels sync \\.(glb%7Cgltf%7Cvrm)$i":
/*!****************************************************************!*\
  !*** ./src/3dmodels/ sync nonrecursive \.(glb%7Cgltf%7Cvrm)$i ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Test_object.glb": "./src/3dmodels/Test_object.glb",
	"./VRM.vrm": "./src/3dmodels/VRM.vrm",
	"./uwagi.glb": "./src/3dmodels/uwagi.glb"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/3dmodels sync \\.(glb%7Cgltf%7Cvrm)$i";

/***/ }),

/***/ "./src/3dmodels/Test_object.glb":
/*!**************************************!*\
  !*** ./src/3dmodels/Test_object.glb ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/models/Test_object.glb";

/***/ }),

/***/ "./src/3dmodels/VRM.vrm":
/*!******************************!*\
  !*** ./src/3dmodels/VRM.vrm ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/models/VRM.vrm";

/***/ }),

/***/ "./src/3dmodels/display sync \\.(glb%7Cgltf%7Cvrm)$i":
/*!************************************************************************!*\
  !*** ./src/3dmodels/display/ sync nonrecursive \.(glb%7Cgltf%7Cvrm)$i ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./VRM.vrm": "./src/3dmodels/display/VRM.vrm",
	"./model1.glb": "./src/3dmodels/display/model1.glb",
	"./model2.glb": "./src/3dmodels/display/model2.glb"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/3dmodels/display sync \\.(glb%7Cgltf%7Cvrm)$i";

/***/ }),

/***/ "./src/3dmodels/display/VRM.vrm":
/*!**************************************!*\
  !*** ./src/3dmodels/display/VRM.vrm ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/models/VRM.vrm";

/***/ }),

/***/ "./src/3dmodels/display/model1.glb":
/*!*****************************************!*\
  !*** ./src/3dmodels/display/model1.glb ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/models/model1.glb";

/***/ }),

/***/ "./src/3dmodels/display/model2.glb":
/*!*****************************************!*\
  !*** ./src/3dmodels/display/model2.glb ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/models/model2.glb";

/***/ }),

/***/ "./src/3dmodels/uwagi.glb":
/*!********************************!*\
  !*** ./src/3dmodels/uwagi.glb ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/models/uwagi.glb";

/***/ }),

/***/ "./src/images/sample-artwork.jpg":
/*!***************************************!*\
  !*** ./src/images/sample-artwork.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/sample-artwork.jpg";

/***/ }),

/***/ "./src/javascripts/3dmodeling/3dmodeling.js":
/*!**************************************************!*\
  !*** ./src/javascripts/3dmodeling/3dmodeling.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _modelsData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modelsData */ "./src/javascripts/3dmodeling/modelsData.js");





const VIEWPORT = {
  width: 1600,
  height: 900
};
const CAMERA = {
  fov: 75,
  near: 0.1,
  far: 1000
};
const state = {
  scene: null,
  camera: null,
  renderer: null,
  loader: null,
  currentModel: null,
  controls: null
};
function setupScene() {
  state.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
  state.scene.background = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xffffff);
}
function setupCamera() {
  const aspect = VIEWPORT.width / VIEWPORT.height;
  state.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(CAMERA.fov, aspect, CAMERA.near, CAMERA.far);
  state.camera.position.z = 5;
}
function setupRenderer() {
  const canvas = document.getElementById('canvas-3d');
  state.renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({
    canvas
  });
  state.renderer.setSize(VIEWPORT.width, VIEWPORT.height);
}
function setupControls() {
  state.controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(state.camera, state.renderer.domElement);
  state.controls.enableDamping = true;
  state.controls.dampingFactor = 0.05;
}
function setupLoader() {
  state.loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();
}
function setupLights() {
  const ambient = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1);
  state.scene.add(ambient);
  const dir = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);
  state.scene.add(dir);
}
function disposeObject3D(obj) {
  if (!obj) return;
  obj.traverse(child => {
    if (child.isMesh) {
      var _child$geometry, _child$geometry$dispo, _child$material, _child$material$dispo;
      (_child$geometry = child.geometry) === null || _child$geometry === void 0 || (_child$geometry$dispo = _child$geometry.dispose) === null || _child$geometry$dispo === void 0 || _child$geometry$dispo.call(_child$geometry);
      if (Array.isArray(child.material)) child.material.forEach(m => {
        var _m$dispose;
        return m === null || m === void 0 || (_m$dispose = m.dispose) === null || _m$dispose === void 0 ? void 0 : _m$dispose.call(m);
      });else (_child$material = child.material) === null || _child$material === void 0 || (_child$material$dispo = _child$material.dispose) === null || _child$material$dispo === void 0 || _child$material$dispo.call(_child$material);
    }
  });
}
function computeModelStats(root) {
  const stats = {
    vertices: 0,
    triangles: 0,
    meshes: 0,
    materials: 0
  };
  const mats = new Set();
  if (!root) return stats;
  root.traverse(child => {
    if (child.isMesh && child.geometry) {
      var _geom$attributes;
      stats.meshes += 1;
      const geom = child.geometry;
      const pos = (_geom$attributes = geom.attributes) === null || _geom$attributes === void 0 ? void 0 : _geom$attributes.position;
      const idx = geom.index;
      if (pos) stats.vertices += pos.count;
      const tri = idx ? Math.floor(idx.count / 3) : pos ? Math.floor(pos.count / 3) : 0;
      stats.triangles += tri;
      const mat = child.material;
      if (Array.isArray(mat)) mat.forEach(m => m && mats.add(m.uuid));else if (mat) mats.add(mat.uuid);
    }
  });
  stats.materials = mats.size;
  return stats;
}
function updateStatsUI(stats) {
  const set = (sel, v) => {
    const el = document.querySelector(sel);
    if (el) el.textContent = typeof v === 'number' ? v.toLocaleString() : v !== null && v !== void 0 ? v : '-';
  };
  set('#stat-polys', stats.triangles);
  set('#stat-verts', stats.vertices);
  set('#stat-meshes', stats.meshes);
  set('#stat-mats', stats.materials);
}
function loadModelById(id) {
  const item = _modelsData__WEBPACK_IMPORTED_MODULE_5__.modelById[id];
  if (!item) return;
  if (state.currentModel) {
    state.scene.remove(state.currentModel);
    disposeObject3D(state.currentModel);
    state.currentModel = null;
  }
  state.loader.load(item.glb, gltf => {
    state.currentModel = gltf.scene;
    state.scene.add(state.currentModel);
    gsap__WEBPACK_IMPORTED_MODULE_4__.gsap.to(gltf.scene.rotation, {
      y: Math.PI * 2,
      duration: 2,
      ease: 'power2.out'
    }); // 回転アニメーション
    const stats = computeModelStats(state.currentModel);
    updateStatsUI(stats);

    // 画角に収める（自動フレーミング）
    try {
      const box = new three__WEBPACK_IMPORTED_MODULE_0__.Box3().setFromObject(state.currentModel);
      const size = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
      box.getSize(size);
      const center = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
      box.getCenter(center);
      const maxSize = Math.max(size.x, size.y, size.z) || 1;
      const fitHeightDistance = maxSize / (2 * Math.tan(three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.degToRad(state.camera.fov) / 2));
      const fitWidthDistance = fitHeightDistance / state.camera.aspect;
      const distance = Math.max(fitHeightDistance, fitWidthDistance);
      state.camera.position.copy(center);
      state.camera.position.x += distance;
      state.camera.position.y += distance * 0.2;
      state.camera.position.z += distance;
      state.camera.near = Math.max(0.01, distance / 100);
      state.camera.far = Math.max(1000, distance * 100);
      state.camera.updateProjectionMatrix();
      if (state.controls) {
        state.controls.target.copy(center);
        state.controls.update();
      }
    } catch (_) {}
  });
}
function renderMeta(model) {
  const titleEl = document.querySelector('.page-title');
  const descEl = document.querySelector('.description p');
  const authorEl = document.querySelector('.author-name');
  const dateEl = document.querySelector('#info-date');
  const softEl = document.querySelector('#info-software');
  const licEl = document.querySelector('#info-license');
  if (titleEl) titleEl.textContent = "\u3010\u30E2\u30C7\u30EB\u3011".concat(model.title);
  if (descEl) descEl.textContent = model.description || '';
  if (authorEl) authorEl.textContent = model.author || '';
  if (dateEl) dateEl.textContent = model.date || '';
  if (softEl) softEl.textContent = model.software || '';
  if (licEl) licEl.textContent = model.license || '';
}
function renderRelated(selectedId) {
  const list = document.getElementById('related-list');
  if (!list) return;
  list.innerHTML = _modelsData__WEBPACK_IMPORTED_MODULE_5__.models.map(m => "\n    <div class=\"item\" data-id=\"".concat(m.id, "\">\n      <img class=\"thumb\" src=\"").concat(m.thumb, "\" alt=\"").concat(m.title, "\" />\n      <div class=\"text\">\n        <p class=\"title\">").concat(m.title, "</p>\n        <p class=\"meta\">").concat(m.date || '', "</p>\n      </div>\n    </div>\n  ")).join('');
  list.querySelectorAll('.item').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.getAttribute('data-id');
      const model = _modelsData__WEBPACK_IMPORTED_MODULE_5__.modelById[id];
      if (!model) return;
      loadModelById(id);
      renderMeta(model);
      list.querySelectorAll('.item').forEach(i => i.classList.remove('active'));
      el.classList.add('active');
      history.replaceState(null, '', "?model=".concat(encodeURIComponent(id)));
    });
  });
  const active = list.querySelector("[data-id=\"".concat(selectedId, "\"]"));
  active === null || active === void 0 || active.classList.add('active');
}
function animate() {
  requestAnimationFrame(animate);
  if (state.controls) state.controls.update();
  state.renderer.render(state.scene, state.camera);
}
function init() {
  var _MODEL_LIST$0$id, _MODEL_LIST$;
  setupScene();
  setupCamera();
  setupRenderer();
  setupControls();
  setupLoader();
  setupLights();
  const params = new URLSearchParams(location.search);
  const defaultId = params.get('model') || ((_MODEL_LIST$0$id = (_MODEL_LIST$ = _modelsData__WEBPACK_IMPORTED_MODULE_5__.models[0]) === null || _MODEL_LIST$ === void 0 ? void 0 : _MODEL_LIST$.id) !== null && _MODEL_LIST$0$id !== void 0 ? _MODEL_LIST$0$id : 'model1');
  const model = _modelsData__WEBPACK_IMPORTED_MODULE_5__.modelById[defaultId] || _modelsData__WEBPACK_IMPORTED_MODULE_5__.models[0];
  renderRelated(model.id);
  renderMeta(model);
  loadModelById(model.id);
  animate();
}

// main.js から body クラスを見て動的 import されるため、
// DOM 構築後にロードされる。即時初期化でOK。
init();

/***/ }),

/***/ "./src/javascripts/3dmodeling/modelsData.js":
/*!**************************************************!*\
  !*** ./src/javascripts/3dmodeling/modelsData.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   modelById: () => (/* binding */ modelById),
/* harmony export */   models: () => (/* binding */ models)
/* harmony export */ });
/* harmony import */ var _images_sample_artwork_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/images/sample-artwork.jpg */ "./src/images/sample-artwork.jpg");
// src/3dmodels/display 配下の .glb/.gltf/.vrm を自動収集してメタデータを生成
// 備考: require.context は webpack 専用の動的収集機能

function prettyTitle(id) {
  try {
    return decodeURIComponent(id).replace(/[_-]+/g, ' ').replace(/\b\w/g, m => m.toUpperCase());
  } catch (_) {
    return id;
  }
}

// display フォルダを走査（このファイルからの相対パスを使用）
const ctxDisplay = __webpack_require__("./src/3dmodels/display sync \\.(glb%7Cgltf%7Cvrm)$i");
// ルート(3dmodels直下)も走査（display 配下とは重複しない）
const ctxRoot = __webpack_require__("./src/3dmodels sync \\.(glb%7Cgltf%7Cvrm)$i");
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
    thumb: _images_sample_artwork_jpg__WEBPACK_IMPORTED_MODULE_0__,
    description: ''
  };
}
const scanned = [...ctxDisplay.keys().map(k => entryFromContext(ctxDisplay, k)), ...ctxRoot.keys().map(k => entryFromContext(ctxRoot, k))];

// id 重複排除（最後に現れたものを優先）
const uniqMap = new Map(scanned.map(m => [m.id, m]));
const models = Array.from(uniqMap.values());
const modelById = Object.fromEntries(models.map(m => [m.id, m]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (models);

/***/ })

}]);
//# sourceMappingURL=src_javascripts_3dmodeling_3dmodeling_js.js.map