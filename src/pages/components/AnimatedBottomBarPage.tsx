import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { motion } from 'framer-motion';
import { Home, Search, Heart, User, Plus, Bell, MessageSquare, Settings, ShoppingBag, Compass, Bookmark, Camera } from 'lucide-react';

const animatedBottomBarCode = `import { motion } from "framer-motion"
import { Home, Search, Heart, User } from "lucide-react"

export function AnimatedBottomBar() {
  const [active, setActive] = useState(0)
  const items = [
    { icon: Home, label: 'Home' },
    { icon: Search, label: 'Search' },
    { icon: Heart, label: 'Likes' },
    { icon: User, label: 'Profile' },
  ]
  
  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-background border-t"
    >
      <div className="flex justify-around items-center h-16">
        {items.map((item, i) => (
          <motion.button
            key={item.label}
            onClick={() => setActive(i)}
            whileTap={{ scale: 0.9 }}
            className="relative flex flex-col items-center"
          >
            <motion.div
              animate={{ y: active === i ? -5 : 0 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <item.icon className={\`h-6 w-6 \${active === i ? 'text-primary' : 'text-muted-foreground'}\`} />
            </motion.div>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  )
}`;

const animatedBottomBarProps = [
  { name: 'items', type: 'NavItem[]', default: '[]', description: 'Navigation items to display' },
  { name: 'activeIndex', type: 'number', default: '0', description: 'Currently active item index' },
  { name: 'variant', type: 'string', default: 'default', description: 'Animation variant style' },
];

const variants = [
  {
    name: 'Bounce Active',
    preview: (
      <div className="w-full max-w-sm mx-auto">
        <motion.nav
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-background border rounded-2xl shadow-lg"
        >
          <div className="flex justify-around items-center h-16 px-4">
            {[
              { icon: Home, label: 'Home', active: true },
              { icon: Search, label: 'Search' },
              { icon: Heart, label: 'Likes' },
              { icon: User, label: 'Profile' },
            ].map((item) => (
              <motion.button
                key={item.label}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center gap-1"
              >
                <motion.div
                  animate={{ y: item.active ? -8 : 0, scale: item.active ? 1.2 : 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <item.icon className={`h-5 w-5 ${item.active ? 'text-primary' : 'text-muted-foreground'}`} />
                </motion.div>
                <span className={`text-[10px] ${item.active ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.nav>
      </div>
    ),
    code: animatedBottomBarCode,
  },
  {
    name: 'Pill Indicator',
    preview: (
      <div className="w-full max-w-sm mx-auto">
        <nav className="bg-background border rounded-2xl shadow-lg">
          <div className="flex justify-around items-center h-16 px-4 relative">
            <motion.div
              layoutId="pill"
              className="absolute h-10 bg-primary/10 rounded-full"
              style={{ width: 60, left: 16 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            {[
              { icon: Home, label: 'Home', active: true },
              { icon: Compass, label: 'Explore' },
              { icon: Bookmark, label: 'Saved' },
              { icon: User, label: 'Profile' },
            ].map((item) => (
              <motion.button
                key={item.label}
                whileTap={{ scale: 0.9 }}
                className="relative z-10 flex flex-col items-center gap-1 w-14"
              >
                <item.icon className={`h-5 w-5 ${item.active ? 'text-primary' : 'text-muted-foreground'}`} />
                <span className={`text-[10px] ${item.active ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    ),
    code: `<motion.div
  layoutId="pill"
  className="absolute h-10 bg-primary/10 rounded-full"
  style={{ width: 60, left: activeIndex * 70 + 16 }}
  transition={{ type: "spring", stiffness: 500, damping: 30 }}
/>`,
  },
  {
    name: 'Floating Action',
    preview: (
      <div className="w-full max-w-sm mx-auto">
        <nav className="bg-background border rounded-2xl shadow-lg relative">
          <div className="flex justify-around items-center h-16 px-4">
            {[
              { icon: Home, active: true },
              { icon: Search },
              { icon: null }, // placeholder for FAB
              { icon: Bell },
              { icon: User },
            ].map((item, i) => (
              item.icon ? (
                <motion.button
                  key={i}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center"
                >
                  <item.icon className={`h-5 w-5 ${item.active ? 'text-primary' : 'text-muted-foreground'}`} />
                </motion.button>
              ) : (
                <div key={i} className="w-12" />
              )
            ))}
          </div>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 h-14 w-14 rounded-full bg-primary flex items-center justify-center shadow-lg"
          >
            <Plus className="h-6 w-6 text-primary-foreground" />
          </motion.button>
        </nav>
      </div>
    ),
    code: `<motion.button
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="absolute -top-6 left-1/2 -translate-x-1/2 h-14 w-14 rounded-full bg-primary"
>
  <Plus className="h-6 w-6 text-primary-foreground" />
</motion.button>`,
  },
  {
    name: 'Dot Indicator',
    preview: (
      <div className="w-full max-w-sm mx-auto">
        <nav className="bg-background border rounded-2xl shadow-lg">
          <div className="flex justify-around items-center h-16 px-4">
            {[
              { icon: Home, active: true },
              { icon: Search },
              { icon: Heart },
              { icon: User },
            ].map((item, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center gap-1.5"
              >
                <item.icon className={`h-5 w-5 ${item.active ? 'text-primary' : 'text-muted-foreground'}`} />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: item.active ? 1 : 0 }}
                  className="h-1 w-1 rounded-full bg-primary"
                />
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    ),
    code: `<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: active ? 1 : 0 }}
  className="h-1 w-1 rounded-full bg-primary"
/>`,
  },
  {
    name: 'Label Slide',
    preview: (
      <div className="w-full max-w-sm mx-auto">
        <nav className="bg-background border rounded-2xl shadow-lg">
          <div className="flex justify-around items-center h-16 px-2">
            {[
              { icon: Home, label: 'Home', active: true },
              { icon: Search, label: 'Search' },
              { icon: Heart, label: 'Likes' },
              { icon: User, label: 'Profile' },
            ].map((item) => (
              <motion.button
                key={item.label}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-3 py-2 rounded-full ${item.active ? 'bg-primary/10' : ''}`}
              >
                <item.icon className={`h-5 w-5 ${item.active ? 'text-primary' : 'text-muted-foreground'}`} />
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: item.active ? 'auto' : 0, opacity: item.active ? 1 : 0 }}
                  className={`text-xs font-medium overflow-hidden ${item.active ? 'text-primary' : ''}`}
                >
                  {item.label}
                </motion.span>
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    ),
    code: `<motion.span
  initial={{ width: 0, opacity: 0 }}
  animate={{ width: active ? 'auto' : 0, opacity: active ? 1 : 0 }}
  className="text-xs font-medium overflow-hidden"
>
  {item.label}
</motion.span>`,
  },
  {
    name: 'Glass Style',
    preview: (
      <div className="w-full max-w-sm mx-auto">
        <motion.nav
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-slate-900/80 backdrop-blur-lg border border-slate-700 rounded-full mx-4"
        >
          <div className="flex justify-around items-center h-14 px-4">
            {[
              { icon: Home, active: true },
              { icon: Compass },
              { icon: Camera },
              { icon: User },
            ].map((item, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon className={`h-5 w-5 ${item.active ? 'text-white' : 'text-slate-400'}`} />
              </motion.button>
            ))}
          </div>
        </motion.nav>
      </div>
    ),
    code: `<motion.nav
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  className="bg-slate-900/80 backdrop-blur-lg border border-slate-700 rounded-full"
>
  ...
</motion.nav>`,
  },
  {
    name: 'Ripple Effect',
    preview: (
      <div className="w-full max-w-sm mx-auto">
        <nav className="bg-background border rounded-2xl shadow-lg">
          <div className="flex justify-around items-center h-16 px-4">
            {[
              { icon: Home, active: true },
              { icon: ShoppingBag },
              { icon: MessageSquare },
              { icon: Settings },
            ].map((item, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.9 }}
                className="relative flex flex-col items-center p-2 rounded-full overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-primary/20 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileTap={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <item.icon className={`h-5 w-5 relative z-10 ${item.active ? 'text-primary' : 'text-muted-foreground'}`} />
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    ),
    code: `<motion.span
  className="absolute inset-0 bg-primary/20 rounded-full"
  initial={{ scale: 0, opacity: 0 }}
  whileTap={{ scale: 2, opacity: 0 }}
  transition={{ duration: 0.5 }}
/>`,
  },
  {
    name: 'Icon Scale',
    preview: (
      <div className="w-full max-w-sm mx-auto">
        <nav className="bg-background border rounded-2xl shadow-lg">
          <div className="flex justify-around items-center h-16 px-4">
            {[
              { icon: Home, active: true },
              { icon: Search },
              { icon: Bell },
              { icon: User },
            ].map((item, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div animate={{ scale: item.active ? 1.2 : 1 }}>
                  <item.icon className={`h-5 w-5 ${item.active ? 'text-primary' : 'text-muted-foreground'}`} />
                </motion.div>
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    ),
    code: `<motion.button
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.8 }}
  transition={{ type: "spring", stiffness: 400 }}
>
  <motion.div animate={{ scale: active ? 1.2 : 1 }}>
    <Icon className="h-5 w-5" />
  </motion.div>
</motion.button>`,
  },
  {
    name: 'Badge Notification',
    preview: (
      <div className="w-full max-w-sm mx-auto">
        <nav className="bg-background border rounded-2xl shadow-lg">
          <div className="flex justify-around items-center h-16 px-4">
            {[
              { icon: Home },
              { icon: MessageSquare, badge: 5 },
              { icon: Bell, badge: 12 },
              { icon: User },
            ].map((item, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <item.icon className="h-5 w-5 text-muted-foreground" />
                {item.badge && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 h-4 min-w-4 px-1 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center"
                  >
                    {item.badge}
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    ),
    code: `{item.badge && (
  <motion.span
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    className="absolute -top-1 -right-1 h-4 min-w-4 px-1 bg-red-500 text-white text-[10px] rounded-full"
  >
    {item.badge}
  </motion.span>
)}`,
  },
  {
    name: 'Slide Up',
    preview: (
      <div className="w-full max-w-sm mx-auto">
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="bg-background border rounded-2xl shadow-lg"
        >
          <div className="flex justify-around items-center h-16 px-4">
            {[
              { icon: Home, delay: 0.3 },
              { icon: Search, delay: 0.4 },
              { icon: Heart, delay: 0.5 },
              { icon: User, delay: 0.6 },
            ].map((item) => (
              <motion.button
                key={item.delay}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: item.delay }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon className="h-5 w-5 text-muted-foreground" />
              </motion.button>
            ))}
          </div>
        </motion.nav>
      </div>
    ),
    code: `<motion.nav
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.2, type: "spring" }}
>
  {items.map((item, i) => (
    <motion.button
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 + i * 0.1 }}
    >
      <item.icon />
    </motion.button>
  ))}
</motion.nav>`,
  },
];

export function AnimatedBottomBarPage() {
  return (
    <ComponentShowcase
      title="Animated Bottom Bars"
      description="Mobile navigation bars with smooth animations, indicators, and micro-interactions."
      preview={variants[0].preview}
      code={animatedBottomBarCode}
      filename="animated-bottom-bar.tsx"
      usage={`Animated bottom bars enhance mobile navigation.

• Use spring animations for bounce effects
• Add pill/dot indicators for active state
• Consider floating action buttons
• Animate badges for notifications
• Keep total nav items to 4-5 max`}
      props={animatedBottomBarProps}
      variants={variants}
    />
  );
}
