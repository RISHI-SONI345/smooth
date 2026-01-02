"use client";

import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';

interface VariantNavProps {
  currentIndex: number;
  totalVariants: number;
  onPrev: () => void;
  onNext: () => void;
  isLoading: boolean;
  isMobile?: boolean;
}

export default function VariantNav({ currentIndex, totalVariants, onPrev, onNext, isLoading, isMobile = false }: VariantNavProps) {
  const controlClasses = "text-white/60 hover:text-white transition-colors font-bold tracking-widest text-xs uppercase flex items-center gap-2 disabled:text-white/30 disabled:cursor-not-allowed";

  if (isMobile) {
    return (
       <div className="flex items-center justify-center gap-4 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 p-1">
        <Button onClick={onPrev} disabled={isLoading} variant="ghost" size="icon" className="rounded-full text-white/80 hover:text-white">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="font-mono text-white text-lg">
          {String(currentIndex + 1).padStart(2, '0')}
        </div>
        <Button onClick={onNext} disabled={isLoading} variant="ghost" size="icon" className="rounded-full text-white/80 hover:text-white">
           <ArrowRight className="h-4 w-4" />
        </Button>
       </div>
    );
  }

  return (
    <div className="relative z-10 flex h-full items-center justify-center pointer-events-auto text-white">
      <div className="flex items-center gap-6">
        <div className="text-8xl font-black tracking-tighter" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
          {String(currentIndex + 1).padStart(2, '0')}
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <button onClick={onPrev} disabled={isLoading} className={controlClasses}>
            <ArrowUp className="h-4 w-4" />
            <span>Prev</span>
          </button>
          
          <div className="h-24 w-px bg-white/30 relative">
             {isLoading && <Loader2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 animate-spin" />}
          </div>
          
          <button onClick={onNext} disabled={isLoading} className={controlClasses}>
            <span>Next</span>
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
