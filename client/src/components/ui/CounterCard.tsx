import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { cn } from "@/lib/utils";
import { Hexagon } from './Hexagon';

interface CounterCardProps {
  value: number;
  label: string;
  duration?: number;
  delay?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function CounterCard({
  value,
  label,
  duration = 2.5,
  delay = 0,
  className,
  prefix = '',
  suffix = '',
}: CounterCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col items-center gap-3 p-6 transition-all duration-700',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Hexagon size="lg" color="gold" variant="ghost" animate={inView}>
        <span className="font-headline text-3xl md:text-4xl text-bhive-gold">
          {inView ? (
            <CountUp
              start={0}
              end={value}
              duration={duration}
              delay={delay / 1000}
              separator=","
              prefix={prefix}
              suffix={suffix}
              decimals={value % 1 !== 0 ? 1 : 0}
            />
          ) : (
            '0'
          )}
        </span>
      </Hexagon>
      <span className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider text-center">
        {label}
      </span>
    </div>
  );
}
