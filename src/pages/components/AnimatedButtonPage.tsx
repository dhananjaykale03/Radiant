import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, Check, Sparkles, Send, Download, Play, Heart, Star, Plus, ChevronRight, Zap, Rocket } from 'lucide-react';

const animatedButtonCode = `import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AnimatedButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button>{children}</Button>
    </motion.div>
  )
}`;

const animatedButtonProps = [
  { name: 'hoverScale', type: 'number', default: '1.05', description: 'Scale factor on hover' },
  { name: 'tapScale', type: 'number', default: '0.95', description: 'Scale factor on tap/click' },
  { name: 'animationType', type: 'string', default: 'scale', description: 'Type of animation (scale, glow, slide, etc.)' },
];

const variants = [
  {
    name: 'Scale',
    preview: (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button size="lg">Hover Me</Button>
      </motion.div>
    ),
    code: animatedButtonCode,
  },
  {
    name: 'Lift',
    preview: (
      <motion.div
        whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)' }}
        whileTap={{ y: 0 }}
        className="rounded-md"
      >
        <Button size="lg">Lift Effect</Button>
      </motion.div>
    ),
    code: `<motion.div
  whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
  whileTap={{ y: 0 }}
>
  <Button>Lift Effect</Button>
</motion.div>`,
  },
  {
    name: 'Glow',
    preview: (
      <motion.div
        whileHover={{ boxShadow: '0 0 30px hsl(262, 83%, 58%)' }}
        className="rounded-md"
      >
        <Button size="lg" className="bg-primary">Glow Effect</Button>
      </motion.div>
    ),
    code: `<motion.div
  whileHover={{ boxShadow: '0 0 30px hsl(var(--primary))' }}
  className="rounded-md"
>
  <Button>Glow Effect</Button>
</motion.div>`,
  },
  {
    name: 'Bounce',
    preview: (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button size="lg">Bouncy</Button>
      </motion.div>
    ),
    code: `<motion.div
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
  <Button>Bouncy</Button>
</motion.div>`,
  },
  {
    name: 'Arrow Slide',
    preview: (
      <Button size="lg" className="group">
        Get Started
        <motion.span
          className="inline-block ml-2"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
        >
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </motion.span>
      </Button>
    ),
    code: `<Button className="group">
  Get Started
  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
</Button>`,
  },
  {
    name: 'Loading State',
    preview: (
      <Button size="lg" disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Processing...
      </Button>
    ),
    code: `<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Processing...
</Button>`,
  },
  {
    name: 'Success State',
    preview: (
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.3 }}
      >
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          <Check className="mr-2 h-4 w-4" />
          Saved!
        </Button>
      </motion.div>
    ),
    code: `<motion.div
  initial={{ scale: 1 }}
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ duration: 0.3 }}
>
  <Button className="bg-green-600">
    <Check className="mr-2 h-4 w-4" />
    Saved!
  </Button>
</motion.div>`,
  },
  {
    name: 'Sparkle',
    preview: (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button size="lg" className="relative overflow-hidden">
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
          <Sparkles className="mr-2 h-4 w-4" />
          Magic Button
        </Button>
      </motion.div>
    ),
    code: `<Button className="relative overflow-hidden">
  <motion.span
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    initial={{ x: '-100%' }}
    animate={{ x: '200%' }}
    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
  />
  <Sparkles className="mr-2 h-4 w-4" />
  Magic Button
</Button>`,
  },
  {
    name: 'Pulse',
    preview: (
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Button size="lg" className="bg-red-500 hover:bg-red-600">
          <Heart className="mr-2 h-4 w-4" />
          Like
        </Button>
      </motion.div>
    ),
    code: `<motion.div
  animate={{ scale: [1, 1.05, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  <Button className="bg-red-500">
    <Heart className="mr-2 h-4 w-4" />
    Like
  </Button>
</motion.div>`,
  },
  {
    name: 'Gradient Border',
    preview: (
      <motion.div
        className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button size="lg" variant="ghost" className="bg-background rounded-md">
          Gradient Border
        </Button>
      </motion.div>
    ),
    code: `<motion.div
  className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
  whileHover={{ scale: 1.02 }}
>
  <Button variant="ghost" className="bg-background rounded-md">
    Gradient Border
  </Button>
</motion.div>`,
  },
  {
    name: 'Icon Rotate',
    preview: (
      <Button size="lg" className="group">
        <motion.span
          className="inline-block mr-2"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Star className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
        </motion.span>
        Favorite
      </Button>
    ),
    code: `<Button className="group">
  <Star className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
  Favorite
</Button>`,
  },
  {
    name: 'Expand',
    preview: (
      <motion.div whileHover={{ width: 'auto' }} className="overflow-hidden">
        <Button size="lg" className="group">
          <Plus className="h-4 w-4" />
          <span className="overflow-hidden w-0 group-hover:w-auto group-hover:ml-2 transition-all duration-300">
            Add Item
          </span>
        </Button>
      </motion.div>
    ),
    code: `<Button className="group">
  <Plus className="h-4 w-4" />
  <span className="overflow-hidden w-0 group-hover:w-auto group-hover:ml-2 transition-all">
    Add Item
  </span>
</Button>`,
  },
  {
    name: 'Shake',
    preview: (
      <motion.div
        whileHover={{ x: [0, -5, 5, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Button size="lg" variant="destructive">
          Delete
        </Button>
      </motion.div>
    ),
    code: `<motion.div
  whileHover={{ x: [0, -5, 5, -5, 5, 0] }}
  transition={{ duration: 0.5 }}
>
  <Button variant="destructive">Delete</Button>
</motion.div>`,
  },
  {
    name: 'Morph',
    preview: (
      <motion.div
        whileHover={{ borderRadius: '999px' }}
        className="rounded-md overflow-hidden"
        transition={{ duration: 0.3 }}
      >
        <Button size="lg" className="rounded-md hover:rounded-full transition-all duration-300">
          Morph Shape
        </Button>
      </motion.div>
    ),
    code: `<Button className="rounded-md hover:rounded-full transition-all duration-300">
  Morph Shape
</Button>`,
  },
  {
    name: 'Slide Background',
    preview: (
      <Button size="lg" className="relative overflow-hidden group">
        <span className="relative z-10">Slide Effect</span>
        <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </Button>
    ),
    code: `<Button className="relative overflow-hidden group">
  <span className="relative z-10">Slide Effect</span>
  <span className="absolute inset-0 bg-primary-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
</Button>`,
  },
  {
    name: 'Neon',
    preview: (
      <motion.div
        whileHover={{
          boxShadow: '0 0 20px hsl(262, 83%, 58%), 0 0 40px hsl(262, 83%, 58%), 0 0 60px hsl(262, 83%, 58%)',
        }}
        className="rounded-md"
      >
        <Button size="lg" className="border-2 border-primary bg-transparent text-primary hover:bg-primary/10">
          Neon Glow
        </Button>
      </motion.div>
    ),
    code: `<motion.div
  whileHover={{
    boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary))',
  }}
>
  <Button variant="outline" className="border-2 border-primary">Neon Glow</Button>
</motion.div>`,
  },
  {
    name: 'Send',
    preview: (
      <Button size="lg" className="group">
        Send
        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Button>
    ),
    code: `<Button className="group">
  Send
  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
</Button>`,
  },
  {
    name: 'Download',
    preview: (
      <Button size="lg" className="group">
        <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
        Download
      </Button>
    ),
    code: `<Button className="group">
  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
  Download
</Button>`,
  },
  {
    name: 'Play',
    preview: (
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button size="lg" className="rounded-full h-16 w-16 p-0">
          <Play className="h-6 w-6 ml-1" />
        </Button>
      </motion.div>
    ),
    code: `<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
  <Button className="rounded-full h-16 w-16 p-0">
    <Play className="h-6 w-6 ml-1" />
  </Button>
</motion.div>`,
  },
  {
    name: 'Gradient Animated',
    preview: (
      <motion.div
        className="rounded-lg p-[1px]"
        style={{
          background: 'linear-gradient(90deg, #ec4899, #8b5cf6, #06b6d4, #ec4899)',
          backgroundSize: '300% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      >
        <Button size="lg" className="bg-background hover:bg-background/90 rounded-md">
          Animated Gradient
        </Button>
      </motion.div>
    ),
    code: `<motion.div
  className="rounded-lg p-[1px]"
  style={{
    background: 'linear-gradient(90deg, #ec4899, #8b5cf6, #06b6d4, #ec4899)',
    backgroundSize: '300% 100%',
  }}
  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
  transition={{ duration: 3, repeat: Infinity }}
>
  <Button className="bg-background">Animated Gradient</Button>
</motion.div>`,
  },
  {
    name: 'Ripple',
    preview: (
      <Button size="lg" className="relative overflow-hidden group">
        Click Me
        <span className="absolute inset-0 bg-white/30 scale-0 rounded-full group-active:scale-100 group-active:opacity-0 transition-all duration-500" />
      </Button>
    ),
    code: `<Button className="relative overflow-hidden group">
  Click Me
  <span className="absolute inset-0 bg-white/30 scale-0 rounded-full group-active:scale-100 group-active:opacity-0 transition-all duration-500" />
</Button>`,
  },
  {
    name: 'Rocket',
    preview: (
      <Button size="lg" className="group">
        Launch
        <motion.span
          className="inline-block ml-2"
          whileHover={{ y: -3, rotate: -45 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <Rocket className="h-4 w-4 group-hover:-translate-y-1 group-hover:rotate-[-45deg] transition-transform" />
        </motion.span>
      </Button>
    ),
    code: `<Button className="group">
  Launch
  <Rocket className="ml-2 h-4 w-4 group-hover:-translate-y-1 group-hover:rotate-[-45deg] transition-transform" />
</Button>`,
  },
  {
    name: 'Zap',
    preview: (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          >
            <Zap className="mr-2 h-4 w-4" />
          </motion.span>
          Quick Action
        </Button>
      </motion.div>
    ),
    code: `<Button className="bg-yellow-500 text-black">
  <motion.span
    animate={{ rotate: [0, 10, -10, 0] }}
    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
  >
    <Zap className="mr-2 h-4 w-4" />
  </motion.span>
  Quick Action
</Button>`,
  },
];

export function AnimatedButtonPage() {
  return (
    <ComponentShowcase
      title="Animated Buttons"
      description="Interactive button animations with hover effects, loading states, and micro-interactions."
      preview={variants[0].preview}
      code={animatedButtonCode}
      filename="animated-button.tsx"
      usage={`Animated buttons provide feedback and delight.

• Use subtle scale on hover (1.02-1.05)
• Add press effect on tap (0.95-0.98)
• Include loading spinners for async actions
• Arrow/icon animations guide user attention
• Keep animations fast (150-300ms)`}
      props={animatedButtonProps}
      variants={variants}
    />
  );
}
