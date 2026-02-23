import { useState } from 'react';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const hamburgerCode = `import { useState } from 'react';
import { motion } from 'framer-motion';

export function AnimatedHamburger() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative h-10 w-10 flex items-center justify-center"
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
        className="absolute h-0.5 w-6 bg-foreground"
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        className="absolute h-0.5 w-6 bg-foreground"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
        className="absolute h-0.5 w-6 bg-foreground"
      />
    </button>
  );
}`;

const HamburgerButton = ({ 
  isOpen, 
  onClick, 
  variant 
}: { 
  isOpen: boolean; 
  onClick: () => void; 
  variant: string;
}) => {
  const lineClass = "absolute h-0.5 w-6 bg-foreground rounded-full transition-all";
  
  switch (variant) {
    case 'squeeze':
      return (
        <button
          onClick={onClick}
          className="relative h-12 w-12 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={lineClass}
          />
          <motion.span
            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.15 }}
            className={lineClass}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={lineClass}
          />
        </button>
      );

    case 'arrow':
      return (
        <button
          onClick={onClick}
          className="relative h-12 w-12 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 4, width: 12, x: -2 } : { rotate: 0, y: -6, width: 24, x: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={lineClass}
            style={{ originX: 0.5 }}
          />
          <motion.span
            animate={isOpen ? { width: 24 } : { width: 24 }}
            className={lineClass}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -4, width: 12, x: -2 } : { rotate: 0, y: 6, width: 24, x: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={lineClass}
            style={{ originX: 0.5 }}
          />
        </button>
      );

    case 'elastic':
      return (
        <button
          onClick={onClick}
          className="relative h-12 w-12 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
        >
          <motion.span
            animate={isOpen ? { rotate: 135, y: 0 } : { rotate: 0, y: -6 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className={lineClass}
          />
          <motion.span
            animate={isOpen ? { scale: 0, rotate: 180 } : { scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className={lineClass}
          />
          <motion.span
            animate={isOpen ? { rotate: -135, y: 0 } : { rotate: 0, y: 6 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className={lineClass}
          />
        </button>
      );

    case 'spin':
      return (
        <motion.button
          onClick={onClick}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="relative h-12 w-12 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
            className={lineClass}
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className={lineClass}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
            className={lineClass}
          />
        </motion.button>
      );

    case 'collapse':
      return (
        <button
          onClick={onClick}
          className="relative h-12 w-12 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
        >
          <motion.span
            animate={isOpen ? { width: 0, opacity: 0 } : { width: 24, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={cn(lineClass, 'origin-center')}
            style={{ y: -6 }}
          />
          <motion.span
            animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={lineClass}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={lineClass}
          />
          <motion.span
            animate={isOpen ? { width: 0, opacity: 0 } : { width: 24, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={cn(lineClass, 'origin-center')}
            style={{ y: 6 }}
          />
        </button>
      );

    case 'stand':
      return (
        <button
          onClick={onClick}
          className="relative h-12 w-12 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
        >
          <motion.span
            animate={isOpen ? { rotate: 90, y: 0 } : { rotate: 0, y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={lineClass}
          />
          <motion.span
            animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={lineClass}
          />
          <motion.span
            animate={isOpen ? { rotate: 90, y: 0 } : { rotate: 0, y: 6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={lineClass}
          />
        </button>
      );

    case 'minus':
      return (
        <button
          onClick={onClick}
          className="relative h-12 w-12 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
        >
          <motion.span
            animate={isOpen ? { y: 0 } : { y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={lineClass}
          />
          <motion.span className={lineClass} />
          <motion.span
            animate={isOpen ? { y: 0 } : { y: 6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={lineClass}
          />
        </button>
      );

    case 'vortex':
      return (
        <motion.button
          onClick={onClick}
          animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 0.9 : 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="relative h-12 w-12 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 0, width: 20 } : { rotate: 0, y: -6, width: 24 }}
            className={lineClass}
          />
          <motion.span
            animate={isOpen ? { scaleX: 0 } : { scaleX: 1 }}
            className={lineClass}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: 0, width: 20 } : { rotate: 0, y: 6, width: 24 }}
            className={lineClass}
          />
        </motion.button>
      );

    default:
      return null;
  }
};

const variants = [
  {
    name: 'All Styles',
    preview: (() => {
      const AllHamburgers = () => {
        const [openStates, setOpenStates] = useState<Record<string, boolean>>({});
        
        const styles = [
          { name: 'Squeeze', variant: 'squeeze' },
          { name: 'Arrow', variant: 'arrow' },
          { name: 'Elastic', variant: 'elastic' },
          { name: 'Spin', variant: 'spin' },
          { name: 'Collapse', variant: 'collapse' },
          { name: 'Stand', variant: 'stand' },
          { name: 'Minus', variant: 'minus' },
          { name: 'Vortex', variant: 'vortex' },
        ];
        
        const toggleState = (variant: string) => {
          setOpenStates(prev => ({ ...prev, [variant]: !prev[variant] }));
        };
        
        return (
          <div className="grid grid-cols-4 gap-4">
            {styles.map((style) => (
              <div key={style.variant} className="flex flex-col items-center gap-2">
                <HamburgerButton
                  isOpen={openStates[style.variant] || false}
                  onClick={() => toggleState(style.variant)}
                  variant={style.variant}
                />
                <span className="text-xs text-muted-foreground">{style.name}</span>
              </div>
            ))}
          </div>
        );
      };
      return <AllHamburgers />;
    })(),
    code: hamburgerCode,
  },
  {
    name: 'Squeeze',
    preview: (() => {
      const Demo = () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <div className="flex flex-col items-center gap-4">
            <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} variant="squeeze" />
            <span className="text-sm text-muted-foreground">{isOpen ? 'Close' : 'Open'}</span>
          </div>
        );
      };
      return <Demo />;
    })(),
    code: `// Squeeze animation - lines converge and rotate`,
  },
  {
    name: 'Arrow',
    preview: (() => {
      const Demo = () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <div className="flex flex-col items-center gap-4">
            <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} variant="arrow" />
            <span className="text-sm text-muted-foreground">{isOpen ? 'Close' : 'Open'}</span>
          </div>
        );
      };
      return <Demo />;
    })(),
    code: `// Arrow animation - transforms into back arrow`,
  },
  {
    name: 'Elastic',
    preview: (() => {
      const Demo = () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <div className="flex flex-col items-center gap-4">
            <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} variant="elastic" />
            <span className="text-sm text-muted-foreground">{isOpen ? 'Close' : 'Open'}</span>
          </div>
        );
      };
      return <Demo />;
    })(),
    code: `// Elastic animation - bouncy spring effect`,
  },
  {
    name: 'Spin',
    preview: (() => {
      const Demo = () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <div className="flex flex-col items-center gap-4">
            <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} variant="spin" />
            <span className="text-sm text-muted-foreground">{isOpen ? 'Close' : 'Open'}</span>
          </div>
        );
      };
      return <Demo />;
    })(),
    code: `// Spin animation - entire button rotates`,
  },
];

export function AnimatedHamburgerPage() {
  return (
    <ComponentShowcase
      title="Animated Hamburger"
      description="8 unique hamburger menu icon animations with smooth spring physics and various transformation styles."
      preview={variants[0].preview}
      code={variants[0].code}
      variants={variants}
      filename="AnimatedHamburger.tsx"
    />
  );
}
