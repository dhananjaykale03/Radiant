import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Bell, User, ChevronDown, Home, Settings, LogOut, ShoppingCart, Heart, Sparkles } from 'lucide-react';
import { useState } from 'react';

const animatedNavbarCode = `import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function AnimatedNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur border-b"
    >
      <div className="container flex items-center justify-between h-16">
        <motion.div whileHover={{ scale: 1.05 }}>
          <span className="font-bold text-xl">Logo</span>
        </motion.div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }}>
                <X />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }}>
                <Menu />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.nav>
  )
}`;

const animatedNavbarProps = [
  { name: 'fixed', type: 'boolean', default: 'true', description: 'Whether navbar is fixed to top' },
  { name: 'transparent', type: 'boolean', default: 'false', description: 'Transparent background until scroll' },
  { name: 'animated', type: 'boolean', default: 'true', description: 'Enable entrance animations' },
];

const NavLink = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.a
    href="#"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ y: -2 }}
    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
  >
    {children}
  </motion.a>
);

const variants = [
  {
    name: 'Slide Down',
    preview: (
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-background border-b rounded-t-xl"
      >
        <div className="flex items-center justify-between h-14 px-6">
          <motion.span whileHover={{ scale: 1.05 }} className="font-bold">Logo</motion.span>
          <div className="flex gap-6">
            <NavLink delay={0.1}>Home</NavLink>
            <NavLink delay={0.2}>Features</NavLink>
            <NavLink delay={0.3}>Pricing</NavLink>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <Button size="sm">Sign Up</Button>
          </motion.div>
        </div>
      </motion.nav>
    ),
    code: animatedNavbarCode,
  },
  {
    name: 'Fade In Links',
    preview: (
      <nav className="w-full bg-background border-b rounded-t-xl">
        <div className="flex items-center justify-between h-14 px-6">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold"
          >
            Brand
          </motion.span>
          <div className="flex gap-6">
            {['Home', 'About', 'Services', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>
    ),
    code: `{['Home', 'About', 'Services', 'Contact'].map((item, i) => (
  <motion.a
    key={item}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 + i * 0.1 }}
  >
    {item}
  </motion.a>
))}`,
  },
  {
    name: 'Hover Underline',
    preview: (
      <nav className="w-full bg-background border-b rounded-t-xl">
        <div className="flex items-center justify-between h-14 px-6">
          <span className="font-bold">Logo</span>
          <div className="flex gap-6">
            {['Home', 'Products', 'About', 'Blog'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="relative text-sm text-muted-foreground hover:text-foreground"
                whileHover="hover"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  initial={{ scaleX: 0 }}
                  variants={{ hover: { scaleX: 1 } }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </nav>
    ),
    code: `<motion.a whileHover="hover" className="relative">
  {item}
  <motion.span
    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
    initial={{ scaleX: 0 }}
    variants={{ hover: { scaleX: 1 } }}
    transition={{ duration: 0.2 }}
  />
</motion.a>`,
  },
  {
    name: 'Search Expand',
    preview: (
      <nav className="w-full bg-background border-b rounded-t-xl">
        <div className="flex items-center justify-between h-14 px-6">
          <span className="font-bold">Logo</span>
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ width: 40 }}
              whileHover={{ width: 200 }}
              className="relative overflow-hidden"
            >
              <Input placeholder="Search..." className="pr-8" />
              <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </motion.div>
            <Bell className="h-5 w-5 text-muted-foreground" />
            <User className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </nav>
    ),
    code: `<motion.div
  initial={{ width: 40 }}
  whileHover={{ width: 200 }}
  className="relative overflow-hidden"
>
  <Input placeholder="Search..." className="pr-8" />
  <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4" />
</motion.div>`,
  },
  {
    name: 'Glass Effect',
    preview: (
      <motion.nav
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
        className="w-full bg-background/70 backdrop-blur-lg border-b rounded-t-xl"
      >
        <div className="flex items-center justify-between h-14 px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-bold">Acme</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <Button variant="ghost" size="sm">Features</Button>
            <Button variant="ghost" size="sm">Pricing</Button>
            <Button size="sm">Get Started</Button>
          </motion.div>
        </div>
      </motion.nav>
    ),
    code: `<motion.nav
  initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
  animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
  className="bg-background/70 backdrop-blur-lg"
>
  ...
</motion.nav>`,
  },
  {
    name: 'Menu Toggle',
    preview: (
      <nav className="w-full bg-background border-b rounded-t-xl">
        <div className="flex items-center justify-between h-14 px-6">
          <span className="font-bold">Logo</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-md hover:bg-muted"
          >
            <motion.div
              initial={false}
              animate={{ rotate: 0 }}
              whileTap={{ rotate: 180 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-5 w-5" />
            </motion.div>
          </motion.button>
        </div>
      </nav>
    ),
    code: `<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  <motion.div whileTap={{ rotate: 180 }} transition={{ duration: 0.2 }}>
    <Menu className="h-5 w-5" />
  </motion.div>
</motion.button>`,
  },
  {
    name: 'Dropdown Reveal',
    preview: (
      <nav className="w-full bg-background border-b rounded-t-xl">
        <div className="flex items-center justify-between h-14 px-6">
          <span className="font-bold">Logo</span>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <motion.button
                className="flex items-center gap-1 text-sm"
                whileHover={{ scale: 1.02 }}
              >
                Products
                <motion.span
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </motion.button>
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                whileHover={{ opacity: 1, y: 0, scale: 1 }}
                className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-lg shadow-lg p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity"
              >
                <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-muted">Product A</a>
                <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-muted">Product B</a>
              </motion.div>
            </div>
            <a href="#" className="text-sm">Pricing</a>
          </div>
        </div>
      </nav>
    ),
    code: `<motion.div
  initial={{ opacity: 0, y: 10, scale: 0.95 }}
  whileHover={{ opacity: 1, y: 0, scale: 1 }}
  className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-lg shadow-lg p-2"
>
  <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-muted">Product A</a>
  <a href="#" className="block px-3 py-2 text-sm rounded hover:bg-muted">Product B</a>
</motion.div>`,
  },
  {
    name: 'Icon Bounce',
    preview: (
      <nav className="w-full bg-background border-b rounded-t-xl">
        <div className="flex items-center justify-between h-14 px-6">
          <span className="font-bold">Store</span>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">3</span>
            </motion.button>
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center"
              >
                2
              </motion.span>
            </motion.button>
          </div>
        </div>
      </nav>
    ),
    code: `<motion.button
  whileHover={{ y: -3 }}
  whileTap={{ scale: 0.9 }}
  className="relative"
>
  <ShoppingCart className="h-5 w-5" />
  <motion.span
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-[10px] rounded-full"
  >
    2
  </motion.span>
</motion.button>`,
  },
  {
    name: 'Logo Pulse',
    preview: (
      <nav className="w-full bg-background border-b rounded-t-xl">
        <div className="flex items-center justify-between h-14 px-6">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center"
            >
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </motion.div>
            <span className="font-bold">Acme</span>
          </motion.div>
          <div className="flex gap-6">
            {['Home', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground">{item}</a>
            ))}
          </div>
        </div>
      </nav>
    ),
    code: `<motion.div
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
  className="h-8 w-8 rounded-lg bg-primary"
>
  <Sparkles className="h-4 w-4 text-primary-foreground" />
</motion.div>`,
  },
  {
    name: 'Notification Bell',
    preview: (
      <nav className="w-full bg-background border-b rounded-t-xl">
        <div className="flex items-center justify-between h-14 px-6">
          <span className="font-bold">Dashboard</span>
          <div className="flex items-center gap-4">
            <motion.button
              animate={{ rotate: [0, 15, -15, 15, -15, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              className="relative"
            >
              <Bell className="h-5 w-5" />
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
                className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"
              />
            </motion.button>
            <User className="h-5 w-5" />
          </div>
        </div>
      </nav>
    ),
    code: `<motion.button
  animate={{ rotate: [0, 15, -15, 15, -15, 0] }}
  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
  className="relative"
>
  <Bell className="h-5 w-5" />
  <motion.span
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
    className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"
  />
</motion.button>`,
  },
  {
    name: 'Dark Mode Toggle',
    preview: (
      <nav className="w-full bg-slate-900 border-b border-slate-800 rounded-t-xl text-white">
        <div className="flex items-center justify-between h-14 px-6">
          <span className="font-bold">App</span>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-full hover:bg-slate-800"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                🌙
              </motion.div>
            </motion.button>
            <Settings className="h-5 w-5 text-slate-400" />
          </div>
        </div>
      </nav>
    ),
    code: `<motion.button
  whileHover={{ rotate: 180 }}
  transition={{ duration: 0.3 }}
  className="p-2 rounded-full hover:bg-slate-800"
>
  🌙
</motion.button>`,
  },
];

export function AnimatedNavbarPage() {
  return (
    <ComponentShowcase
      title="Animated Navbars"
      description="Navigation bars with entrance animations, hover effects, and interactive elements."
      preview={variants[0].preview}
      code={animatedNavbarCode}
      filename="animated-navbar.tsx"
      usage={`Animated navbars enhance navigation experience.

• Use slide-down entrance on page load
• Add hover underlines for active states
• Animate icons on interaction
• Smooth dropdown reveals
• Consider mobile menu animations`}
      props={animatedNavbarProps}
      variants={variants}
    />
  );
}
