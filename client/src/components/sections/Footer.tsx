import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { HoneycombPattern } from '@/components/ui/Hexagon';
import bhiveLogo from '@assets/BHive-Logo_(for_white_backgrounds)_1768411925378.png';
import { Linkedin, Instagram, Twitter, Globe, Mail } from 'lucide-react';

export function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <footer
      id="footer"
      ref={ref}
      className="relative bg-bhive-black text-white py-20 overflow-hidden"
    >
      <HoneycombPattern className="opacity-[0.02]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={bhiveLogo}
            alt="BHive Logo"
            className="h-12 md:h-16 w-auto mx-auto"
            data-testid="img-footer-logo"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-headline text-3xl md:text-4xl text-white mb-4"
          data-testid="text-footer-headline"
        >
          READY TO SCALE INTO CANADA?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-white/70 mb-8 max-w-xl mx-auto"
          data-testid="text-footer-subhead"
        >
          Join our next cohort and become part of Brampton's thriving innovation ecosystem.
        </motion.p>

        <motion.a
          href="https://bhive.ca/apply"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center px-10 py-4 bg-bhive-orange text-white font-semibold text-lg uppercase tracking-wider hover:bg-bhive-orange/90 transition-colors rounded-none mb-12"
          data-testid="button-apply-now"
        >
          APPLY NOW
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <a
            href="https://linkedin.com/company/bhive"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-bhive-gold hover:text-bhive-black transition-colors"
            aria-label="LinkedIn"
            data-testid="link-linkedin"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/bhive"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-bhive-gold hover:text-bhive-black transition-colors"
            aria-label="Instagram"
            data-testid="link-instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/bhive"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-bhive-gold hover:text-bhive-black transition-colors"
            aria-label="Twitter"
            data-testid="link-twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://bhive.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-bhive-gold hover:text-bhive-black transition-colors"
            aria-label="Website"
            data-testid="link-website"
          >
            <Globe className="w-5 h-5" />
          </a>
          <a
            href="mailto:info@bhive.ca"
            className="p-3 bg-white/10 rounded-full hover:bg-bhive-gold hover:text-bhive-black transition-colors"
            aria-label="Email"
            data-testid="link-email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="border-t border-white/10 pt-8"
        >
          <p className="text-sm text-white/50 mb-2">
            Prepared by Toronto Business Development Centre
          </p>
          <p className="text-sm text-white/50 mb-4">
            For the City of Brampton
          </p>
          <p className="text-xs text-white/30">
            © 2025 BHive. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
