"use client";

import Image from 'next/image';
import { appConfig as config } from '@/app/config/smoodh-config';
import { Progress } from '@/components/ui/progress';

interface LoaderProps {
  progress: number;
  isVisible: boolean;
}

export default function Loader({ progress, isVisible }: LoaderProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-300">
      <div className="w-64 flex flex-col items-center gap-6">
        {/* Brand Logo */}
        <Image 
          src={config.logoPath} 
          alt={`${config.brand} Logo`} 
          width={150} 
          height={30} 
          className="text-foreground animate-pulse" 
          priority
        />
        
        {/* Loading Bar Container */}
        <div className="w-full flex flex-col gap-2">
          <Progress value={progress} className="h-2 w-full" />
          
           {/* Percentage Text */}
          <div className="flex justify-between w-full text-xs font-medium text-muted-foreground uppercase tracking-widest">
            <span>Loading Experience</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
