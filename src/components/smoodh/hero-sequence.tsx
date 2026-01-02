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

  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesRef.current[frameIndexRef.current]) return;

    const context = canvas.getContext('2d');
    if (!context) return;
    
    // Ensure canvas is sized correctly
    if (canvas.width !== imagesRef.current[0].naturalWidth || canvas.height !== imagesRef.current[0].naturalHeight) {
      canvas.width = imagesRef.current[0].naturalWidth;
      canvas.height = imagesRef.current[0].naturalHeight;
    }
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imagesRef.current[frameIndexRef.current], 0, 0, canvas.width, canvas.height);
  }, []);

  const preloadImages = useCallback(() => {
    // This logic is flawed for a single animated WebP. We will bypass it.
    // For a real frame sequence, this would need to load each frame.
    const img = new Image();
    img.src = sequencePath;
    img.onload = () => {
        onLoadProgress(100);
        onLoaded();
        imagesRef.current = [img]; // Store the single image
        frameIndexRef.current = 0;
        requestAnimationFrame(drawFrame); // Draw the first frame
    };
    img.onerror = () => {
        onLoadProgress(100);
        onLoaded();
    };
  }, [sequencePath, onLoadProgress, onLoaded, drawFrame]);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);
  
  // The scroll handler is removed because we are not animating on scroll with a single WebP.
  // The animation is contained within the WebP file itself.

  useEffect(() => {
    if (imagesRef.current.length > 0) {
      frameIndexRef.current = 0;
      requestAnimationFrame(drawFrame);
    }
  }, [isReducedMotion, drawFrame]);

  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <canvas ref={canvasRef} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30" />
    </div>
  );
}
