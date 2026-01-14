import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { heroMetrics } from '@/lib/data';
import { CounterCard } from '@/components/ui/CounterCard';
import { HoneycombPattern } from '@/components/ui/Hexagon';
import { ChevronDown } from 'lucide-react';
import bhiveLogo from '@assets/BHive-Logo_(for_white_backgrounds)_1768411925378.png';

function FloatingHexagon({
  className,
  size,
  delay,
  opacity,
}: {
  className?: string;
  size: number;
  delay: number;
  opacity: number;
}) {
  return (
    <div
      className={`absolute animate-float ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${6 + Math.random() * 4}s`,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <path
          d="M50 5L95 27.5V72.5L50 95L5 72.5V27.5L50 5Z"
          fill={`rgba(246, 198, 20, ${opacity})`}
          stroke="rgba(246, 198, 20, 0.3)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToNext = () => {
    const nextSection = document.getElementById('challenge');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center bg-bhive-black overflow-hidden"
    >
      <HoneycombPattern className="opacity-[0.03]" />
      
      <FloatingHexagon className="top-[10%] left-[5%]" size={80} delay={0} opacity={0.15} />
      <FloatingHexagon className="top-[20%] right-[10%]" size={60} delay={1} opacity={0.1} />
      <FloatingHexagon className="top-[60%] left-[15%]" size={100} delay={2} opacity={0.08} />
      <FloatingHexagon className="top-[40%] right-[5%]" size={50} delay={0.5} opacity={0.12} />
      <FloatingHexagon className="bottom-[20%] right-[20%]" size={70} delay={1.5} opacity={0.1} />
      <FloatingHexagon className="bottom-[30%] left-[8%]" size={40} delay={2.5} opacity={0.15} />
      <FloatingHexagon className="top-[15%] left-[40%]" size={55} delay={3} opacity={0.08} />
      <FloatingHexagon className="bottom-[15%] left-[35%]" size={65} delay={1.2} opacity={0.1} />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={bhiveLogo}
            alt="BHive Logo"
            className="h-16 md:h-20 w-auto"
            data-testid="img-bhive-logo"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-headline text-5xl md:text-7xl lg:text-8xl text-white mb-4 tracking-wider"
          data-testid="text-hero-headline"
        >
          WHERE GLOBAL FOUNDERS
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-headline text-5xl md:text-7xl lg:text-8xl text-bhive-gold mb-6 tracking-wider"
          data-testid="text-hero-subheadline"
        >
          TAKE FLIGHT
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-xl md:text-2xl text-white/70 font-light mb-16"
          data-testid="text-hero-subhead"
        >
          2025 Annual Report — Resilience & Refinement
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 w-full"
        >
          {heroMetrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
            >
              <CounterCard
                value={metric.value}
                label={metric.label}
                duration={metric.duration}
                delay={index * 200}
                data-testid={`counter-${metric.id}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <button
        onClick={scrollToNext}
        className={`absolute bottom-12 flex flex-col items-center gap-2 text-white/60 hover:text-bhive-gold transition-all duration-500 cursor-pointer ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1200ms' }}
        data-testid="button-scroll-down"
      >
        <span className="text-sm uppercase tracking-widest">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
}
