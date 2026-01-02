"use client";

import Image from 'next/image';
import { config } from '@/app/config/smoodh-config';
import { Progress } from '@/components/ui/progress';

interface LoaderProps {
  progress: number;
  isVisible: boolean;
}

export default function Loader({ progress, isVisible }: LoaderProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500">
      <div className="w-64 flex flex-col items-center gap-4">
        <Image src={config.logoPath} alt={`${config.brand} Logo`} width={150} height={30} className="text-foreground" />
        <div className="w-full">
          <Progress value={progress} className="h-2"/>
          <p className="text-center text-sm text-muted-foreground mt-2">{progress}%</p>
        </div>
      </div>
    </div>
  );
}
