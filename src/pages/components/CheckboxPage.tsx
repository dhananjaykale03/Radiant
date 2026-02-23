import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const basicCheckboxCode = `import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}`;

const checkboxProps = [
  { name: 'checked', type: 'boolean | "indeterminate"', default: '-', description: 'Controlled checked state' },
  { name: 'defaultChecked', type: 'boolean', default: 'false', description: 'Default checked state' },
  { name: 'onCheckedChange', type: '(checked: boolean) => void', default: '-', description: 'Change callback' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the checkbox' },
  { name: 'required', type: 'boolean', default: 'false', description: 'Mark as required' },
];

function ControlledCheckbox() {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(true);
  return (
    <div className="flex items-center space-x-2">
      <Checkbox 
        id="controlled" 
        checked={checked} 
        onCheckedChange={setChecked} 
      />
      <Label htmlFor="controlled">{checked === true ? 'Checked' : checked === 'indeterminate' ? 'Indeterminate' : 'Unchecked'}</Label>
    </div>
  );
}

function IndeterminateCheckbox() {
  const [items, setItems] = useState([
    { id: 'apple', label: 'Apple', checked: true },
    { id: 'orange', label: 'Orange', checked: false },
    { id: 'banana', label: 'Banana', checked: true },
  ]);

  const allChecked = items.every((item) => item.checked);
  const someChecked = items.some((item) => item.checked) && !allChecked;

  const toggleAll = () => {
    setItems(items.map((item) => ({ ...item, checked: !allChecked })));
  };

  const toggleItem = (id: string) => {
    setItems(items.map((item) => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="select-all"
          checked={someChecked ? 'indeterminate' : allChecked}
          onCheckedChange={toggleAll}
        />
        <Label htmlFor="select-all" className="font-medium">Select all fruits</Label>
      </div>
      <div className="ml-6 space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            <Checkbox 
              id={item.id}
              checked={item.checked}
              onCheckedChange={() => toggleItem(item.id)}
            />
            <Label htmlFor={item.id}>{item.label}</Label>
          </div>
        ))}
      </div>
    </div>
  );
}

const variants = [
  {
    name: 'Basic',
    preview: (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    ),
    code: basicCheckboxCode,
  },
  {
    name: 'Checked',
    preview: (
      <div className="flex items-center space-x-2">
        <Checkbox id="checked" defaultChecked />
        <Label htmlFor="checked">Checked by default</Label>
      </div>
    ),
    code: `<Checkbox id="checked" defaultChecked />`,
  },
  {
    name: 'Disabled',
    preview: (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled" disabled />
          <Label htmlFor="disabled" className="text-muted-foreground">Disabled (unchecked)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled-checked" disabled defaultChecked />
          <Label htmlFor="disabled-checked" className="text-muted-foreground">Disabled (checked)</Label>
        </div>
      </div>
    ),
    code: `<Checkbox disabled />
<Checkbox disabled defaultChecked />`,
  },
  {
    name: 'Controlled',
    preview: <ControlledCheckbox />,
    code: `const [checked, setChecked] = useState(true);

<Checkbox 
  checked={checked} 
  onCheckedChange={setChecked} 
/>`,
  },
  {
    name: 'Indeterminate',
    preview: <IndeterminateCheckbox />,
    code: `// Parent checkbox with indeterminate state
<Checkbox checked={someChecked ? 'indeterminate' : allChecked} />`,
  },
  {
    name: 'With Description',
    preview: (
      <div className="flex space-x-2">
        <Checkbox id="with-desc" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="with-desc">Enable notifications</Label>
          <p className="text-sm text-muted-foreground">
            You will receive email notifications when events happen.
          </p>
        </div>
      </div>
    ),
    code: `<div className="flex space-x-2">
  <Checkbox id="notifications" />
  <div className="grid gap-1.5">
    <Label htmlFor="notifications">Enable notifications</Label>
    <p className="text-sm text-muted-foreground">
      You will receive email notifications.
    </p>
  </div>
</div>`,
  },
  {
    name: 'Checkbox Group',
    preview: (
      <div className="space-y-3">
        <Label className="text-sm font-medium">Select your interests</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="tech" defaultChecked />
            <Label htmlFor="tech">Technology</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="design" />
            <Label htmlFor="design">Design</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="business" defaultChecked />
            <Label htmlFor="business">Business</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="science" />
            <Label htmlFor="science">Science</Label>
          </div>
        </div>
      </div>
    ),
    code: `// Checkbox group`,
  },
  {
    name: 'In Card',
    preview: (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-lg">Cookie Preferences</CardTitle>
          <CardDescription>Manage your cookie settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox id="necessary" defaultChecked disabled />
            <div className="grid gap-1">
              <Label htmlFor="necessary">Necessary</Label>
              <p className="text-xs text-muted-foreground">Required for the website to function</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox id="analytics" defaultChecked />
            <div className="grid gap-1">
              <Label htmlFor="analytics">Analytics</Label>
              <p className="text-xs text-muted-foreground">Help us improve our website</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox id="marketing" />
            <div className="grid gap-1">
              <Label htmlFor="marketing">Marketing</Label>
              <p className="text-xs text-muted-foreground">Personalized advertisements</p>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
    code: `// Cookie preferences card`,
  },
  {
    name: 'Horizontal Group',
    preview: (
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center space-x-2">
          <Checkbox id="sm" />
          <Label htmlFor="sm">Small</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="md" defaultChecked />
          <Label htmlFor="md">Medium</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="lg" />
          <Label htmlFor="lg">Large</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="xl" />
          <Label htmlFor="xl">X-Large</Label>
        </div>
      </div>
    ),
    code: `// Horizontal checkbox group`,
  },
  {
    name: 'Todo List',
    preview: (
      <div className="space-y-2 w-[250px]">
        <div className="flex items-center space-x-2">
          <Checkbox id="task1" defaultChecked />
          <Label htmlFor="task1" className="line-through text-muted-foreground">Buy groceries</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="task2" defaultChecked />
          <Label htmlFor="task2" className="line-through text-muted-foreground">Clean the house</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="task3" />
          <Label htmlFor="task3">Finish project</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="task4" />
          <Label htmlFor="task4">Go to the gym</Label>
        </div>
      </div>
    ),
    code: `// Todo list with completed items`,
  },
  {
    name: 'Filter Options',
    preview: (
      <div className="w-[200px] space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-medium">Category</p>
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <Checkbox id="electronics" defaultChecked />
              <Label htmlFor="electronics" className="text-sm">Electronics</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="clothing" defaultChecked />
              <Label htmlFor="clothing" className="text-sm">Clothing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="home" />
              <Label htmlFor="home" className="text-sm">Home & Garden</Label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Price Range</p>
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <Checkbox id="under50" />
              <Label htmlFor="under50" className="text-sm">Under $50</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="50to100" defaultChecked />
              <Label htmlFor="50to100" className="text-sm">$50 - $100</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="over100" />
              <Label htmlFor="over100" className="text-sm">Over $100</Label>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `// Filter options`,
  },
  {
    name: 'Required',
    preview: (
      <div className="flex items-center space-x-2">
        <Checkbox id="required" required />
        <Label htmlFor="required">
          I agree to the terms <span className="text-destructive">*</span>
        </Label>
      </div>
    ),
    code: `<Checkbox id="required" required />`,
  },
  {
    name: 'With Form',
    preview: (
      <div className="space-y-4 w-[300px]">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="form-updates" defaultChecked />
            <Label htmlFor="form-updates">Email me about product updates</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="form-marketing" />
            <Label htmlFor="form-marketing">Email me about marketing promotions</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="form-terms" />
            <Label htmlFor="form-terms">I accept the terms and conditions</Label>
          </div>
        </div>
        <Button className="w-full">Subscribe</Button>
      </div>
    ),
    code: `// Checkbox in form context`,
  },
  {
    name: 'Bordered',
    preview: (
      <div className="space-y-2 w-[280px]">
        <div className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted/50 transition-colors">
          <Checkbox id="bordered1" />
          <Label htmlFor="bordered1" className="flex-1 cursor-pointer">Standard Shipping</Label>
          <span className="text-sm text-muted-foreground">Free</span>
        </div>
        <div className="flex items-center space-x-2 rounded-md border border-primary bg-primary/5 p-3">
          <Checkbox id="bordered2" defaultChecked />
          <Label htmlFor="bordered2" className="flex-1 cursor-pointer">Express Shipping</Label>
          <span className="text-sm text-muted-foreground">$9.99</span>
        </div>
        <div className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted/50 transition-colors">
          <Checkbox id="bordered3" />
          <Label htmlFor="bordered3" className="flex-1 cursor-pointer">Next Day Delivery</Label>
          <span className="text-sm text-muted-foreground">$19.99</span>
        </div>
      </div>
    ),
    code: `// Bordered checkbox options`,
  },
];

export function CheckboxPage() {
  return (
    <ComponentShowcase
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
      preview={variants[0].preview}
      code={basicCheckboxCode}
      filename="checkbox.tsx"
      usage={`Checkboxes allow users to select multiple items from a list.

• Use for multiple selections from a list
• Support indeterminate state for parent checkboxes
• Group related checkboxes together
• Add descriptions for complex options
• Use in forms, filters, and settings`}
      props={checkboxProps}
      variants={variants}
    />
  );
}
