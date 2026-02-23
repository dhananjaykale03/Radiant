import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Mail, Lock, Eye, ArrowRight, Sparkles, Loader2, Check, User } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const animatedLoginCode = `import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AnimatedLogin() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-[380px]">
        <CardHeader>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <CardTitle>Sign In</CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Input placeholder="Email" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Input type="password" placeholder="Password" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button className="w-full">Sign In</Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}`;

const animatedLoginProps = [
  { name: 'onSubmit', type: '(data: FormData) => void', default: '-', description: 'Form submission handler' },
  { name: 'animationDelay', type: 'number', default: '0', description: 'Delay before animations start' },
  { name: 'variant', type: 'string', default: 'fadeUp', description: 'Animation variant' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const variants = [
  {
    name: 'Fade Up',
    preview: (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-[340px]">
          <CardHeader>
            <CardTitle className="text-xl">Welcome back</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Input placeholder="Email" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Input type="password" placeholder="Password" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button className="w-full">Sign In</Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    ),
    code: animatedLoginCode,
  },
  {
    name: 'Scale Pop',
    preview: (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="w-[340px]">
          <CardHeader className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mx-auto mb-4 h-12 w-12 rounded-xl bg-primary flex items-center justify-center"
            >
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </motion.div>
            <CardTitle className="text-xl">Sign in to Acme</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button className="w-full">Continue</Button>
          </CardContent>
        </Card>
      </motion.div>
    ),
    code: `<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 0.2, type: "spring" }}
    className="mx-auto mb-4 h-12 w-12 rounded-xl bg-primary"
  >
    <Sparkles />
  </motion.div>
</motion.div>`,
  },
  {
    name: 'Stagger Fields',
    preview: (
      <Card className="w-[340px]">
        <CardHeader>
          <CardTitle className="text-xl">Create account</CardTitle>
        </CardHeader>
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <CardContent className="space-y-4">
            {['Name', 'Email', 'Password'].map((field, i) => (
              <motion.div key={field} variants={fadeUp} transition={{ delay: i * 0.1 }}>
                <Input placeholder={field} type={field === 'Password' ? 'password' : 'text'} />
              </motion.div>
            ))}
            <motion.div variants={fadeUp} transition={{ delay: 0.3 }}>
              <Button className="w-full">Create Account</Button>
            </motion.div>
          </CardContent>
        </motion.div>
      </Card>
    ),
    code: `const stagger = { visible: { transition: { staggerChildren: 0.1 } } }
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

<motion.div initial="hidden" animate="visible" variants={stagger}>
  {fields.map((field, i) => (
    <motion.div key={field} variants={fadeUp} transition={{ delay: i * 0.1 }}>
      <Input placeholder={field} />
    </motion.div>
  ))}
</motion.div>`,
  },
  {
    name: 'Slide In Social',
    preview: (
      <Card className="w-[340px]">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Get started</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { icon: Github, label: 'Continue with GitHub', delay: 0.1 },
            { icon: Mail, label: 'Continue with Google', delay: 0.2 },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: item.delay }}
            >
              <Button variant="outline" className="w-full">
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative my-4"
          >
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
              or
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Input placeholder="Email address" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button className="w-full">Continue with Email</Button>
          </motion.div>
        </CardContent>
      </Card>
    ),
    code: `{socialButtons.map((item) => (
  <motion.div
    key={item.label}
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: item.delay }}
  >
    <Button variant="outline" className="w-full">
      <item.icon className="mr-2 h-4 w-4" />
      {item.label}
    </Button>
  </motion.div>
))}`,
  },
  {
    name: 'Focus Glow',
    preview: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="w-[340px]">
          <CardHeader>
            <CardTitle className="text-xl">Sign in</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <motion.div
                whileFocus={{ boxShadow: '0 0 0 3px hsl(var(--primary) / 0.3)' }}
                className="rounded-md"
              >
                <Input placeholder="m@example.com" className="transition-shadow focus:ring-0 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.3)]" />
              </motion.div>
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" className="transition-shadow focus:ring-0 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.3)]" />
            </div>
            <Button className="w-full">Sign In</Button>
          </CardContent>
        </Card>
      </motion.div>
    ),
    code: `<motion.div
  whileFocus={{ boxShadow: '0 0 0 3px hsl(var(--primary) / 0.3)' }}
>
  <Input className="transition-shadow focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.3)]" />
</motion.div>`,
  },
  {
    name: 'Loading Button',
    preview: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="w-[340px]">
          <CardHeader>
            <CardTitle className="text-xl">Sign in</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Email" disabled />
            <Input type="password" placeholder="Password" disabled />
            <Button className="w-full" disabled>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Loader2 className="mr-2 h-4 w-4" />
              </motion.div>
              Signing in...
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    ),
    code: `<Button disabled>
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  >
    <Loader2 className="mr-2 h-4 w-4" />
  </motion.div>
  Signing in...
</Button>`,
  },
  {
    name: 'Success State',
    preview: (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Card className="w-[340px]">
          <CardContent className="pt-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center"
            >
              <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Check className="h-8 w-8 text-green-600" />
              </motion.div>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl font-semibold"
            >
              Welcome back!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground mt-2"
            >
              Redirecting to dashboard...
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    ),
    code: `<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring", delay: 0.2 }}
  className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100"
>
  <Check className="h-8 w-8 text-green-600" />
</motion.div>`,
  },
  {
    name: 'Split Animation',
    preview: (
      <div className="flex w-full max-w-2xl rounded-xl border overflow-hidden">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 bg-gradient-to-br from-primary to-purple-600 p-6 text-white hidden sm:flex flex-col justify-center"
        >
          <h2 className="text-xl font-bold">Welcome back!</h2>
          <p className="mt-2 text-sm opacity-80">Sign in to continue</p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 p-6 bg-background"
        >
          <h2 className="text-xl font-bold mb-4">Sign in</h2>
          <div className="space-y-3">
            <Input placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button className="w-full">Continue</Button>
          </div>
        </motion.div>
      </div>
    ),
    code: `<motion.div
  initial={{ x: -50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  className="flex-1 bg-gradient-to-br from-primary to-purple-600"
>
  {/* Left panel */}
</motion.div>
<motion.div
  initial={{ x: 50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.1 }}
  className="flex-1"
>
  {/* Right panel */}
</motion.div>`,
  },
  {
    name: 'Icon Input Animation',
    preview: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="w-[340px]">
          <CardHeader>
            <CardTitle className="text-xl">Sign in</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute left-3 top-1/2 -translate-y-1/2"
              >
                <Mail className="h-4 w-4 text-muted-foreground" />
              </motion.div>
              <Input placeholder="Email" className="pl-9" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute left-3 top-1/2 -translate-y-1/2"
              >
                <Lock className="h-4 w-4 text-muted-foreground" />
              </motion.div>
              <Input type="password" placeholder="Password" className="pl-9" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button className="w-full">Sign In</Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    ),
    code: `<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ delay: 0.3, type: "spring" }}
  className="absolute left-3 top-1/2 -translate-y-1/2"
>
  <Mail className="h-4 w-4 text-muted-foreground" />
</motion.div>`,
  },
  {
    name: 'Floating Labels',
    preview: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="w-[340px]">
          <CardHeader>
            <CardTitle className="text-xl">Sign in</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative">
              <Input id="email" className="peer pt-4" placeholder=" " />
              <Label
                htmlFor="email"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Email
              </Label>
            </div>
            <div className="relative">
              <Input id="password" type="password" className="peer pt-4" placeholder=" " />
              <Label
                htmlFor="password"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Password
              </Label>
            </div>
            <Button className="w-full">Sign In</Button>
          </CardContent>
        </Card>
      </motion.div>
    ),
    code: `<div className="relative">
  <Input id="email" className="peer pt-4" placeholder=" " />
  <Label
    htmlFor="email"
    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
  >
    Email
  </Label>
</div>`,
  },
];

export function AnimatedLoginPage() {
  return (
    <ComponentShowcase
      title="Animated Login Forms"
      description="Authentication forms with smooth entrance animations, loading states, and success feedback."
      preview={variants[0].preview}
      code={animatedLoginCode}
      filename="animated-login.tsx"
      usage={`Animated login forms create polished user experiences.

• Stagger form field entrances
• Add loading spinners during auth
• Show success animations on completion
• Animate icons for visual interest
• Consider split-screen layouts`}
      props={animatedLoginProps}
      variants={variants}
    />
  );
}
