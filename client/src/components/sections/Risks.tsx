import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { challenges } from '@/lib/data';
import { SectionWrapper, SectionHeadline, SectionSubheadline } from '@/components/ui/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Globe, FileText, DollarSign, ArrowRight, CheckCircle } from 'lucide-react';

const iconMap: Record<string, typeof AlertTriangle> = {
  'alert-triangle': AlertTriangle,
  'globe': Globe,
  'file-text': FileText,
  'dollar-sign': DollarSign,
};

function ChallengeCard({
  challenge,
  index,
  isVisible,
}: {
  challenge: typeof challenges[0];
  index: number;
  isVisible: boolean;
}) {
  const Icon = iconMap[challenge.icon] || AlertTriangle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -10 }}
      animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
    <Card
      className="hover-elevate overflow-hidden"
      data-testid={`card-challenge-${challenge.id}`}
    >
      <CardContent className="p-0">
        <div className="p-6 border-b bg-destructive/5">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-destructive/10 rounded-lg">
              <Icon className="w-6 h-6 text-destructive" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-3">{challenge.title}</h4>
              <ul className="space-y-1">
                {challenge.details.map((detail, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-destructive">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 bg-bhive-gold/5">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-bhive-gold/20 rounded-full">
              <CheckCircle className="w-4 h-4 text-bhive-gold" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Response</p>
              <p className="text-sm font-medium">{challenge.response}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    </motion.div>
  );
}

export function Risks() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <SectionWrapper id="risks" dark>
      <SectionHeadline dark>NAVIGATING CHALLENGES</SectionHeadline>
      <SectionSubheadline className="text-white/70">
        2025 brought significant external challenges that tested our adaptability. 
        Each obstacle became an opportunity to strengthen our approach and diversify our strategies.
      </SectionSubheadline>

      <div ref={ref} className="grid md:grid-cols-2 gap-6">
        {challenges.map((challenge, index) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            index={index}
            isVisible={inView}
          />
        ))}
      </div>

      <div
        className={`mt-12 p-6 bg-white/5 border border-white/10 rounded-lg text-center transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <p className="text-lg text-white/90 mb-2">
          Despite these challenges, BHive maintained its commitment to
        </p>
        <p className="font-headline text-3xl text-bhive-gold">
          QUALITY OVER QUANTITY
        </p>
      </div>
    </SectionWrapper>
  );
}
