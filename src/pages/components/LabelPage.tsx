import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';

const labelCode = `import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}`;

const labelCheckboxCode = `import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function LabelWithCheckbox() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}`;

const labelProps = [
  {
    name: 'htmlFor',
    type: 'string',
    default: '-',
    description: 'The id of the element the label is associated with.',
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
    name: 'With Input',
    preview: (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    ),
    code: labelCode,
  },
  {
    name: 'With Checkbox',
    preview: (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    ),
    code: labelCheckboxCode,
  },
];

export function LabelPage() {
  return (
    <ComponentShowcase
      title="Label"
      description="Renders an accessible label associated with controls."
      preview={variants[0].preview}
      code={labelCode}
      filename="label-demo.tsx"
      usage={`Label provides accessible text for form controls.

• Use htmlFor to associate with an input's id
• Clicking the label focuses the associated control
• Works with Input, Checkbox, Radio, Switch, and more
• Styled consistently with the form design system`}
      props={labelProps}
      variants={variants}
    />
  );
}
