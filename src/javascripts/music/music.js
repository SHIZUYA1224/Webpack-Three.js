import trackList from './tracksData';

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
  list.innerHTML = trackList.map(({ title, artist, url, artwork }) => `
    <div class="card" data-url="${url}" data-title="${title}" data-artist="${artist}">
      ${artwork ? `<img src="${artwork}" alt="${title}" class="card-artwork" />` : ''}
      <h2>${title}</h2>
      <p>${artist || ''}</p>
    </div>
  `).join('');

  // 初期選択（先頭）
  const first = trackList[0];
  if (first && audioPlayer) {
    if (playerTitle) playerTitle.textContent = first.title;
    if (playerArtist) playerArtist.textContent = first.artist || '';
    if (playerArtwork && first.artwork) playerArtwork.src = first.artwork;
    audioPlayer.src = first.url;
    audioPlayer.load();
  }

  // カードクリックでプレイヤー更新
  list.addEventListener('click', (e) => {
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
      seekBar.value = (audio.currentTime / audio.duration) * 100;
    });
    seekBar.addEventListener('input', () => {
      if (!isFinite(audio.duration) || audio.duration === 0) return;
      audio.currentTime = (seekBar.value / 100) * audio.duration;
    });
  }
  if (volumeBar) {
    volumeBar.addEventListener('input', () => {
      audio.volume = volumeBar.value;
    });
  }
})();
