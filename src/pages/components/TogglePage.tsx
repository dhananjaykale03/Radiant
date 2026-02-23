import { Toggle } from '@/components/ui/toggle';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Bold, Italic, Underline } from 'lucide-react';

const toggleCode = `import { Toggle } from "@/components/ui/toggle"
import { Bold } from "lucide-react"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}`;

const toggleWithTextCode = `import { Toggle } from "@/components/ui/toggle"
import { Italic } from "lucide-react"

export function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
      Italic
    </Toggle>
  )
}`;

const toggleProps = [
  {
    name: 'pressed',
    type: 'boolean',
    default: '-',
    description: 'The controlled pressed state.',
  },
  {
    name: 'onPressedChange',
    type: '(pressed: boolean) => void',
    default: '-',
    description: 'Callback when pressed state changes.',
  },
  {
    name: 'variant',
    type: '"default" | "outline"',
    default: '"default"',
    description: 'The visual variant of the toggle.',
  },
  {
    name: 'size',
    type: '"default" | "sm" | "lg"',
    default: '"default"',
    description: 'The size of the toggle.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Whether the toggle is disabled.',
  },
];

const variants = [
  {
    name: 'Default',
    preview: (
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
    ),
    code: toggleCode,
  },
  {
    name: 'With Text',
    preview: (
      <Toggle aria-label="Toggle italic">
        <Italic className="mr-2 h-4 w-4" />
        Italic
      </Toggle>
    ),
    code: toggleWithTextCode,
  },
  {
    name: 'Outline',
    preview: (
      <Toggle variant="outline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
    ),
    code: `<Toggle variant="outline" aria-label="Toggle underline">
  <Underline className="h-4 w-4" />
</Toggle>`,
  },
];

export function TogglePage() {
  return (
    <ComponentShowcase
      title="Toggle"
      description="A two-state button that can be either on or off."
      preview={variants[0].preview}
      code={toggleCode}
      filename="toggle-demo.tsx"
      usage={`Toggle is perfect for binary states like formatting options.

• Use for text formatting (bold, italic, underline)
• Can include icons, text, or both
• Supports outline variant for alternative styling
• Great for toolbar buttons and settings`}
      props={toggleProps}
      variants={variants}
    />
  );
}
