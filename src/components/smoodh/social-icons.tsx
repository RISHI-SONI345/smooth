"use client";

import { Button } from '@/components/ui/button';
import { Twitter, Instagram, Facebook } from 'lucide-react';

export default function SocialIcons() {
  const iconStyle = "h-5 w-5 text-white/60 hover:text-white transition-colors";

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 pointer-events-auto">
      <Button variant="ghost" size="icon" className="rounded-full">
        <Twitter className={iconStyle} />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full">
        <Instagram className={iconStyle} />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full">
        <Facebook className={iconStyle} />
      </Button>
    </div>
  );
}
