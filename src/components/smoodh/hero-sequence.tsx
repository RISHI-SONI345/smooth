"use client";

import { useRef, useEffect, useState } from 'react';

interface HeroSequenceProps {
  sequencePath: string;
  frameCount: number;
  onLoadProgress: (progress: number) => void;
  onLoaded: () => void;
}

export default function HeroSequence({ sequencePath, frameCount, onLoadProgress, onLoaded }: HeroSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [useFallback, setUseFallback] = useState(false);
  const targetTimeRef = useRef(0);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Scroll-based video scrubbing with smoothing
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress over first 2 viewport heights
      const maxScroll = windowHeight * 2;
      const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
      
      setScrollProgress(progress);
      
      // Set target time based on scroll
      if (video.duration && !isNaN(video.duration)) {
        targetTimeRef.current = progress * video.duration;
      }
    };

    // Smooth animation loop
    const updateVideo = () => {
      if (video && !video.paused) video.pause(); // Ensure paused
      
      if (video && video.duration) {
        // LERP: Move current time towards target time
        // The 0.05 factor makes it "heavier" and smoother (less jittery)
        const diff = targetTimeRef.current - video.currentTime;
        
        // Only seek if the difference is noticeable (>0.05s) AND we aren't already seeking
        // This prevents "thrashing" the decoder which causes massive lag
        if (Math.abs(diff) > 0.05 && !video.seeking) {
           // We clamp the step to prevent huge jumps that stall the decoder
           const step = diff * 0.1;
           video.currentTime += step;
        }
      }
      
      animationFrameRef.current = requestAnimationFrame(updateVideo);
    };

    // Start loop
    animationFrameRef.current = requestAnimationFrame(updateVideo);
    
    // Prevent video from auto-playing
    video.pause();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Calculate parallax effects
  const parallaxScale = 1 + scrollProgress * 0.15;
  const parallaxY = scrollProgress * 30;
  const parallaxOpacity = 1 - scrollProgress * 0.2;

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full -z-10 overflow-hidden"
    >
      {/* Scroll-based Video (Hidden if error/fallback) */}
      <div 
        className={`absolute inset-0 w-full h-full transition-transform duration-100 ease-out ${useFallback ? 'hidden' : 'block'}`}
        style={{
          transform: `scale(${parallaxScale}) translateY(${parallaxY}px)`,
          opacity: parallaxOpacity,
        }}
      >
        <video
          ref={videoRef}
          src={sequencePath}
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
          loop={false}
          suppressHydrationWarning={true}
        />
      </div>

      {/* Fallback Image (Shown if video fails) */}
      {useFallback && (
        <div 
          className="absolute inset-0 w-full h-full transition-transform duration-100 ease-out"
          style={{
            transform: `scale(${parallaxScale}) translateY(${parallaxY}px)`,
            opacity: parallaxOpacity,
          }}
        >
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img
            src={sequencePath}
            alt="SMOODH Product Animation"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />
      
      {/* Scroll-responsive ambient gradient */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none transition-opacity duration-300"
        style={{ opacity: 0.5 + scrollProgress * 0.5 }}
      />
    </div>
  );
}
