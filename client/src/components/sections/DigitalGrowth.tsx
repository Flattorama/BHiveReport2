import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { digitalGrowthMetrics, altitudePartnership, videoMetrics } from '@/lib/data';
import { SectionWrapper, SectionHeadline, SectionSubheadline } from '@/components/ui/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CountUp from 'react-countup';
import { TrendingUp, Instagram, Facebook, Users, Video, Eye, MessageCircle, ArrowRight } from 'lucide-react';

function GrowthMetricCard({
  label,
  value,
  suffix,
  index,
  isVisible,
  icon: Icon,
}: {
  label: string;
  value: number;
  suffix: string;
  index: number;
  isVisible: boolean;
  icon: typeof TrendingUp;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
    <Card
      className="hover-elevate"
      data-testid={`card-metric-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardContent className="p-6 text-center">
        <Icon className="w-8 h-8 mx-auto mb-3 text-bhive-gold" />
        <div className="font-headline text-4xl md:text-5xl text-bhive-gold mb-2">
          +{isVisible ? (
            <CountUp
              start={0}
              end={value}
              duration={2}
              delay={index * 0.1}
              decimals={value % 1 !== 0 ? 1 : 0}
            />
          ) : (
            '0'
          )}
          {suffix}
        </div>
        <p className="text-sm text-muted-foreground uppercase tracking-wider">{label}</p>
      </CardContent>
    </Card>
    </motion.div>
  );
}

function PartnershipFunnel({ isVisible }: { isVisible: boolean }) {
  const stages = [
    { label: 'Qualified Leads', value: altitudePartnership.leads, width: 100 },
    { label: 'Calls Booked', value: altitudePartnership.callsBooked, width: 50 },
    { label: 'Calls Completed', value: altitudePartnership.callsCompleted, width: 35 },
  ];

  return (
    <Card className="bg-bhive-gold/5 border-bhive-gold/20">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-bhive-gold text-bhive-black">PARTNERSHIP</Badge>
          <span className="font-semibold">Altitude Accelerator</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-6">CleanTech Partnership Success</p>

        <div className="space-y-4">
          {stages.map((stage, index) => (
            <div key={stage.label} className="flex items-center gap-4">
              <div
                className="h-12 bg-gradient-to-r from-bhive-gold to-bhive-yellow rounded-md flex items-center justify-center transition-all duration-1000"
                style={{
                  width: isVisible ? `${stage.width}%` : '0%',
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <span className="font-headline text-xl text-bhive-black">
                  {isVisible ? (
                    <CountUp start={0} end={stage.value} duration={1.5} delay={index * 0.2} />
                  ) : (
                    '0'
                  )}
                </span>
              </div>
              <span className="text-sm whitespace-nowrap">{stage.label}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-6 mt-6 pt-6 border-t">
          <div>
            <p className="text-2xl font-headline text-bhive-orange">{altitudePartnership.leadToCallRate}%</p>
            <p className="text-xs text-muted-foreground">Lead-to-Call</p>
          </div>
          <div>
            <p className="text-2xl font-headline text-bhive-orange">{altitudePartnership.callCompletionRate}%</p>
            <p className="text-xs text-muted-foreground">Call Completion</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function DigitalGrowth() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const iconMap: Record<string, typeof TrendingUp> = {
    social: TrendingUp,
    website: TrendingUp,
    instagram: Instagram,
    facebook: Facebook,
    newusers: Users,
  };

  return (
    <SectionWrapper id="digital" dark>
      <SectionHeadline dark>EXPLOSIVE DIGITAL REACH</SectionHeadline>
      <SectionSubheadline className="text-white/70">
        Our digital transformation in 2025 wasn't just about numbers—it was about 
        reaching the right founders at the right time. Four redesigned website pages. 
        Six mentor spotlight videos. Behind-the-scenes content that humanized our brand.
      </SectionSubheadline>

      <div ref={ref} className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {digitalGrowthMetrics.map((metric, index) => (
            <GrowthMetricCard
              key={metric.id}
              label={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              index={index}
              isVisible={inView}
              icon={iconMap[metric.id] || TrendingUp}
            />
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <PartnershipFunnel isVisible={inView} />

        <Card
          className={`bg-white/5 border-white/10 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Video className="w-5 h-5 text-bhive-gold" />
              <span className="font-semibold text-white">Video Content Performance</span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <Video className="w-6 h-6 mx-auto mb-2 text-bhive-gold" />
                <p className="font-headline text-2xl text-white">
                  {inView ? <CountUp start={0} end={videoMetrics.videos} duration={1} /> : '0'}
                </p>
                <p className="text-xs text-white/50">Mentor Videos</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <Eye className="w-6 h-6 mx-auto mb-2 text-bhive-yellow" />
                <p className="font-headline text-2xl text-white">
                  {inView ? <CountUp start={0} end={videoMetrics.impressions} duration={2} separator="," /> : '0'}
                </p>
                <p className="text-xs text-white/50">Impressions</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <MessageCircle className="w-6 h-6 mx-auto mb-2 text-bhive-orange" />
                <p className="font-headline text-2xl text-white">
                  {inView ? <CountUp start={0} end={videoMetrics.engagements} duration={2} separator="," /> : '0'}
                </p>
                <p className="text-xs text-white/50">Engagements</p>
              </div>
            </div>

            <p className="text-sm text-white/70">
              The result? A <span className="text-bhive-gold font-semibold">653% surge</span> in 
              social engagement and founder applications from markets we'd never reached before.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
