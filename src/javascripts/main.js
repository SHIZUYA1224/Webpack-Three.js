import './reactApp.jsx';
import '../stylesheets/main.scss';
import './three/app.js';

// ヘッダーの表示/非表示
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // 下スクロール: 隠す
    header.style.transform = 'translateY(-100%)';
  } else {
    // 上スクロール: 表示
    header.style.transform = 'translateY(0)';
  }
  lastScrollTop = scrollTop;
});
