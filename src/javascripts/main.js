import './reactApp.jsx';
import '../stylesheets/main.scss';
// 音楽ページ専用のJS/CSSは該当ページでのみ読み込む
if (document.body.classList.contains('music-page')) {
  import('../stylesheets/music.scss');
  import('./music/music.js');
}
// modelingページ専用のJS/CSSは該当ページでのみ読み込む
if (document.body.classList.contains('modeling-page')) {
  import('../stylesheets/modeling.scss');
  import('./3dmodeling/3dmodeling.js');
}
// Three.jsは#canvasがあるページでのみ動的ロード
if (document.getElementById('canvas')) {
  import('./three/app.js');
}
import { initHeaderHideOnScroll } from './ui/header';

// ヘッダーの表示/非表示（モジュール化）
initHeaderHideOnScroll();

