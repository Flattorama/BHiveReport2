import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Challenge } from '@/components/sections/Challenge';
import { GlobalMap } from '@/components/sections/GlobalMap';
import { Cohorts } from '@/components/sections/Cohorts';
import { DigitalGrowth } from '@/components/sections/DigitalGrowth';
import { Timeline } from '@/components/sections/Timeline';
import { Risks } from '@/components/sections/Risks';
import { Future } from '@/components/sections/Future';
import { Footer } from '@/components/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useLayoutEffect(() => {
    if (!mainRef.current) return;

    const ctx = gsap.context(() => {
      const sections = mainRef.current?.querySelectorAll('section[id]');
      
      if (sections) {
        sections.forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0.9, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 90%',
                end: 'top 60%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      <ScrollProgress />
      <Navigation />
      
      <main ref={mainRef} data-testid="main-content">
        <Hero />
        <Challenge />
        <GlobalMap />
        <Cohorts />
        <DigitalGrowth />
        <Timeline />
        <Risks />
        <Future />
        <Footer />
      </main>
    </div>
  );
}
