import { useState } from 'react';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Home, Settings, Users, Mail, Bell, Search, Menu, X, ChevronLeft, ChevronRight,
  LayoutDashboard, FileText, Calendar, BarChart3, HelpCircle, LogOut, Star
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarCode = `import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Settings, Users } from 'lucide-react';

export function AnimatedSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const menuItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: Users, label: 'Team' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 64 : 240 }}
      className="h-full bg-background border-r"
    >
      {menuItems.map((item, i) => (
        <motion.a
          key={item.label}
          href="#"
          className="flex items-center gap-3 px-4 py-3 hover:bg-muted"
          whileHover={{ x: 4 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <item.icon className="h-5 w-5" />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
              >
                {item.label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      ))}
    </motion.aside>
  );
}`;

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Team' },
  { icon: FileText, label: 'Documents' },
  { icon: Calendar, label: 'Calendar' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Mail, label: 'Messages', badge: 3 },
  { icon: Settings, label: 'Settings' },
];

const variants = [
  {
    name: 'Collapsible Desktop',
    preview: (() => {
      const CollapsibleSidebar = () => {
        const [isCollapsed, setIsCollapsed] = useState(false);
        const [activeItem, setActiveItem] = useState('Dashboard');

        return (
          <div className="flex h-[400px] w-full overflow-hidden rounded-lg border bg-muted/30">
            <motion.aside
              initial={false}
              animate={{ width: isCollapsed ? 64 : 240 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="h-full bg-background border-r flex flex-col"
            >
              <div className="p-4 border-b flex items-center justify-between">
                <AnimatePresence mode="wait">
                  {!isCollapsed && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="flex items-center gap-2"
                    >
                      <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                        <Star className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="font-semibold">Brand</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="h-8 w-8"
                >
                  {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                </Button>
              </div>
              
              <div className="flex-1 py-4">
                {menuItems.map((item, i) => (
                  <motion.button
                    key={item.label}
                    onClick={() => setActiveItem(item.label)}
                    className={cn(
                      'flex items-center w-full px-4 py-3 text-sm transition-colors relative',
                      activeItem === item.label
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                    whileHover={{ x: isCollapsed ? 0 : 4 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {activeItem === item.label && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"
                      />
                    )}
                    <item.icon className="h-5 w-5 min-w-5" />
                    <AnimatePresence mode="wait">
                      {!isCollapsed && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: 'auto' }}
                          exit={{ opacity: 0, width: 0 }}
                          className="ml-3 whitespace-nowrap overflow-hidden"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                    {item.badge && !isCollapsed && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5"
                      >
                        {item.badge}
                      </motion.span>
                    )}
                  </motion.button>
                ))}
              </div>
              
              <div className="border-t p-4">
                <motion.button
                  className="flex items-center w-full text-sm text-muted-foreground hover:text-foreground"
                  whileHover={{ x: isCollapsed ? 0 : 4 }}
                >
                  <LogOut className="h-5 w-5 min-w-5" />
                  <AnimatePresence>
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        className="ml-3 whitespace-nowrap"
                      >
                        Sign Out
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </motion.aside>
            
            <div className="flex-1 p-6">
              <h2 className="text-xl font-semibold mb-2">{activeItem}</h2>
              <p className="text-sm text-muted-foreground">
                Click the arrow to collapse/expand the sidebar
              </p>
            </div>
          </div>
        );
      };
      return <CollapsibleSidebar />;
    })(),
    code: sidebarCode,
  },
  {
    name: 'Mobile Slide-in',
    preview: (() => {
      const MobileSidebar = () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg border bg-muted/30">
            <div className="p-4 border-b bg-background flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
              <span className="font-semibold">Mobile App</span>
            </div>
            
            <div className="p-6">
              <p className="text-sm text-muted-foreground">
                Click the menu icon to open the sidebar
              </p>
            </div>
            
            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                  />
                  <motion.aside
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="absolute left-0 top-0 bottom-0 w-64 bg-background border-r shadow-xl"
                  >
                    <div className="p-4 border-b flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                          <Star className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className="font-semibold">Brand</span>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    <div className="py-4">
                      {menuItems.map((item, i) => (
                        <motion.button
                          key={item.label}
                          className="flex items-center w-full px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ x: 4 }}
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon className="h-5 w-5 mr-3" />
                          {item.label}
                          {item.badge && (
                            <span className="ml-auto bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5">
                              {item.badge}
                            </span>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.aside>
                </>
              )}
            </AnimatePresence>
          </div>
        );
      };
      return <MobileSidebar />;
    })(),
    code: `// Mobile slide-in sidebar with overlay`,
  },
  {
    name: 'Icon-Only Hover Expand',
    preview: (() => {
      const HoverSidebar = () => {
        const [isHovered, setIsHovered] = useState(false);
        const [activeItem, setActiveItem] = useState('Dashboard');

        return (
          <div className="flex h-[400px] w-full overflow-hidden rounded-lg border bg-muted/30">
            <motion.aside
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={false}
              animate={{ width: isHovered ? 200 : 64 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="h-full bg-background border-r flex flex-col"
            >
              <div className="p-3 border-b flex items-center justify-center">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <Star className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              
              <div className="flex-1 py-2">
                {menuItems.slice(0, 5).map((item, i) => (
                  <motion.button
                    key={item.label}
                    onClick={() => setActiveItem(item.label)}
                    className={cn(
                      'flex items-center w-full px-5 py-3 text-sm transition-colors',
                      activeItem === item.label
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="h-5 w-5 min-w-5" />
                    <AnimatePresence>
                      {isHovered && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.15 }}
                          className="ml-3 whitespace-nowrap"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}
              </div>
              
              <div className="border-t p-3">
                <motion.button
                  className="flex items-center justify-center w-full p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HelpCircle className="h-5 w-5" />
                </motion.button>
              </div>
            </motion.aside>
            
            <div className="flex-1 p-6">
              <h2 className="text-xl font-semibold mb-2">{activeItem}</h2>
              <p className="text-sm text-muted-foreground">
                Hover over the sidebar to expand it
              </p>
            </div>
          </div>
        );
      };
      return <HoverSidebar />;
    })(),
    code: `// Icon-only sidebar that expands on hover`,
  },
  {
    name: 'Staggered Animation',
    preview: (() => {
      const StaggeredSidebar = () => {
        const [showMenu, setShowMenu] = useState(true);

        const container = {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        };

        const item = {
          hidden: { opacity: 0, x: -20 },
          show: { opacity: 1, x: 0 }
        };

        return (
          <div className="flex flex-col h-[400px] w-full overflow-hidden rounded-lg border bg-muted/30">
            <div className="p-4 border-b bg-background">
              <Button onClick={() => setShowMenu(!showMenu)} size="sm">
                {showMenu ? 'Hide Menu' : 'Show Menu'}
              </Button>
            </div>
            
            <div className="flex flex-1">
              <AnimatePresence>
                {showMenu && (
                  <motion.aside
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="h-full bg-background border-r overflow-hidden"
                  >
                    <motion.div
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="py-4"
                    >
                      {menuItems.map((menuItem) => (
                        <motion.button
                          key={menuItem.label}
                          variants={item}
                          className="flex items-center w-full px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                          whileHover={{ x: 4, backgroundColor: 'hsl(var(--muted))' }}
                        >
                          <menuItem.icon className="h-5 w-5 mr-3" />
                          {menuItem.label}
                        </motion.button>
                      ))}
                    </motion.div>
                  </motion.aside>
                )}
              </AnimatePresence>
              
              <div className="flex-1 p-6">
                <p className="text-sm text-muted-foreground">
                  Toggle the sidebar to see staggered animations
                </p>
              </div>
            </div>
          </div>
        );
      };
      return <StaggeredSidebar />;
    })(),
    code: `// Sidebar with staggered menu item animations`,
  },
];

export function AnimatedSidebarPage() {
  return (
    <ComponentShowcase
      title="Animated Sidebar"
      description="Responsive sidebars with smooth animations, collapsible states, and mobile-friendly slide-in menus."
      preview={variants[0].preview}
      code={variants[0].code}
      variants={variants}
      filename="AnimatedSidebar.tsx"
    />
  );
}
