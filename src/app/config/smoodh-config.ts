import type { SmoodhConfig } from '@/app/lib/types';

export const appConfig: SmoodhConfig = {
  brand: "SMOODH",
  defaultMode: "dark",
  logoPath: "/assets/logo-smoodh.svg",
  navLinks: ["Product", "Ingredients", "Nutrition", "Reviews", "FAQ", "Contact"],
  variants: [
    {
      id: "01",
      name: "Chocolate",
      subtitle: "Flavoured Milk",
      description: "Creamy chocolate flavoured milk with rich cocoa taste and smooth texture.",
      themeColor: "#8B4513",
      themeColorHsl: "30 41% 40%",
      modeOverride: null,
      webpSequencePath: "https://vrtozamturhouzmlsrip.supabase.co/storage/v1/object/public/smooth%20choccco/hero-optimized.mp4",
      frameCount: 240
    },
    {
      id: "02",
      name: "Toffee Caramel",
      subtitle: "Flavoured Milk",
      description: "Smooth milk blended with sweet toffee and caramel notes.",
      themeColor: "#E6A23C",
      themeColorHsl: "37 79% 60%",
      modeOverride: null,
      webpSequencePath: "https://vrtozamturhouzmlsrip.supabase.co/storage/v1/object/public/smooth%20choccco/hero-optimized.mp4",
      frameCount: 240
    },
    {
      id: "03",
      name: "Coffee Frappe",
      subtitle: "Flavoured Milk",
      description: "Bold coffee flavour mixed with creamy milk for an energizing taste.", 
      themeColor: "#5C4033",
      themeColorHsl: "20 30% 28%",
      modeOverride: null,
      webpSequencePath: "https://vrtozamturhouzmlsrip.supabase.co/storage/v1/object/public/smooth%20choccco/hero-optimized.mp4",
      frameCount: 240
    },
    {
      id: "04",
      name: "Hazelnut Chocolate",
      subtitle: "Flavoured Milk",
      description: "Rich chocolate milk infused with roasted hazelnut flavour.",
      themeColor: "#2F1B0C",
      themeColorHsl: "29 58% 12%",
      modeOverride: null,
      webpSequencePath: "https://vrtozamturhouzmlsrip.supabase.co/storage/v1/object/public/smooth%20choccco/hero-optimized.mp4",
      frameCount: 240
    }
  ],
  hero: {
    frameSize: "full-screen",
    parallaxFramesPerScroll: "map scroll -> frame index",
    centerEmptyArea: true
  },
  cta: {
    left: { "label": "ADD TO", "style": "transparent-bg, white-text" },
    right: { "label": "CART", "style": "white-bg, black-text" }
  }
};
