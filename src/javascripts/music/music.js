import sampleUrl from '../../music/sample.mp3';
import { trackList } from './track';

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

  list.innerHTML = trackList.map(({ title, artist, url, artwork }) => `
    <div class="card" data-url="${url}" data-title="${title}" data-artist="${artist}">
      <img src="${artwork || ''}" alt="${title}" class="card-artwork" />
      <h2>${title}</h2>
      <p>${artist}</p>
    </div>
  `).join('');

  // カードクリックで .player を更新
  list.addEventListener('click', (e) => {
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

    audio.src = sampleUrl;
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
});
