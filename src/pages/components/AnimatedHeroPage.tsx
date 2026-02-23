import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, Star, Zap, Rocket, Code2 } from 'lucide-react';

const animatedHeroCode = `import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AnimatedHero() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">Welcome to the Future</h1>
        <p className="mt-4 text-muted-foreground">Build amazing products</p>
        <Button className="mt-8">Get Started</Button>
      </motion.div>
    </section>
  )
}`;

const animatedHeroProps = [
  { name: 'title', type: 'string', default: '-', description: 'Main headline text' },
  { name: 'subtitle', type: 'string', default: '-', description: 'Supporting description' },
  { name: 'animationDelay', type: 'number', default: '0', description: 'Delay before animation starts' },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const variants = [
  {
    name: 'Fade Up',
    preview: (
      <section className="py-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold">Build faster with modern tools</h1>
          <p className="mt-4 text-muted-foreground">Everything you need to ship your next project</p>
          <Button className="mt-6">Get Started</Button>
        </motion.div>
      </section>
    ),
    code: animatedHeroCode,
  },
  {
    name: 'Stagger Children',
    preview: (
      <section className="py-12 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center"
        >
          <motion.div variants={fadeUp}>
            <Badge className="mb-4">New Release</Badge>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-3xl font-bold">
            The future of development
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
            Build, deploy, and scale with confidence
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6">
            <Button>Start Building</Button>
          </motion.div>
        </motion.div>
      </section>
    ),
    code: `const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

<motion.div initial="hidden" animate="visible" variants={stagger}>
  <motion.div variants={fadeUp}>Badge</motion.div>
  <motion.h1 variants={fadeUp}>Title</motion.h1>
  <motion.p variants={fadeUp}>Description</motion.p>
</motion.div>`,
  },
  {
    name: 'Text Reveal',
    preview: (
      <section className="py-12 w-full text-center">
        <motion.h1
          className="text-3xl font-bold overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {"Build something amazing".split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-muted-foreground"
        >
          Start your journey today
        </motion.p>
      </section>
    ),
    code: `<h1>
  {"Build something amazing".split(" ").map((word, i) => (
    <motion.span
      key={i}
      className="inline-block mr-2"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
    >
      {word}
    </motion.span>
  ))}
</h1>`,
  },
  {
    name: 'Gradient Text Animate',
    preview: (
      <section className="py-12 w-full text-center">
        <motion.h1
          className="text-4xl font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(90deg, #ec4899, #8b5cf6, #06b6d4, #ec4899)',
            backgroundSize: '200% auto',
          }}
          animate={{
            backgroundPosition: ['0% center', '200% center'],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          Animated Gradient Text
        </motion.h1>
        <p className="mt-4 text-muted-foreground">Eye-catching headlines</p>
        <Button className="mt-6">Learn More</Button>
      </section>
    ),
    code: `<motion.h1
  className="text-4xl font-bold bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(90deg, #ec4899, #8b5cf6, #06b6d4, #ec4899)',
    backgroundSize: '200% auto',
  }}
  animate={{ backgroundPosition: ['0% center', '200% center'] }}
  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
>
  Animated Gradient Text
</motion.h1>`,
  },
  {
    name: 'Floating Elements',
    preview: (
      <section className="py-12 w-full relative overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 rounded-full bg-primary/10"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold"
          >
            Floating Background
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-muted-foreground"
          >
            Subtle ambient motion
          </motion.p>
        </div>
      </section>
    ),
    code: `{[...Array(5)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute w-8 h-8 rounded-full bg-primary/10"
    style={{ left: \`\${10 + i * 20}%\`, top: \`\${20 + (i % 2) * 40}%\` }}
    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
    transition={{ duration: 4 + i, repeat: Infinity }}
  />
))}`,
  },
  {
    name: 'Scale In',
    preview: (
      <section className="py-12 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="text-center"
        >
          <Sparkles className="h-12 w-12 mx-auto text-primary mb-4" />
          <h1 className="text-3xl font-bold">Introducing the future</h1>
          <p className="mt-4 text-muted-foreground">Scale in with impact</p>
          <Button className="mt-6">Explore</Button>
        </motion.div>
      </section>
    ),
    code: `<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, type: 'spring' }}
>
  <Sparkles className="h-12 w-12 mx-auto" />
  <h1>Introducing the future</h1>
</motion.div>`,
  },
  {
    name: 'Slide From Sides',
    preview: (
      <section className="py-12 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold">Slide from left</h1>
            <p className="mt-4 text-muted-foreground">Content enters smoothly</p>
            <Button className="mt-6">Get Started</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video bg-muted rounded-xl"
          />
        </div>
      </section>
    ),
    code: `<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  Left content
</motion.div>
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  Right content
</motion.div>`,
  },
  {
    name: 'Typewriter',
    preview: (
      <section className="py-12 w-full text-center">
        <h1 className="text-3xl font-bold">
          {"We build ".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            className="text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            amazing products
          </motion.span>
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6"
        >
          <Button>Start Now</Button>
        </motion.div>
      </section>
    ),
    code: `{"We build ".split("").map((char, i) => (
  <motion.span
    key={i}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: i * 0.05 }}
  >
    {char}
  </motion.span>
))}`,
  },
  {
    name: 'Counter Stats',
    preview: (
      <section className="py-12 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Trusted by thousands
        </motion.h1>
        <div className="grid grid-cols-3 gap-8 text-center">
          {[
            { value: 10000, label: 'Users' },
            { value: 500, label: 'Companies' },
            { value: 99, label: '% Uptime' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
            >
              <motion.div
                className="text-3xl font-bold text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.5 }}
              >
                {stat.value.toLocaleString()}{stat.label === '% Uptime' ? '%' : '+'}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    ),
    code: `{stats.map((stat, i) => (
  <motion.div
    key={stat.label}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1 + 0.3 }}
  >
    <div className="text-3xl font-bold">{stat.value}+</div>
    <div className="text-sm text-muted-foreground">{stat.label}</div>
  </motion.div>
))}`,
  },
  {
    name: 'Parallax Scroll',
    preview: (
      <section className="py-12 w-full relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <Badge className="mb-4">Parallax Effect</Badge>
          <h1 className="text-3xl font-bold">Layered animations</h1>
          <p className="mt-4 text-muted-foreground">Depth through motion</p>
        </motion.div>
      </section>
    ),
    code: `<motion.div
  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"
  initial={{ scale: 1.2 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1 }}
/>
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>`,
  },
  {
    name: 'Icon Parade',
    preview: (
      <section className="py-12 w-full text-center">
        <div className="flex justify-center gap-4 mb-6">
          {[Sparkles, Star, Zap, Rocket].map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center"
            >
              <Icon className="h-5 w-5 text-primary" />
            </motion.div>
          ))}
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold"
        >
          Powerful features
        </motion.h1>
      </section>
    ),
    code: `{[Sparkles, Star, Zap, Rocket].map((Icon, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1, type: 'spring' }}
    className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center"
  >
    <Icon className="h-5 w-5 text-primary" />
  </motion.div>
))}`,
  },
  {
    name: 'Split Screen',
    preview: (
      <section className="py-12 w-full grid md:grid-cols-2 gap-0 overflow-hidden">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-primary p-8 text-primary-foreground"
        >
          <h1 className="text-2xl font-bold">Left Panel</h1>
          <p className="mt-2 opacity-80">Slides in from left</p>
        </motion.div>
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="bg-muted p-8"
        >
          <h1 className="text-2xl font-bold">Right Panel</h1>
          <p className="mt-2 text-muted-foreground">Slides in from right</p>
        </motion.div>
      </section>
    ),
    code: `<motion.div
  initial={{ x: '-100%' }}
  animate={{ x: 0 }}
  transition={{ duration: 0.6 }}
  className="bg-primary p-8"
>
  Left Panel
</motion.div>
<motion.div
  initial={{ x: '100%' }}
  animate={{ x: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
  Right Panel
</motion.div>`,
  },
  {
    name: 'Video Background',
    preview: (
      <section className="py-12 w-full relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-3xl font-bold">Cinematic Experience</h1>
          <p className="mt-4 opacity-80">Video background hero</p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="mt-6 inline-block"
          >
            <Button variant="secondary" size="lg">
              <Play className="mr-2 h-4 w-4" />
              Watch Video
            </Button>
          </motion.div>
        </motion.div>
      </section>
    ),
    code: `<section className="relative overflow-hidden">
  <video autoPlay muted loop className="absolute inset-0 object-cover" />
  <div className="absolute inset-0 bg-black/50" />
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative z-10 text-center text-white"
  >
    <h1>Cinematic Experience</h1>
    <Button><Play className="mr-2" />Watch Video</Button>
  </motion.div>
</section>`,
  },
  {
    name: 'Bouncing CTA',
    preview: (
      <section className="py-12 w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold"
        >
          Ready to start?
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Button size="lg">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
    ),
    code: `<motion.div
  animate={{ y: [0, -5, 0] }}
  transition={{ duration: 1.5, repeat: Infinity }}
>
  <Button size="lg">
    Get Started Free
    <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
</motion.div>`,
  },
  {
    name: 'Code Preview',
    preview: (
      <section className="py-12 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4"><Code2 className="mr-1 h-3 w-3" />Developer Tools</Badge>
            <h1 className="text-3xl font-bold">Built for developers</h1>
            <p className="mt-4 text-muted-foreground">Copy, paste, customize</p>
            <Button className="mt-6">View Docs</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-900 rounded-xl p-4 font-mono text-sm text-green-400"
          >
            <div>$ npx create-next-app</div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-slate-400 mt-2"
            >
              ✓ Installing dependencies...
            </motion.div>
          </motion.div>
        </div>
      </section>
    ),
    code: `<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="bg-slate-900 rounded-xl p-4 font-mono"
>
  <div>$ npx create-next-app</div>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
  >
    ✓ Installing dependencies...
  </motion.div>
</motion.div>`,
  },
];

export function AnimatedHeroPage() {
  return (
    <ComponentShowcase
      title="Animated Hero Sections"
      description="Dynamic hero sections with entrance animations, text reveals, and attention-grabbing effects."
      preview={variants[0].preview}
      code={animatedHeroCode}
      filename="animated-hero.tsx"
      usage={`Animated hero sections create impactful first impressions.

• Stagger child animations for visual flow
• Use fade + translate for smooth entrances
• Animate text word-by-word for emphasis
• Add floating elements for ambient motion
• Keep total animation under 1-2 seconds`}
      props={animatedHeroProps}
      variants={variants}
    />
  );
}
