import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { timelineEvents } from '@/lib/data';
import { SectionWrapper, SectionHeadline, SectionSubheadline } from '@/components/ui/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

function TimelineCard({
  event,
  index,
  isVisible,
}: {
  event: typeof timelineEvents[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`flex-shrink-0 w-72 md:w-80 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="relative pb-4">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4">
          {event.featured ? (
            <Star className="w-4 h-4 text-bhive-orange fill-bhive-orange" />
          ) : (
            <div className="w-3 h-3 rounded-full bg-bhive-gold border-2 border-background mx-auto" />
          )}
        </div>
        <div className="absolute left-0 right-0 top-1.5 h-[2px] bg-gradient-to-r from-transparent via-bhive-gold/30 to-transparent" />
      </div>

      <Card
        className={`hover-elevate ${event.featured ? 'border-bhive-orange/50 bg-bhive-orange/5' : ''}`}
        data-testid={`card-timeline-${event.id}`}
      >
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant={event.featured ? 'default' : 'secondary'} className={event.featured ? 'bg-bhive-orange' : ''}>
              <Calendar className="w-3 h-3 mr-1" />
              {event.month} {event.day}
            </Badge>
            {event.featured && <Star className="w-4 h-4 text-bhive-orange fill-bhive-orange" />}
          </div>
          
          <h4 className="font-semibold mb-2">{event.title}</h4>
          <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
          
          {event.attendees && (
            <p className="text-xs text-muted-foreground/70 italic">{event.attendees}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', checkScroll);
      return () => scrollEl.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const months = ['January', 'February', 'April', 'June', 'July', 'September', 'October', 'November'];
  const eventsByMonth = months.reduce((acc, month) => {
    acc[month] = timelineEvents.filter(e => e.month === month);
    return acc;
  }, {} as Record<string, typeof timelineEvents>);

  return (
    <SectionWrapper id="timeline" className="bg-bhive-grey dark:bg-background">
      <SectionHeadline>A YEAR OF MILESTONES</SectionHeadline>
      <SectionSubheadline>
        From high-profile delegation visits to major conferences and community events, 
        2025 marked a transformative year for BHive and the Brampton innovation ecosystem.
      </SectionSubheadline>

      <div ref={ref} className="relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4">
            {months.map((month) => (
              <Badge
                key={month}
                variant="outline"
                className="hidden md:flex text-xs"
              >
                {month.slice(0, 3).toUpperCase()}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="shrink-0"
              data-testid="button-timeline-left"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="shrink-0"
              data-testid="button-timeline-right"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {timelineEvents.map((event, index) => (
            <TimelineCard key={event.id} event={event} index={index} isVisible={inView} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-bhive-orange fill-bhive-orange" />
            <span>Featured Event</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-bhive-gold" />
            <span>Regular Event</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
