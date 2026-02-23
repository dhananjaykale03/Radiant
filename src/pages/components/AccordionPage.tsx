import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, HelpCircle, Settings, CreditCard, Shield, Bell, User, FileText, Package, Truck, RotateCcw } from 'lucide-react';

const basicAccordionCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default with smooth transitions.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`;

const accordionProps = [
  { name: 'type', type: '"single" | "multiple"', default: '"single"', description: 'Allow one or multiple items open' },
  { name: 'collapsible', type: 'boolean', default: 'false', description: 'Allow closing all items (single type only)' },
  { name: 'defaultValue', type: 'string | string[]', default: '-', description: 'Default open item(s)' },
  { name: 'value', type: 'string | string[]', default: '-', description: 'Controlled open item(s)' },
  { name: 'onValueChange', type: '(value: string | string[]) => void', default: '-', description: 'Change callback' },
];

const faqItems = [
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.' },
  { q: 'How long does shipping take?', a: 'Standard shipping takes 5-7 business days. Express shipping is available for 2-3 day delivery.' },
  { q: 'What is your return policy?', a: 'We offer a 30-day money-back guarantee. Items must be unused and in original packaging.' },
  { q: 'Do you offer international shipping?', a: 'Yes, we ship to over 100 countries. International shipping times and costs vary by location.' },
  { q: 'How can I track my order?', a: 'Once your order ships, you will receive an email with a tracking number and link to track your package.' },
];

const settingsItems = [
  { icon: User, title: 'Account Settings', content: 'Manage your account details, email preferences, and password.' },
  { icon: Bell, title: 'Notifications', content: 'Configure how and when you receive notifications.' },
  { icon: Shield, title: 'Privacy & Security', content: 'Control your privacy settings and security options.' },
  { icon: CreditCard, title: 'Billing', content: 'View your billing history and manage payment methods.' },
];

const variants = [
  {
    name: 'Basic',
    preview: (
      <Accordion type="single" collapsible className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>Yes. It comes with default styles that match other components.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>Yes. It's animated by default with smooth transitions.</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    code: basicAccordionCode,
  },
  {
    name: 'Default Open',
    preview: (
      <Accordion type="single" defaultValue="item-1" collapsible className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>First item (open by default)</AccordionTrigger>
          <AccordionContent>This item is open by default when the component mounts.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second item</AccordionTrigger>
          <AccordionContent>Click to expand this item.</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    code: `<Accordion type="single" defaultValue="item-1" collapsible>`,
  },
  {
    name: 'Multiple',
    preview: (
      <Accordion type="multiple" className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Multiple items can be open</AccordionTrigger>
          <AccordionContent>This accordion allows multiple items to be open at once.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Click to expand</AccordionTrigger>
          <AccordionContent>You can have both this and other items open simultaneously.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Third item</AccordionTrigger>
          <AccordionContent>All three items can be expanded at the same time.</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    code: `<Accordion type="multiple">`,
  },
  {
    name: 'FAQ Section',
    preview: (
      <div className="w-full max-w-lg">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">Frequently Asked Questions</h3>
          <p className="text-sm text-muted-foreground">Find answers to common questions</p>
        </div>
        <Accordion type="single" collapsible>
          {faqItems.slice(0, 4).map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    ),
    code: `// FAQ accordion section`,
  },
  {
    name: 'With Icons',
    preview: (
      <Accordion type="single" collapsible className="w-full max-w-md">
        {settingsItems.map((item, i) => (
          <AccordionItem key={i} value={`settings-${i}`}>
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-muted-foreground" />
                {item.title}
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pl-6">{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    ),
    code: `<AccordionTrigger>
  <div className="flex items-center gap-2">
    <User className="h-4 w-4" />
    Account Settings
  </div>
</AccordionTrigger>`,
  },
  {
    name: 'In Card',
    preview: (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Help Center
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="py-2">Getting Started</AccordionTrigger>
              <AccordionContent>Learn the basics of using our platform.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b-0">
              <AccordionTrigger className="py-2">Account Setup</AccordionTrigger>
              <AccordionContent>Configure your account settings.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-0">
              <AccordionTrigger className="py-2">Troubleshooting</AccordionTrigger>
              <AccordionContent>Common issues and solutions.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    ),
    code: `<Card>
  <CardContent>
    <Accordion type="single" collapsible>...</Accordion>
  </CardContent>
</Card>`,
  },
  {
    name: 'With Badges',
    preview: (
      <Accordion type="single" collapsible className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center justify-between flex-1 mr-4">
              <span>New Features</span>
              <Badge>3 new</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent>Check out our latest features and improvements.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="flex items-center justify-between flex-1 mr-4">
              <span>Bug Fixes</span>
              <Badge variant="secondary">Updated</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent>Recent bug fixes and stability improvements.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="flex items-center justify-between flex-1 mr-4">
              <span>Deprecated</span>
              <Badge variant="destructive">Breaking</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent>Features that will be removed in the next version.</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    code: `<AccordionTrigger>
  <div className="flex items-center justify-between flex-1">
    <span>New Features</span>
    <Badge>3 new</Badge>
  </div>
</AccordionTrigger>`,
  },
  {
    name: 'Order Details',
    preview: (
      <Accordion type="single" collapsible className="w-full max-w-md">
        <AccordionItem value="shipping">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4" />
              Shipping Information
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Method</span>
                <span>Express Delivery</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated</span>
                <span>2-3 business days</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="payment">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Payment Method
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Card</span>
                <span>•••• 4242</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              Return Policy
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-muted-foreground">
              30-day return policy. Items must be unused and in original packaging.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    code: `// Order details accordion`,
  },
  {
    name: 'Nested Content',
    preview: (
      <Accordion type="single" collapsible className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Product Details</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Features</h4>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>High-quality materials</li>
                  <li>Durable construction</li>
                  <li>Modern design</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Specifications</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-muted-foreground">Weight</span>
                  <span>2.5 kg</span>
                  <span className="text-muted-foreground">Dimensions</span>
                  <span>30 x 20 x 10 cm</span>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    code: `// Nested content with lists and tables`,
  },
  {
    name: 'Bordered',
    preview: (
      <Accordion type="single" collapsible className="w-full max-w-md">
        <AccordionItem value="item-1" className="border rounded-lg px-4 mb-2">
          <AccordionTrigger className="hover:no-underline">Section One</AccordionTrigger>
          <AccordionContent>Content for section one.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border rounded-lg px-4 mb-2">
          <AccordionTrigger className="hover:no-underline">Section Two</AccordionTrigger>
          <AccordionContent>Content for section two.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">Section Three</AccordionTrigger>
          <AccordionContent>Content for section three.</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    code: `<AccordionItem value="item-1" className="border rounded-lg px-4 mb-2">`,
  },
  {
    name: 'Compact',
    preview: (
      <Accordion type="single" collapsible className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger className="py-2 text-sm">Compact item 1</AccordionTrigger>
          <AccordionContent className="text-xs pb-2">Short content.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="py-2 text-sm">Compact item 2</AccordionTrigger>
          <AccordionContent className="text-xs pb-2">Short content.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="py-2 text-sm">Compact item 3</AccordionTrigger>
          <AccordionContent className="text-xs pb-2">Short content.</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    code: `<AccordionTrigger className="py-2 text-sm">`,
  },
  {
    name: 'Documentation',
    preview: (
      <Accordion type="single" collapsible className="w-full max-w-lg">
        <AccordionItem value="installation">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Installation
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <pre className="bg-muted p-3 rounded-md text-xs overflow-x-auto">
              npm install @radix-ui/react-accordion
            </pre>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="usage">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Basic Usage
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <pre className="bg-muted p-3 rounded-md text-xs overflow-x-auto">
{`<Accordion type="single">
  <AccordionItem value="item-1">
    <AccordionTrigger>Title</AccordionTrigger>
    <AccordionContent>Content</AccordionContent>
  </AccordionItem>
</Accordion>`}
            </pre>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    code: `// Documentation-style accordion with code blocks`,
  },
];

export function AccordionPage() {
  return (
    <ComponentShowcase
      title="Accordion"
      description="A vertically stacked set of interactive headings that each reveal content."
      preview={variants[0].preview}
      code={basicAccordionCode}
      filename="accordion.tsx"
      usage={`Accordions organize content into collapsible sections.

• Use type="single" for one open item at a time
• Use type="multiple" to allow multiple open items
• Add collapsible to allow closing all items
• Include icons and badges for visual context
• Great for FAQs, settings, and documentation`}
      props={accordionProps}
      variants={variants}
    />
  );
}
