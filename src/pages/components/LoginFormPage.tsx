import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Github, Mail, Loader2, Eye, EyeOff, Lock, User, ArrowRight, Sparkles, Apple, Chrome, Phone, Shield, Key, Fingerprint } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';

const loginFormCode = `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function LoginForm() {
  return (
    <Card className="w-[400px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
        <CardDescription>Choose your preferred sign in method</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline"><Github className="mr-2 h-4 w-4" />Github</Button>
          <Button variant="outline"><Mail className="mr-2 h-4 w-4" />Google</Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign in</Button>
      </CardFooter>
    </Card>
  )
}`;

const loginFormProps = [
  { name: 'onSubmit', type: '(data: { email: string, password: string }) => void', default: '-', description: 'Callback when form is submitted.' },
  { name: 'loading', type: 'boolean', default: 'false', description: 'Shows loading state on submit button.' },
  { name: 'socialProviders', type: 'string[]', default: "['github', 'google']", description: 'Social auth providers to show.' },
];

const variants = [
  {
    name: 'Basic',
    preview: (
      <Card className="w-[380px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
          <CardDescription>Choose your preferred sign in method</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline"><Github className="mr-2 h-4 w-4" />Github</Button>
            <Button variant="outline"><Mail className="mr-2 h-4 w-4" />Google</Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><Separator className="w-full" /></div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign in</Button>
        </CardFooter>
      </Card>
    ),
    code: loginFormCode,
  },
  {
    name: 'Email Only',
    preview: (
      <Card className="w-[380px]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>Enter your email to sign in</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email2">Email</Label>
            <Input id="email2" type="email" placeholder="m@example.com" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password2">Password</Label>
              <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
            </div>
            <Input id="password2" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button className="w-full">Sign in</Button>
          <p className="text-sm text-muted-foreground">
            Don't have an account? <a href="#" className="text-primary hover:underline">Sign up</a>
          </p>
        </CardFooter>
      </Card>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function EmailOnlyLogin() {
  return (
    <Card className="w-[380px]">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Welcome back</CardTitle>
        <CardDescription>Enter your email to sign in</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
          </div>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button className="w-full">Sign in</Button>
        <p className="text-sm text-muted-foreground">
          Don't have an account? <a href="#" className="text-primary hover:underline">Sign up</a>
        </p>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: 'With Icon Inputs',
    preview: (
      <Card className="w-[380px]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Sign in</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="email" placeholder="Email address" className="pl-9" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="password" placeholder="Password" className="pl-9" />
              <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-sm">Remember me</label>
            </div>
            <a href="#" className="text-sm text-primary hover:underline">Forgot?</a>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign in</Button>
        </CardFooter>
      </Card>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Lock, Eye } from "lucide-react"

export function IconInputLogin() {
  return (
    <Card className="w-[380px]">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Sign in</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="email" placeholder="Email address" className="pl-9" />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="password" placeholder="Password" className="pl-9" />
          <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="text-sm">Remember me</label>
          </div>
          <a href="#" className="text-sm text-primary hover:underline">Forgot?</a>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign in</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: 'Split Layout',
    preview: (
      <div className="grid md:grid-cols-2 w-full max-w-4xl rounded-xl border overflow-hidden">
        <div className="bg-gradient-to-br from-primary to-purple-600 p-8 text-white hidden md:flex flex-col justify-between">
          <div>
            <Sparkles className="h-8 w-8 mb-4" />
            <h2 className="text-2xl font-bold">Welcome back!</h2>
            <p className="mt-2 opacity-90">Sign in to continue to your dashboard.</p>
          </div>
          <p className="text-sm opacity-75">© 2024 Company Inc.</p>
        </div>
        <div className="p-8 bg-background">
          <h2 className="text-2xl font-bold mb-6">Sign in</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="m@example.com" />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" />
            </div>
            <Button className="w-full">Sign in</Button>
          </div>
        </div>
      </div>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles } from "lucide-react"

export function SplitLayoutLogin() {
  return (
    <div className="grid md:grid-cols-2 w-full max-w-4xl rounded-xl border overflow-hidden">
      <div className="bg-gradient-to-br from-primary to-purple-600 p-8 text-white hidden md:flex flex-col justify-between">
        <div>
          <Sparkles className="h-8 w-8 mb-4" />
          <h2 className="text-2xl font-bold">Welcome back!</h2>
          <p className="mt-2 opacity-90">Sign in to continue to your dashboard.</p>
        </div>
        <p className="text-sm opacity-75">© 2024 Company Inc.</p>
      </div>
      <div className="p-8 bg-background">
        <h2 className="text-2xl font-bold mb-6">Sign in</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" placeholder="m@example.com" />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" />
          </div>
          <Button className="w-full">Sign in</Button>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: 'Social Only',
    preview: (
      <Card className="w-[380px]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Get started</CardTitle>
          <CardDescription>Choose your preferred sign in method</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full"><Github className="mr-2 h-4 w-4" />Continue with GitHub</Button>
          <Button variant="outline" className="w-full"><Chrome className="mr-2 h-4 w-4" />Continue with Google</Button>
          <Button variant="outline" className="w-full"><Apple className="mr-2 h-4 w-4" />Continue with Apple</Button>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-xs text-muted-foreground text-center">
            By continuing, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>
          </p>
        </CardFooter>
      </Card>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Chrome, Apple } from "lucide-react"

export function SocialOnlyLogin() {
  return (
    <Card className="w-[380px]">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Get started</CardTitle>
        <CardDescription>Choose your preferred sign in method</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button variant="outline" className="w-full"><Github className="mr-2 h-4 w-4" />Continue with GitHub</Button>
        <Button variant="outline" className="w-full"><Chrome className="mr-2 h-4 w-4" />Continue with Google</Button>
        <Button variant="outline" className="w-full"><Apple className="mr-2 h-4 w-4" />Continue with Apple</Button>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-xs text-muted-foreground text-center">
          By continuing, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>
        </p>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: 'Loading State',
    preview: (
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle className="text-2xl">Sign in</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" placeholder="m@example.com" disabled />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" disabled />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing in...
          </Button>
        </CardFooter>
      </Card>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export function LoadingLogin() {
  const [loading, setLoading] = useState(false)
  
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle className="text-2xl">Sign in</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Email</Label>
          <Input type="email" placeholder="m@example.com" disabled={loading} />
        </div>
        <div className="space-y-2">
          <Label>Password</Label>
          <Input type="password" disabled={loading} />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: 'Minimal',
    preview: (
      <div className="w-[340px] space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Sign in</h1>
          <p className="text-muted-foreground text-sm mt-1">Welcome back</p>
        </div>
        <div className="space-y-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full">Sign in</Button>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">Forgot password?</a>
        </div>
      </div>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function MinimalLogin() {
  return (
    <div className="w-[340px] space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <p className="text-muted-foreground text-sm mt-1">Welcome back</p>
      </div>
      <div className="space-y-4">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button className="w-full">Sign in</Button>
      </div>
      <div className="text-center text-sm text-muted-foreground">
        <a href="#" className="hover:text-foreground">Forgot password?</a>
      </div>
    </div>
  )
}`,
  },
  {
    name: 'With Logo',
    preview: (
      <Card className="w-[380px]">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl">Sign in to Acme</CardTitle>
          <CardDescription>Welcome back! Please sign in to continue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" placeholder="m@example.com" />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button className="w-full">Sign in</Button>
          <p className="text-sm text-muted-foreground">
            Don't have an account? <a href="#" className="text-primary hover:underline">Sign up</a>
          </p>
        </CardFooter>
      </Card>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export function LogoLogin() {
  return (
    <Card className="w-[380px]">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
          <Sparkles className="h-6 w-6 text-primary-foreground" />
        </div>
        <CardTitle className="text-2xl">Sign in to Acme</CardTitle>
        <CardDescription>Welcome back! Please sign in to continue</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Email</Label>
          <Input type="email" placeholder="m@example.com" />
        </div>
        <div className="space-y-2">
          <Label>Password</Label>
          <Input type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button className="w-full">Sign in</Button>
        <p className="text-sm text-muted-foreground">
          Don't have an account? <a href="#" className="text-primary hover:underline">Sign up</a>
        </p>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: 'Magic Link',
    preview: (
      <Card className="w-[380px]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Sign in with email</CardTitle>
          <CardDescription>We'll send you a magic link</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Email address</Label>
            <Input type="email" placeholder="m@example.com" />
          </div>
          <Button className="w-full">
            Send magic link
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
        <CardFooter className="justify-center">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Sign in with password instead
          </a>
        </CardFooter>
      </Card>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function MagicLinkLogin() {
  return (
    <Card className="w-[380px]">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Sign in with email</CardTitle>
        <CardDescription>We'll send you a magic link</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Email address</Label>
          <Input type="email" placeholder="m@example.com" />
        </div>
        <Button className="w-full">
          Send magic link
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
      <CardFooter className="justify-center">
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
          Sign in with password instead
        </a>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: 'Sign Up',
    preview: (
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle className="text-2xl">Create account</CardTitle>
          <CardDescription>Enter your details below</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>First name</Label>
              <Input placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label>Last name</Label>
              <Input placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" placeholder="m@example.com" />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button className="w-full">Create account</Button>
          <p className="text-sm text-muted-foreground">
            Already have an account? <a href="#" className="text-primary hover:underline">Sign in</a>
          </p>
        </CardFooter>
      </Card>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function SignUpForm() {
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle className="text-2xl">Create account</CardTitle>
        <CardDescription>Enter your details below</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>First name</Label>
            <Input placeholder="John" />
          </div>
          <div className="space-y-2">
            <Label>Last name</Label>
            <Input placeholder="Doe" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Email</Label>
          <Input type="email" placeholder="m@example.com" />
        </div>
        <div className="space-y-2">
          <Label>Password</Label>
          <Input type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button className="w-full">Create account</Button>
        <p className="text-sm text-muted-foreground">
          Already have an account? <a href="#" className="text-primary hover:underline">Sign in</a>
        </p>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: 'OTP Verification',
    preview: (
      <Card className="w-[380px]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Verify your email</CardTitle>
          <CardDescription>We sent a code to m@example.com</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center gap-2">
            {[...Array(6)].map((_, i) => (
              <Input key={i} className="w-10 h-12 text-center text-lg" maxLength={1} />
            ))}
          </div>
          <Button className="w-full">Verify</Button>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-muted-foreground">
            Didn't receive a code? <a href="#" className="text-primary hover:underline">Resend</a>
          </p>
        </CardFooter>
      </Card>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function OTPVerification() {
  return (
    <Card className="w-[380px]">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Verify your email</CardTitle>
        <CardDescription>We sent a code to m@example.com</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center gap-2">
          {[...Array(6)].map((_, i) => (
            <Input key={i} className="w-10 h-12 text-center text-lg" maxLength={1} />
          ))}
        </div>
        <Button className="w-full">Verify</Button>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          Didn't receive a code? <a href="#" className="text-primary hover:underline">Resend</a>
        </p>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: 'Reset Password',
    preview: (
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle className="text-2xl">Reset password</CardTitle>
          <CardDescription>Enter your email to receive a reset link</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" placeholder="m@example.com" />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button className="w-full">Send reset link</Button>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Back to sign in
          </a>
        </CardFooter>
      </Card>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ResetPassword() {
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle className="text-2xl">Reset password</CardTitle>
        <CardDescription>Enter your email to receive a reset link</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Email</Label>
          <Input type="email" placeholder="m@example.com" />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Button className="w-full">Send reset link</Button>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
          Back to sign in
        </a>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: 'Dark Glass',
    preview: (
      <div className="w-[380px] p-6 rounded-2xl bg-slate-900/90 backdrop-blur border border-slate-800 text-white">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Welcome back</h2>
          <p className="text-slate-400 text-sm mt-1">Sign in to your account</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-slate-300">Email</Label>
            <Input type="email" placeholder="m@example.com" className="bg-slate-800 border-slate-700 text-white" />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-300">Password</Label>
            <Input type="password" className="bg-slate-800 border-slate-700 text-white" />
          </div>
          <Button className="w-full bg-white text-slate-900 hover:bg-slate-100">Sign in</Button>
        </div>
      </div>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DarkGlassLogin() {
  return (
    <div className="w-[380px] p-6 rounded-2xl bg-slate-900/90 backdrop-blur border border-slate-800 text-white">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Welcome back</h2>
        <p className="text-slate-400 text-sm mt-1">Sign in to your account</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-slate-300">Email</Label>
          <Input type="email" placeholder="m@example.com" className="bg-slate-800 border-slate-700 text-white" />
        </div>
        <div className="space-y-2">
          <Label className="text-slate-300">Password</Label>
          <Input type="password" className="bg-slate-800 border-slate-700 text-white" />
        </div>
        <Button className="w-full bg-white text-slate-900 hover:bg-slate-100">Sign in</Button>
      </div>
    </div>
  )
}`,
  },
  {
    name: 'Phone Number',
    preview: (
      <Card className="w-[380px]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Sign in with phone</CardTitle>
          <CardDescription>We'll send you a verification code</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Phone number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="tel" placeholder="+1 (555) 000-0000" className="pl-9" />
            </div>
          </div>
          <Button className="w-full">Send code</Button>
        </CardContent>
        <CardFooter className="justify-center">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Use email instead
          </a>
        </CardFooter>
      </Card>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone } from "lucide-react"

export function PhoneLogin() {
  return (
    <Card className="w-[380px]">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Sign in with phone</CardTitle>
        <CardDescription>We'll send you a verification code</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Phone number</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="tel" placeholder="+1 (555) 000-0000" className="pl-9" />
          </div>
        </div>
        <Button className="w-full">Send code</Button>
      </CardContent>
      <CardFooter className="justify-center">
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
          Use email instead
        </a>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: 'Username Login',
    preview: (
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle className="text-2xl">Sign in</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Username</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="johndoe" className="pl-9" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="password" className="pl-9" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign in</Button>
        </CardFooter>
      </Card>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Lock } from "lucide-react"

export function UsernameLogin() {
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle className="text-2xl">Sign in</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Username</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="johndoe" className="pl-9" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="password" className="pl-9" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign in</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: 'Passkey Login',
    preview: (
      <Card className="w-[380px]">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Fingerprint className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Sign in with passkey</CardTitle>
          <CardDescription>Use your device's biometric authentication</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full" size="lg">
            <Fingerprint className="mr-2 h-4 w-4" />
            Use passkey
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><Separator className="w-full" /></div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or</span>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            Sign in with password
          </Button>
        </CardContent>
      </Card>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Fingerprint } from "lucide-react"

export function PasskeyLogin() {
  return (
    <Card className="w-[380px]">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Fingerprint className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl">Sign in with passkey</CardTitle>
        <CardDescription>Use your device's biometric authentication</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full" size="lg">
          <Fingerprint className="mr-2 h-4 w-4" />
          Use passkey
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center"><Separator className="w-full" /></div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or</span>
          </div>
        </div>
        <Button variant="outline" className="w-full">Sign in with password</Button>
      </CardContent>
    </Card>
  )
}`,
  },
  {
    name: 'Two-Factor Auth',
    preview: (
      <Card className="w-[380px]">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Two-factor authentication</CardTitle>
          <CardDescription>Enter the code from your authenticator app</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center gap-2">
            {[...Array(6)].map((_, i) => (
              <Input key={i} className="w-10 h-12 text-center text-lg font-mono" maxLength={1} />
            ))}
          </div>
          <Button className="w-full">Verify</Button>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Use backup code
          </a>
        </CardFooter>
      </Card>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"

export function TwoFactorAuth() {
  return (
    <Card className="w-[380px]">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Shield className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl">Two-factor authentication</CardTitle>
        <CardDescription>Enter the code from your authenticator app</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center gap-2">
          {[...Array(6)].map((_, i) => (
            <Input key={i} className="w-10 h-12 text-center text-lg font-mono" maxLength={1} />
          ))}
        </div>
        <Button className="w-full">Verify</Button>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Use backup code</a>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: 'New Password',
    preview: (
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle className="text-2xl">Create new password</CardTitle>
          <CardDescription>Your password must be at least 8 characters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>New password</Label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="password" className="pl-9" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Confirm password</Label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="password" className="pl-9" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Reset password</Button>
        </CardFooter>
      </Card>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Key } from "lucide-react"

export function NewPassword() {
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle className="text-2xl">Create new password</CardTitle>
        <CardDescription>Your password must be at least 8 characters</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>New password</Label>
          <div className="relative">
            <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="password" className="pl-9" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Confirm password</Label>
          <div className="relative">
            <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="password" className="pl-9" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Reset password</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: 'Success State',
    preview: (
      <Card className="w-[380px]">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <CardTitle className="text-2xl">Email verified!</CardTitle>
          <CardDescription>Your email has been successfully verified. You can now sign in to your account.</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">Continue to sign in</Button>
        </CardFooter>
      </Card>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function SuccessState() {
  return (
    <Card className="w-[380px]">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <CardTitle className="text-2xl">Email verified!</CardTitle>
        <CardDescription>Your email has been successfully verified.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Continue to sign in</Button>
      </CardFooter>
    </Card>
  )
}`,
  },
  {
    name: 'Enterprise SSO',
    preview: (
      <Card className="w-[380px]">
        <CardHeader className="text-center">
          <Badge className="w-fit mx-auto mb-2" variant="secondary">Enterprise</Badge>
          <CardTitle className="text-2xl">Sign in to Acme Corp</CardTitle>
          <CardDescription>Use your company credentials</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Work email</Label>
            <Input type="email" placeholder="you@company.com" />
          </div>
          <Button className="w-full">
            <Shield className="mr-2 h-4 w-4" />
            Continue with SSO
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><Separator className="w-full" /></div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or</span>
            </div>
          </div>
          <Button variant="outline" className="w-full">Sign in with password</Button>
        </CardContent>
      </Card>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Shield } from "lucide-react"

export function EnterpriseSSO() {
  return (
    <Card className="w-[380px]">
      <CardHeader className="text-center">
        <Badge className="w-fit mx-auto mb-2" variant="secondary">Enterprise</Badge>
        <CardTitle className="text-2xl">Sign in to Acme Corp</CardTitle>
        <CardDescription>Use your company credentials</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Work email</Label>
          <Input type="email" placeholder="you@company.com" />
        </div>
        <Button className="w-full">
          <Shield className="mr-2 h-4 w-4" />
          Continue with SSO
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center"><Separator className="w-full" /></div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or</span>
          </div>
        </div>
        <Button variant="outline" className="w-full">Sign in with password</Button>
      </CardContent>
    </Card>
  )
}`,
  },
];

export function LoginFormPage() {
  return (
    <ComponentShowcase
      title="Login Form"
      description="Authentication forms with various layouts, social providers, and security features."
      preview={variants[0].preview}
      code={loginFormCode}
      filename="login-form.tsx"
      usage={`Login forms are essential for user authentication.

• Include email/password fields with proper labels
• Add social login options (GitHub, Google, Apple)
• Show loading states during authentication
• Provide forgot password and signup links
• Consider magic link or passwordless options`}
      props={loginFormProps}
      variants={variants}
    />
  );
}
