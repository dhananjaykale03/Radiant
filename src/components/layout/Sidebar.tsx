import { useState, useEffect, useMemo } from 'react';
import { useUser, useClerk, SignedIn, SignedOut } from '@clerk/clerk-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutGrid, 
  Navigation, 
  FormInput, 
  Table2, 
  MessageSquare, 
  Layers, 
  BarChart3,
  Lock,
  Sparkles,
  Megaphone,
  PanelBottom,
  ChevronRight,
  X,
  Component,
  Search,
  LogOut,
  User,
  Settings,
  KeyRound,
  LogIn,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';
import { prefersReducedMotion } from '@/lib/motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ComponentCategory {
  name: string;
  icon: React.ElementType;
  items: { name: string; path: string; isNew?: boolean }[];
}

const categories: ComponentCategory[] = [
  {
    name: 'Components',
    icon: Component,
    items: [
      { name: 'Accordion', path: '/components/accordion' },
      { name: 'Alert', path: '/components/alert' },
      { name: 'Alert Dialog', path: '/components/alert-dialog' },
      { name: 'Aspect Ratio', path: '/components/aspect-ratio' },
      { name: 'Avatar', path: '/components/avatar' },
      { name: 'Badge', path: '/components/badge' },
      { name: 'Breadcrumb', path: '/components/breadcrumb' },
      { name: 'Button', path: '/components/button' },
      { name: 'Calendar', path: '/components/calendar' },
      { name: 'Card', path: '/components/card' },
      { name: 'Carousel', path: '/components/carousel' },
      { name: 'Chart', path: '/components/chart' },
      { name: 'Checkbox', path: '/components/checkbox' },
      { name: 'Collapsible', path: '/components/collapsible' },
      { name: 'Combobox', path: '/components/combobox' },
      { name: 'Command', path: '/components/command' },
      { name: 'Context Menu', path: '/components/context-menu' },
      { name: 'Data Table', path: '/components/data-table' },
      { name: 'Date Picker', path: '/components/date-picker' },
      { name: 'Dialog', path: '/components/dialog' },
      { name: 'Drawer', path: '/components/drawer' },
      { name: 'Dropdown Menu', path: '/components/dropdown-menu' },
      { name: 'Form', path: '/components/form' },
      { name: 'Hover Card', path: '/components/hover-card' },
      { name: 'Input', path: '/components/input' },
      { name: 'Input OTP', path: '/components/input-otp' },
      { name: 'Label', path: '/components/label' },
      { name: 'Menubar', path: '/components/menubar' },
      { name: 'Navigation Menu', path: '/components/navigation-menu' },
      { name: 'Pagination', path: '/components/pagination' },
      { name: 'Popover', path: '/components/popover' },
      { name: 'Progress', path: '/components/progress' },
      { name: 'Radio Group', path: '/components/radio-group' },
      { name: 'Resizable', path: '/components/resizable' },
      { name: 'Scroll Area', path: '/components/scroll-area' },
      { name: 'Select', path: '/components/select' },
      { name: 'Separator', path: '/components/separator' },
      { name: 'Sheet', path: '/components/sheet' },
      { name: 'Skeleton', path: '/components/skeleton' },
      { name: 'Slider', path: '/components/slider' },
      { name: 'Sonner', path: '/components/sonner' },
      { name: 'Switch', path: '/components/switch' },
      { name: 'Table', path: '/components/table' },
      { name: 'Tabs', path: '/components/tabs' },
      { name: 'Textarea', path: '/components/textarea' },
      { name: 'Toast', path: '/components/toast' },
      { name: 'Toggle', path: '/components/toggle' },
      { name: 'Toggle Group', path: '/components/toggle-group' },
      { name: 'Tooltip', path: '/components/tooltip' },
    ],
  },
  {
    name: 'Layout',
    icon: LayoutGrid,
    items: [
      { name: 'Dashboard', path: '/components/dashboard', isNew: true },
      { name: 'Footer', path: '/components/footer' },
      { name: 'Sidebar', path: '/components/sidebar' },
      { name: 'Navbar', path: '/components/navbar' },
      { name: 'Bottom Bar', path: '/components/bottom-bar' },
    ],
  },
  {
    name: 'Marketing',
    icon: Megaphone,
    items: [
      { name: 'Hero Section', path: '/components/hero-section' },
      { name: 'Pricing', path: '/components/pricing' },
      { name: 'Testimonials', path: '/components/testimonials' },
      { name: 'Icons', path: '/components/icons' },
    ],
  },
  {
    name: 'Authentication',
    icon: Lock,
    items: [
      { name: 'Login Form', path: '/components/login-form' },
    ],
  },
  {
    name: 'Backend',
    icon: BarChart3,
    items: [
      { name: 'Contact Form', path: '/components/contact-form-backend', isNew: true },
      { name: 'Todo CRUD', path: '/components/todo-crud', isNew: true },
      { name: 'Feedback Widget', path: '/components/feedback-widget', isNew: true },
    ],
  },
  {
    name: 'Animation',
    icon: Sparkles,
    items: [
      { name: 'Animated Background', path: '/components/animated-background' },
      { name: 'Animated Button', path: '/components/animated-button' },
      { name: 'Animated Cards', path: '/components/animated-cards', isNew: true },
      { name: 'Animated Contact', path: '/components/animated-contact', isNew: true },
      { name: 'Animated Hamburger', path: '/components/animated-hamburger', isNew: true },
      { name: 'Animated Hero', path: '/components/animated-hero' },
      { name: 'Animated Icon', path: '/components/animated-icon' },
      { name: 'Animated Icons', path: '/components/animated-icons', isNew: true },
      { name: 'Animated List', path: '/components/animated-list', isNew: true },
      { name: 'Animated Login', path: '/components/animated-login' },
      { name: 'Animated Modal', path: '/components/animated-modal', isNew: true },
      { name: 'Animated Navbar', path: '/components/animated-navbar' },
      { name: 'Animated Bottom Bar', path: '/components/animated-bottom-bar' },
      { name: 'Animated Progress', path: '/components/animated-progress', isNew: true },
      { name: 'Animated Sidebar', path: '/components/animated-sidebar', isNew: true },
      { name: 'Animated Tabs', path: '/components/animated-tabs', isNew: true },
      { name: 'Animated Tooltip', path: '/components/animated-tooltip', isNew: true },
      { name: 'Animated Welcome', path: '/components/animated-welcome' },
    ],
  },
];

function UserProfileSection() {
  const { user, isLoaded } = useUser();
  const { signOut, openUserProfile } = useClerk();
  const navigate = useNavigate();

  if (!isLoaded) return null;

  return (
    <div className="border-t p-3">
      <SignedIn>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-sidebar-accent transition-colors">
              <Avatar className="h-9 w-9 ring-2 ring-primary/20">
                <AvatarImage src={user?.imageUrl} alt={user?.fullName || 'User'} />
                <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                  {user?.firstName?.[0] || user?.emailAddresses?.[0]?.emailAddress?.[0]?.toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left min-w-0">
                <p className="text-sm font-medium truncate">
                  {user?.fullName || user?.emailAddresses?.[0]?.emailAddress || 'User'}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {user?.emailAddresses?.[0]?.emailAddress || ''}
                </p>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="top" className="w-56">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">{user?.fullName || 'User'}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {user?.emailAddresses?.[0]?.emailAddress}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => openUserProfile()} className="gap-2 cursor-pointer">
              <User className="h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => openUserProfile()} className="gap-2 cursor-pointer">
              <Settings className="h-4 w-4" />
              Account Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => openUserProfile()} className="gap-2 cursor-pointer">
              <KeyRound className="h-4 w-4" />
              Change Password
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={() => signOut(() => navigate('/'))} 
              className="gap-2 cursor-pointer text-destructive focus:text-destructive"
            >
              <LogOut className="h-4 w-4" />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SignedIn>
      <SignedOut>
        <Button
          variant="outline"
          className="w-full gap-2"
          onClick={() => navigate('/sign-in')}
        >
          <LogIn className="h-4 w-4" />
          Sign In
        </Button>
      </SignedOut>
    </div>
  );
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const reduced = prefersReducedMotion();
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategories, setOpenCategories] = useState<string[]>(() => {
    const currentCategory = categories.find((cat) =>
      cat.items.some((item) => item.path === location.pathname)
    );
    return currentCategory ? [currentCategory.name] : ['Components'];
  });

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const query = searchQuery.toLowerCase();
    return categories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) =>
          item.name.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.trim()) {
      setOpenCategories(filteredCategories.map((c) => c.name));
    }
  }, [searchQuery, filteredCategories]);

  useEffect(() => {
    if (searchQuery.trim()) return;
    const currentCategory = categories.find(cat => 
      cat.items.some(item => item.path === location.pathname)
    );
    if (currentCategory && !openCategories.includes(currentCategory.name)) {
      setOpenCategories(prev => [...prev, currentCategory.name]);
    }
  }, [location.pathname, searchQuery]);

  const toggleCategory = (name: string) => {
    setOpenCategories((prev) =>
      prev.includes(name)
        ? prev.filter((n) => n !== name)
        : [...prev, name]
    );
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Search Input */}
      <div className="px-3 py-3 border-b">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 h-9"
          />
        </div>
      </div>
      
      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-1">
          {filteredCategories.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">No components found</p>
          ) : (
            filteredCategories.map((category, categoryIndex) => (
              <Collapsible
                key={category.name}
                open={openCategories.includes(category.name)}
                onOpenChange={() => toggleCategory(category.name)}
              >
                <CollapsibleTrigger asChild>
                  <motion.button 
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium hover:bg-sidebar-accent transition-colors"
                    whileHover={reduced ? {} : { x: 2 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className="h-4 w-4 text-muted-foreground" />
                      <span>{category.name}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: openCategories.includes(category.name) ? 90 : 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  </motion.button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <motion.div 
                    className="ml-4 mt-1 space-y-1 border-l pl-4"
                    initial={false}
                  >
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.path}
                        initial={reduced ? false : { opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: reduced ? 0 : itemIndex * 0.05, duration: 0.2 }}
                      >
                        <NavLink
                          to={item.path}
                          onClick={() => {
                            if (window.innerWidth < 1024) onClose();
                          }}
                          className={({ isActive }) =>
                            cn(
                              'flex items-center justify-between rounded-md px-3 py-1.5 text-sm transition-all',
                              isActive
                                ? 'bg-primary/10 text-primary font-medium'
                                : 'text-muted-foreground hover:text-foreground hover:bg-sidebar-accent'
                            )
                          }
                        >
                          <span>{item.name}</span>
                          {item.isNew && (
                            <motion.span 
                              className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: 'spring', stiffness: 500, delay: 0.2 }}
                            >
                              NEW
                            </motion.span>
                          )}
                        </NavLink>
                      </motion.div>
                    ))}
                  </motion.div>
                </CollapsibleContent>
              </Collapsible>
            ))
          )}
        </div>
      </ScrollArea>

      {/* User Profile Section at Bottom */}
      <UserProfileSection />
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-16 z-30 hidden h-[calc(100vh-4rem)] w-72 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:block overflow-hidden">
        <div className="h-full flex flex-col">
          {sidebarContent}
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={onClose}
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed left-0 top-0 z-50 h-full w-72 border-r bg-background lg:hidden overflow-hidden"
            >
              <div className="flex h-16 items-center justify-between border-b px-4">
                <span className="font-semibold">Components</span>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex-1 overflow-hidden h-[calc(100%-4rem)]">
                {sidebarContent}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
