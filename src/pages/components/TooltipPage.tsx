import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  HelpCircle, Info, AlertTriangle, CheckCircle, Copy, Download, 
  Share, Heart, Star, Settings, Bell, User, Trash2, Edit, 
  Eye, EyeOff, Plus, Minus
} from 'lucide-react';

const basicTooltipCode = `import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`;

const tooltipProps = [
  { name: 'delayDuration', type: 'number', default: '700', description: 'Delay before showing tooltip (ms)' },
  { name: 'skipDelayDuration', type: 'number', default: '300', description: 'Skip delay when moving between tooltips' },
  { name: 'side', type: '"top" | "right" | "bottom" | "left"', default: '"top"', description: 'Preferred side' },
  { name: 'sideOffset', type: 'number', default: '4', description: 'Offset from trigger' },
  { name: 'align', type: '"start" | "center" | "end"', default: '"center"', description: 'Alignment' },
];

const variants = [
  {
    name: 'Basic',
    preview: (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    code: basicTooltipCode,
  },
  {
    name: 'Positions',
    preview: (
      <TooltipProvider>
        <div className="flex gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top"><p>Top tooltip</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right"><p>Right tooltip</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom"><p>Bottom tooltip</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left"><p>Left tooltip</p></TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    ),
    code: `<TooltipContent side="top">Top</TooltipContent>
<TooltipContent side="right">Right</TooltipContent>
<TooltipContent side="bottom">Bottom</TooltipContent>
<TooltipContent side="left">Left</TooltipContent>`,
  },
  {
    name: 'With Icons',
    preview: (
      <TooltipProvider>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Copy className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Copy to clipboard</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Download className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Download file</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Share className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Share</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Delete</p></TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    ),
    code: `<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="icon"><Copy /></Button>
  </TooltipTrigger>
  <TooltipContent><p>Copy to clipboard</p></TooltipContent>
</Tooltip>`,
  },
  {
    name: 'Help Icon',
    preview: (
      <TooltipProvider>
        <div className="flex items-center gap-2">
          <span className="text-sm">Password strength</span>
          <Tooltip>
            <TooltipTrigger>
              <HelpCircle className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p>Use at least 8 characters with a mix of letters, numbers, and symbols.</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    ),
    code: `<span>Password strength</span>
<Tooltip>
  <TooltipTrigger>
    <HelpCircle className="h-4 w-4" />
  </TooltipTrigger>
  <TooltipContent>
    <p>Use at least 8 characters...</p>
  </TooltipContent>
</Tooltip>`,
  },
  {
    name: 'With Shortcut',
    preview: (
      <TooltipProvider>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Copy className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="flex items-center gap-2">
                Copy
                <kbd className="pointer-events-none inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                  ⌘C
                </kbd>
              </p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="flex items-center gap-2">
                Edit
                <kbd className="pointer-events-none inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                  ⌘E
                </kbd>
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    ),
    code: `<TooltipContent>
  <p className="flex items-center gap-2">
    Copy
    <kbd className="...">⌘C</kbd>
  </p>
</TooltipContent>`,
  },
  {
    name: 'Status Indicators',
    preview: (
      <TooltipProvider>
        <div className="flex gap-4">
          <Tooltip>
            <TooltipTrigger>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm">Online</span>
              </div>
            </TooltipTrigger>
            <TooltipContent><p>User is online and available</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <span className="text-sm">Away</span>
              </div>
            </TooltipTrigger>
            <TooltipContent><p>User is away</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <span className="text-sm">Busy</span>
              </div>
            </TooltipTrigger>
            <TooltipContent><p>User is busy</p></TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    ),
    code: `// Status indicator tooltips`,
  },
  {
    name: 'Info Badges',
    preview: (
      <TooltipProvider>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger>
              <Badge variant="default">Pro</Badge>
            </TooltipTrigger>
            <TooltipContent><p>Professional plan features enabled</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Badge variant="secondary">Beta</Badge>
            </TooltipTrigger>
            <TooltipContent><p>This feature is in beta testing</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Badge variant="destructive">Deprecated</Badge>
            </TooltipTrigger>
            <TooltipContent><p>This will be removed in the next version</p></TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    ),
    code: `<Tooltip>
  <TooltipTrigger>
    <Badge>Pro</Badge>
  </TooltipTrigger>
  <TooltipContent>Pro plan features</TooltipContent>
</Tooltip>`,
  },
  {
    name: 'Action Feedback',
    preview: (
      <TooltipProvider>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Heart className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Add to favorites</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Star className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Star this item</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Bell className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Get notifications</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Watch for changes</p></TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    ),
    code: `// Action button tooltips`,
  },
  {
    name: 'Rich Content',
    preview: (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">View details</Button>
          </TooltipTrigger>
          <TooltipContent className="w-64">
            <div className="space-y-2">
              <p className="font-medium">Project Status</p>
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Progress</span>
                  <span>75%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Team members</span>
                  <span>5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Due date</span>
                  <span>Jan 30, 2024</span>
                </div>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    code: `<TooltipContent className="w-64">
  <div className="space-y-2">
    <p className="font-medium">Project Status</p>
    <div className="text-xs space-y-1">
      <div className="flex justify-between">
        <span>Progress</span>
        <span>75%</span>
      </div>
    </div>
  </div>
</TooltipContent>`,
  },
  {
    name: 'Disabled State',
    preview: (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span tabIndex={0}>
              <Button variant="outline" disabled>Disabled button</Button>
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>This action is not available</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    code: `<TooltipTrigger asChild>
  <span tabIndex={0}>
    <Button disabled>Disabled</Button>
  </span>
</TooltipTrigger>`,
  },
  {
    name: 'Warning Tooltip',
    preview: (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="destructive" size="sm">
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-destructive text-destructive-foreground">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              <p>This action cannot be undone</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    code: `<TooltipContent className="bg-destructive">
  <AlertTriangle />
  <p>This action cannot be undone</p>
</TooltipContent>`,
  },
  {
    name: 'Success Tooltip',
    preview: (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm" className="border-green-500 text-green-600">
              <CheckCircle className="h-4 w-4 mr-2" />
              Verified
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-green-600 text-white">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <p>Account verified successfully</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    code: `<TooltipContent className="bg-green-600 text-white">
  <CheckCircle />
  <p>Account verified</p>
</TooltipContent>`,
  },
  {
    name: 'Counter Controls',
    preview: (
      <TooltipProvider>
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon"><Minus className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Decrease quantity</p></TooltipContent>
          </Tooltip>
          <span className="w-12 text-center font-medium">5</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon"><Plus className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Increase quantity</p></TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    ),
    code: `// Counter with tooltips`,
  },
  {
    name: 'No Delay',
    preview: (
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Instant tooltip</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Shows immediately on hover</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    code: `<TooltipProvider delayDuration={0}>`,
  },
];

export function TooltipPage() {
  return (
    <ComponentShowcase
      title="Tooltip"
      description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
      preview={variants[0].preview}
      code={basicTooltipCode}
      filename="tooltip.tsx"
      usage={`Tooltips provide additional context or information.

• Use for icon-only buttons to explain their action
• Show keyboard shortcuts
• Provide help text for form fields
• Display status information
• Keep content brief and scannable`}
      props={tooltipProps}
      variants={variants}
    />
  );
}
