import { useState } from 'react';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  X, Check, AlertTriangle, Trash2, Info, Settings, 
  User, Mail, ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const modalCode = `import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AnimatedModal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-background rounded-xl p-6"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}`;

const variants = [
  {
    name: 'Scale',
    preview: (() => {
      const ScaleModal = () => {
        const [isOpen, setIsOpen] = useState(false);
        
        return (
          <div>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            
            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    onClick={() => setIsOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-background rounded-2xl p-6 w-full max-w-md shadow-2xl border"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Modal Title</h3>
                      <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      This is a basic modal with a smooth scale animation.
                    </p>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                      <Button onClick={() => setIsOpen(false)}>Confirm</Button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        );
      };
      return <ScaleModal />;
    })(),
    code: modalCode,
  },
  {
    name: 'Bottom Sheet',
    preview: (() => {
      const BottomSheet = () => {
        const [isOpen, setIsOpen] = useState(false);
        
        return (
          <div>
            <Button onClick={() => setIsOpen(true)}>Open Bottom Sheet</Button>
            
            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-50"
                    onClick={() => setIsOpen(false)}
                  />
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    className="fixed bottom-0 left-0 right-0 z-50 bg-background rounded-t-2xl p-6 shadow-2xl"
                  >
                    <div className="w-12 h-1 bg-muted rounded-full mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Bottom Sheet</h3>
                    <p className="text-muted-foreground mb-6">
                      This slides up from the bottom of the screen.
                    </p>
                    <div className="space-y-2">
                      <Button className="w-full" onClick={() => setIsOpen(false)}>Action 1</Button>
                      <Button className="w-full" variant="outline" onClick={() => setIsOpen(false)}>Action 2</Button>
                      <Button className="w-full" variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        );
      };
      return <BottomSheet />;
    })(),
    code: `// Bottom sheet modal`,
  },
  {
    name: 'Success',
    preview: (() => {
      const SuccessModal = () => {
        const [isOpen, setIsOpen] = useState(false);
        
        return (
          <div>
            <Button onClick={() => setIsOpen(true)}>Show Success</Button>
            
            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    onClick={() => setIsOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-background rounded-2xl p-8 w-full max-w-sm shadow-2xl border text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 400 }}
                      className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: 'spring' }}
                      >
                        <Check className="h-8 w-8 text-green-600" />
                      </motion.div>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl font-semibold mb-2"
                    >
                      Success!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-muted-foreground mb-6"
                    >
                      Your action has been completed successfully.
                    </motion.p>
                    <Button onClick={() => setIsOpen(false)} className="w-full">
                      Continue
                    </Button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        );
      };
      return <SuccessModal />;
    })(),
    code: `// Success modal with animated icon`,
  },
  {
    name: 'Delete Confirm',
    preview: (() => {
      const DeleteModal = () => {
        const [isOpen, setIsOpen] = useState(false);
        
        return (
          <div>
            <Button variant="destructive" onClick={() => setIsOpen(true)}>
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Item
            </Button>
            
            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    onClick={() => setIsOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-background rounded-2xl p-6 w-full max-w-sm shadow-2xl border"
                  >
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2">Delete Item?</h3>
                    <p className="text-muted-foreground text-center mb-6">
                      This action cannot be undone. This will permanently delete the item.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" onClick={() => setIsOpen(false)}>
                        Cancel
                      </Button>
                      <Button variant="destructive" className="flex-1" onClick={() => setIsOpen(false)}>
                        Delete
                      </Button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        );
      };
      return <DeleteModal />;
    })(),
    code: `// Delete confirmation modal`,
  },
  {
    name: 'Side Panel',
    preview: (() => {
      const SidePanel = () => {
        const [isOpen, setIsOpen] = useState(false);
        
        return (
          <div>
            <Button onClick={() => setIsOpen(true)}>
              <Settings className="h-4 w-4 mr-2" />
              Open Settings
            </Button>
            
            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-50"
                    onClick={() => setIsOpen(false)}
                  />
                  <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    className="fixed top-0 right-0 bottom-0 z-50 bg-background w-full max-w-md shadow-2xl border-l"
                  >
                    <div className="flex items-center justify-between p-4 border-b">
                      <h3 className="text-lg font-semibold">Settings</h3>
                      <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Display Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                      <Button className="w-full">Save Changes</Button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        );
      };
      return <SidePanel />;
    })(),
    code: `// Side panel modal`,
  },
  {
    name: 'Multi-Step',
    preview: (() => {
      const MultiStepModal = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [step, setStep] = useState(1);
        
        const handleClose = () => {
          setIsOpen(false);
          setTimeout(() => setStep(1), 300);
        };
        
        return (
          <div>
            <Button onClick={() => setIsOpen(true)}>Start Wizard</Button>
            
            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    onClick={handleClose}
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-background rounded-2xl w-full max-w-md shadow-2xl border overflow-hidden"
                  >
                    {/* Progress */}
                    <div className="h-1 bg-muted">
                      <motion.div
                        className="h-full bg-primary"
                        animate={{ width: `${(step / 3) * 100}%` }}
                      />
                    </div>
                    
                    <div className="p-6">
                      <AnimatePresence mode="wait">
                        {step === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                          >
                            <h3 className="text-lg font-semibold mb-2">Step 1: Personal Info</h3>
                            <p className="text-muted-foreground mb-4">Enter your personal details.</p>
                            <div className="space-y-4 mb-6">
                              <div>
                                <Label>Name</Label>
                                <Input placeholder="Your name" className="mt-1" />
                              </div>
                            </div>
                          </motion.div>
                        )}
                        
                        {step === 2 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                          >
                            <h3 className="text-lg font-semibold mb-2">Step 2: Contact</h3>
                            <p className="text-muted-foreground mb-4">How can we reach you?</p>
                            <div className="space-y-4 mb-6">
                              <div>
                                <Label>Email</Label>
                                <Input type="email" placeholder="your@email.com" className="mt-1" />
                              </div>
                            </div>
                          </motion.div>
                        )}
                        
                        {step === 3 && (
                          <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="text-center"
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2, type: 'spring' }}
                              className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                              <Check className="h-8 w-8 text-green-600" />
                            </motion.div>
                            <h3 className="text-lg font-semibold mb-2">All Done!</h3>
                            <p className="text-muted-foreground mb-6">
                              Your profile has been set up successfully.
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      <div className="flex gap-2">
                        {step > 1 && step < 3 && (
                          <Button variant="outline" onClick={() => setStep(s => s - 1)}>
                            Back
                          </Button>
                        )}
                        {step < 3 ? (
                          <Button className="flex-1" onClick={() => setStep(s => s + 1)}>
                            Continue <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        ) : (
                          <Button className="flex-1" onClick={handleClose}>
                            Finish
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        );
      };
      return <MultiStepModal />;
    })(),
    code: `// Multi-step wizard modal`,
  },
];

export function AnimatedModalPage() {
  return (
    <ComponentShowcase
      title="Animated Modals"
      description="Smooth modal transitions including scale, slide, bottom sheets, and multi-step wizards."
      preview={variants[0].preview}
      code={variants[0].code}
      variants={variants}
      filename="AnimatedModal.tsx"
    />
  );
}
