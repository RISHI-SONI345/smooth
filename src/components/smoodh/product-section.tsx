"use client";

import Image from 'next/image';

export default function ProductSection() {
  return (
    <section id="product" className="min-h-screen bg-background py-24 px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
              About SMOODH
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              SMOODH is more than just flavoured milk—it's an experience. We craft rich, 
              indulgent milk-based drinks that deliver bold flavours and creamy satisfaction 
              in every sip.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Using premium ingredients and expert blending techniques, each SMOODH variant 
              is designed to elevate your daily refreshment. From the classic indulgence of 
              Chocolate to the sophisticated notes of Hazelnut, we bring you flavours that 
              delight and energize.
            </p>
            <div className="pt-4">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground mt-1">Flavours</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground mt-1">Premium</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">Fresh</div>
                  <div className="text-sm text-muted-foreground mt-1">Daily</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://vrtozamturhouzmlsrip.supabase.co/storage/v1/object/public/smooth%20choclate/Nanobanana__midspin_1080p_202601021152-ezgif.com-video-to-webp-converter.webp"
              alt="SMOODH Chocolate Product"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
