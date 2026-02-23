import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';

const textareaCode = `import { Textarea } from "@/components/ui/textarea"

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}`;

const textareaWithLabelCode = `import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  )
}`;

const textareaProps = [
  {
    name: 'placeholder',
    type: 'string',
    default: '-',
    description: 'Placeholder text when the textarea is empty.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Whether the textarea is disabled.',
  },
  {
    name: 'rows',
    type: 'number',
    default: '-',
    description: 'The number of visible text lines.',
  },
];

const variants = [
  {
    name: 'Default',
    preview: <Textarea placeholder="Type your message here." className="max-w-sm" />,
    code: textareaCode,
  },
  {
    name: 'With Label',
    preview: (
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>
    ),
    code: textareaWithLabelCode,
  },
  {
    name: 'Disabled',
    preview: <Textarea placeholder="Disabled textarea" disabled className="max-w-sm" />,
    code: `<Textarea placeholder="Disabled textarea" disabled />`,
  },
];

export function TextareaPage() {
  return (
    <ComponentShowcase
      title="Textarea"
      description="Displays a form textarea or a component that looks like a textarea."
      preview={variants[0].preview}
      code={textareaCode}
      filename="textarea-demo.tsx"
      usage={`Textarea is used for multi-line text input.

• Use for comments, descriptions, or any long-form text
• Pair with Label for accessibility
• Control size with rows prop or CSS
• Style matches Input component for consistency`}
      props={textareaProps}
      variants={variants}
    />
  );
}
