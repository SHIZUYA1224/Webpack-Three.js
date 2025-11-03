import trackUrl from '../../sample.mp3';

(() => {
  const audio = document.getElementById('audio-player');
  if (!audio) return; // 音楽ページ以外では何もしない

  // Pug側のIDに合わせる
  const playBtn = document.getElementById('play-button');
  const pauseBtn = document.getElementById('pause-button');
  const seekBar = document.getElementById('seek-bar');
  const volumeBar = document.getElementById('volume-bar');
  if (!playBtn || !pauseBtn || !seekBar || !volumeBar) return;

  // 音源URLをWebpack経由で設定
  audio.src = trackUrl;
  audio.load();

  playBtn.addEventListener('click', () => audio.play());
  pauseBtn.addEventListener('click', () => audio.pause());

  audio.addEventListener('timeupdate', () => {
    if (!isFinite(audio.duration) || audio.duration === 0) return;
    seekBar.value = (audio.currentTime / audio.duration) * 100;
  });

  seekBar.addEventListener('input', () => {
    if (!isFinite(audio.duration) || audio.duration === 0) return;
    audio.currentTime = (seekBar.value / 100) * audio.duration;
  });

  volumeBar.addEventListener('input', () => {
    audio.volume = volumeBar.value;
  });
})();
