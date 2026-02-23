import { motion, Variants } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  once?: boolean;
  by?: 'word' | 'character' | 'line';
}

export function TextReveal({
  children,
  className,
  delay = 0,
  once = true,
  by = 'word',
}: TextRevealProps) {
  const reduced = prefersReducedMotion();

  if (reduced) {
    return <span className={className}>{children}</span>;
  }

  const elements = by === 'character' 
    ? children.split('') 
    : by === 'line'
    ? children.split('\n')
    : children.split(' ');

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: by === 'character' ? 0.02 : 0.08,
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.span
      className={cn('inline-flex flex-wrap', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      style={{ perspective: 1000 }}
    >
      {elements.map((element, i) => (
        <motion.span
          key={i}
          variants={childVariants}
          className="inline-block origin-bottom"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {element}
          {by === 'word' && '\u00A0'}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Typewriter effect
interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function Typewriter({ text, className, delay = 0, speed = 50 }: TypewriterProps) {
  const reduced = prefersReducedMotion();

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span className={cn('inline-block', className)}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0,
            delay: delay + (i * speed) / 1000,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Gradient text animation
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({ children, className, animate = true }: GradientTextProps) {
  const reduced = prefersReducedMotion();

  return (
    <motion.span
      className={cn(
        'bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto]',
        className
      )}
      animate={!reduced && animate ? {
        backgroundPosition: ['0% center', '200% center'],
      } : {}}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
}
