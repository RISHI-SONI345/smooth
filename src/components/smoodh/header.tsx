"use client";

import Link from 'next/link';
import Image from 'next/image';
import { appConfig as config } from '@/app/config/smoodh-config';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/smoodh/theme-toggle';
import { Code } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-auto">
      <div className="container mx-auto flex justify-between items-center bg-background/30 backdrop-blur-sm p-2 rounded-full border border-white/10 shadow-md">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src={config.logoPath} 
            alt={`${config.brand} Logo`} 
            width={100} 
            height={20} 
            className="text-foreground w-auto h-auto" 
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {config.navLinks.map((link) => (
            <Button key={link} variant="ghost" className="rounded-full">
              {link}
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
           <Link href="/generate-frames" passHref>
             <Button variant="ghost" size="icon" className="rounded-full" aria-label="Generate Frames Tool">
               <Code className="h-4 w-4" />
             </Button>
           </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
