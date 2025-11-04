/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/sample-artwork.jpg":
/*!***************************************!*\
  !*** ./src/images/sample-artwork.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/sample-artwork.jpg";

/***/ }),

/***/ "./src/javascripts/music/track.js":
/*!****************************************!*\
  !*** ./src/javascripts/music/track.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   trackList: () => (/* binding */ trackList),
/* harmony export */   tracks: () => (/* binding */ tracks)
/* harmony export */ });
/* harmony import */ var _music_sample_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../music/sample.mp3 */ "./src/music/sample.mp3");
/* harmony import */ var _music_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../music/目覚め.mp3 */ "./src/music/目覚め.mp3");
/* harmony import */ var _images_sample_artwork_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/sample-artwork.jpg */ "./src/images/sample-artwork.jpg");



//import mezameArtwork from '../../images/mezame-artwork.jpg';

const tracks = {
  'sample.mp3': {
    url: _music_sample_mp3__WEBPACK_IMPORTED_MODULE_0__,
    title: 'Sample Song',
    artist: 'Sample Artist',
    artwork: _images_sample_artwork_jpg__WEBPACK_IMPORTED_MODULE_2__
  },
  '目覚め.mp3': {
    url: _music_mp3__WEBPACK_IMPORTED_MODULE_1__,
    title: '目覚め',
    artist: 'SHIZU',
    artwork: _images_sample_artwork_jpg__WEBPACK_IMPORTED_MODULE_2__
  }
};
const trackList = Object.values(tracks);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trackList);

/***/ }),

/***/ "./src/music/sample.mp3":
/*!******************************!*\
  !*** ./src/music/sample.mp3 ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/audio/sample.mp3";

/***/ }),

/***/ "./src/music/目覚め.mp3":
/*!***************************!*\
  !*** ./src/music/目覚め.mp3 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/audio/目覚め.mp3";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./src/javascripts/music/music.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _music_sample_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../music/sample.mp3 */ "./src/music/sample.mp3");
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track */ "./src/javascripts/music/track.js");


document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.cards');
  if (!list) {
    console.error('.cards element not found');
    return;
  }
  const playerTitle = document.querySelector('.text-container h2');
  const playerArtist = document.querySelector('.text-container h3');
  const audioPlayer = document.getElementById('audio-player');
  const playerArtwork = document.querySelector('.player img');
  list.innerHTML = _track__WEBPACK_IMPORTED_MODULE_1__.trackList.map(_ref => {
    let {
      title,
      artist,
      url,
      artwork
    } = _ref;
    return "\n    <div class=\"card\" data-url=\"".concat(url, "\" data-title=\"").concat(title, "\" data-artist=\"").concat(artist, "\">\n      <img src=\"").concat(artwork || '', "\" alt=\"").concat(title, "\" class=\"card-artwork\" />\n      <h2>").concat(title, "</h2>\n      <p>").concat(artist, "</p>\n    </div>\n  ");
  }).join('');

  // カードクリックで .player を更新
  list.addEventListener('click', e => {
    const card = e.target.closest('.card');
    if (card) {
      const url = card.dataset.url;
      const title = card.dataset.title;
      const artist = card.dataset.artist;
      const artwork = card.querySelector('.card-artwork').src;
      playerTitle.textContent = title;
      playerArtist.textContent = artist;
      playerArtwork.src = artwork;
      audioPlayer.src = url;
      audioPlayer.load();
    }
  });

  // 既存のプレイヤーコントロール（play, pause, seek, volume）はそのまま
  (() => {
    const audio = document.getElementById('audio-player');
    if (!audio) return;
    const playBtn = document.getElementById('play-button');
    const pauseBtn = document.getElementById('pause-button');
    const seekBar = document.getElementById('seek-bar');
    const volumeBar = document.getElementById('volume-bar');
    if (!playBtn || !pauseBtn || !seekBar || !volumeBar) return;
    audio.src = _music_sample_mp3__WEBPACK_IMPORTED_MODULE_0__;
    audio.load();
    playBtn.addEventListener('click', () => audio.play());
    pauseBtn.addEventListener('click', () => audio.pause());
    audio.addEventListener('timeupdate', () => {
      if (!isFinite(audio.duration) || audio.duration === 0) return;
      seekBar.value = audio.currentTime / audio.duration * 100;
    });
    seekBar.addEventListener('input', () => {
      if (!isFinite(audio.duration) || audio.duration === 0) return;
      audio.currentTime = seekBar.value / 100 * audio.duration;
    });
    volumeBar.addEventListener('input', () => {
      audio.volume = volumeBar.value;
    });
  })();
});
})();

/******/ })()
;
//# sourceMappingURL=music.js.map