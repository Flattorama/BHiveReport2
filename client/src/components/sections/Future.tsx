import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { strategicPillars } from '@/lib/data';
import { SectionWrapper, SectionHeadline, SectionSubheadline } from '@/components/ui/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Route, TrendingUp, Monitor, Target } from 'lucide-react';
import { Hexagon } from '@/components/ui/Hexagon';

const iconMap: Record<string, typeof Route> = {
  route: Route,
  'trending-up': TrendingUp,
  monitor: Monitor,
  target: Target,
};

function PillarCard({
  pillar,
  index,
  isVisible,
}: {
  pillar: typeof strategicPillars[0];
  index: number;
  isVisible: boolean;
}) {
  const Icon = iconMap[pillar.icon] || Target;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
    <Card
      className="hover-elevate group"
      data-testid={`card-pillar-${pillar.id}`}
    >
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">
          <Hexagon size="lg" color="gold" variant="ghost">
            <Icon className="w-8 h-8 text-bhive-gold" />
          </Hexagon>
        </div>
        <h4 className="font-headline text-2xl mb-3">{pillar.title.toUpperCase()}</h4>
        <p className="text-sm text-muted-foreground">{pillar.description}</p>
      </CardContent>
    </Card>
    </motion.div>
  );
}

function HexagonPath({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`absolute transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            left: `${10 + (i * 15) % 80}%`,
            top: `${20 + Math.sin(i) * 30}%`,
            transitionDelay: `${i * 100}ms`,
            transform: `scale(${0.5 + Math.random() * 0.5})`,
          }}
        >
          <svg width="40" height="46" viewBox="0 0 40 46">
            <path
              d="M20 0L40 11.5V34.5L20 46L0 34.5V11.5L20 0Z"
              fill="currentColor"
              className="text-bhive-gold"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export function Future() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <SectionWrapper id="future" className="bg-bhive-grey dark:bg-background">
      <HexagonPath isVisible={inView} />
      
      <SectionHeadline>BUILDING TOMORROW'S ECOSYSTEM</SectionHeadline>
      <SectionSubheadline>
        With a strong foundation built in 2025, BHive is positioned for continued 
        entrepreneurial success in Brampton and beyond.
      </SectionSubheadline>

      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {strategicPillars.map((pillar, index) => (
          <PillarCard key={pillar.id} pillar={pillar} index={index} isVisible={inView} />
        ))}
      </div>

      <div
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <blockquote className="text-xl md:text-2xl text-muted-foreground italic mb-8">
          "With a strong foundation built in 2025, BHive is positioned 
          for continued entrepreneurial success in Brampton and beyond."
        </blockquote>

        <a
          href="#footer"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center justify-center px-8 py-4 bg-bhive-orange text-white font-semibold text-lg uppercase tracking-wider hover:bg-bhive-orange/90 transition-colors rounded-none"
          data-testid="button-partner-cta"
        >
          Partner With Us
        </a>
      </div>
    </SectionWrapper>
  );
}
