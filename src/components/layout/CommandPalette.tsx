import { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { DialogTitle, DialogDescription } from '@/components/ui/dialog';
import {
  Navigation,
  FormInput,
  Table2,
  MessageSquare,
  Layers,
  Megaphone,
  Lock,
  Home,
  BookOpen,
  FileCode,
  Moon,
  Sun,
  Monitor,
  Search,
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { soundManager } from '@/lib/sound';
import { prefersReducedMotion } from '@/lib/motion';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const components = [
  // Navigation
  { name: 'Navbar', path: '/components/navbar', category: 'Navigation', icon: Navigation },
  { name: 'Sidebar', path: '/components/sidebar', category: 'Navigation', icon: Navigation },
  { name: 'Tabs', path: '/components/tabs', category: 'Navigation', icon: Navigation },
  { name: 'Pagination', path: '/components/pagination', category: 'Navigation', icon: Navigation },
  
  // Forms
  { name: 'Button', path: '/components/button', category: 'Forms', icon: FormInput },
  { name: 'Input', path: '/components/input', category: 'Forms', icon: FormInput },
  { name: 'Select', path: '/components/select', category: 'Forms', icon: FormInput },
  { name: 'Checkbox', path: '/components/checkbox', category: 'Forms', icon: FormInput },
  { name: 'Switch', path: '/components/switch', category: 'Forms', icon: FormInput },
  
  // Data Display
  { name: 'Card', path: '/components/card', category: 'Data Display', icon: Table2 },
  { name: 'Table', path: '/components/table', category: 'Data Display', icon: Table2 },
  { name: 'Badge', path: '/components/badge', category: 'Data Display', icon: Table2 },
  { name: 'Avatar', path: '/components/avatar', category: 'Data Display', icon: Table2 },
  
  // Feedback
  { name: 'Alert', path: '/components/alert', category: 'Feedback', icon: MessageSquare },
  { name: 'Toast', path: '/components/toast', category: 'Feedback', icon: MessageSquare },
  { name: 'Progress', path: '/components/progress', category: 'Feedback', icon: MessageSquare },
  
  // Overlays
  { name: 'Dialog', path: '/components/dialog', category: 'Overlays', icon: Layers },
  { name: 'Drawer', path: '/components/drawer', category: 'Overlays', icon: Layers },
  { name: 'Dropdown Menu', path: '/components/dropdown-menu', category: 'Overlays', icon: Layers },
  { name: 'Sheet', path: '/components/sheet', category: 'Overlays', icon: Layers },
  { name: 'Tooltip', path: '/components/tooltip', category: 'Overlays', icon: Layers },
  
  // Marketing
  { name: 'Hero Section', path: '/components/hero-section', category: 'Marketing', icon: Megaphone },
  { name: 'Pricing', path: '/components/pricing', category: 'Marketing', icon: Megaphone },
  { name: 'Features', path: '/components/features', category: 'Marketing', icon: Megaphone },
  
  // Auth
  { name: 'Login Form', path: '/components/login-form', category: 'Authentication', icon: Lock },
  { name: 'Signup Form', path: '/components/signup-form', category: 'Authentication', icon: Lock },
];

const quickLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Documentation', path: '/docs', icon: BookOpen },
  { name: 'Getting Started', path: '/docs/getting-started', icon: FileCode },
];

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [searchValue, setSearchValue] = useState('');
  const reduced = prefersReducedMotion();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        const newOpen = !open;
        onOpenChange(newOpen);
        soundManager.play(newOpen ? 'open' : 'close');
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, onOpenChange]);

  const handleSelect = useCallback((path: string) => {
    soundManager.play('click');
    navigate(path);
    onOpenChange(false);
    setSearchValue('');
  }, [navigate, onOpenChange]);

  const handleThemeChange = useCallback((newTheme: 'light' | 'dark' | 'system') => {
    soundManager.play('toggle');
    setTheme(newTheme);
    onOpenChange(false);
  }, [setTheme, onOpenChange]);

  const groupedComponents = useMemo(() => {
    const groups: Record<string, typeof components> = {};
    components.forEach((component) => {
      if (!groups[component.category]) {
        groups[component.category] = [];
      }
      groups[component.category].push(component);
    });
    return groups;
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduced ? 0 : i * 0.02,
        duration: reduced ? 0 : 0.2,
      },
    }),
  };

  return (
    <CommandDialog open={open} onOpenChange={(newOpen) => {
      onOpenChange(newOpen);
      if (!newOpen) {
        soundManager.play('close');
        setSearchValue('');
      }
    }}>
      <VisuallyHidden.Root>
        <DialogTitle>Command Palette</DialogTitle>
        <DialogDescription>Search components, navigate, or change settings</DialogDescription>
      </VisuallyHidden.Root>
      <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <CommandInput 
            placeholder="Search components, pages, settings..." 
            value={searchValue}
            onValueChange={setSearchValue}
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          />
          <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            ESC
          </kbd>
        </div>
        <CommandList className="max-h-[400px]">
          <CommandEmpty>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 text-center text-sm"
            >
              No results found.
            </motion.div>
          </CommandEmpty>
          
          <CommandGroup heading="Quick Links">
            {quickLinks.map((link, i) => (
              <motion.div
                key={link.path}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <CommandItem
                  value={link.name}
                  onSelect={() => handleSelect(link.path)}
                  className="gap-3 cursor-pointer"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-md border bg-background">
                    <link.icon className="h-4 w-4" />
                  </div>
                  <span>{link.name}</span>
                </CommandItem>
              </motion.div>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => handleThemeChange('light')} className="gap-3 cursor-pointer">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border bg-background">
                <Sun className="h-4 w-4" />
              </div>
              <span>Light Mode</span>
              {theme === 'light' && <span className="ml-auto text-xs text-primary">Active</span>}
            </CommandItem>
            <CommandItem onSelect={() => handleThemeChange('dark')} className="gap-3 cursor-pointer">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border bg-background">
                <Moon className="h-4 w-4" />
              </div>
              <span>Dark Mode</span>
              {theme === 'dark' && <span className="ml-auto text-xs text-primary">Active</span>}
            </CommandItem>
            <CommandItem onSelect={() => handleThemeChange('system')} className="gap-3 cursor-pointer">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border bg-background">
                <Monitor className="h-4 w-4" />
              </div>
              <span>System</span>
              {theme === 'system' && <span className="ml-auto text-xs text-primary">Active</span>}
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          {Object.entries(groupedComponents).map(([category, items], categoryIndex) => (
            <CommandGroup key={category} heading={category}>
              {items.map((component, i) => (
                <motion.div
                  key={component.path}
                  custom={categoryIndex * 5 + i}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                >
                  <CommandItem
                    value={component.name}
                    onSelect={() => handleSelect(component.path)}
                    className="gap-3 cursor-pointer"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border bg-background">
                      <component.icon className="h-4 w-4" />
                    </div>
                    <span>{component.name}</span>
                  </CommandItem>
                </motion.div>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
