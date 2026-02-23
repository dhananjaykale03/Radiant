import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { prefersReducedMotion } from '@/lib/motion';

interface ScrollIndicatorProps {
  className?: string;
  onClick?: () => void;
}

export function ScrollIndicator({ className, onClick }: ScrollIndicatorProps) {
  const reduced = prefersReducedMotion();

  const handleClick = () => {
    onClick?.();
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      className={`flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors ${className}`}
      onClick={handleClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      aria-label="Scroll down"
    >
      <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
      <motion.div
        className="relative w-6 h-10 rounded-full border-2 border-current p-1"
        animate={reduced ? {} : { y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="w-1.5 h-1.5 mx-auto rounded-full bg-current"
          animate={reduced ? {} : { 
            y: [0, 16, 0],
            opacity: [1, 0.5, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
      <motion.div
        animate={reduced ? {} : { y: [0, 3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      >
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </motion.button>
  );
}

// Floating element for parallax effect
interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}

export function FloatingElement({
  children,
  className,
  amplitude = 10,
  duration = 4,
  delay = 0,
}: FloatingElementProps) {
  const reduced = prefersReducedMotion();

  return (
    <motion.div
      className={className}
      animate={reduced ? {} : {
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
