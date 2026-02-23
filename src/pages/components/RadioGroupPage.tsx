import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';

const radioGroupCode = `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}`;

const radioGroupProps = [
  {
    name: 'defaultValue',
    type: 'string',
    default: '-',
    description: 'The default selected value.',
  },
  {
    name: 'value',
    type: 'string',
    default: '-',
    description: 'The controlled selected value.',
  },
  {
    name: 'onValueChange',
    type: '(value: string) => void',
    default: '-',
    description: 'Callback when the selection changes.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Whether the radio group is disabled.',
  },
];

const variants = [
  {
    name: 'Default',
    preview: (
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
    ),
    code: radioGroupCode,
  },
  {
    name: 'Horizontal',
    preview: (
      <RadioGroup defaultValue="card" className="flex gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="card" id="h1" />
          <Label htmlFor="h1">Card</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="paypal" id="h2" />
          <Label htmlFor="h2">PayPal</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="apple" id="h3" />
          <Label htmlFor="h3">Apple Pay</Label>
        </div>
      </RadioGroup>
    ),
    code: `<RadioGroup defaultValue="card" className="flex gap-4">
  ...
</RadioGroup>`,
  },
];

export function RadioGroupPage() {
  return (
    <ComponentShowcase
      title="Radio Group"
      description="A set of checkable buttons where only one can be checked at a time."
      preview={variants[0].preview}
      code={radioGroupCode}
      filename="radio-group-demo.tsx"
      usage={`Radio Group allows selecting one option from a set.

• Use for mutually exclusive options
• Always pair RadioGroupItem with Label
• Set defaultValue for initial selection
• Can be arranged vertically or horizontally`}
      props={radioGroupProps}
      variants={variants}
    />
  );
}
