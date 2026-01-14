import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { cohortData, programInnovations } from '@/lib/data';
import { SectionWrapper, SectionHeadline, SectionSubheadline } from '@/components/ui/SectionWrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Zap, Mic, Heart, GraduationCap, HeartPulse, Leaf, Brain, Cloud, TrendingUp, HandHeart, ShoppingBag } from 'lucide-react';
import CountUp from 'react-countup';

const iconMap: Record<string, typeof Users> = {
  users: Users,
  zap: Zap,
  mic: Mic,
  heart: Heart,
};

const industryIconMap: Record<string, typeof GraduationCap> = {
  'EdTech': GraduationCap,
  'HealthTech': HeartPulse,
  'CleanTech': Leaf,
  'AI': Brain,
  'SaaS': Cloud,
  'FinTech': TrendingUp,
  'Social Impact': HandHeart,
  'D2C': ShoppingBag,
};

function CohortChart({ cohort, isVisible }: { cohort: typeof cohortData.winter2025; isVisible: boolean }) {
  const maxCount = Math.max(...cohort.phases.map(p => p.count));
  const phaseColors = ['bg-bhive-gold', 'bg-bhive-yellow', 'bg-bhive-orange'];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center justify-center w-16 h-16 bg-bhive-gold rounded-md">
          <span className="font-headline text-3xl text-bhive-black">
            {isVisible ? (
              <CountUp start={0} end={cohort.total} duration={1.5} />
            ) : (
              '0'
            )}
          </span>
        </div>
        <div>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">Total Companies</p>
          <p className="font-headline text-2xl">{cohort.name}</p>
        </div>
      </div>

      {cohort.phases.map((phase, index) => (
        <div key={phase.phase} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">{phase.phase}</span>
            <span className="font-headline text-xl">
              {isVisible ? (
                <CountUp start={0} end={phase.count} duration={1} delay={index * 0.2} />
              ) : (
                '0'
              )}
            </span>
          </div>
          <div className="h-8 bg-muted rounded-md overflow-hidden">
            <div
              className={`h-full ${phaseColors[index]} transition-all duration-1000 flex items-center px-3`}
              style={{
                width: isVisible && maxCount > 0 ? `${(phase.count / maxCount) * 100}%` : '0%',
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {phase.count > 0 && phase.industries.length > 0 && (
                <div className="flex gap-1">
                  {phase.industries.slice(0, 2).map((industry) => {
                    const Icon = industryIconMap[industry] || Brain;
                    return (
                      <Icon key={industry} className="w-4 h-4 text-bhive-black/70" />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {phase.industries.map((industry) => (
              <Badge key={industry} variant="secondary" className="text-xs">
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Cohorts() {
  const [activeTab, setActiveTab] = useState('winter');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <SectionWrapper id="cohorts" className="bg-bhive-grey dark:bg-background">
      <SectionHeadline>THREE PHASES. ONE MISSION.</SectionHeadline>
      <SectionSubheadline>
        Our cohort-based approach guides founders through structured phases of growth, 
        from virtual onboarding to advanced acceleration and investor readiness.
      </SectionSubheadline>

      <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="winter" className="font-headline text-lg" data-testid="tab-winter">
                WINTER 2025
              </TabsTrigger>
              <TabsTrigger value="spring" className="font-headline text-lg" data-testid="tab-spring">
                SPRING 2025
              </TabsTrigger>
              <TabsTrigger value="fall" className="font-headline text-lg" data-testid="tab-fall">
                FALL 2025
              </TabsTrigger>
            </TabsList>

            <TabsContent value="winter">
              <CohortChart cohort={cohortData.winter2025} isVisible={inView && activeTab === 'winter'} />
            </TabsContent>
            <TabsContent value="spring">
              <CohortChart cohort={cohortData.spring2025} isVisible={inView && activeTab === 'spring'} />
            </TabsContent>
            <TabsContent value="fall">
              <CohortChart cohort={cohortData.fall2025} isVisible={inView && activeTab === 'fall'} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h3 className="font-headline text-2xl mb-6">PROGRAM INNOVATIONS</h3>
          
          {programInnovations.map((innovation, index) => {
            const Icon = iconMap[innovation.icon] || Heart;
            
            return (
              <Card
                key={innovation.id}
                className={`hover-elevate transition-all duration-500 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`card-innovation-${innovation.id}`}
              >
                <CardContent className="flex items-start gap-4 p-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-bhive-gold/10 rounded-md shrink-0">
                    <Icon className="w-6 h-6 text-bhive-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{innovation.title}</h4>
                    <p className="text-sm text-muted-foreground">{innovation.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
