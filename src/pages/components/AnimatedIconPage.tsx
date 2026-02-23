import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { motion } from 'framer-motion';
import { 
  Heart, Star, Bell, Check, X, Plus, Minus, ArrowRight, ArrowLeft,
  ChevronDown, ChevronUp, Menu, Search, Settings, User, Mail, Send,
  Play, Pause, Volume2, VolumeX, Sun, Moon, Loader2, RefreshCw,
  Download, Upload, Copy, Trash2, Edit, Eye, EyeOff, Lock, Unlock
} from 'lucide-react';

const animatedIconCode = `import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function AnimatedHeart() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <Heart className="h-8 w-8 text-red-500 fill-red-500" />
    </motion.div>
  )
}`;

const animatedIconProps = [
  { name: 'size', type: 'number', default: '24', description: 'Icon size in pixels' },
  { name: 'color', type: 'string', default: 'currentColor', description: 'Icon color' },
  { name: 'animation', type: 'string', default: 'pulse', description: 'Animation type' },
];

const variants = [
  {
    name: 'Heartbeat',
    preview: (
      <motion.div
        animate={{ scale: [1, 1.2, 1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Heart className="h-12 w-12 text-red-500 fill-red-500" />
      </motion.div>
    ),
    code: animatedIconCode,
  },
  {
    name: 'Star Spin',
    preview: (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <Star className="h-12 w-12 text-yellow-500 fill-yellow-500" />
      </motion.div>
    ),
    code: `<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
>
  <Star className="h-12 w-12 text-yellow-500 fill-yellow-500" />
</motion.div>`,
  },
  {
    name: 'Bell Ring',
    preview: (
      <motion.div
        animate={{ rotate: [0, 15, -15, 15, -15, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
      >
        <Bell className="h-12 w-12 text-primary" />
      </motion.div>
    ),
    code: `<motion.div
  animate={{ rotate: [0, 15, -15, 15, -15, 0] }}
  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
>
  <Bell className="h-12 w-12" />
</motion.div>`,
  },
  {
    name: 'Check Pop',
    preview: (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 15 }}
        className="bg-green-500 rounded-full p-2"
      >
        <Check className="h-8 w-8 text-white" />
      </motion.div>
    ),
    code: `<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ type: "spring", stiffness: 500, damping: 15 }}
  className="bg-green-500 rounded-full p-2"
>
  <Check className="h-8 w-8 text-white" />
</motion.div>`,
  },
  {
    name: 'X Shake',
    preview: (
      <motion.div
        animate={{ x: [0, -5, 5, -5, 5, 0] }}
        transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 2 }}
        className="bg-red-500 rounded-full p-2"
      >
        <X className="h-8 w-8 text-white" />
      </motion.div>
    ),
    code: `<motion.div
  animate={{ x: [0, -5, 5, -5, 5, 0] }}
  transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 2 }}
  className="bg-red-500 rounded-full p-2"
>
  <X className="h-8 w-8 text-white" />
</motion.div>`,
  },
  {
    name: 'Plus Rotate',
    preview: (
      <motion.div
        whileHover={{ rotate: 90, scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="cursor-pointer"
      >
        <Plus className="h-12 w-12 text-primary" />
      </motion.div>
    ),
    code: `<motion.div
  whileHover={{ rotate: 90, scale: 1.1 }}
  transition={{ duration: 0.2 }}
>
  <Plus className="h-12 w-12" />
</motion.div>`,
  },
  {
    name: 'Arrow Bounce',
    preview: (
      <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <ArrowRight className="h-12 w-12 text-primary" />
      </motion.div>
    ),
    code: `<motion.div
  animate={{ x: [0, 10, 0] }}
  transition={{ duration: 1, repeat: Infinity }}
>
  <ArrowRight className="h-12 w-12" />
</motion.div>`,
  },
  {
    name: 'Chevron Bounce',
    preview: (
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        <ChevronDown className="h-12 w-12 text-muted-foreground" />
      </motion.div>
    ),
    code: `<motion.div
  animate={{ y: [0, 5, 0] }}
  transition={{ duration: 0.8, repeat: Infinity }}
>
  <ChevronDown className="h-12 w-12" />
</motion.div>`,
  },
  {
    name: 'Menu Toggle',
    preview: (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, rotate: 180 }}
        className="cursor-pointer"
      >
        <Menu className="h-12 w-12 text-foreground" />
      </motion.div>
    ),
    code: `<motion.div
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9, rotate: 180 }}
>
  <Menu className="h-12 w-12" />
</motion.div>`,
  },
  {
    name: 'Search Pulse',
    preview: (
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Search className="h-12 w-12 text-primary" />
      </motion.div>
    ),
    code: `<motion.div
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ duration: 1.5, repeat: Infinity }}
>
  <Search className="h-12 w-12" />
</motion.div>`,
  },
  {
    name: 'Settings Spin',
    preview: (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <Settings className="h-12 w-12 text-muted-foreground" />
      </motion.div>
    ),
    code: `<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
>
  <Settings className="h-12 w-12" />
</motion.div>`,
  },
  {
    name: 'Mail Notification',
    preview: (
      <div className="relative">
        <Mail className="h-12 w-12 text-foreground" />
        <motion.div
          className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      </div>
    ),
    code: `<div className="relative">
  <Mail className="h-12 w-12" />
  <motion.div
    className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4"
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 0.5, repeat: Infinity }}
  />
</div>`,
  },
  {
    name: 'Send Fly',
    preview: (
      <motion.div
        whileHover={{ x: 10, y: -10, rotate: -15 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="cursor-pointer"
      >
        <Send className="h-12 w-12 text-primary" />
      </motion.div>
    ),
    code: `<motion.div
  whileHover={{ x: 10, y: -10, rotate: -15 }}
  transition={{ type: "spring", stiffness: 400 }}
>
  <Send className="h-12 w-12" />
</motion.div>`,
  },
  {
    name: 'Play/Pause Toggle',
    preview: (
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="bg-primary rounded-full p-3 cursor-pointer"
      >
        <Play className="h-8 w-8 text-primary-foreground ml-1" />
      </motion.div>
    ),
    code: `<motion.div
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.9 }}
  className="bg-primary rounded-full p-3"
>
  <Play className="h-8 w-8 text-primary-foreground ml-1" />
</motion.div>`,
  },
  {
    name: 'Volume Wave',
    preview: (
      <div className="flex items-center gap-1">
        <Volume2 className="h-10 w-10 text-foreground" />
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-primary rounded-full"
            animate={{ height: [8, 24, 8] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>
    ),
    code: `<div className="flex items-center gap-1">
  <Volume2 className="h-10 w-10" />
  {[...Array(3)].map((_, i) => (
    <motion.div
      key={i}
      className="w-1 bg-primary rounded-full"
      animate={{ height: [8, 24, 8] }}
      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
    />
  ))}
</div>`,
  },
  {
    name: 'Sun/Moon',
    preview: (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sun className="h-12 w-12 text-yellow-500" />
      </motion.div>
    ),
    code: `<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
>
  <Sun className="h-12 w-12 text-yellow-500" />
</motion.div>`,
  },
  {
    name: 'Loader',
    preview: (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Loader2 className="h-12 w-12 text-primary" />
      </motion.div>
    ),
    code: `<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
>
  <Loader2 className="h-12 w-12" />
</motion.div>`,
  },
  {
    name: 'Refresh',
    preview: (
      <motion.div
        whileHover={{ rotate: 180 }}
        whileTap={{ rotate: 360 }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer"
      >
        <RefreshCw className="h-12 w-12 text-primary" />
      </motion.div>
    ),
    code: `<motion.div
  whileHover={{ rotate: 180 }}
  whileTap={{ rotate: 360 }}
  transition={{ duration: 0.3 }}
>
  <RefreshCw className="h-12 w-12" />
</motion.div>`,
  },
  {
    name: 'Download Arrow',
    preview: (
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <Download className="h-12 w-12 text-primary" />
      </motion.div>
    ),
    code: `<motion.div
  animate={{ y: [0, 5, 0] }}
  transition={{ duration: 1, repeat: Infinity }}
>
  <Download className="h-12 w-12" />
</motion.div>`,
  },
  {
    name: 'Upload Arrow',
    preview: (
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <Upload className="h-12 w-12 text-primary" />
      </motion.div>
    ),
    code: `<motion.div
  animate={{ y: [0, -5, 0] }}
  transition={{ duration: 1, repeat: Infinity }}
>
  <Upload className="h-12 w-12" />
</motion.div>`,
  },
  {
    name: 'Copy Success',
    preview: (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <Copy className="h-12 w-12 text-muted-foreground" />
        <motion.div
          className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring" }}
        >
          <Check className="h-3 w-3 text-white" />
        </motion.div>
      </motion.div>
    ),
    code: `<div className="relative">
  <Copy className="h-12 w-12" />
  <motion.div
    className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 0.1, type: "spring" }}
  >
    <Check className="h-3 w-3 text-white" />
  </motion.div>
</div>`,
  },
  {
    name: 'Trash Delete',
    preview: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer"
      >
        <Trash2 className="h-12 w-12 text-red-500" />
      </motion.div>
    ),
    code: `<motion.div
  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
  transition={{ duration: 0.3 }}
>
  <Trash2 className="h-12 w-12 text-red-500" />
</motion.div>`,
  },
  {
    name: 'Eye Toggle',
    preview: (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer"
      >
        <Eye className="h-12 w-12 text-muted-foreground" />
      </motion.div>
    ),
    code: `<motion.div
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  <Eye className="h-12 w-12" />
</motion.div>`,
  },
  {
    name: 'Lock Unlock',
    preview: (
      <motion.div
        animate={{ rotateY: [0, 180, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        style={{ perspective: 100 }}
      >
        <Lock className="h-12 w-12 text-primary" />
      </motion.div>
    ),
    code: `<motion.div
  animate={{ rotateY: [0, 180, 0] }}
  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
>
  <Lock className="h-12 w-12" />
</motion.div>`,
  },
];

export function AnimatedIconPage() {
  return (
    <ComponentShowcase
      title="Animated Icons"
      description="Micro-animated icons with hover effects, loading states, and attention-grabbing animations."
      preview={variants[0].preview}
      code={animatedIconCode}
      filename="animated-icon.tsx"
      usage={`Animated icons provide visual feedback and delight.

• Use subtle animations that don't distract
• Add hover effects for interactive icons
• Loading spinners should be smooth
• Bell/notification animations grab attention
• Keep animations short and purposeful`}
      props={animatedIconProps}
      variants={variants}
    />
  );
}
