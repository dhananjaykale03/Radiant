import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/dhananjaykale__143?igsh=MWV6dTVkdHZ3ZnF5', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/dhananjaykale-?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/30 bg-background/80 backdrop-blur-sm">
      {/* Subtle animated top line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(var(--primary)/0.4), transparent)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container max-w-5xl px-4 lg:px-8 py-5">
        <div className="flex items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            className="text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Radiant. &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Made with 💗 by Dhananjay Kale
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="h-7 w-7 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Icon className="h-3.5 w-3.5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
