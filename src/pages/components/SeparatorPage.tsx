import { Separator } from '@/components/ui/separator';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';

const separatorCode = `import { Separator } from "@/components/ui/separator"

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}`;

const separatorProps = [
  {
    name: 'orientation',
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: 'The orientation of the separator.',
  },
  {
    name: 'decorative',
    type: 'boolean',
    default: 'true',
    description: 'Whether the separator is decorative.',
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
      <div className="w-full max-w-sm">
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
          <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    ),
    code: separatorCode,
  },
];

export function SeparatorPage() {
  return (
    <ComponentShowcase
      title="Separator"
      description="Visually or semantically separates content."
      preview={variants[0].preview}
      code={separatorCode}
      filename="separator-demo.tsx"
      usage={`Separator divides content visually.

• Use horizontal for dividing sections
• Use vertical for inline items (breadcrumbs, nav)
• Set decorative={false} for semantic separation
• Customize with className for spacing`}
      props={separatorProps}
      variants={variants}
    />
  );
}
