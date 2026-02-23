import { motion, Variants } from 'framer-motion';
import { getMotionPreferences, timing, easing } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

export function FadeIn({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = timing.normal,
  once = true,
  amount = 0.3,
}: FadeInProps) {
  const prefs = getMotionPreferences();
  const disabled = prefs.level === 'off';
  const reduced = prefs.level === 'reduced';

  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  const directions = {
    up: { y: reduced ? 10 : 20 },
    down: { y: reduced ? -10 : -20 },
    left: { x: reduced ? 10 : 20 },
    right: { x: reduced ? -10 : -20 },
    none: {},
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduced ? duration * 0.5 : duration,
        delay: reduced ? 0 : delay,
        ease: easing.enter,
      },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

// Staggered children animation container
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  delayChildren = 0.1,
}: StaggerContainerProps) {
  const prefs = getMotionPreferences();
  const disabled = prefs.level === 'off';
  const reduced = prefs.level === 'reduced';

  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : staggerDelay,
            delayChildren: reduced ? 0 : delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger item
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const prefs = getMotionPreferences();
  const disabled = prefs.level === 'off';
  const reduced = prefs.level === 'reduced';

  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: reduced ? 10 : 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: reduced ? timing.fast : timing.normal,
            ease: easing.enter,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
