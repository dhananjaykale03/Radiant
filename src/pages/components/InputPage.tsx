import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Search, Mail, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const inputCode = `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}`;

const inputWithIconCode = `import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function InputWithIcon() {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input className="pl-10" placeholder="Search..." />
    </div>
  )
}`;

const inputProps = [
  {
    name: 'type',
    type: 'string',
    default: '"text"',
    description: 'The type of input (text, email, password, etc.).',
  },
  {
    name: 'placeholder',
    type: 'string',
    default: '-',
    description: 'Placeholder text.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Whether the input is disabled.',
  },
];

const variants = [
  {
    name: 'Default',
    preview: (
      <div className="grid w-full max-w-sm gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    ),
    code: inputCode,
  },
  {
    name: 'With Icon',
    preview: (
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input className="pl-10" placeholder="Search..." />
      </div>
    ),
    code: inputWithIconCode,
  },
];

export function InputPage() {
  return (
    <ComponentShowcase
      title="Input"
      description="Displays a form input field."
      preview={variants[0].preview}
      code={inputCode}
      filename="input-demo.tsx"
      usage={`Inputs are used to collect user data.

• Always include a Label for accessibility
• Use placeholder for hints, not as labels
• Add icons for context (search, email, etc.)
• Show validation states with border colors`}
      props={inputProps}
      variants={variants}
    />
  );
}
