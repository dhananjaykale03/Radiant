import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/showcase/CodeBlock';
import { CheckCircle2, Terminal, Package, Palette } from 'lucide-react';

const installCode = `# Create a new project
npx create-vite@latest my-app --template react-ts
cd my-app

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install shadcn/ui dependencies
npm install class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-slot`;

const tailwindConfigCode = `// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... more colors
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`;

const componentUsageCode = `// Example: Using the Button component
import { Button } from "@/components/ui/button"

export function MyComponent() {
  return (
    <div className="flex gap-4">
      <Button>Click me</Button>
      <Button variant="outline">Secondary</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  )
}`;

const steps = [
  {
    icon: Terminal,
    title: 'Install Dependencies',
    description: 'Set up your project with Vite, Tailwind CSS, and the required packages.',
  },
  {
    icon: Palette,
    title: 'Configure Theme',
    description: 'Add CSS variables and configure Tailwind for the design system.',
  },
  {
    icon: Package,
    title: 'Copy Components',
    description: 'Browse the library and copy the components you need into your project.',
  },
  {
    icon: CheckCircle2,
    title: 'Start Building',
    description: 'Import and use components in your application.',
  },
];

export default function DocsPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <div>
        <Badge className="mb-4">Documentation</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Getting Started</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Learn how to set up your project and start using components.
        </p>
      </div>

      {/* Quick Start Steps */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Card key={step.title} className="relative">
            <CardHeader className="pb-2">
              <div className="absolute -top-3 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {index + 1}
              </div>
              <step.icon className="h-5 w-5 text-primary mb-2" />
              <CardTitle className="text-base">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Installation</h2>
        <p className="text-muted-foreground">
          Start by creating a new React project and installing the required dependencies.
        </p>
        <CodeBlock code={installCode} language="bash" filename="terminal" />
      </section>

      {/* Tailwind Config */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Configure Tailwind</h2>
        <p className="text-muted-foreground">
          Update your Tailwind configuration to include the design system tokens.
        </p>
        <CodeBlock code={tailwindConfigCode} language="typescript" filename="tailwind.config.js" />
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Using Components</h2>
        <p className="text-muted-foreground">
          Once set up, you can import and use any component from the library.
        </p>
        <CodeBlock code={componentUsageCode} language="tsx" filename="MyComponent.tsx" />
      </section>

      {/* Tips */}
      <section className="rounded-xl border bg-muted/30 p-6">
        <h3 className="font-semibold mb-4">💡 Pro Tips</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <span>Use the <kbd className="px-1.5 py-0.5 rounded bg-muted text-xs">⌘K</kbd> shortcut to quickly search for components.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <span>Components are fully customizable through Tailwind CSS classes.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <span>All components follow WAI-ARIA guidelines for accessibility.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
