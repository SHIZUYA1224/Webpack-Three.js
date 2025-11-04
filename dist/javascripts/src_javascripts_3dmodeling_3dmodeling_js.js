"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_javascripts_3dmodeling_3dmodeling_js"],{

/***/ "./src/3dmodels/model1.glb":
/*!*********************************!*\
  !*** ./src/3dmodels/model1.glb ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/models/model1.glb";

/***/ }),

/***/ "./src/3dmodels/model2.glb":
/*!*********************************!*\
  !*** ./src/3dmodels/model2.glb ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/models/model2.glb";

/***/ }),

/***/ "./src/javascripts/3dmodeling/3dmodeling.js":
/*!**************************************************!*\
  !*** ./src/javascripts/3dmodeling/3dmodeling.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");



// 既存の3Dモデルを参照（src/3dmodels/ 配下）
const models = {
  model1: {
    url: __webpack_require__(/*! ../../3dmodels/model1.glb */ "./src/3dmodels/model1.glb"),
    name: 'Test Object'
  },
  model2: {
    url: __webpack_require__(/*! ../../3dmodels/model2.glb */ "./src/3dmodels/model2.glb"),
    name: 'Uwagi'
  }
};
let currentModel = null;
let scene, camera, renderer, loader;
function init() {
  scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
  camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({
    canvas: document.getElementById('canvas-3d')
  });
  renderer.setSize(600, 400); // サイズを小さく
  loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();

  // ライトを追加
  const light = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 0.5);
  scene.add(light);
  const directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 0.5);
  scene.add(directionalLight);
  camera.position.z = 5;

  // 初期モデルをロード
  loadModel('model1');

  // ボタンイベント
  document.getElementById('model1-btn').addEventListener('click', () => loadModel('model1'));
  document.getElementById('model2-btn').addEventListener('click', () => loadModel('model2'));
  animate();
}
function loadModel(key) {
  if (currentModel) {
    scene.remove(currentModel);
  }
  loader.load(models[key].url, gltf => {
    currentModel = gltf.scene;
    scene.add(currentModel);
  });
}
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
document.addEventListener('DOMContentLoaded', init);

/***/ })

}]);
//# sourceMappingURL=src_javascripts_3dmodeling_3dmodeling_js.js.map