export function initHeaderHideOnScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  // ヘッダー高さをCSS変数へ反映（可変対応）
  const setHeaderHeightVar = () => {
    const h = header.offsetHeight || 0;
    document.documentElement.style.setProperty('--header-height', `${h}px`);
  };
  setHeaderHeightVar();
  window.addEventListener('resize', setHeaderHeightVar, { passive: true });
  window.addEventListener('load', setHeaderHeightVar, { passive: true });
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(setHeaderHeightVar);
    ro.observe(header);
  }

  let last = window.scrollY;
  let ticking = false;
  const threshold = 4; // 小さな揺れを無視

  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    if (Math.abs(y - last) > threshold) {
      if (y > last && y > 0) {
        header.classList.add('is-hidden'); // 下スクロール: 隠す
      } else {
        header.classList.remove('is-hidden'); // 上スクロール: 表示
      }
      last = y;
    }
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );
}
