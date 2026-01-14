import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { funnelStages } from '@/lib/data';
import { SectionWrapper, SectionHeadline, SectionSubheadline } from '@/components/ui/SectionWrapper';
import CountUp from 'react-countup';
import { Scissors } from 'lucide-react';

function FunnelStage({
  stage,
  value,
  percentage,
  index,
  isVisible,
  isIRCCCut,
}: {
  stage: string;
  value: number;
  percentage: number;
  index: number;
  isVisible: boolean;
  isIRCCCut: boolean;
}) {
  const widthPercent = Math.max(15, percentage);
  
  const colors = [
    'from-bhive-gold to-bhive-gold',
    'from-bhive-gold to-bhive-yellow',
    'from-bhive-yellow to-bhive-yellow',
    'from-bhive-yellow to-bhive-orange',
    'from-bhive-orange to-bhive-orange',
  ];

  return (
    <motion.div
      className="relative mb-4"
      initial={{ opacity: 0, x: -30 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      data-testid={`funnel-stage-${index}`}
    >
      {isIRCCCut && (
        <div
          className={`absolute -top-4 left-0 right-0 flex items-center justify-center gap-2 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: `${index * 150 + 300}ms` }}
        >
          <div className="flex-1 h-[2px] bg-red-500/50 border-t border-dashed border-red-500" />
          <div className="flex items-center gap-1 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-md">
            <Scissors className="w-4 h-4 text-red-500" />
            <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">IRCC Cap</span>
          </div>
          <div className="flex-1 h-[2px] bg-red-500/50 border-t border-dashed border-red-500" />
        </div>
      )}
      
      <div className="relative flex items-center">
        <motion.div
          className={`relative h-16 md:h-20 bg-gradient-to-r ${colors[index]} rounded-md flex items-center overflow-hidden`}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${widthPercent}%` } : {}}
          transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
        >
          <span className="absolute left-4 font-headline text-2xl md:text-3xl text-bhive-black">
            {isVisible ? (
              <CountUp
                start={0}
                end={value}
                duration={1.5}
                delay={index * 0.15 + 0.3}
                separator=","
              />
            ) : (
              '0'
            )}
          </span>
        </motion.div>
        <span className="ml-4 text-sm md:text-base font-medium text-muted-foreground whitespace-nowrap">
          {stage}
        </span>
      </div>
    </motion.div>
  );
}

export function Challenge() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <SectionWrapper id="challenge" className="bg-bhive-grey dark:bg-background">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <SectionHeadline>REFINING THE INTAKE</SectionHeadline>
          <SectionSubheadline>
            In April 2024, Immigration, Refugees, and Citizenship Canada introduced 
            a cap limiting each Designated Organization to just 10 Letters of Support 
            per year. This regulatory shift transformed how we approach founder selection.
          </SectionSubheadline>
          
          <p className="text-lg text-foreground mb-8">
            Rather than scaling volume, we doubled down on quality. Every founder 
            who enters BHive now represents the highest potential for outsized impact.
          </p>
          
          <blockquote className="relative pl-6 border-l-4 border-bhive-gold">
            <p className="text-xl md:text-2xl font-semibold italic text-foreground">
              "Prioritizing execution capacity and long-term growth potential."
            </p>
          </blockquote>
        </div>

        <div ref={ref} className="py-8">
          <h3 className="font-headline text-2xl md:text-3xl mb-8 text-bhive-black dark:text-white">
            THE SELECTION FUNNEL
          </h3>
          
          {funnelStages.map((stage, index) => (
            <FunnelStage
              key={stage.stage}
              stage={stage.stage}
              value={stage.value}
              percentage={stage.percentage}
              index={index}
              isVisible={inView}
              isIRCCCut={index === 3}
            />
          ))}

          <div
            className={`mt-8 p-4 bg-bhive-orange/10 border border-bhive-orange/30 rounded-md transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-bhive-orange">Conversion Rate:</span>{' '}
              From 5,781 leads to 14 committed businesses — a highly selective 0.24% acceptance rate
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
