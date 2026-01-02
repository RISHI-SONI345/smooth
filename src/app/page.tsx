"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { config } from '@/app/config/smoodh-config';
import type { Variant } from '@/app/lib/types';
import Header from '@/components/smoodh/header';
import HeroContent from '@/components/smoodh/hero-content';
import Loader from '@/components/smoodh/loader';
import SocialIcons from '@/components/smoodh/social-icons';
import VariantNav from '@/components/smoodh/variant-nav';

export default function SmoodhHeroPage() {
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isSwitching, setIsSwitching] = useState(false);

  const currentVariant: Variant = useMemo(() => config.variants[currentVariantIndex], [currentVariantIndex]);
  
  useEffect(() => {
    document.documentElement.style.setProperty('--primary', currentVariant.themeColorHsl);
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.style.setProperty('--primary-foreground', `hsl(${currentVariant.themeColorHsl})`);
    } else {
       document.documentElement.style.setProperty('--primary-foreground', `hsl(var(--background))`);
    }
  }, [currentVariant]);

  const changeVariant = useCallback((newIndex: number) => {
    if (isSwitching) return;

    const totalVariants = config.variants.length;
    const nextIndex = (newIndex + totalVariants) % totalVariants;
    
    setIsSwitching(true);
    setCurrentVariantIndex(nextIndex);

    // Simulate loading for variant switch
    setTimeout(() => {
      setIsSwitching(false);
    }, 1000); 
  }, [isSwitching]);


  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = useCallback(() => {
    changeVariant(currentVariantIndex + 1);
  }, [currentVariantIndex, changeVariant]);

  const handlePrev = useCallback(() => {
    changeVariant(currentVariantIndex - 1);
  }, [currentVariantIndex, changeVariant]);

  const sequenceKey = useMemo(() => currentVariant.id, [currentVariant]);

  return (
    <>
      <Loader progress={100} isVisible={isInitialLoading || isSwitching} />
      <main className={`min-h-screen transition-opacity duration-1000 ${isInitialLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <div className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 w-full h-full -z-10">
            <Image
              key={sequenceKey}
              src={currentVariant.webpSequencePath}
              alt={`${currentVariant.name} product`}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30" />
          </div>
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 h-screen w-screen pointer-events-none">
            <div className="col-span-6 row-span-3 lg:col-span-3">
              <HeroContent key={sequenceKey} variant={currentVariant} isSwitching={isSwitching} />
            </div>
            <div className="hidden lg:block lg:col-span-1 lg:col-start-6 lg:row-span-3">
              <VariantNav
                currentIndex={currentVariantIndex}
                totalVariants={config.variants.length}
                onPrev={handlePrev}
                onNext={handleNext}
                isLoading={isSwitching}
              />
            </div>
          </div>
          <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-4 pointer-events-auto">
              <VariantNav
                currentIndex={currentVariantIndex}
                totalVariants={config.variants.length}
                onPrev={handlePrev}
                onNext={handleNext}
                isLoading={isSwitching}
                isMobile={true}
              />
            </div>
          </div>
          <SocialIcons />
        </div>
        {/* Removed the large spacer div as it's no longer needed for scroll animation */}
      </main>
    </>
  );
}
