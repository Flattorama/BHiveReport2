import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

export function ScrollProgress({ className }: { className?: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className={cn('fixed top-0 left-0 right-0 h-1 z-50 bg-muted', className)}>
      <div
        className="h-full bg-gradient-to-r from-bhive-gold via-bhive-yellow to-bhive-orange transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
