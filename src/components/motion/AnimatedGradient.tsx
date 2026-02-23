import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { prefersReducedMotion } from '@/lib/motion';

interface AnimatedGradientProps {
  className?: string;
  variant?: 'hero' | 'subtle' | 'mesh';
  withNoise?: boolean;
}

export function AnimatedGradient({ 
  className = '', 
  variant = 'hero',
  withNoise = true 
}: AnimatedGradientProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const reduced = prefersReducedMotion();

  const gradients = {
    hero: {
      light: [
        'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.15), transparent)',
        'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(255, 119, 198, 0.1), transparent)',
        'radial-gradient(ellipse 50% 30% at 20% 80%, rgba(120, 200, 255, 0.12), transparent)',
      ],
      dark: [
        'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), transparent)',
        'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(255, 119, 198, 0.15), transparent)',
        'radial-gradient(ellipse 50% 30% at 20% 80%, rgba(120, 200, 255, 0.2), transparent)',
      ],
    },
    subtle: {
      light: [
        'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(120, 119, 198, 0.05), transparent)',
      ],
      dark: [
        'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(120, 119, 198, 0.1), transparent)',
      ],
    },
    mesh: {
      light: [
        'radial-gradient(at 40% 20%, rgba(147, 51, 234, 0.1) 0px, transparent 50%)',
        'radial-gradient(at 80% 0%, rgba(219, 39, 119, 0.1) 0px, transparent 50%)',
        'radial-gradient(at 0% 50%, rgba(59, 130, 246, 0.1) 0px, transparent 50%)',
        'radial-gradient(at 80% 50%, rgba(16, 185, 129, 0.1) 0px, transparent 50%)',
        'radial-gradient(at 0% 100%, rgba(245, 158, 11, 0.1) 0px, transparent 50%)',
      ],
      dark: [
        'radial-gradient(at 40% 20%, rgba(147, 51, 234, 0.2) 0px, transparent 50%)',
        'radial-gradient(at 80% 0%, rgba(219, 39, 119, 0.15) 0px, transparent 50%)',
        'radial-gradient(at 0% 50%, rgba(59, 130, 246, 0.15) 0px, transparent 50%)',
        'radial-gradient(at 80% 50%, rgba(16, 185, 129, 0.15) 0px, transparent 50%)',
        'radial-gradient(at 0% 100%, rgba(245, 158, 11, 0.15) 0px, transparent 50%)',
      ],
    },
  };

  const currentGradients = isDark ? gradients[variant].dark : gradients[variant].light;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated gradient layers */}
      {currentGradients.map((gradient, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{ backgroundImage: gradient }}
          animate={reduced ? {} : {
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.05, 0.98, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Animated glow orbs */}
      {variant === 'hero' && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
            style={{
              background: isDark 
                ? 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            animate={reduced ? {} : {
              x: [0, 50, -30, 0],
              y: [0, -30, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full"
            style={{
              background: isDark
                ? 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            animate={reduced ? {} : {
              x: [0, -40, 30, 0],
              y: [0, 40, -30, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        </>
      )}

      {/* Optional noise overlay for cinematic depth */}
      {withNoise && (
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      )}
    </div>
  );
}
