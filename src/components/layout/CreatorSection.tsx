import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, Code2, Sparkles, Heart, Rocket, Coffee, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import creatorPhoto from '@/assets/creator-photo.jpg';

const techStack = ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'MongoDB',];

const socialLinks = [
  
  { icon: Instagram, href: 'https://www.instagram.com/dhananjaykale__143?igsh=MWV6dTVkdHZ3ZnF5', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/dhananjaykale-?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
];

const funFacts = [
  { icon: Heart, label: 'Components crafted', value: '48+' },
  { icon: Rocket, label: 'Projects shipped', value: '12' },
];

interface CreatorSectionProps {
  open: boolean;
  onClose: () => void;
}

export function CreatorSection({ open, onClose }: CreatorSectionProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.section
          className="relative border-t bg-gradient-to-b from-background via-primary/[0.02] to-background overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 h-9 w-9 rounded-full border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="h-4 w-4" />
          </motion.button>

          {/* Decorative glows */}
          <motion.div
            className="absolute top-20 right-[10%] w-72 h-72 rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)', filter: 'blur(60px)' }}
            animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="container max-w-5xl px-4 lg:px-8 py-20 lg:py-28">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-4">
                <Sparkles className="mr-1 h-3 w-3" /> Meet the Creator
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Designed & Built with <span className="text-primary">Passion</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Circular Animated Photo */}
              <motion.div
                className="relative flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.25, type: 'spring', stiffness: 150 }}
              >
                <div className="relative">
                  {/* Spinning ring */}
                  <motion.div
                    className="absolute -inset-4 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, hsl(var(--primary) / 0.3), transparent, hsl(var(--primary) / 0.15), transparent, hsl(var(--primary) / 0.3))',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  />
                  {/* Pulsing glow */}
                  <motion.div
                    className="absolute -inset-6 rounded-full bg-primary/10 blur-2xl"
                    animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  {/* Photo container */}
                  <div className="relative rounded-full p-[3px] bg-gradient-to-br from-primary/50 via-primary/20 to-primary/50">
                    <div className="rounded-full overflow-hidden bg-card">
                      <motion.img
                        src={creatorPhoto}
                        alt="Creator"
                        className="w-56 h-56 sm:w-64 sm:h-64 object-cover object-top rounded-full"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </div>
                  </div>
                  {/* Floating badge */}
                  <motion.div
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border bg-card px-4 py-1.5 shadow-lg whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
                  >
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                      Available for work
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-1">👋 Hey, I'm Dhananjay Kale </h3>
                <p className="text-primary font-medium mb-4">Full-Stack Developer </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                    Building scalable, fast, and reliable web applications that are easy to use and maintain with modern web technologies.
                </p>

                {/* Tech stack */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="rounded-lg border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.06 }}
                        whileHover={{ y: -2, borderColor: 'hsl(var(--primary) / 0.4)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Fun stats */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {funFacts.map((fact, i) => (
                    <motion.div
                      key={fact.label}
                      className="rounded-xl border bg-card/50 p-3"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 + i * 0.08 }}
                    >
                      <fact.icon className="h-4 w-4 text-primary/60 mb-1" />
                      <p className="text-lg font-bold">{fact.value}</p>
                      <p className="text-[11px] text-muted-foreground">{fact.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Socials */}
                <div className="flex gap-2">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="h-10 w-10 rounded-lg border border-border/50 bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors"
                      whileHover={{ y: -3, scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
