"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { config } from '@/app/config/smoodh-config';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(config.defaultMode === 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    const currentPrimary = root.style.getPropertyValue('--primary');
    if (currentPrimary) {
        if (isDark) {
            root.style.setProperty('--primary-foreground', `hsl(${currentPrimary})`);
        } else {
            root.style.setProperty('--primary-foreground', `hsl(var(--background))`);
        }
    }
    
  }, [isDark]);

  return (
    <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)} className="rounded-full" aria-label="Toggle theme">
      {isDark ? (
        <Sun className="h-5 w-5 transition-all" />
      ) : (
        <Moon className="h-5 w-5 transition-all" />
      )}
    </Button>
  );
}
