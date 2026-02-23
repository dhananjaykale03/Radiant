import { useState } from 'react';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Info, HelpCircle, AlertCircle, CheckCircle, Star, 
  Settings, User, Bell, Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

const tooltipCode = `import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AnimatedTooltip({ content, children }) {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-popover text-popover-foreground text-sm rounded-md shadow-lg"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}`;

const Tooltip = ({ 
  content, 
  children, 
  position = 'top',
  variant = 'default'
}: { 
  content: React.ReactNode; 
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  variant?: 'default' | 'info' | 'success' | 'warning' | 'error';
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const positionStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };
  
  const animations = {
    top: { initial: { y: 5 }, animate: { y: 0 }, exit: { y: 5 } },
    bottom: { initial: { y: -5 }, animate: { y: 0 }, exit: { y: -5 } },
    left: { initial: { x: 5 }, animate: { x: 0 }, exit: { x: 5 } },
    right: { initial: { x: -5 }, animate: { x: 0 }, exit: { x: -5 } },
  };
  
  const variantStyles = {
    default: 'bg-popover text-popover-foreground',
    info: 'bg-blue-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    error: 'bg-red-500 text-white',
  };
  
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, ...animations[position].initial }}
            animate={{ opacity: 1, scale: 1, ...animations[position].animate }}
            exit={{ opacity: 0, scale: 0.95, ...animations[position].exit }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className={cn(
              "absolute z-50 px-3 py-1.5 text-sm rounded-md shadow-lg whitespace-nowrap",
              positionStyles[position],
              variantStyles[variant]
            )}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const variants = [
  {
    name: 'Positions',
    preview: (() => {
      return (
        <div className="flex gap-12 py-8">
          <Tooltip content="Tooltip on top" position="top">
            <Button variant="outline">Top</Button>
          </Tooltip>
          <Tooltip content="Tooltip on bottom" position="bottom">
            <Button variant="outline">Bottom</Button>
          </Tooltip>
          <Tooltip content="Tooltip on left" position="left">
            <Button variant="outline">Left</Button>
          </Tooltip>
          <Tooltip content="Tooltip on right" position="right">
            <Button variant="outline">Right</Button>
          </Tooltip>
        </div>
      );
    })(),
    code: tooltipCode,
  },
  {
    name: 'Variants',
    preview: (() => {
      return (
        <div className="flex gap-6 py-8">
          <Tooltip content="Default tooltip" variant="default">
            <Button variant="outline" size="icon">
              <Info className="h-4 w-4" />
            </Button>
          </Tooltip>
          <Tooltip content="Information" variant="info">
            <Button variant="outline" size="icon">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </Tooltip>
          <Tooltip content="Success!" variant="success">
            <Button variant="outline" size="icon">
              <CheckCircle className="h-4 w-4" />
            </Button>
          </Tooltip>
          <Tooltip content="Warning" variant="warning">
            <Button variant="outline" size="icon">
              <AlertCircle className="h-4 w-4" />
            </Button>
          </Tooltip>
          <Tooltip content="Error" variant="error">
            <Button variant="outline" size="icon">
              <AlertCircle className="h-4 w-4" />
            </Button>
          </Tooltip>
        </div>
      );
    })(),
    code: `// Tooltip with different color variants`,
  },
  {
    name: 'Rich Content',
    preview: (() => {
      const RichTooltip = () => {
        const [isVisible, setIsVisible] = useState(false);
        
        return (
          <div 
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            <Button variant="outline" className="gap-2">
              <User className="h-4 w-4" />
              Hover for profile
            </Button>
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="absolute top-full left-0 mt-2 p-4 bg-popover text-popover-foreground rounded-xl shadow-xl border w-64 z-50"
                >
                  <div className="flex gap-3 mb-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold">
                      JD
                    </div>
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-sm text-muted-foreground">@johndoe</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Full-stack developer passionate about creating beautiful UIs.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span><strong>1.2k</strong> followers</span>
                    <span><strong>348</strong> following</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      };
      return <RichTooltip />;
    })(),
    code: `// Rich tooltip with profile card`,
  },
  {
    name: 'Icon Tooltips',
    preview: (() => {
      const icons = [
        { Icon: Settings, label: 'Settings' },
        { Icon: User, label: 'Profile' },
        { Icon: Bell, label: 'Notifications' },
        { Icon: Star, label: 'Favorites' },
        { Icon: Zap, label: 'Quick Actions' },
      ];
      
      return (
        <div className="flex gap-2 p-4 rounded-lg bg-muted">
          {icons.map(({ Icon, label }, i) => (
            <Tooltip key={i} content={label}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg hover:bg-background transition-colors"
              >
                <Icon className="h-5 w-5" />
              </motion.button>
            </Tooltip>
          ))}
        </div>
      );
    })(),
    code: `// Icon bar with tooltips`,
  },
  {
    name: 'Delayed Tooltip',
    preview: (() => {
      const DelayedTooltip = () => {
        const [isVisible, setIsVisible] = useState(false);
        const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
        
        const handleMouseEnter = () => {
          const id = setTimeout(() => setIsVisible(true), 500);
          setTimeoutId(id);
        };
        
        const handleMouseLeave = () => {
          if (timeoutId) clearTimeout(timeoutId);
          setIsVisible(false);
        };
        
        return (
          <div 
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Button variant="outline">Hover for 500ms</Button>
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-popover text-popover-foreground text-sm rounded-md shadow-lg border whitespace-nowrap"
                >
                  Delayed tooltip appeared!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      };
      return <DelayedTooltip />;
    })(),
    code: `// Tooltip with delay before showing`,
  },
  {
    name: 'Arrow Tooltip',
    preview: (() => {
      const ArrowTooltip = () => {
        const [isVisible, setIsVisible] = useState(false);
        
        return (
          <div 
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            <Button variant="outline">With Arrow</Button>
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3"
                >
                  <div className="px-3 py-1.5 bg-primary text-primary-foreground text-sm rounded-md shadow-lg">
                    Tooltip with arrow
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                    <div className="border-8 border-transparent border-t-primary" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      };
      return <ArrowTooltip />;
    })(),
    code: `// Tooltip with arrow pointer`,
  },
];

export function AnimatedTooltipPage() {
  return (
    <ComponentShowcase
      title="Animated Tooltips"
      description="Smooth spring-physics tooltips with directional animations, rich content, and multiple variants."
      preview={variants[0].preview}
      code={variants[0].code}
      variants={variants}
      filename="AnimatedTooltip.tsx"
    />
  );
}
