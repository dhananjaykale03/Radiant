import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Sparkles, Code2, Palette, Zap, ChevronRight, 
  Layers, Shield, Smartphone, Moon, Globe, Terminal,
  Star, Download, Users, Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  GradientText,
} from '@/components/motion';
import { CreatorSection } from '@/components/layout/CreatorSection';

// ─── Stats ────────────────────────────────────────────────
const stats = [
  { label: 'Components', value: '48+', icon: Layers },
  { label: 'Downloads', value: '1K+', icon: Download },
  { label: 'Stars', value: '1.2K', icon: Star },
  { label: 'Contributors', value: '3+', icon: Users },
];

const features = [
  {
    icon: Code2,
    title: 'Copy & Paste Ready',
    description: 'No npm install needed. Simply copy the code directly into your project.',
  },
  {
    icon: Palette,
    title: 'Fully Customizable',
    description: 'Built with Tailwind CSS. Every component adapts to your design system.',
  },
  {
    icon: Shield,
    title: 'Accessible by Default',
    description: 'Radix UI primitives ensure keyboard navigation and screen reader support.',
  },
  {
    icon: Zap,
    title: 'Motion Enhanced',
    description: 'Framer Motion powered animations with reduced-motion support built in.',
  },
  {
    icon: Moon,
    title: 'Dark Mode Native',
    description: 'Every component works flawlessly in both light and dark themes.',
  },
  {
    icon: Smartphone,
    title: 'Responsive First',
    description: 'Mobile-first design ensures beautiful layouts on every screen size.',
  },
];

const popularComponents = [
  { name: 'Button', path: '/components/button', desc: 'Interactive button variants', views: '2.1K' },
  { name: 'Card', path: '/components/card', desc: 'Content container', views: '1.8K' },
  { name: 'Dialog', path: '/components/dialog', desc: 'Modal overlays', views: '1.6K' },
  { name: 'Animated Hero', path: '/components/animated-hero', desc: 'Motion hero sections', views: '1.4K' },
  { name: 'Login Form', path: '/components/login-form', desc: 'Auth components', views: '1.3K' },
  { name: 'Dashboard', path: '/components/dashboard', desc: 'Admin layouts', views: '1.2K' },
  { name: 'Animated Cards', path: '/components/animated-cards', desc: 'Motion card effects', views: '1.1K' },
  { name: 'Tabs', path: '/components/tabs', desc: 'Tabbed interfaces', views: '980' },
];

const categories = [
  { name: 'UI Components', count: 48, path: '/components/button', color: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20' },
  { name: 'Animation', count: 18, path: '/components/animated-hero', color: 'from-purple-500/10 to-pink-500/10 border-purple-500/20' },
  { name: 'Layout', count: 8, path: '/components/dashboard', color: 'from-amber-500/10 to-orange-500/10 border-amber-500/20' },
  { name: 'Marketing', count: 6, path: '/components/pricing', color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20' },
];

// ─── Main Page ────────────────────────────────────────────
export default function HomePage() {
  const [showCreator, setShowCreator] = useState(false);
  const creatorRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div className="space-y-24">
        {/* ═══ PREMIUM CLASSIC HERO ═══ */}
        <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24">
              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                  backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                  backgroundSize: '60px 60px',
                }}
              />

              {/* Gradient orbs */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/10 blur-3xl rounded-full" />
              </div>

              <div className="relative text-center max-w-4xl mx-auto">
                <FadeIn delay={0.1}>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-medium text-primary tracking-wide uppercase">
                      48+ Production Components
                    </span>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                    Build interfaces{' '}
                    <GradientText className="block mt-2">
                      that stand out
                    </GradientText>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.35}>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                    A curated collection of premium, accessible, and beautifully crafted
                    components. Copy, paste, and ship production-ready interfaces in minutes.
                  </p>
                </FadeIn>

                <FadeIn delay={0.45}>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button size="lg" asChild className="px-8 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow">
                      <Link to="/components/button">
                        Browse Components
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="px-8 h-12 text-base">
                      <Link to="/docs">
                        <Terminal className="mr-2 h-4 w-4" />
                        Documentation
                      </Link>
                    </Button>
                  </div>
                </FadeIn>

                {/* Stats bar */}
                <FadeIn delay={0.6}>
                  <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                    {stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        className="flex items-center gap-2.5 text-muted-foreground"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                      >
                        <stat.icon className="h-4 w-4 text-primary/60" />
                        <span className="text-lg font-semibold text-foreground">{stat.value}</span>
                        <span className="text-sm">{stat.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </section>

            <Separator className="max-w-xs mx-auto opacity-30" />

            {/* ═══ FEATURES GRID ═══ */}
            <section>
              <FadeIn>
                <div className="text-center mb-12">
                  <Badge variant="secondary" className="mb-4">
                    <Zap className="mr-1 h-3 w-3" /> Why ComponentKit
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Everything you need to ship faster
                  </h2>
                  <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                    Built with modern standards, every component is designed for real-world production use.
                  </p>
                </div>
              </FadeIn>

              <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <StaggerItem key={feature.title}>
                    <motion.div
                      className="group rounded-xl border bg-card p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <div className="mb-4 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-base mb-1.5">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>

            {/* ═══ CATEGORIES ═══ */}
            <section>
              <FadeIn>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold">Explore by Category</h2>
                  <p className="text-muted-foreground mt-1">Find the perfect components for your project.</p>
                </div>
              </FadeIn>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {categories.map((cat, i) => (
                  <motion.div
                    key={cat.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={cat.path}
                      className={`group block rounded-xl border bg-gradient-to-br ${cat.color} p-5 hover:shadow-md transition-all`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-sm">{cat.name}</h3>
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                      </div>
                      <p className="text-2xl font-bold text-foreground">{cat.count}</p>
                      <p className="text-xs text-muted-foreground">components</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ═══ POPULAR COMPONENTS ═══ */}
            <section>
              <FadeIn>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold">Popular Components</h2>
                    <p className="text-muted-foreground mt-1">Most used by the community.</p>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/components/button">
                      View all <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>

              <StaggerContainer className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {popularComponents.map((comp) => (
                  <StaggerItem key={comp.path}>
                    <Link
                      to={comp.path}
                      className="group block rounded-xl border bg-card p-4 hover:border-primary/40 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                          {comp.name}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Eye className="h-3 w-3" /> {comp.views}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{comp.desc}</p>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>

            {/* ═══ CODE PREVIEW ═══ */}
            <FadeIn>
              <section className="rounded-2xl border bg-card overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="secondary" className="mb-4 w-fit">
                      <Globe className="mr-1 h-3 w-3" /> Developer Experience
                    </Badge>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                      Simple. Elegant. Yours.
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Every component is self-contained. No dependencies, no lock-in. 
                      Copy the code and it's yours to customize however you want.
                    </p>
                    <div className="space-y-3">
                      {['Zero runtime dependencies', 'TypeScript native', 'Tree-shakeable', 'SSR compatible'].map((item) => (
                        <div key={item} className="flex items-center gap-2.5 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[hsl(var(--code-background))] p-8 lg:p-12 font-mono text-sm leading-relaxed">
                    <div className="flex gap-1.5 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <pre className="text-[hsl(var(--code-foreground))] overflow-x-auto">
                      <code>{`import { Button } from "@/ui/button"
import { Card } from "@/ui/card"

export function MyComponent() {
  return (
    <Card className="p-6">
      <h2>Ready to ship</h2>
      <Button variant="default">
        Get Started
      </Button>
    </Card>
  )
}`}</code>
                    </pre>
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* ═══ MEET THE CREATOR ═══ */}
            <FadeIn>
              <div ref={creatorRef}>
                {!showCreator ? (
                  <motion.button
                    onClick={() => {
                      setShowCreator(true);
                      setTimeout(() => creatorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
                    }}
                    className="w-full group relative rounded-2xl border border-dashed border-primary/30 bg-primary/[0.02] hover:bg-primary/[0.05] hover:border-primary/50 p-8 lg:p-12 text-center transition-all duration-300"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <motion.div
                      className="mx-auto mb-4 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Sparkles className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Meet the Creator</h3>
                    <p className="text-muted-foreground text-sm max-w-md mx-auto">
                      Tap to discover who built Radiant and the story behind it ✨
                    </p>
                    <motion.div
                      className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium"
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      Tap to reveal ↓
                    </motion.div>
                  </motion.button>
                ) : null}
                <CreatorSection open={showCreator} onClose={() => setShowCreator(false)} />
              </div>
            </FadeIn>

            {/* ═══ CTA ═══ */}
            <FadeIn>
              <section className="relative rounded-2xl overflow-hidden border bg-gradient-to-br from-primary/5 via-background to-purple-500/5 p-10 lg:p-16 text-center">
                <div className="absolute inset-0 opacity-[0.02]" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
                  backgroundSize: '24px 24px',
                }} />
                <div className="relative z-10">
                  <motion.div
                    className="mx-auto mb-6 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Sparkles className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-3">Ready to build faster?</h2>
                  <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    Start using premium components in your next project. No setup required.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button size="lg" asChild className="px-8 shadow-lg shadow-primary/20">
                      <Link to="/components/button">
                        Get Started Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link to="/docs">Read the Docs</Link>
                    </Button>
                  </div>
                </div>
              </section>
            </FadeIn>
          </div>
    </div>
  );
}
