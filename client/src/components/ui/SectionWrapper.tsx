import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";
import { HoneycombPattern } from './Hexagon';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  showPattern?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  dark = false,
  showPattern = true,
}: SectionWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      ref={ref}
      data-testid={`section-${id}`}
      className={cn(
        'relative min-h-screen py-20 md:py-32 overflow-hidden',
        dark ? 'bg-bhive-black text-white' : 'bg-background text-foreground',
        className
      )}
    >
      {showPattern && <HoneycombPattern className={dark ? 'opacity-[0.03]' : 'opacity-[0.05]'} />}
      <div
        className={cn(
          'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000',
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeadline({
  children,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <h2
      className={cn(
        'font-headline text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6',
        dark ? 'text-bhive-gold' : 'text-bhive-black dark:text-bhive-gold',
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionSubheadline({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-lg md:text-xl text-muted-foreground max-w-3xl mb-12', className)}>
      {children}
    </p>
  );
}
