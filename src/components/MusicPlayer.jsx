import SoundOnIcon from '../assets/icons/SoundOnIcon';
import SoundOffIcon from '../assets/icons/SoundOffIcon';

export default function MusicPlayer({ isPlaying, togglePlayPause }) {
  return (
    <button
      onClick={togglePlayPause}
      className="fixed bottom-5 right-5 z-50 w-12 h-12 bg-burgundy/80 text-cream rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm hover:scale-110 transition-transform duration-200"
      aria-label="Controlar música"
    >
      {isPlaying ? (
        <SoundOnIcon className="w-6 h-6" />
      ) : (
        <SoundOffIcon className="w-6 h-6" />
      )}
    </button>
  );
}