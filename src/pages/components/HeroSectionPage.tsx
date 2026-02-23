import { Button } from '@/components/ui/button';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { ArrowRight, Sparkles, Zap, Play, Check, Star, Users, Globe, Rocket, Shield, Clock, Code2, ChevronRight, Terminal, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

const heroSectionCode = `import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4" variant="secondary">
            <Sparkles className="mr-1 h-3 w-3" />
            New: AI-powered features
          </Badge>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Build faster with{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              beautiful components
            </span>
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground">
            A collection of beautifully designed, accessible components 
            that you can copy and paste into your apps.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Components
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}`;

const heroSectionProps = [
  { name: 'title', type: 'string', default: '-', description: 'Main headline text.' },
  { name: 'subtitle', type: 'string', default: '-', description: 'Supporting description text.' },
  { name: 'badge', type: 'string', default: '-', description: 'Optional announcement badge.' },
  { name: 'primaryCta', type: '{ label: string, href: string }', default: '-', description: 'Primary call-to-action button.' },
];

const avatars = ['JD', 'AS', 'MK', 'RB', 'LP'];

const variants = [
  {
    name: 'Centered',
    preview: (
      <section className="relative overflow-hidden py-12 w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        <div className="relative text-center">
          <Badge className="mb-4" variant="secondary">
            <Sparkles className="mr-1 h-3 w-3" />
            New features
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Build faster with{' '}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              beautiful components
            </span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A collection of beautifully designed, accessible components.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">Get Started<ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>
    ),
    code: heroSectionCode,
  },
  {
    name: 'Left Aligned',
    preview: (
      <section className="py-12 w-full">
        <div className="max-w-2xl">
          <Badge className="mb-4">Coming Soon</Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The modern way to build web applications
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Ship faster with production-ready components and templates built for developers.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg">Start Building</Button>
            <Button size="lg" variant="ghost">
              <Play className="mr-2 h-4 w-4" />Watch Demo
            </Button>
          </div>
        </div>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

export function LeftAlignedHero() {
  return (
    <section className="py-20">
      <div className="max-w-2xl">
        <Badge className="mb-4">Coming Soon</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          The modern way to build web applications
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Ship faster with production-ready components and templates built for developers.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg">Start Building</Button>
          <Button size="lg" variant="ghost">
            <Play className="mr-2 h-4 w-4" />Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}`,
  },
  {
    name: 'With Image',
    preview: (
      <section className="py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Transform your workflow with smart automation
            </h1>
            <p className="mt-4 text-muted-foreground">
              Automate repetitive tasks and focus on what matters most.
            </p>
            <div className="mt-8 flex gap-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border" />
          </div>
        </div>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"

export function SplitHero() {
  return (
    <section className="py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Transform your workflow with smart automation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Automate repetitive tasks and focus on what matters most.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
        <div className="relative">
          <img src="/dashboard-preview.png" alt="Dashboard" className="rounded-xl border shadow-2xl" />
        </div>
      </div>
    </section>
  )
}`,
  },
  {
    name: 'With Stats',
    preview: (
      <section className="py-12 w-full text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Trusted by developers worldwide
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Join thousands of teams building better products faster.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-primary">10K+</div>
            <div className="text-sm text-muted-foreground">Developers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Components</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">99%</div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </div>
        </div>
        <Button size="lg" className="mt-8">Start Free Trial</Button>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"

export function StatsHero() {
  const stats = [
    { value: "10K+", label: "Developers" },
    { value: "50+", label: "Components" },
    { value: "99%", label: "Satisfaction" },
  ]
  
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Trusted by developers worldwide
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
        Join thousands of teams building better products faster.
      </p>
      <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-4xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
      <Button size="lg" className="mt-10">Start Free Trial</Button>
    </section>
  )
}`,
  },
  {
    name: 'Social Proof',
    preview: (
      <section className="py-12 w-full text-center">
        <div className="flex justify-center mb-4">
          <div className="flex -space-x-2">
            {avatars.map((name, i) => (
              <Avatar key={i} className="border-2 border-background h-10 w-10">
                <AvatarFallback className="text-xs">{name}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-sm text-muted-foreground ml-2">from 2,000+ reviews</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          The toolkit developers love
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          See why thousands of developers choose our components.
        </p>
        <Button size="lg" className="mt-8">Try it Free</Button>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function SocialProofHero() {
  const avatars = ['JD', 'AS', 'MK', 'RB', 'LP']
  
  return (
    <section className="py-20 text-center">
      <div className="flex justify-center mb-4">
        <div className="flex -space-x-2">
          {avatars.map((name, i) => (
            <Avatar key={i} className="border-2 border-background">
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        <span className="text-sm text-muted-foreground ml-2">from 2,000+ reviews</span>
      </div>
      <h1 className="text-4xl font-bold">The toolkit developers love</h1>
      <Button size="lg" className="mt-8">Try it Free</Button>
    </section>
  )
}`,
  },
  {
    name: 'Newsletter',
    preview: (
      <section className="py-12 w-full text-center">
        <Badge className="mb-4" variant="secondary">Early Access</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Be the first to know
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Sign up for our newsletter and get early access to new features.
        </p>
        <div className="mt-8 flex justify-center gap-2 max-w-md mx-auto">
          <Input placeholder="Enter your email" className="flex-1" />
          <Button>Subscribe</Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Join 5,000+ subscribers. No spam ever.
        </p>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function NewsletterHero() {
  return (
    <section className="py-20 text-center">
      <Badge className="mb-4" variant="secondary">Early Access</Badge>
      <h1 className="text-4xl font-bold">Be the first to know</h1>
      <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
        Sign up for our newsletter and get early access to new features.
      </p>
      <div className="mt-8 flex justify-center gap-2 max-w-md mx-auto">
        <Input placeholder="Enter your email" className="flex-1" />
        <Button>Subscribe</Button>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Join 5,000+ subscribers. No spam ever.
      </p>
    </section>
  )
}`,
  },
  {
    name: 'Gradient Background',
    preview: (
      <section className="relative py-12 w-full overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-pink-500" />
        <div className="relative text-center text-white">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Start building amazing products
          </h1>
          <p className="mt-4 opacity-90 max-w-xl mx-auto">
            Everything you need to ship your next project faster.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" variant="secondary">Get Started</Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"

export function GradientHero() {
  return (
    <section className="relative py-20 overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-pink-500" />
      <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold">Start building amazing products</h1>
        <p className="mt-4 opacity-90 max-w-xl mx-auto">
          Everything you need to ship your next project faster.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" variant="secondary">Get Started</Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}`,
  },
  {
    name: 'Feature List',
    preview: (
      <section className="py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need in one place
            </h1>
            <ul className="mt-6 space-y-3">
              {['Fast and lightweight', 'Fully customizable', 'Accessible by default', 'Dark mode support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-5 w-5 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button size="lg" className="mt-8">Get Started Free</Button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-muted to-muted/50 border" />
          </div>
        </div>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function FeatureListHero() {
  const features = [
    "Fast and lightweight",
    "Fully customizable", 
    "Accessible by default",
    "Dark mode support"
  ]
  
  return (
    <section className="py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold">Everything you need in one place</h1>
          <ul className="mt-6 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-5 w-5 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
          <Button size="lg" className="mt-8">Get Started Free</Button>
        </div>
        <div>
          <img src="/product.png" alt="Product" className="rounded-xl" />
        </div>
      </div>
    </section>
  )
}`,
  },
  {
    name: 'Minimal',
    preview: (
      <section className="py-20 w-full text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Simple. Powerful. Beautiful.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto">
          The component library for perfectionists with deadlines.
        </p>
        <Button size="lg" className="mt-10">
          Start Building
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function MinimalHero() {
  return (
    <section className="py-32 text-center">
      <h1 className="text-5xl font-bold">Simple. Powerful. Beautiful.</h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto">
        The component library for perfectionists with deadlines.
      </p>
      <Button size="lg" className="mt-10">
        Start Building
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </section>
  )
}`,
  },
  {
    name: 'With Video',
    preview: (
      <section className="py-12 w-full text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          See it in action
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Watch how teams are shipping products 10x faster.
        </p>
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative aspect-video rounded-xl bg-muted border overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="h-6 w-6 text-foreground ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    code: `import { Play } from "lucide-react"

export function VideoHero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold">See it in action</h1>
      <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
        Watch how teams are shipping products 10x faster.
      </p>
      <div className="mt-8 max-w-3xl mx-auto">
        <div className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer">
          <video poster="/video-poster.jpg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="h-20 w-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="h-8 w-8 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}`,
  },
  {
    name: 'App Preview',
    preview: (
      <section className="py-12 w-full text-center">
        <Badge className="mb-4" variant="secondary">
          <Zap className="mr-1 h-3 w-3" />
          Just launched
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Your all-in-one workspace
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Manage projects, collaborate with your team, and ship faster.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">Start Free Trial</Button>
          <Button size="lg" variant="outline">Schedule Demo</Button>
        </div>
        <div className="mt-12 relative">
          <div className="aspect-[16/9] max-w-3xl mx-auto rounded-xl border bg-gradient-to-b from-muted to-background shadow-2xl" />
        </div>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"

export function AppPreviewHero() {
  return (
    <section className="py-20 text-center">
      <Badge className="mb-4" variant="secondary">
        <Zap className="mr-1 h-3 w-3" />
        Just launched
      </Badge>
      <h1 className="text-4xl font-bold">Your all-in-one workspace</h1>
      <p className="mt-4 text-muted-foreground">
        Manage projects, collaborate with your team, and ship faster.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg">Start Free Trial</Button>
        <Button size="lg" variant="outline">Schedule Demo</Button>
      </div>
      <div className="mt-16 relative">
        <img src="/app-screenshot.png" alt="App" className="rounded-xl border shadow-2xl" />
      </div>
    </section>
  )
}`,
  },
  {
    name: 'Split Reversed',
    preview: (
      <section className="py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 border" />
          </div>
          <div className="order-1 lg:order-2">
            <Badge className="mb-4">For Teams</Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Collaborate without the chaos
            </h1>
            <p className="mt-4 text-muted-foreground">
              Bring your team together with tools designed for modern workflows.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <Button size="lg" className="w-fit">Start Free Trial</Button>
              <p className="text-sm text-muted-foreground">
                No credit card required · 14-day free trial
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function SplitReversedHero() {
  return (
    <section className="py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <img src="/team-collab.png" alt="Team" className="rounded-2xl" />
        </div>
        <div className="order-1 lg:order-2">
          <Badge className="mb-4">For Teams</Badge>
          <h1 className="text-4xl font-bold">Collaborate without the chaos</h1>
          <p className="mt-4 text-muted-foreground">
            Bring your team together with tools designed for modern workflows.
          </p>
          <div className="mt-8">
            <Button size="lg">Start Free Trial</Button>
            <p className="mt-2 text-sm text-muted-foreground">
              No credit card required · 14-day free trial
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}`,
  },
  {
    name: 'With Icons',
    preview: (
      <section className="py-12 w-full text-center">
        <div className="flex justify-center gap-4 mb-6">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
            <Users className="h-6 w-6 text-purple-500" />
          </div>
          <div className="h-12 w-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
            <Globe className="h-6 w-6 text-pink-500" />
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Built for scale
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          From startup to enterprise, we've got you covered.
        </p>
        <Button size="lg" className="mt-8">Learn More</Button>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Zap, Users, Globe } from "lucide-react"

export function IconsHero() {
  const icons = [
    { icon: Zap, color: "text-primary", bg: "bg-primary/10" },
    { icon: Users, color: "text-purple-500", bg: "bg-purple-500/10" },
    { icon: Globe, color: "text-pink-500", bg: "bg-pink-500/10" },
  ]
  
  return (
    <section className="py-20 text-center">
      <div className="flex justify-center gap-4 mb-6">
        {icons.map(({ icon: Icon, color, bg }) => (
          <div className={\`h-12 w-12 rounded-xl \${bg} flex items-center justify-center\`}>
            <Icon className={\`h-6 w-6 \${color}\`} />
          </div>
        ))}
      </div>
      <h1 className="text-4xl font-bold">Built for scale</h1>
      <p className="mt-4 text-muted-foreground">From startup to enterprise.</p>
      <Button size="lg" className="mt-8">Learn More</Button>
    </section>
  )
}`,
  },
  {
    name: 'Compact',
    preview: (
      <section className="py-8 w-full text-center">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Ready to get started?
        </h1>
        <p className="mt-2 text-muted-foreground">
          Create your free account today.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button>Sign Up</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"

export function CompactHero() {
  return (
    <section className="py-12 text-center">
      <h1 className="text-3xl font-bold">Ready to get started?</h1>
      <p className="mt-2 text-muted-foreground">Create your free account today.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Button>Sign Up</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </section>
  )
}`,
  },
  {
    name: 'Developer Focus',
    preview: (
      <section className="py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4" variant="outline">
              <Terminal className="mr-1 h-3 w-3" />
              Developer Tools
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Build faster with our CLI
            </h1>
            <p className="mt-4 text-muted-foreground">
              Install components directly from your terminal. No copy-paste needed.
            </p>
            <div className="mt-6 p-4 rounded-lg bg-muted font-mono text-sm">
              <span className="text-muted-foreground">$</span> npx shadcn@latest add button
            </div>
            <div className="mt-6 flex gap-4">
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Install CLI
              </Button>
              <Button variant="outline">Read Docs</Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-xl bg-slate-900 border p-4 font-mono text-sm text-green-400">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div>$ npx shadcn@latest init</div>
              <div className="text-slate-400 mt-2">✓ Components installed</div>
            </div>
          </div>
        </div>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Terminal, Download } from "lucide-react"

export function DeveloperHero() {
  return (
    <section className="py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge variant="outline">
            <Terminal className="mr-1 h-3 w-3" />
            Developer Tools
          </Badge>
          <h1 className="text-4xl font-bold mt-4">Build faster with our CLI</h1>
          <p className="mt-4 text-muted-foreground">
            Install components directly from your terminal.
          </p>
          <div className="mt-6 p-4 rounded-lg bg-muted font-mono text-sm">
            $ npx shadcn@latest add button
          </div>
          <div className="mt-6 flex gap-4">
            <Button><Download className="mr-2 h-4 w-4" />Install CLI</Button>
            <Button variant="outline">Read Docs</Button>
          </div>
        </div>
        <div className="bg-slate-900 rounded-xl p-4 font-mono text-green-400">
          <div>$ npx shadcn@latest init</div>
          <div className="text-slate-400 mt-2">✓ Components installed</div>
        </div>
      </div>
    </section>
  )
}`,
  },
  {
    name: 'SaaS Pricing',
    preview: (
      <section className="py-12 w-full text-center">
        <Badge className="mb-4">Limited Time</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Start for free, upgrade anytime
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Get started with our free plan. No credit card required.
        </p>
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="text-4xl font-bold">$0</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">Free forever for individuals</p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">Get Started Free</Button>
          <Button size="lg" variant="outline">View Pricing</Button>
        </div>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function PricingHero() {
  return (
    <section className="py-20 text-center">
      <Badge className="mb-4">Limited Time</Badge>
      <h1 className="text-4xl font-bold">Start for free, upgrade anytime</h1>
      <p className="mt-4 text-muted-foreground">
        Get started with our free plan. No credit card required.
      </p>
      <div className="mt-8 flex items-center justify-center gap-2">
        <span className="text-5xl font-bold">$0</span>
        <span className="text-muted-foreground">/month</span>
      </div>
      <p className="text-sm text-muted-foreground mt-2">Free forever</p>
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg">Get Started Free</Button>
        <Button size="lg" variant="outline">View Pricing</Button>
      </div>
    </section>
  )
}`,
  },
  {
    name: 'Trust Badges',
    preview: (
      <section className="py-12 w-full text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Trusted by industry leaders
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Join companies that trust our platform for their critical operations.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-8 opacity-60">
          {['Acme', 'Globex', 'Initech', 'Umbrella', 'Stark'].map((name) => (
            <div key={name} className="text-lg font-semibold">{name}</div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-6">
          <div className="flex items-center gap-2 text-sm">
            <Shield className="h-4 w-4 text-green-500" />
            SOC 2 Certified
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-blue-500" />
            99.9% Uptime
          </div>
        </div>
        <Button size="lg" className="mt-8">Request Demo</Button>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Shield, Clock } from "lucide-react"

export function TrustHero() {
  const companies = ['Acme', 'Globex', 'Initech', 'Umbrella', 'Stark']
  
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold">Trusted by industry leaders</h1>
      <p className="mt-4 text-muted-foreground">
        Join companies that trust our platform.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-8 opacity-60">
        {companies.map((name) => (
          <div key={name} className="text-lg font-semibold">{name}</div>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-6">
        <div className="flex items-center gap-2 text-sm">
          <Shield className="h-4 w-4 text-green-500" />
          SOC 2 Certified
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-blue-500" />
          99.9% Uptime
        </div>
      </div>
      <Button size="lg" className="mt-8">Request Demo</Button>
    </section>
  )
}`,
  },
  {
    name: 'Product Hunt',
    preview: (
      <section className="py-12 w-full text-center">
        <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100">
          🚀 #1 Product of the Day
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          The new standard for building UIs
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Loved by 10,000+ developers and teams around the world.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="flex -space-x-2">
            {avatars.slice(0, 4).map((name, i) => (
              <Avatar key={i} className="border-2 border-background h-8 w-8">
                <AvatarFallback className="text-xs">{name}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="text-sm">
            <span className="font-semibold">4.9</span>
            <span className="text-muted-foreground"> (2,394 reviews)</span>
          </div>
        </div>
        <Button size="lg" className="mt-8">
          Get Started
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronRight } from "lucide-react"

export function ProductHuntHero() {
  return (
    <section className="py-20 text-center">
      <Badge className="mb-4 bg-orange-100 text-orange-700">
        🚀 #1 Product of the Day
      </Badge>
      <h1 className="text-4xl font-bold">The new standard for building UIs</h1>
      <p className="mt-4 text-muted-foreground">
        Loved by 10,000+ developers and teams around the world.
      </p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <div className="flex -space-x-2">
          {avatars.map((name, i) => (
            <Avatar key={i} className="border-2 border-background">
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <div className="text-sm">
          <span className="font-semibold">4.9</span>
          <span className="text-muted-foreground"> (2,394 reviews)</span>
        </div>
      </div>
      <Button size="lg" className="mt-8">
        Get Started
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </section>
  )
}`,
  },
  {
    name: 'Open Source',
    preview: (
      <section className="py-12 w-full text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-muted text-sm">
          <Code2 className="h-4 w-4" />
          Open Source
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Free forever. Built by the community.
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Join 5,000+ contributors making the web more accessible.
        </p>
        <div className="mt-6 flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="font-semibold">24.5k</span>
            <span className="text-muted-foreground">stars</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-blue-500" />
            <span className="font-semibold">5.2k</span>
            <span className="text-muted-foreground">contributors</span>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">View on GitHub</Button>
          <Button size="lg" variant="outline">Read Docs</Button>
        </div>
      </section>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Code2, Star, Users } from "lucide-react"

export function OpenSourceHero() {
  return (
    <section className="py-20 text-center">
      <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-muted text-sm">
        <Code2 className="h-4 w-4" />
        Open Source
      </div>
      <h1 className="text-4xl font-bold">Free forever. Built by the community.</h1>
      <p className="mt-4 text-muted-foreground">
        Join 5,000+ contributors making the web more accessible.
      </p>
      <div className="mt-6 flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-500" />
          <span className="font-semibold">24.5k</span> stars
        </div>
        <div className="flex items-center gap-1">
          <Users className="h-4 w-4 text-blue-500" />
          <span className="font-semibold">5.2k</span> contributors
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg">View on GitHub</Button>
        <Button size="lg" variant="outline">Read Docs</Button>
      </div>
    </section>
  )
}`,
  },
];

export function HeroSectionPage() {
  return (
    <ComponentShowcase
      title="Hero Section"
      description="Landing page hero sections with various layouts, CTAs, and visual styles."
      preview={variants[0].preview}
      code={heroSectionCode}
      filename="hero-section.tsx"
      usage={`Hero sections are the first thing visitors see.

• Use a clear, benefit-driven headline
• Include a supporting description
• Add primary and secondary CTAs
• Optional badge for announcements
• Background gradients add visual interest`}
      props={heroSectionProps}
      variants={variants}
    />
  );
}
