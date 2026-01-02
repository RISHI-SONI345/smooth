"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { appConfig as config } from '@/app/config/smoodh-config';
import type { Variant } from '@/app/lib/types';
import Header from '@/components/smoodh/header';
import HeroSequence from '@/components/smoodh/hero-sequence';
import HeroContent from '@/components/smoodh/hero-content';
import Loader from '@/components/smoodh/loader';
import SocialIcons from '@/components/smoodh/social-icons';
import VariantNav from '@/components/smoodh/variant-nav';
import ProductSection from '@/components/smoodh/product-section';
import IngredientsSection from '@/components/smoodh/ingredients-section';
import NutritionSection from '@/components/smoodh/nutrition-section';
import ReviewsSection from '@/components/smoodh/reviews-section';
import FAQSection from '@/components/smoodh/faq-section';
import Footer from '@/components/smoodh/footer';

export default function SmoodhHeroPage() {
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isSwitching, setIsSwitching] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isSequenceLoaded, setIsSequenceLoaded] = useState(false);

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
    // Fake progress animation
    const progressInterval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 90) return prev; // Hold at 90% until video is ready
        return prev + 10;
      });
    }, 200);

    // Safety fallback: If video takes too long (>5s), force load
    const safetyTimer = setTimeout(() => {
      if (isInitialLoading) {
        console.warn('Loading timed out, forcing display');
        setLoadProgress(100);
        setIsInitialLoading(false);
      }
    }, 5000);
    
    // Wait for sequence to load
    if (isSequenceLoaded) {
      setLoadProgress(100);
      const timer = setTimeout(() => {
        setIsInitialLoading(false);
      }, 500); 
      
      return () => {
        clearInterval(progressInterval);
        clearTimeout(timer);
        clearTimeout(safetyTimer);
      };
    }
    
    return () => {
      clearInterval(progressInterval);
      clearTimeout(safetyTimer);
    };
  }, [isInitialLoading, isSequenceLoaded]);

  const handleNext = useCallback(() => {
    changeVariant(currentVariantIndex + 1);
  }, [currentVariantIndex, changeVariant]);

  const handlePrev = useCallback(() => {
    changeVariant(currentVariantIndex - 1);
  }, [currentVariantIndex, changeVariant]);

  const sequenceKey = useMemo(() => currentVariant.id, [currentVariant]);

  return (
    <>
      <Loader progress={loadProgress} isVisible={isInitialLoading || isSwitching} />
      <main className={`transition-opacity duration-1000 ${isInitialLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        
        {/* Sticky Hero Container for Scrollytelling */}
        <div className="relative h-[300vh]">
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <HeroSequence
              key={sequenceKey}
              sequencePath={currentVariant.webpSequencePath}
              frameCount={currentVariant.frameCount}
              onLoadProgress={setLoadProgress}
              onLoaded={() => setIsSequenceLoaded(true)}
            />
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
        </div>
        
        {/* New Sections */}
        <ProductSection />
        <IngredientsSection />
        <NutritionSection />
        <ReviewsSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
