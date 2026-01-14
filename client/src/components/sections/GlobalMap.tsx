import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { delegations, bramptonCoords } from '@/lib/data';
import { SectionWrapper, SectionHeadline, SectionSubheadline } from '@/components/ui/SectionWrapper';
import { MapPin, Globe, Calendar, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function WorldMapSVG({ activeCountry, onCountryClick }: {
  activeCountry: string | null;
  onCountryClick: (id: string) => void;
}) {
  return (
    <div className="relative w-full aspect-[2/1] bg-bhive-black/5 dark:bg-white/5 rounded-lg overflow-hidden">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full"
        style={{ background: 'transparent' }}
      >
        <defs>
          <radialGradient id="bramptonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f6c614" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f6c614" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="500" cy="250" rx="480" ry="230" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        <ellipse cx="500" cy="250" rx="350" ry="170" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        <ellipse cx="500" cy="250" rx="200" ry="100" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />

        {delegations.map((delegation) => {
          const x = ((delegation.lng + 180) / 360) * 1000;
          const y = ((90 - delegation.lat) / 180) * 500;
          const bramptonX = ((bramptonCoords.lng + 180) / 360) * 1000;
          const bramptonY = ((90 - bramptonCoords.lat) / 180) * 500;
          const isActive = activeCountry === delegation.id;

          return (
            <g key={delegation.id}>
              <path
                d={`M ${x} ${y} Q ${(x + bramptonX) / 2} ${Math.min(y, bramptonY) - 50} ${bramptonX} ${bramptonY}`}
                fill="none"
                stroke={isActive ? '#ff9100' : '#f6c614'}
                strokeWidth={isActive ? 2 : 1}
                strokeOpacity={isActive ? 0.8 : 0.3}
                strokeDasharray="5,5"
                className="transition-all duration-300"
              />

              <g
                className="cursor-pointer transition-transform hover:scale-110"
                onClick={() => onCountryClick(delegation.id)}
                data-testid={`hotspot-${delegation.id}`}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={isActive ? 12 : 8}
                  fill={delegation.featured ? '#ff9100' : '#f6c614'}
                  className="transition-all duration-300"
                />
                <circle
                  cx={x}
                  cy={y}
                  r={isActive ? 18 : 14}
                  fill="none"
                  stroke={delegation.featured ? '#ff9100' : '#f6c614'}
                  strokeWidth="2"
                  strokeOpacity={isActive ? 0.6 : 0.3}
                  className={`transition-all duration-300 ${delegation.featured ? 'animate-pulse-glow' : ''}`}
                />
              </g>
            </g>
          );
        })}

        <g>
          <circle cx={((bramptonCoords.lng + 180) / 360) * 1000} cy={((90 - bramptonCoords.lat) / 180) * 500} r="30" fill="url(#bramptonGlow)" />
          <polygon
            points={`${((bramptonCoords.lng + 180) / 360) * 1000},${((90 - bramptonCoords.lat) / 180) * 500 - 15} ${((bramptonCoords.lng + 180) / 360) * 1000 + 13},${((90 - bramptonCoords.lat) / 180) * 500 + 7.5} ${((bramptonCoords.lng + 180) / 360) * 1000 + 8},${((90 - bramptonCoords.lat) / 180) * 500 + 7.5} ${((bramptonCoords.lng + 180) / 360) * 1000 + 8},${((90 - bramptonCoords.lat) / 180) * 500 + 20} ${((bramptonCoords.lng + 180) / 360) * 1000 - 8},${((90 - bramptonCoords.lat) / 180) * 500 + 20} ${((bramptonCoords.lng + 180) / 360) * 1000 - 8},${((90 - bramptonCoords.lat) / 180) * 500 + 7.5} ${((bramptonCoords.lng + 180) / 360) * 1000 - 13},${((90 - bramptonCoords.lat) / 180) * 500 + 7.5}`}
            fill="#f6c614"
            className="animate-pulse"
          />
          <text
            x={((bramptonCoords.lng + 180) / 360) * 1000}
            y={((90 - bramptonCoords.lat) / 180) * 500 + 40}
            textAnchor="middle"
            className="fill-current text-xs font-semibold"
          >
            BRAMPTON
          </text>
        </g>
      </svg>
    </div>
  );
}

export function GlobalMap() {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const activeDelegation = delegations.find(d => d.id === activeCountry);

  return (
    <SectionWrapper id="global" dark>
      <SectionHeadline dark>GLOBAL CONNECTIONS, LOCAL IMPACT</SectionHeadline>
      <SectionSubheadline className="text-white/70">
        BHive's reach extends far beyond Brampton. In 2025, we hosted delegations 
        from three continents, welcoming entrepreneurs, government leaders, and 
        innovation partners to explore Canada's startup ecosystem.
      </SectionSubheadline>

      <div className="flex flex-wrap gap-4 mb-8">
        <Badge variant="outline" className="bg-bhive-gold/10 border-bhive-gold text-bhive-gold">
          <Globe className="w-4 h-4 mr-1" />
          6 International Delegations
        </Badge>
        <Badge variant="outline" className="bg-bhive-orange/10 border-bhive-orange text-bhive-orange">
          <Users className="w-4 h-4 mr-1" />
          11 Polish Green Tech Startups
        </Badge>
        <Badge variant="outline" className="bg-white/10 border-white/30 text-white">
          <MapPin className="w-4 h-4 mr-1" />
          3 Continents
        </Badge>
      </div>

      <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <WorldMapSVG activeCountry={activeCountry} onCountryClick={setActiveCountry} />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {delegations.map((delegation, index) => (
          <Card
            key={delegation.id}
            className={`bg-white/5 border-white/10 hover-elevate cursor-pointer transition-all duration-500 ${
              activeCountry === delegation.id ? 'ring-2 ring-bhive-gold' : ''
            } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => setActiveCountry(delegation.id === activeCountry ? null : delegation.id)}
            data-testid={`card-delegation-${delegation.id}`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className={`w-3 h-3 rounded-full mt-1.5 ${delegation.featured ? 'bg-bhive-orange' : 'bg-bhive-gold'}`} />
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">{delegation.country}</h4>
                  <p className="text-sm text-bhive-gold mb-2">{delegation.event}</p>
                  <div className="flex items-center gap-1 text-xs text-white/50">
                    <Calendar className="w-3 h-3" />
                    {delegation.date}
                  </div>
                </div>
              </div>
              {activeCountry === delegation.id && (
                <p className="mt-3 pt-3 border-t border-white/10 text-sm text-white/70">
                  {delegation.details}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
