export interface Variant {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  themeColor: string;
  themeColorHsl: string;
  modeOverride: string | null;
  webpSequencePath: string;
  frameCount: number;
}

export interface CTA {
  left: {
    label: string;
    style: string;
  };
  right: {
    label: "CART";
    style: string;
  };
}

export interface SmoodhConfig {
  brand: string;
  defaultMode: 'dark' | 'light';
  logoPath: string;
  navLinks: string[];
  variants: Variant[];
  hero: {
    frameSize: string;
    parallaxFramesPerScroll: string;
    centerEmptyArea: boolean;
  };
  cta: CTA;
}
