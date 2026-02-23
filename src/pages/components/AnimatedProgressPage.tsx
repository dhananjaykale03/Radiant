import { useState, useEffect } from 'react';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const progressCode = `import { motion } from 'framer-motion';

export function AnimatedProgress({ value }: { value: number }) {
  return (
    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: \`\${value}%\` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="h-full bg-primary rounded-full"
      />
    </div>
  );
}`;

const variants = [
  {
    name: 'Linear',
    preview: (() => {
      const LinearProgress = () => {
        const [progress, setProgress] = useState(60);
        
        return (
          <div className="w-full max-w-md space-y-4">
            <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="h-full bg-primary rounded-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Progress: {progress}%</span>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 20))}>
                  -20%
                </Button>
                <Button size="sm" variant="outline" onClick={() => setProgress(Math.min(100, progress + 20))}>
                  +20%
                </Button>
              </div>
            </div>
          </div>
        );
      };
      return <LinearProgress />;
    })(),
    code: progressCode,
  },
  {
    name: 'Gradient',
    preview: (() => {
      const GradientProgress = () => {
        const [progress, setProgress] = useState(75);
        
        return (
          <div className="w-full max-w-md space-y-4">
            <div className="h-4 w-full bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                />
              </motion.div>
            </div>
            <div className="text-center text-sm font-medium">{progress}% Complete</div>
          </div>
        );
      };
      return <GradientProgress />;
    })(),
    code: `// Gradient progress with shimmer`,
  },
  {
    name: 'Circular',
    preview: (() => {
      const CircularProgress = () => {
        const [progress, setProgress] = useState(70);
        const circumference = 2 * Math.PI * 45;
        const strokeDashoffset = circumference - (progress / 100) * circumference;
        
        return (
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                  className="text-muted"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                  className="text-primary"
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  style={{ strokeDasharray: circumference }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  key={progress}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-2xl font-bold"
                >
                  {progress}%
                </motion.span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>
                -10%
              </Button>
              <Button size="sm" variant="outline" onClick={() => setProgress(Math.min(100, progress + 10))}>
                +10%
              </Button>
            </div>
          </div>
        );
      };
      return <CircularProgress />;
    })(),
    code: `// Circular progress indicator`,
  },
  {
    name: 'Steps',
    preview: (() => {
      const StepsProgress = () => {
        const [currentStep, setCurrentStep] = useState(2);
        const steps = ['Details', 'Shipping', 'Payment', 'Confirm'];
        
        return (
          <div className="w-full max-w-lg">
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, i) => (
                <div key={step} className="flex items-center">
                  <motion.div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm border-2 transition-colors",
                      i < currentStep
                        ? "bg-primary border-primary text-primary-foreground"
                        : i === currentStep
                        ? "border-primary text-primary"
                        : "border-muted-foreground/30 text-muted-foreground"
                    )}
                    animate={i === currentStep ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {i < currentStep ? <Check className="h-5 w-5" /> : i + 1}
                  </motion.div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-0.5 mx-2 bg-muted min-w-8">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: '0%' }}
                        animate={{ width: i < currentStep ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mb-4">
              <h4 className="font-semibold">{steps[currentStep]}</h4>
              <p className="text-sm text-muted-foreground">Step {currentStep + 1} of {steps.length}</p>
            </div>
            <div className="flex justify-center gap-2">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              <Button 
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                disabled={currentStep === steps.length - 1}
              >
                Next
              </Button>
            </div>
          </div>
        );
      };
      return <StepsProgress />;
    })(),
    code: `// Step progress indicator`,
  },
  {
    name: 'Loading',
    preview: (() => {
      const LoadingProgress = () => {
        const [loading, setLoading] = useState(false);
        const [complete, setComplete] = useState(false);
        
        const startLoading = () => {
          setLoading(true);
          setComplete(false);
          setTimeout(() => {
            setLoading(false);
            setComplete(true);
          }, 2000);
        };
        
        return (
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-8">
              {/* Spinner */}
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                >
                  <Loader2 className="h-8 w-8 text-primary" />
                </motion.div>
                <span className="text-xs text-muted-foreground">Spinner</span>
              </div>
              
              {/* Dots */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 0.6, 
                        delay: i * 0.15,
                        ease: 'easeInOut'
                      }}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">Dots</span>
              </div>
              
              {/* Pulse */}
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  className="w-8 h-8 bg-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                />
                <span className="text-xs text-muted-foreground">Pulse</span>
              </div>
              
              {/* Bars */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-0.5 items-end h-8">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 bg-primary rounded-full"
                      animate={{ height: [8, 24, 8] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 0.8, 
                        delay: i * 0.1,
                        ease: 'easeInOut'
                      }}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">Bars</span>
              </div>
            </div>
            
            <Button onClick={startLoading} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : complete ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Complete!
                </>
              ) : (
                'Start Loading'
              )}
            </Button>
          </div>
        );
      };
      return <LoadingProgress />;
    })(),
    code: `// Various loading animations`,
  },
  {
    name: 'Segmented',
    preview: (() => {
      const SegmentedProgress = () => {
        const [progress, setProgress] = useState(3);
        const segments = 5;
        
        return (
          <div className="w-full max-w-md space-y-4">
            <div className="flex gap-1">
              {Array.from({ length: segments }).map((_, i) => (
                <motion.div
                  key={i}
                  className="flex-1 h-3 rounded-full bg-muted overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: '0%' }}
                    animate={{ width: i < progress ? '100%' : '0%' }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{progress} of {segments} complete</span>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 1))}>
                  -1
                </Button>
                <Button size="sm" variant="outline" onClick={() => setProgress(Math.min(segments, progress + 1))}>
                  +1
                </Button>
              </div>
            </div>
          </div>
        );
      };
      return <SegmentedProgress />;
    })(),
    code: `// Segmented progress bar`,
  },
];

export function AnimatedProgressPage() {
  return (
    <ComponentShowcase
      title="Animated Progress"
      description="Smooth progress indicators including linear bars, circular gauges, step indicators, and loading animations."
      preview={variants[0].preview}
      code={variants[0].code}
      variants={variants}
      filename="AnimatedProgress.tsx"
    />
  );
}
