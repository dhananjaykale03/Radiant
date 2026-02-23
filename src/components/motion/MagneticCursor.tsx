import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { getMotionPreferences, spring } from '@/lib/motion';

interface CursorState {
  visible: boolean;
  hovering: boolean;
  clicking: boolean;
  text: string;
}

function shouldEnableCursor() {
  if (typeof window === 'undefined') return false;
  const prefs = getMotionPreferences();
  const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
  return prefs.cursorEffects && prefs.level === 'full' && !isMobile;
}

export function MagneticCursor() {
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>({
    visible: false,
    hovering: false,
    clicking: false,
    text: '',
  });

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const cursorXSpring = useSpring(cursorX, spring.snappy);
  const cursorYSpring = useSpring(cursorY, spring.snappy);

  const rafRef = useRef<number>();

  useEffect(() => {
    setEnabled(shouldEnableCursor());
    
    const handleChange = () => setEnabled(shouldEnableCursor());
    window.addEventListener('motion-preferences-change', handleChange);
    return () => window.removeEventListener('motion-preferences-change', handleChange);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Check if hovering over magnetic elements
      const target = e.target as HTMLElement;
      const magneticElement = target.closest('[data-magnetic]');
      const cursorText = target.closest('[data-cursor-text]');

      if (magneticElement) {
        const rect = magneticElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const strength = parseFloat(magneticElement.getAttribute('data-magnetic-strength') || '0.3');
        
        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        (magneticElement as HTMLElement).style.transform = 
          `translate(${deltaX}px, ${deltaY}px)`;

        setState(prev => ({ 
          ...prev, 
          hovering: true,
          text: cursorText?.getAttribute('data-cursor-text') || ''
        }));
      } else {
        // Reset all magnetic elements
        document.querySelectorAll('[data-magnetic]').forEach(el => {
          (el as HTMLElement).style.transform = 'translate(0, 0)';
        });
        setState(prev => ({ ...prev, hovering: false, text: '' }));
      }
    });
  }, [cursorX, cursorY]);

  const handleMouseEnter = useCallback(() => {
    setState(prev => ({ ...prev, visible: true }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setState(prev => ({ ...prev, visible: false }));
  }, []);

  const handleMouseDown = useCallback(() => {
    setState(prev => ({ ...prev, clicking: true }));
  }, []);

  const handleMouseUp = useCallback(() => {
    setState(prev => ({ ...prev, clicking: false }));
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [enabled, handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp]);

  if (!enabled) return null;

  return (
    <>
      {/* Hide default cursor globally when custom cursor is active */}
      <style>{`
        * { cursor: none !important; }
        a, button, [role="button"], input, textarea, select { cursor: none !important; }
      `}</style>

      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <AnimatePresence>
          {state.visible && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: state.clicking ? 0.8 : state.hovering ? 1.5 : 1, 
                opacity: 1 
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative -translate-x-1/2 -translate-y-1/2"
            >
              {/* Inner dot */}
              <div 
                className={`
                  w-3 h-3 rounded-full bg-white
                  transition-transform duration-150
                  ${state.hovering ? 'scale-150' : ''}
                `}
              />
              
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 -m-2 rounded-full border border-white/50"
                animate={{
                  scale: state.hovering ? 2 : 1,
                  opacity: state.hovering ? 1 : 0.5,
                }}
                transition={{ duration: 0.2 }}
              />

              {/* Cursor text */}
              <AnimatePresence>
                {state.text && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-white"
                  >
                    {state.text}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

// Hook for magnetic elements
export function useMagnetic(strength: number = 0.3) {
  return {
    'data-magnetic': true,
    'data-magnetic-strength': strength,
    style: { transition: 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)' },
  };
}
