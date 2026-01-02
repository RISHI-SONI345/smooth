"use client";

import type { Variant, CTA } from '@/app/lib/types';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus } from 'lucide-react';
import { config } from '@/app/config/smoodh-config';

interface HeroContentProps {
  variant: Variant;
  isSwitching: boolean;
}

export default function HeroContent({ variant, isSwitching }: HeroContentProps) {
  const ctaConfig = config.cta;

  return (
    <div className="relative z-10 flex h-full items-center justify-center lg:justify-start pointer-events-auto p-8 md:p-12 lg:p-24 text-center lg:text-left">
      <div 
        className={`flex flex-col items-center lg:items-start gap-4 md:gap-6 max-w-lg transition-opacity duration-500 ${isSwitching ? 'opacity-0' : 'opacity-100'}`}
        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
      >
        <h1 className="font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white">
          {variant.name}
        </h1>
        <p className="font-bold text-lg md:text-xl text-white/90">{variant.subtitle}</p>
        <p className="text-base md:text-lg text-white/80 max-w-md">
          {variant.description}
        </p>
        <div className="flex items-stretch gap-3 pt-4">
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black h-14 rounded-full px-8 text-lg font-bold"
          >
            <Plus className="-ml-1 mr-2 h-5 w-5"/>
            {ctaConfig.left.label}
          </Button>
          <Button
            variant="default"
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-full px-8 text-lg font-bold"
          >
            <ShoppingCart className="-ml-1 mr-2 h-5 w-5" />
            {ctaConfig.right.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
