import sampleUrl from '../../music/sample.mp3';
import mezameUrl from '../../music/目覚め.mp3';
import sampleArtwork from '../../images/sample-artwork.jpg';
//import mezameArtwork from '../../images/mezame-artwork.jpg';

export const tracks = {
  'sample.mp3': {
    url: sampleUrl,
    title: 'Sample Song',
    artist: 'Sample Artist',
    artwork: sampleArtwork
  },
  '目覚め.mp3': {
    url: mezameUrl,
    title: '目覚め',
    artist: 'SHIZU',
    artwork: sampleArtwork
  },
};

export const trackList = Object.values(tracks);
export default trackList;