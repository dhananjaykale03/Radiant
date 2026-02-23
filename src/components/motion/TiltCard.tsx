import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { getMotionPreferences, timing } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glareEnabled?: boolean;
  scaleOnHover?: number;
  perspective?: number;
}

export function TiltCard({
  children,
  className,
  tiltAmount = 8,
  glareEnabled = true,
  scaleOnHover = 1.02,
  perspective = 1000,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [enabled, setEnabled] = useState(false);
  
  useEffect(() => {
    const prefs = getMotionPreferences();
    setEnabled(prefs.tiltEffects && prefs.level === 'full');
    
    const handleChange = () => {
      const prefs = getMotionPreferences();
      setEnabled(prefs.tiltEffects && prefs.level === 'full');
    };
    window.addEventListener('motion-preferences-change', handleChange);
    return () => window.removeEventListener('motion-preferences-change', handleChange);
  }, []);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [tiltAmount, -tiltAmount]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-tiltAmount, tiltAmount]), springConfig);

  const glareX = useTransform(mouseX, [0, 1], ['0%', '100%']);
  const glareY = useTransform(mouseY, [0, 1], ['0%', '100%']);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !enabled) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
  }, [enabled, mouseX, mouseY]);

  const handleMouseEnter = useCallback(() => {
    if (!enabled) return;
    setIsHovered(true);
  }, [enabled]);

  const handleMouseLeave = useCallback(() => {
    if (!enabled) return;
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [enabled, mouseX, mouseY]);

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn('relative', className)}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        scale: isHovered ? scaleOnHover : 1,
      }}
      transition={{ duration: timing.fast }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full"
      >
        {children}

        {/* Glare effect */}
        {glareEnabled && (
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden"
            style={{
              opacity: isHovered ? 1 : 0,
            }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, transparent 60%)`,
              }}
            />
          </motion.div>
        )}

        {/* Dynamic shadow */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-[inherit]"
          style={{
            boxShadow: isHovered
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.1)'
              : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            transform: 'translateZ(-50px)',
          }}
          animate={{
            opacity: isHovered ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
