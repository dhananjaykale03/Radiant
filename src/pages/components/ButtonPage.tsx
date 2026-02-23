import { Button } from '@/components/ui/button';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { 
  ArrowRight, Download, Mail, Loader2, Plus, Trash2, Heart, Star, 
  Share, Copy, Edit, Settings, User, Home, Search, Bell, 
  ChevronLeft, ChevronRight, Check, X, Play, Pause, RefreshCw,
  Send, Save, Upload, ExternalLink, MoreHorizontal, Menu
} from 'lucide-react';

const buttonVariantsCode = `import { Button } from "@/components/ui/button"

// All button variants
<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`;

const buttonSizesCode = `// Button sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Plus /></Button>`;

const buttonWithIconsCode = `// Buttons with icons
<Button><Mail className="mr-2 h-4 w-4" />Email</Button>
<Button><Download className="mr-2 h-4 w-4" />Download</Button>
<Button>Next<ArrowRight className="ml-2 h-4 w-4" /></Button>`;

const buttonLoadingCode = `// Loading states
<Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Loading</Button>
<Button disabled><RefreshCw className="mr-2 h-4 w-4 animate-spin" />Syncing</Button>`;

const buttonGroupCode = `// Button groups
<div className="flex">
  <Button className="rounded-r-none">Left</Button>
  <Button className="rounded-none border-x-0">Center</Button>
  <Button className="rounded-l-none">Right</Button>
</div>`;

const buttonIconOnlyCode = `// Icon-only buttons
<Button size="icon" variant="outline"><Heart /></Button>
<Button size="icon" variant="outline"><Star /></Button>
<Button size="icon" variant="outline"><Share /></Button>
<Button size="icon" variant="ghost"><MoreHorizontal /></Button>`;

const buttonProps = [
  { name: 'variant', type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"', default: '"default"', description: 'Visual style variant' },
  { name: 'size', type: '"default" | "sm" | "lg" | "icon"', default: '"default"', description: 'Size of the button' },
  { name: 'asChild', type: 'boolean', default: 'false', description: 'Render as child element' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the button' },
  { name: 'className', type: 'string', default: '-', description: 'Additional CSS classes' },
];

const variants = [
  {
    name: 'All Variants',
    preview: (
      <div className="flex flex-wrap gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    ),
    code: buttonVariantsCode,
  },
  {
    name: 'Sizes',
    preview: (
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon"><Plus className="h-4 w-4" /></Button>
      </div>
    ),
    code: buttonSizesCode,
  },
  {
    name: 'With Icons',
    preview: (
      <div className="flex flex-wrap gap-3">
        <Button><Mail className="mr-2 h-4 w-4" />Email</Button>
        <Button variant="secondary"><Download className="mr-2 h-4 w-4" />Download</Button>
        <Button variant="outline">Next<ArrowRight className="ml-2 h-4 w-4" /></Button>
        <Button variant="ghost"><Edit className="mr-2 h-4 w-4" />Edit</Button>
      </div>
    ),
    code: buttonWithIconsCode,
  },
  {
    name: 'Icon Only',
    preview: (
      <div className="flex flex-wrap gap-2">
        <Button size="icon" variant="outline"><Heart className="h-4 w-4" /></Button>
        <Button size="icon" variant="outline"><Star className="h-4 w-4" /></Button>
        <Button size="icon" variant="outline"><Share className="h-4 w-4" /></Button>
        <Button size="icon" variant="outline"><Copy className="h-4 w-4" /></Button>
        <Button size="icon" variant="ghost"><Settings className="h-4 w-4" /></Button>
        <Button size="icon" variant="ghost"><User className="h-4 w-4" /></Button>
        <Button size="icon" variant="ghost"><Home className="h-4 w-4" /></Button>
        <Button size="icon" variant="ghost"><Search className="h-4 w-4" /></Button>
        <Button size="icon" variant="ghost"><Bell className="h-4 w-4" /></Button>
        <Button size="icon" variant="ghost"><Menu className="h-4 w-4" /></Button>
      </div>
    ),
    code: buttonIconOnlyCode,
  },
  {
    name: 'Loading States',
    preview: (
      <div className="flex flex-wrap gap-3">
        <Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Loading</Button>
        <Button disabled variant="secondary"><RefreshCw className="mr-2 h-4 w-4 animate-spin" />Syncing</Button>
        <Button disabled variant="outline"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Processing</Button>
      </div>
    ),
    code: buttonLoadingCode,
  },
  {
    name: 'Button Group',
    preview: (
      <div className="flex flex-wrap gap-6">
        <div className="flex">
          <Button className="rounded-r-none">Left</Button>
          <Button variant="outline" className="rounded-none border-x-0">Center</Button>
          <Button className="rounded-l-none">Right</Button>
        </div>
        <div className="flex">
          <Button size="icon" variant="outline" className="rounded-r-none"><ChevronLeft className="h-4 w-4" /></Button>
          <Button size="icon" variant="outline" className="rounded-l-none"><ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div>
    ),
    code: buttonGroupCode,
  },
  {
    name: 'Action Buttons',
    preview: (
      <div className="flex flex-wrap gap-3">
        <Button><Save className="mr-2 h-4 w-4" />Save</Button>
        <Button variant="secondary"><Send className="mr-2 h-4 w-4" />Send</Button>
        <Button variant="outline"><Upload className="mr-2 h-4 w-4" />Upload</Button>
        <Button variant="destructive"><Trash2 className="mr-2 h-4 w-4" />Delete</Button>
      </div>
    ),
    code: buttonWithIconsCode,
  },
  {
    name: 'Media Controls',
    preview: (
      <div className="flex flex-wrap items-center gap-2">
        <Button size="icon" variant="outline"><ChevronLeft className="h-4 w-4" /></Button>
        <Button size="icon"><Play className="h-4 w-4" /></Button>
        <Button size="icon" variant="outline"><ChevronRight className="h-4 w-4" /></Button>
        <Button size="icon" variant="ghost"><Pause className="h-4 w-4" /></Button>
        <Button size="icon" variant="ghost"><RefreshCw className="h-4 w-4" /></Button>
      </div>
    ),
    code: buttonIconOnlyCode,
  },
  {
    name: 'Confirmation',
    preview: (
      <div className="flex flex-wrap gap-3">
        <Button><Check className="mr-2 h-4 w-4" />Confirm</Button>
        <Button variant="outline"><X className="mr-2 h-4 w-4" />Cancel</Button>
        <Button variant="destructive"><Trash2 className="mr-2 h-4 w-4" />Delete</Button>
      </div>
    ),
    code: buttonWithIconsCode,
  },
  {
    name: 'Full Width',
    preview: (
      <div className="w-full max-w-sm space-y-2">
        <Button className="w-full">Full Width Primary</Button>
        <Button variant="outline" className="w-full">Full Width Outline</Button>
        <Button variant="secondary" className="w-full">Full Width Secondary</Button>
      </div>
    ),
    code: `<Button className="w-full">Full Width</Button>`,
  },
  {
    name: 'With Badge',
    preview: (
      <div className="flex flex-wrap gap-3">
        <Button className="relative">
          Notifications
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-xs flex items-center justify-center text-destructive-foreground">3</span>
        </Button>
        <Button variant="outline" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] flex items-center justify-center text-primary-foreground">5</span>
        </Button>
      </div>
    ),
    code: `<Button className="relative">
  Notifications
  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive">3</span>
</Button>`,
  },
  {
    name: 'Gradient',
    preview: (
      <div className="flex flex-wrap gap-3">
        <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">Gradient Primary</Button>
        <Button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-500/90 hover:to-orange-500/90 border-0">Sunset</Button>
        <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-500/90 hover:to-teal-500/90 border-0">Nature</Button>
      </div>
    ),
    code: `<Button className="bg-gradient-to-r from-primary to-purple-600">Gradient</Button>`,
  },
  {
    name: 'Outlined Colors',
    preview: (
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">Primary</Button>
        <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">Success</Button>
        <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10">Warning</Button>
        <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">Danger</Button>
      </div>
    ),
    code: `<Button variant="outline" className="border-primary text-primary">Colored Outline</Button>`,
  },
  {
    name: 'Disabled States',
    preview: (
      <div className="flex flex-wrap gap-3">
        <Button disabled>Disabled</Button>
        <Button disabled variant="secondary">Disabled</Button>
        <Button disabled variant="outline">Disabled</Button>
        <Button disabled variant="destructive">Disabled</Button>
      </div>
    ),
    code: `<Button disabled>Disabled</Button>`,
  },
  {
    name: 'External Link',
    preview: (
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <a href="https://example.com" target="_blank" rel="noopener">
            Visit Site<ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://github.com" target="_blank" rel="noopener">
            GitHub<ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    ),
    code: `<Button asChild>
  <a href="https://example.com" target="_blank">
    Visit Site<ExternalLink className="ml-2 h-4 w-4" />
  </a>
</Button>`,
  },
];

export function ButtonPage() {
  return (
    <ComponentShowcase
      title="Button"
      description="Interactive button component with multiple variants, sizes, and states. Use buttons to trigger actions and navigate."
      preview={variants[0].preview}
      code={buttonVariantsCode}
      filename="button.tsx"
      usage={`Buttons are used to trigger actions or navigate.

• Primary: Main call-to-action, use sparingly
• Secondary: Less prominent actions  
• Destructive: Dangerous/irreversible actions
• Outline/Ghost: Lower emphasis
• Link: Navigation that looks like text

Best practices:
• Use clear, action-oriented labels
• Include icons for visual context
• Show loading states for async actions
• Group related buttons together`}
      props={buttonProps}
      variants={variants}
    />
  );
}
