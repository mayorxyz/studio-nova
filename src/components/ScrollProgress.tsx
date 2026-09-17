import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      setProgress(totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-[64px] left-0 right-0 z-[999] h-[3px] bg-transparent">
      <div
        className="h-full bg-[var(--safety)] transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
