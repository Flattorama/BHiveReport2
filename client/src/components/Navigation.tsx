import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import bhiveLogo from '@assets/BHive-Logo_(for_white_backgrounds)_1768411925378.png';

const navItems = [
  { id: 'hero', label: 'HOME' },
  { id: 'challenge', label: 'THE PIVOT' },
  { id: 'global', label: 'GLOBAL' },
  { id: 'cohorts', label: 'COHORTS' },
  { id: 'digital', label: 'DIGITAL' },
  { id: 'timeline', label: 'TIMELINE' },
  { id: 'risks', label: 'CHALLENGES' },
  { id: 'future', label: 'FUTURE' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-bhive-black/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-transparent py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center"
            data-testid="button-nav-logo"
          >
            <img src={bhiveLogo} alt="BHive" className="h-8 w-auto" />
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'px-3 py-2 text-sm font-headline tracking-wider transition-colors',
                  activeSection === item.id
                    ? 'text-bhive-gold'
                    : 'text-white/70 hover:text-white'
                )}
                data-testid={`button-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-bhive-black/98 lg:hidden pt-20">
          <div className="flex flex-col items-center gap-4 p-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'text-2xl font-headline tracking-wider transition-colors',
                  activeSection === item.id
                    ? 'text-bhive-gold'
                    : 'text-white/70'
                )}
                data-testid={`button-mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
