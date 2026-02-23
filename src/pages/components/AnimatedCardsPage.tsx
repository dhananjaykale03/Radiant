import { useState, useRef } from 'react';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Star, Heart, ArrowRight, Sparkles, Zap, Shield, 
  Crown, Rocket, Check
} from 'lucide-react';
import { cn } from '@/lib/utils';

const cardCode = `import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function TiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]));
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="p-6 rounded-xl bg-card border"
    >
      {/* Card content */}
    </motion.div>
  );
}`;

const variants = [
  {
    name: '3D Tilt',
    preview: (() => {
      const TiltCard = () => {
        const ref = useRef<HTMLDivElement>(null);
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        
        const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 });
        const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 });
        
        const handleMouseMove = (e: React.MouseEvent) => {
          if (!ref.current) return;
          const rect = ref.current.getBoundingClientRect();
          x.set((e.clientX - rect.left) / rect.width - 0.5);
          y.set((e.clientY - rect.top) / rect.height - 0.5);
        };
        
        return (
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="w-64 p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border cursor-pointer"
          >
            <motion.div style={{ translateZ: 50 }}>
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">3D Tilt Card</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Move your mouse over the card to see the 3D tilt effect.
              </p>
              <Badge>Interactive</Badge>
            </motion.div>
          </motion.div>
        );
      };
      return <TiltCard />;
    })(),
    code: cardCode,
  },
  {
    name: 'Hover Lift',
    preview: (() => {
      const HoverCards = () => {
        const cards = [
          { icon: Zap, title: 'Fast', desc: 'Lightning quick' },
          { icon: Shield, title: 'Secure', desc: 'Enterprise grade' },
          { icon: Sparkles, title: 'Modern', desc: 'Latest tech' },
        ];
        
        return (
          <div className="flex gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
                }}
                className="w-48 p-5 rounded-xl bg-card border cursor-pointer"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">{card.title}</h4>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        );
      };
      return <HoverCards />;
    })(),
    code: `// Hover lift cards with shadow`,
  },
  {
    name: 'Flip Card',
    preview: (() => {
      const FlipCard = () => {
        const [isFlipped, setIsFlipped] = useState(false);
        
        return (
          <div 
            className="relative w-64 h-80 cursor-pointer"
            style={{ perspective: 1000 }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              className="absolute inset-0"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            >
              {/* Front */}
              <div 
                className="absolute inset-0 p-6 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex flex-col justify-between"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div>
                  <Crown className="h-8 w-8 mb-4" />
                  <h3 className="text-xl font-bold">Premium Plan</h3>
                  <p className="text-primary-foreground/80">Click to see features</p>
                </div>
                <div className="text-3xl font-bold">$99/mo</div>
              </div>
              
              {/* Back */}
              <div 
                className="absolute inset-0 p-6 rounded-2xl bg-card border flex flex-col"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <h4 className="font-semibold mb-4">Features</h4>
                <ul className="space-y-2 flex-1">
                  {['Unlimited projects', 'Priority support', 'Custom domains', 'Analytics'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button size="sm" className="w-full">Get Started</Button>
              </div>
            </motion.div>
          </div>
        );
      };
      return <FlipCard />;
    })(),
    code: `// Flip card with front/back content`,
  },
  {
    name: 'Glassmorphism',
    preview: (() => {
      const GlassCard = () => {
        return (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-30" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-2xl bg-background/60 backdrop-blur-xl border border-white/20 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                  <Rocket className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Glass Effect</h3>
                  <p className="text-sm text-muted-foreground">Premium design</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Beautiful glassmorphism card with blur effect and gradient background.
              </p>
              <div className="flex gap-2">
                <Button>Learn More</Button>
                <Button variant="outline">Demo</Button>
              </div>
            </motion.div>
          </div>
        );
      };
      return <GlassCard />;
    })(),
    code: `// Glassmorphism card with blur effect`,
  },
  {
    name: 'Interactive Stats',
    preview: (() => {
      const StatsCard = () => {
        const [likes, setLikes] = useState(128);
        const [liked, setLiked] = useState(false);
        
        const handleLike = () => {
          setLiked(!liked);
          setLikes(liked ? likes - 1 : likes + 1);
        };
        
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-72 rounded-2xl overflow-hidden bg-card border"
          >
            <div className="h-40 bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <Star className="h-16 w-16 text-white" />
              </motion.div>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-lg mb-1">Featured Project</h4>
              <p className="text-sm text-muted-foreground mb-4">
                A stunning visual design showcase
              </p>
              <div className="flex items-center justify-between">
                <motion.button
                  onClick={handleLike}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2"
                >
                  <motion.div animate={liked ? { scale: [1, 1.3, 1] } : {}}>
                    <Heart className={cn("h-5 w-5", liked && "fill-red-500 text-red-500")} />
                  </motion.div>
                  <motion.span
                    key={likes}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-sm"
                  >
                    {likes}
                  </motion.span>
                </motion.button>
                <Button size="sm" variant="ghost">
                  View <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        );
      };
      return <StatsCard />;
    })(),
    code: `// Interactive card with animated stats`,
  },
  {
    name: 'Stacked Cards',
    preview: (() => {
      const StackedCards = () => {
        const [activeIndex, setActiveIndex] = useState(0);
        
        const cards = [
          { color: 'from-blue-500 to-cyan-500', title: 'Design' },
          { color: 'from-purple-500 to-pink-500', title: 'Develop' },
          { color: 'from-orange-500 to-red-500', title: 'Deploy' },
        ];
        
        return (
          <div className="relative h-64 w-72">
            {cards.map((card, i) => {
              const offset = (i - activeIndex + cards.length) % cards.length;
              return (
                <motion.div
                  key={i}
                  className={cn(
                    "absolute inset-0 p-6 rounded-2xl text-white cursor-pointer bg-gradient-to-br",
                    card.color
                  )}
                  animate={{
                    scale: 1 - offset * 0.05,
                    y: offset * 20,
                    zIndex: cards.length - offset,
                    opacity: 1 - offset * 0.2,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  onClick={() => setActiveIndex(i)}
                >
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-white/80">Click any card to bring it to front</p>
                </motion.div>
              );
            })}
          </div>
        );
      };
      return <StackedCards />;
    })(),
    code: `// Stacked cards with click-to-front`,
  },
];

export function AnimatedCardsPage() {
  return (
    <ComponentShowcase
      title="Animated Cards"
      description="Interactive card components with 3D tilt effects, hover animations, flip transitions, and glassmorphism."
      preview={variants[0].preview}
      code={variants[0].code}
      variants={variants}
      filename="AnimatedCards.tsx"
    />
  );
}
