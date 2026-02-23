import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Moon, Sun, Monitor, Github, BookOpen, Menu, Command, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { useMagnetic } from '@/components/motion/MagneticCursor';
import { soundManager } from '@/lib/sound';
import { SettingsPanel } from '@/components/settings/SettingsPanel';

interface NavbarProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export function Navbar({ onMenuClick, onSearchClick }: NavbarProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const magneticProps = useMagnetic(0.2);

  useEffect(() => {
    setSoundEnabled(soundManager.isEnabled());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newEnabled = !soundEnabled;
    soundManager.setEnabled(newEnabled);
    setSoundEnabled(newEnabled);
    if (newEnabled) {
      soundManager.play('toggle');
    }
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    soundManager.play('click');
    setTheme(newTheme);
  };

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm'
          : 'bg-background/50 backdrop-blur-sm border-b border-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
    >
      <div className="flex h-full items-center justify-between px-4 lg:px-6">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <Link to="/" className="flex items-center gap-2 group" {...magneticProps}>
            <motion.div 
              className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <span className="text-primary-foreground font-bold text-sm">UI</span>
            </motion.div>
            <span className="font-semibold text-lg hidden sm:block">
              Radiant
            </span>
          </Link>
        </div>

        {/* Search bar - center */}
        <motion.button
          onClick={() => {
            soundManager.play('open');
            onSearchClick();
          }}
          className="hidden md:flex items-center gap-3 h-10 w-64 lg:w-80 px-4 rounded-xl bg-muted/50 hover:bg-muted border border-transparent hover:border-border text-muted-foreground text-sm transition-all group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...magneticProps}
        >
          <Search className="h-4 w-4 shrink-0" />
          <span className="flex-1 text-left">Search components...</span>
          <kbd className="hidden lg:inline-flex h-5 items-center gap-1 rounded border bg-background px-1.5 font-mono text-xs text-muted-foreground">
            <Command className="h-3 w-3" />K
          </kbd>
        </motion.button>

        {/* Right section */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => {
              soundManager.play('open');
              onSearchClick();
            }}
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Sound toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSound}
            className="hidden sm:flex"
            {...magneticProps}
          >
            {soundEnabled ? (
              <Volume2 className="h-5 w-5" />
            ) : (
              <VolumeX className="h-5 w-5" />
            )}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative" {...magneticProps}>
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36">
              <DropdownMenuLabel>Theme</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleThemeChange('light')} className="gap-2">
                <Sun className="h-4 w-4" />
                Light
                {theme === 'light' && <span className="ml-auto text-xs text-primary">✓</span>}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleThemeChange('dark')} className="gap-2">
                <Moon className="h-4 w-4" />
                Dark
                {theme === 'dark' && <span className="ml-auto text-xs text-primary">✓</span>}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleThemeChange('system')} className="gap-2">
                <Monitor className="h-4 w-4" />
                System
                {theme === 'system' && <span className="ml-auto text-xs text-primary">✓</span>}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" asChild {...magneticProps}>
            <a href="https://github.com/shadcn-ui/ui" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild {...magneticProps}>
            <Link to="/docs">
              <BookOpen className="h-5 w-5" />
            </Link>
          </Button>

          {/* Settings Panel */}
          <SettingsPanel />
        </div>
      </div>
    </motion.header>
  );
}
