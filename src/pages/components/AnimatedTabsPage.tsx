import { useState } from 'react';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { 
  Home, User, Settings, Bell, Mail, Star, Heart, 
  Code, Palette, Layers, Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

const tabsCode = `import { useState } from 'react';
import { motion } from 'framer-motion';

const tabs = ['Home', 'Profile', 'Settings'];

export function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState('Home');
  
  return (
    <div className="flex gap-1 bg-muted p-1 rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className="relative px-4 py-2 text-sm"
        >
          {activeTab === tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-background rounded-md shadow-sm"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}`;

const variants = [
  {
    name: 'Underline',
    preview: (() => {
      const UnderlineTabs = () => {
        const [activeTab, setActiveTab] = useState('overview');
        const tabs = [
          { id: 'overview', label: 'Overview', icon: Home },
          { id: 'analytics', label: 'Analytics', icon: Zap },
          { id: 'reports', label: 'Reports', icon: Layers },
          { id: 'settings', label: 'Settings', icon: Settings },
        ];
        
        const tabContent: Record<string, string> = {
          overview: 'Welcome to your dashboard. Here you can see an overview of all your activities and quick stats.',
          analytics: 'Dive deep into your analytics. Track user engagement, conversion rates, and more.',
          reports: 'Generate and download detailed reports. Schedule automated reports for your team.',
          settings: 'Customize your preferences, manage notifications, and configure your account.',
        };
        
        return (
          <div className="w-full max-w-xl">
            <div className="relative border-b">
              <div className="flex gap-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "relative flex items-center gap-2 py-3 text-sm font-medium transition-colors",
                      activeTab === tab.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="py-6"
              >
                <p className="text-muted-foreground">{tabContent[activeTab]}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        );
      };
      return <UnderlineTabs />;
    })(),
    code: tabsCode,
  },
  {
    name: 'Pill',
    preview: (() => {
      const PillTabs = () => {
        const [activeTab, setActiveTab] = useState('all');
        const tabs = ['All', 'Active', 'Draft', 'Archived'];
        
        return (
          <div className="w-full max-w-md">
            <div className="flex gap-1 p-1 rounded-lg bg-muted">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={cn(
                    "relative flex-1 py-2 text-sm font-medium transition-colors rounded-md",
                    activeTab === tab.toLowerCase() 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {activeTab === tab.toLowerCase() && (
                    <motion.div
                      layoutId="pillBg"
                      className="absolute inset-0 bg-background rounded-md shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mt-6 p-4 rounded-lg border bg-card"
              >
                <p className="text-sm text-muted-foreground">
                  Showing {activeTab} items...
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        );
      };
      return <PillTabs />;
    })(),
    code: `// Pill style tabs with background animation`,
  },
  {
    name: 'Vertical',
    preview: (() => {
      const VerticalTabs = () => {
        const [activeTab, setActiveTab] = useState('profile');
        const tabs = [
          { id: 'profile', label: 'Profile', icon: User },
          { id: 'notifications', label: 'Notifications', icon: Bell, badge: 3 },
          { id: 'messages', label: 'Messages', icon: Mail, badge: 12 },
          { id: 'favorites', label: 'Favorites', icon: Heart },
        ];
        
        return (
          <div className="flex gap-6 w-full max-w-lg">
            <div className="w-48 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-colors",
                    activeTab === tab.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="verticalBg"
                      className="absolute inset-0 bg-primary/10 rounded-lg"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-3">
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </span>
                  {tab.badge && (
                    <span className="relative z-10 bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5">
                      {tab.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
            
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-4 rounded-lg border bg-card h-full"
                >
                  <h4 className="font-semibold capitalize mb-2">{activeTab}</h4>
                  <p className="text-sm text-muted-foreground">
                    Content for the {activeTab} section goes here.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        );
      };
      return <VerticalTabs />;
    })(),
    code: `// Vertical tabs with animated background`,
  },
  {
    name: 'Icon Only',
    preview: (() => {
      const IconTabs = () => {
        const [activeTab, setActiveTab] = useState(0);
        const tabs = [
          { icon: Home, label: 'Home' },
          { icon: Code, label: 'Code' },
          { icon: Palette, label: 'Design' },
          { icon: Star, label: 'Favorites' },
          { icon: Settings, label: 'Settings' },
        ];
        
        return (
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-2 p-2 rounded-full bg-muted">
              {tabs.map((tab, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    "relative p-3 rounded-full transition-colors",
                    activeTab === i ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeTab === i && (
                    <motion.div
                      layoutId="iconBg"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <tab.icon className="h-5 w-5 relative z-10" />
                </motion.button>
              ))}
            </div>
            
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h4 className="font-semibold">{tabs[activeTab].label}</h4>
            </motion.div>
          </div>
        );
      };
      return <IconTabs />;
    })(),
    code: `// Icon-only tabs with circular background`,
  },
  {
    name: 'Framed',
    preview: (() => {
      const FramedTabs = () => {
        const [activeTab, setActiveTab] = useState(0);
        const tabs = ['Features', 'Pricing', 'FAQ'];
        
        return (
          <div className="w-full max-w-md">
            <div className="relative flex border rounded-lg overflow-hidden">
              <motion.div
                className="absolute top-0 bottom-0 bg-primary"
                animate={{ 
                  left: `${(activeTab / tabs.length) * 100}%`,
                  width: `${100 / tabs.length}%`
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    "relative flex-1 py-3 text-sm font-medium transition-colors z-10",
                    activeTab === i ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 p-6 rounded-lg border bg-card"
              >
                <h4 className="font-semibold mb-2">{tabs[activeTab]}</h4>
                <p className="text-sm text-muted-foreground">
                  Content for {tabs[activeTab].toLowerCase()} section.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        );
      };
      return <FramedTabs />;
    })(),
    code: `// Framed tabs with sliding background`,
  },
  {
    name: 'Expanding',
    preview: (() => {
      const ExpandingTabs = () => {
        const [activeTab, setActiveTab] = useState<number | null>(null);
        const tabs = [
          { icon: Zap, label: 'Speed', desc: 'Lightning fast performance' },
          { icon: Layers, label: 'Scale', desc: 'Grows with your needs' },
          { icon: Star, label: 'Quality', desc: 'Premium experience' },
        ];
        
        return (
          <div className="flex gap-2">
            {tabs.map((tab, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveTab(activeTab === i ? null : i)}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-xl border transition-colors",
                  activeTab === i ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted"
                )}
                animate={{ width: activeTab === i ? 200 : 60 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              >
                <tab.icon className="h-5 w-5 min-w-5" />
                <AnimatePresence>
                  {activeTab === i && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      className="overflow-hidden whitespace-nowrap"
                    >
                      <div className="text-sm font-medium">{tab.label}</div>
                      <div className="text-xs opacity-80">{tab.desc}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        );
      };
      return <ExpandingTabs />;
    })(),
    code: `// Expanding tabs that reveal content on click`,
  },
];

export function AnimatedTabsPage() {
  return (
    <ComponentShowcase
      title="Animated Tabs"
      description="Smooth tab transitions with shared element animations, sliding indicators, and content transitions."
      preview={variants[0].preview}
      code={variants[0].code}
      variants={variants}
      filename="AnimatedTabs.tsx"
    />
  );
}
