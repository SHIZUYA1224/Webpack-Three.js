(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_javascripts_music_music_js"],{

/***/ "./src/images/sample-artwork.jpg":
/*!***************************************!*\
  !*** ./src/images/sample-artwork.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/sample-artwork.jpg";

/***/ }),

/***/ "./src/javascripts/music/music.js":
/*!****************************************!*\
  !*** ./src/javascripts/music/music.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tracksData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracksData */ "./src/javascripts/music/tracksData.js");


// main.js から動的 import されるため、DOM は既に構築済み。
// すぐに初期化を実行する。
(() => {
  const list = document.querySelector('.cards');
  if (!list) return;
  const playerTitle = document.querySelector('.music-container h2');
  const playerArtist = document.querySelector('.music-container h3');
  const audioPlayer = document.getElementById('audio-player');
  const playerArtwork = document.querySelector('.player img');

  // リスト描画
  list.innerHTML = _tracksData__WEBPACK_IMPORTED_MODULE_0__["default"].map(_ref => {
    let {
      title,
      artist,
      url,
      artwork
    } = _ref;
    return "\n    <div class=\"card\" data-url=\"".concat(url, "\" data-title=\"").concat(title, "\" data-artist=\"").concat(artist, "\">\n      ").concat(artwork ? "<img src=\"".concat(artwork, "\" alt=\"").concat(title, "\" class=\"card-artwork\" />") : '', "\n      <h2>").concat(title, "</h2>\n      <p>").concat(artist || '', "</p>\n    </div>\n  ");
  }).join('');

  // 初期選択（先頭）
  const first = _tracksData__WEBPACK_IMPORTED_MODULE_0__["default"][0];
  if (first && audioPlayer) {
    if (playerTitle) playerTitle.textContent = first.title;
    if (playerArtist) playerArtist.textContent = first.artist || '';
    if (playerArtwork && first.artwork) playerArtwork.src = first.artwork;
    audioPlayer.src = first.url;
    audioPlayer.load();
  }

  // カードクリックでプレイヤー更新
  list.addEventListener('click', e => {
    const card = e.target.closest('.card');
    if (!card || !audioPlayer) return;
    const url = card.dataset.url;
    const title = card.dataset.title;
    const artist = card.dataset.artist;
    const artworkEl = card.querySelector('.card-artwork');
    if (playerTitle) playerTitle.textContent = title;
    if (playerArtist) playerArtist.textContent = artist || '';
    if (playerArtwork && artworkEl) playerArtwork.src = artworkEl.src;
    audioPlayer.src = url;
    audioPlayer.load();
  });

  // コントロール
  const audio = audioPlayer;
  if (!audio) return;
  const playBtn = document.getElementById('play-button');
  const pauseBtn = document.getElementById('pause-button');
  const seekBar = document.getElementById('seek-bar');
  const volumeBar = document.getElementById('volume-bar');
  if (playBtn) playBtn.addEventListener('click', () => audio.play());
  if (pauseBtn) pauseBtn.addEventListener('click', () => audio.pause());
  if (audio && seekBar) {
    audio.addEventListener('timeupdate', () => {
      if (!isFinite(audio.duration) || audio.duration === 0) return;
      seekBar.value = audio.currentTime / audio.duration * 100;
    });
    seekBar.addEventListener('input', () => {
      if (!isFinite(audio.duration) || audio.duration === 0) return;
      audio.currentTime = seekBar.value / 100 * audio.duration;
    });
  }
  if (volumeBar) {
    volumeBar.addEventListener('input', () => {
      audio.volume = volumeBar.value;
    });
  }
})();

/***/ }),

/***/ "./src/javascripts/music/tracksData.js":
/*!*********************************************!*\
  !*** ./src/javascripts/music/tracksData.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   trackList: () => (/* binding */ trackList)
/* harmony export */ });
/* harmony import */ var _images_sample_artwork_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/images/sample-artwork.jpg */ "./src/images/sample-artwork.jpg");
// src/music 配下の音源を自動収集し、カード表示用のメタデータを生成
// 画像は暫定で共通のサムネ（必要なら各曲ごとに用意）

const ctx = __webpack_require__("./src/music sync \\.(mp3%7Cwav%7Cogg%7Cm4a)$i");
function decodeName(name) {
  try {
    return decodeURIComponent(name);
  } catch (_) {
    return name;
  }
}
const tracks = ctx.keys().map(key => {
  const url = ctx(key);
  const filename = key.replace(/^\.\//, '');
  const title = decodeName(filename.replace(/\.(mp3|wav|ogg|m4a)$/i, ''));
  return {
    id: title,
    title,
    artist: '',
    url,
    artwork: _images_sample_artwork_jpg__WEBPACK_IMPORTED_MODULE_0__
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tracks);
const trackList = tracks;

/***/ }),

/***/ "./src/music sync \\.(mp3%7Cwav%7Cogg%7Cm4a)$i":
/*!******************************************************************!*\
  !*** ./src/music/ sync nonrecursive \.(mp3%7Cwav%7Cogg%7Cm4a)$i ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./sample.mp3": "./src/music/sample.mp3",
	"./目覚め.mp3": "./src/music/目覚め.mp3"
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
webpackContext.id = "./src/music sync \\.(mp3%7Cwav%7Cogg%7Cm4a)$i";

/***/ }),

/***/ "./src/music/sample.mp3":
/*!******************************!*\
  !*** ./src/music/sample.mp3 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/audio/sample.mp3";

/***/ }),

/***/ "./src/music/目覚め.mp3":
/*!***************************!*\
  !*** ./src/music/目覚め.mp3 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/audio/目覚め.mp3";

/***/ })

}]);
//# sourceMappingURL=src_javascripts_music_music_js.js.map