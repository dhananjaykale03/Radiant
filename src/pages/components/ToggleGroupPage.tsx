import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline } from 'lucide-react';

const toggleGroupCode = `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react"

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}`;

const toggleGroupMultipleCode = `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

export function ToggleGroupMultiple() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}`;

const toggleGroupProps = [
  {
    name: 'type',
    type: '"single" | "multiple"',
    default: '-',
    description: 'Whether single or multiple items can be pressed.',
  },
  {
    name: 'value',
    type: 'string | string[]',
    default: '-',
    description: 'The controlled value(s).',
  },
  {
    name: 'onValueChange',
    type: '(value: string | string[]) => void',
    default: '-',
    description: 'Callback when value changes.',
  },
  {
    name: 'variant',
    type: '"default" | "outline"',
    default: '"default"',
    description: 'The visual variant.',
  },
];

const variants = [
  {
    name: 'Single Selection',
    preview: (
      <ToggleGroup type="single" defaultValue="center">
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    ),
    code: toggleGroupCode,
  },
  {
    name: 'Multiple Selection',
    preview: (
      <ToggleGroup type="multiple" defaultValue={['bold']}>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    ),
    code: toggleGroupMultipleCode,
  },
  {
    name: 'Outline Variant',
    preview: (
      <ToggleGroup type="single" variant="outline" defaultValue="center">
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    ),
    code: `<ToggleGroup type="single" variant="outline">...</ToggleGroup>`,
  },
];

export function ToggleGroupPage() {
  return (
    <ComponentShowcase
      title="Toggle Group"
      description="A set of two-state buttons that can be toggled on or off."
      preview={variants[0].preview}
      code={toggleGroupCode}
      filename="toggle-group-demo.tsx"
      usage={`Toggle Group creates a set of related toggle buttons.

• Use type="single" for radio-like behavior
• Use type="multiple" for checkbox-like behavior
• Perfect for text alignment, formatting toolbars
• All items share the same visual style`}
      props={toggleGroupProps}
      variants={variants}
    />
  );
}
