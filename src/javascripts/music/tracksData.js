// src/music 配下の音源を自動収集し、カード表示用のメタデータを生成
// 画像は暫定で共通のサムネ（必要なら各曲ごとに用意）
import defaultArtwork from '@/images/sample-artwork.jpg';

const ctx = require.context('../../music', false, /\.(mp3|wav|ogg|m4a)$/i);

function decodeName(name) {
  try { return decodeURIComponent(name); } catch (_) { return name; }
}

const tracks = ctx.keys().map((key) => {
  const url = ctx(key);
  const filename = key.replace(/^\.\//, '');
  const title = decodeName(filename.replace(/\.(mp3|wav|ogg|m4a)$/i, ''));
  return {
    id: title,
    title,
    artist: '',
    url,
    artwork: defaultArtwork,
  };
});

export default tracks;
export const trackList = tracks;
