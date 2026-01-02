"use client";

import { useRef, useEffect, useCallback, useState } from 'react';

interface HeroSequenceProps {
  sequencePath: string;
  frameCount: number;
  onLoadProgress: (progress: number) => void;
  onLoaded: () => void;
}

export default function HeroSequence({ sequencePath, frameCount, onLoadProgress, onLoaded }: HeroSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef<number>(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const listener = () => setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const preloadImages = useCallback(() => {
    let loadedCount = 0;
    imagesRef.current = []; // Clear previous images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      // NOTE: As we don't have 240 distinct frames, we use the same image for all.
      // The logic is set up to handle a sequence of frames when available.
      img.src = sequencePath; 
      imagesRef.current.push(img);

      img.onload = () => {
        loadedCount++;
        const progress = Math.round((loadedCount / frameCount) * 100);
        onLoadProgress(progress);
        if (loadedCount === frameCount) {
          onLoaded();
          if (canvasRef.current && imagesRef.current[0]) {
             const context = canvasRef.current.getContext('2d');
             if (context) {
                canvasRef.current.width = imagesRef.current[0].width;
                canvasRef.current.height = imagesRef.current[0].height;
                context.drawImage(imagesRef.current[0], 0, 0);
             }
          }
        }
      };
      img.onerror = () => {
        // Handle image loading errors if necessary
        loadedCount++;
        if (loadedCount === frameCount) onLoaded();
      };
    }
  }, [frameCount, sequencePath, onLoadProgress, onLoaded]);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  const handleScroll = useCallback(() => {
    if(isReducedMotion) return;

    const scrollFraction = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const index = Math.min(
      frameCount - 1,
      Math.max(0, Math.floor(scrollFraction * frameCount))
    );

    if (index !== frameIndexRef.current) {
      frameIndexRef.current = index;
      requestAnimationFrame(drawFrame);
    }
  }, [frameCount, isReducedMotion]);

  const drawFrame = () => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesRef.current[frameIndexRef.current]) return;

    const context = canvas.getContext('2d');
    if (!context) return;
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imagesRef.current[frameIndexRef.current], 0, 0, canvas.width, canvas.height);
  };
  
  useEffect(() => {
    if (isReducedMotion) {
      if (imagesRef.current.length > 0) {
        frameIndexRef.current = 0;
        drawFrame();
      }
      return;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, isReducedMotion]);

  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <canvas ref={canvasRef} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30" />
    </div>
  );
}
