import type { SmoodhConfig } from '@/app/lib/types';

export const config: SmoodhConfig = {
  brand: "SMOODH",
  defaultMode: "dark",
  logoPath: "/assets/logo-smoodh.svg",
  navLinks: ["Product", "Ingredients", "Nutrition", "Reviews", "FAQ", "Contact"],
  variants: [
    {
      id: "01",
      name: "Chocolate",
      subtitle: "Flavoured Milk",
      description: "Creamy chocolate milk with rich cocoa notes and a luxuriously smooth mouthfeel.",
      themeColor: "#8B4513",
      themeColorHsl: "30 41% 40%",
      modeOverride: null,
      webpSequencePath: "https://vrtozamturhouzmlsrip.supabase.co/storage/v1/object/public/smooth%20choclate/Nanobanana__midspin_1080p_202601021152-ezgif.com-video-to-webp-converter.webp",
      frameCount: 240
    },
    {
      id: "02",
      name: "Toffee Caramel",
      subtitle: "Flavoured Milk",
      description: "Velvety toffee and luscious caramel swirled together with a decadent, buttery finish.",
      themeColor: "#E6A23C",
      themeColorHsl: "37 79% 60%",
      modeOverride: null,
      webpSequencePath: "https://vrtozamturhouzmlsrip.supabase.co/storage/v1/object/public/smooth%20choclate/Nanobanana__midspin_1080p_202601021152-ezgif.com-video-to-webp-converter.webp",
      frameCount: 240
    },
    {
      id: "03",
      name: "Coffee Frappe",
      subtitle: "Flavoured Milk",
      description: "Bold, aromatic coffee notes expertly blended into a creamy, chilled milk base.",
      themeColor: "#5C4033",
      themeColorHsl: "20 30% 28%",
      modeOverride: null,
      webpSequencePath: "https://vrtozamturhouzmlsrip.supabase.co/storage/v1/object/public/smooth%20choclate/Nanobanana__midspin_1080p_202601021152-ezgif.com-video-to-webp-converter.webp",
      frameCount: 240
    },
    {
      id: "04",
      name: "Hazelnut Chocolate",
      subtitle: "Flavoured Milk",
      description: "Toasted, nutty hazelnut meets rich dark chocolate for an unforgettable, decadent sip.",
      themeColor: "#2F1B0C",
      themeColorHsl: "29 58% 12%",
      modeOverride: null,
      webpSequencePath: "https://vrtozamturhouzmlsrip.supabase.co/storage/v1/object/public/smooth%20choclate/Nanobanana__midspin_1080p_202601021152-ezgif.com-video-to-webp-converter.webp",
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
