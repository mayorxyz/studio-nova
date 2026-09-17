import { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
  duration: string;
}

export default function AudioPlayer({ audioUrl, title, duration }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setAudioDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const time = parseFloat(e.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = audioDuration ? (currentTime / audioDuration) * 100 : 0;

  return (
    <div className="bento-card bento-card--dark">
      <audio ref={audioRef} src={audioUrl} preload="metadata" />
      
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={togglePlay}
          className="w-16 h-16 bg-[var(--safety)] rounded-full flex items-center justify-center hover:scale-105 transition-transform flex-shrink-0"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          <span className="text-2xl text-[var(--ink)]">{isPlaying ? '⏸' : '▶'}</span>
        </button>
        <div className="flex-1 min-w-0">
          <div className="text-micro text-[var(--muted)] mb-1">Now Playing</div>
          <div className="text-h3 text-[var(--base)] truncate">{title}</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="relative w-full h-2 bg-[#333] rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-[var(--safety)] transition-all"
            style={{ width: `${progress}%` }}
          />
          <input
            type="range"
            min="0"
            max={audioDuration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            aria-label="Seek"
          />
        </div>
        <div className="flex justify-between text-micro text-[var(--muted)] mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{duration}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.currentTime = Math.max(0, currentTime - 15);
            }
          }}
          className="text-[var(--base)] hover:text-[var(--safety)] transition-colors text-2xl"
          aria-label="Rewind 15 seconds"
        >
          ⏪
        </button>
        <button
          onClick={togglePlay}
          className="w-12 h-12 bg-[var(--safety)] rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          <span className="text-xl text-[var(--ink)]">{isPlaying ? '⏸' : '▶'}</span>
        </button>
        <button
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.currentTime = Math.min(audioDuration, currentTime + 30);
            }
          }}
          className="text-[var(--base)] hover:text-[var(--safety)] transition-colors text-2xl"
          aria-label="Forward 30 seconds"
        >
          ⏩
        </button>
      </div>
    </div>
  );
}
