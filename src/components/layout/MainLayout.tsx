import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SignedIn, SignedOut, SignIn } from '@clerk/clerk-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { CommandPalette } from './CommandPalette';
import { SiteFooter } from './SiteFooter';
import { MagneticCursor } from '@/components/motion/MagneticCursor';
import { shouldEnableEffects } from '@/lib/motion';
import { prefersReducedMotion } from '@/lib/motion';
import { Lock, Sparkles } from 'lucide-react';

// ─── Welcome + Auth Gate ──────────────────────────────────
function WelcomeOverlay({ onComplete }: { onComplete: () => void }) {
  const reduced = prefersReducedMotion();

  useEffect(() => {
    const t = setTimeout(onComplete, 3200);
    return () => clearTimeout(t);
  }, [onComplete]);

  if (reduced) {
    onComplete();
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--primary) / 0.08), transparent 70%)',
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.6] }}
        transition={{ duration: 3, ease: 'easeInOut' }}
      />
      <motion.div className="text-center z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
        >
          <Sparkles className="h-16 w-16 text-primary mx-auto mb-4" />
        </motion.div>
        <motion.h1
          className="text-4xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          ComponentKit
        </motion.h1>
        <motion.p
          className="text-muted-foreground mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Premium UI Components
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

function AuthGate() {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-background">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, hsl(var(--primary) / 0.06), transparent 70%)',
      }} />
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <Lock className="h-3.5 w-3.5" />
          Sign in to continue
        </div>
        <h1 className="text-3xl font-bold mb-2">Welcome to ComponentKit</h1>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
          Sign in to access premium UI components, templates, and more.
        </p>
        <div className="flex justify-center">
          <SignIn
            routing="hash"
            fallbackRedirectUrl="/"
            signUpUrl="/"
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-premium-lg rounded-2xl border border-border bg-card",
              },
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [enableEffects, setEnableEffects] = useState(false);
  const [showWelcome, setShowWelcome] = useState(() => {
    return !sessionStorage.getItem('introPlayed');
  });

  useEffect(() => {
    setEnableEffects(shouldEnableEffects());
  }, []);

  const handleWelcomeComplete = () => {
    sessionStorage.setItem('introPlayed', 'true');
    setShowWelcome(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Welcome overlay - plays once per session */}
      <AnimatePresence>
        {showWelcome && <WelcomeOverlay onComplete={handleWelcomeComplete} />}
      </AnimatePresence>

      {/* After welcome: show auth gate or main content */}
      {!showWelcome && (
        <>
          <SignedOut>
            <AuthGate />
          </SignedOut>

          <SignedIn>
            {enableEffects && <MagneticCursor />}
            <Navbar
              onMenuClick={() => setSidebarOpen(true)}
              onSearchClick={() => setCommandOpen(true)}
            />
            <Sidebar
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
            <main className="pt-16 lg:pl-72">
              <div className="container max-w-5xl py-8 px-4 lg:px-8">
                <Outlet />
              </div>
              <SiteFooter />
            </main>
            <CommandPalette
              open={commandOpen}
              onOpenChange={setCommandOpen}
            />
          </SignedIn>
        </>
      )}
    </div>
  );
}
