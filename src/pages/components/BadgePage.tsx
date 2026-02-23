import { Badge } from '@/components/ui/badge';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';

const badgeCode = `import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
}`;

const badgeProps = [
  {
    name: 'variant',
    type: '"default" | "secondary" | "destructive" | "outline"',
    default: '"default"',
    description: 'The visual style variant of the badge.',
  },
  {
    name: 'className',
    type: 'string',
    default: '-',
    description: 'Additional CSS classes.',
  },
];

const variants = [
  {
    name: 'Default',
    preview: (
      <div className="flex flex-wrap gap-4">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    ),
    code: badgeCode,
  },
];

export function BadgePage() {
  return (
    <ComponentShowcase
      title="Badge"
      description="Displays a badge or a component that looks like a badge."
      preview={variants[0].preview}
      code={badgeCode}
      filename="badge-demo.tsx"
      usage={`Badges are used to highlight status, categories, or counts.

• Default: Standard emphasis
• Secondary: Less emphasis
• Outline: Minimal emphasis
• Destructive: Warnings or errors`}
      props={badgeProps}
      variants={variants}
    />
  );
}
