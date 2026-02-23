import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket, Star, Heart, Zap, Check } from 'lucide-react';

const animatedWelcomeCode = `import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function WelcomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          <Sparkles className="h-16 w-16 mx-auto text-primary" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-bold mt-6"
        >
          Welcome!
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button className="mt-8">Get Started</Button>
        </motion.div>
      </div>
    </motion.div>
  )
}`;

const animatedWelcomeProps = [
  { name: 'userName', type: 'string', default: '-', description: 'User name to display in greeting' },
  { name: 'onComplete', type: '() => void', default: '-', description: 'Callback when animation completes' },
  { name: 'autoSkip', type: 'number', default: '-', description: 'Auto-skip after X seconds' },
];

const variants = [
  {
    name: 'Classic',
    preview: (
      <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-background to-muted rounded-xl">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <Sparkles className="h-12 w-12 mx-auto text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold mt-4"
          >
            Welcome!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground mt-2"
          >
            Let's get started
          </motion.p>
        </div>
      </div>
    ),
    code: animatedWelcomeCode,
  },
  {
    name: 'Personalized',
    preview: (
      <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-xl">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
            className="h-16 w-16 rounded-full bg-primary mx-auto flex items-center justify-center"
          >
            <span className="text-2xl font-bold text-primary-foreground">J</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold mt-4"
          >
            Hey, John! 👋
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground mt-2"
          >
            Welcome back to your dashboard
          </motion.p>
        </div>
      </div>
    ),
    code: `<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring" }}
  className="h-16 w-16 rounded-full bg-primary mx-auto"
>
  <span className="text-2xl font-bold">{user.name[0]}</span>
</motion.div>
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
>
  Hey, {user.name}! 👋
</motion.h1>`,
  },
  {
    name: 'Logo Reveal',
    preview: (
      <div className="w-full h-64 flex items-center justify-center bg-slate-950 rounded-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            animate={{
              boxShadow: ['0 0 0 0 rgba(139, 92, 246, 0)', '0 0 0 20px rgba(139, 92, 246, 0)'],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block"
          >
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <Zap className="h-10 w-10 text-white" />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white text-xl font-bold mt-4"
          >
            Acme Inc
          </motion.p>
        </motion.div>
      </div>
    ),
    code: `<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <motion.div
    animate={{
      boxShadow: ['0 0 0 0 rgba(139, 92, 246, 0)', '0 0 0 20px rgba(139, 92, 246, 0)'],
    }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-purple-600">
      <Zap className="h-10 w-10 text-white" />
    </div>
  </motion.div>
</motion.div>`,
  },
  {
    name: 'Confetti Burst',
    preview: (
      <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl relative overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: ['#f59e0b', '#ec4899', '#8b5cf6', '#10b981', '#3b82f6'][i % 5],
              left: '50%',
              top: '50%',
            }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: (Math.random() - 0.5) * 200,
              y: (Math.random() - 0.5) * 200,
              opacity: [0, 1, 0],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeOut",
            }}
          />
        ))}
        <div className="text-center z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            <div className="text-5xl mb-4">🎉</div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold"
          >
            Congratulations!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-muted-foreground mt-2"
          >
            You're all set up
          </motion.p>
        </div>
      </div>
    ),
    code: `{[...Array(20)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute w-2 h-2 rounded-full"
    style={{ background: colors[i % 5], left: '50%', top: '50%' }}
    initial={{ x: 0, y: 0, opacity: 0 }}
    animate={{
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
      opacity: [0, 1, 0],
    }}
    transition={{ duration: 1, delay: 0.5 }}
  />
))}`,
  },
  {
    name: 'Step Progress',
    preview: (
      <div className="w-full h-64 flex items-center justify-center bg-background rounded-xl border">
        <div className="text-center w-full max-w-sm">
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3].map((step, i) => (
              <motion.div
                key={step}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.2, type: "spring" }}
                className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  i === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}
              >
                {i === 0 ? <Check className="h-5 w-5" /> : step}
              </motion.div>
            ))}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl font-bold"
          >
            Step 1 of 3
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground text-sm mt-2"
          >
            Let's set up your profile
          </motion.p>
        </div>
      </div>
    ),
    code: `<div className="flex justify-center gap-2 mb-6">
  {[1, 2, 3].map((step, i) => (
    <motion.div
      key={step}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: i * 0.2, type: "spring" }}
      className={\`h-10 w-10 rounded-full flex items-center justify-center \${
        i === currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted'
      }\`}
    >
      {i < currentStep ? <Check /> : step}
    </motion.div>
  ))}
</div>`,
  },
  {
    name: 'Feature Cards',
    preview: (
      <div className="w-full h-64 flex items-center justify-center bg-muted/30 rounded-xl p-4">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-bold mb-4"
          >
            What you can do
          </motion.h1>
          <div className="flex gap-4 justify-center">
            {[
              { icon: Rocket, label: 'Launch' },
              { icon: Star, label: 'Rate' },
              { icon: Heart, label: 'Save' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-background p-4 rounded-xl border text-center w-20"
              >
                <item.icon className="h-6 w-6 mx-auto text-primary" />
                <p className="text-xs mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
    code: `{features.map((item, i) => (
  <motion.div
    key={item.label}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 + i * 0.1 }}
    className="bg-background p-4 rounded-xl border text-center"
  >
    <item.icon className="h-6 w-6 mx-auto text-primary" />
    <p className="text-xs mt-2">{item.label}</p>
  </motion.div>
))}`,
  },
  {
    name: 'Fullscreen Fade',
    preview: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-xl text-white"
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold"
          >
            Welcome Aboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 opacity-80"
          >
            Your journey begins here
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Button variant="secondary" className="mt-6">
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    ),
    code: `<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-purple-500 to-pink-500"
>
  <motion.h1
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5 }}
  >
    Welcome Aboard
  </motion.h1>
</motion.div>`,
  },
  {
    name: 'Loading Transition',
    preview: (
      <div className="w-full h-64 flex items-center justify-center bg-background rounded-xl border">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full" />
          </motion.div>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground"
          >
            Setting things up...
          </motion.p>
        </div>
      </div>
    ),
    code: `<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
>
  <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full" />
</motion.div>
<motion.p
  animate={{ opacity: [0.5, 1, 0.5] }}
  transition={{ duration: 1.5, repeat: Infinity }}
>
  Setting things up...
</motion.p>`,
  },
  {
    name: 'Pulse Circle',
    preview: (
      <div className="w-full h-64 flex items-center justify-center bg-slate-950 rounded-xl relative overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-primary/30"
            style={{ width: 100, height: 100 }}
            animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut",
            }}
          />
        ))}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="relative z-10 h-16 w-16 rounded-full bg-primary flex items-center justify-center"
        >
          <Sparkles className="h-8 w-8 text-primary-foreground" />
        </motion.div>
      </div>
    ),
    code: `{[...Array(3)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute rounded-full border border-primary/30"
    style={{ width: 100, height: 100 }}
    animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
    transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
  />
))}
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  className="relative z-10 h-16 w-16 rounded-full bg-primary"
>
  <Sparkles />
</motion.div>`,
  },
  {
    name: 'Count Up',
    preview: (
      <div className="w-full h-64 flex items-center justify-center bg-background rounded-xl border">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
            className="text-5xl font-bold text-primary"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              100%
            </motion.span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground mt-2"
          >
            Setup Complete!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button className="mt-4">Go to Dashboard</Button>
          </motion.div>
        </div>
      </div>
    ),
    code: `<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: "spring" }}
  className="text-5xl font-bold text-primary"
>
  100%
</motion.div>
<motion.p
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
>
  Setup Complete!
</motion.p>`,
  },
];

export function AnimatedWelcomePage() {
  return (
    <ComponentShowcase
      title="Animated Welcome Pages"
      description="Engaging onboarding and welcome screens with delightful entrance animations."
      preview={variants[0].preview}
      code={animatedWelcomeCode}
      filename="animated-welcome.tsx"
      usage={`Welcome pages create memorable first impressions.

• Start with a focal point (logo, icon)
• Stagger content reveals for flow
• Add personality with emojis/confetti
• Include clear next-step CTAs
• Consider progress indicators for onboarding`}
      props={animatedWelcomeProps}
      variants={variants}
    />
  );
}
