import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Home, Search, Settings, User, Bell, Heart, Star, Mail, 
  Phone, MapPin, Calendar, Clock, Check, X, Plus, Minus,
  ChevronRight, ChevronDown, ArrowRight, ArrowLeft, ArrowUp, ArrowDown,
  Download, Upload, Share, Copy, Trash2, Edit, Eye, EyeOff,
  Lock, Unlock, Shield, Key, CreditCard, ShoppingCart, Package,
  Zap, Sparkles, Flame, Sun, Moon, Cloud, Loader2, RefreshCw,
  Github, Twitter, Linkedin, Instagram, Youtube, Facebook
} from 'lucide-react';

const basicIconCode = `import { Home, Settings, User, Bell } from 'lucide-react'

// Basic usage
<Home className="h-6 w-6" />

// With color
<Settings className="h-6 w-6 text-primary" />

// With custom stroke
<User className="h-6 w-6" strokeWidth={1.5} />

// In a button
<Button size="icon"><Bell className="h-4 w-4" /></Button>`;

const iconProps = [
  { name: 'size', type: 'number', default: '24', description: 'Icon size in pixels' },
  { name: 'color', type: 'string', default: 'currentColor', description: 'Icon color' },
  { name: 'strokeWidth', type: 'number', default: '2', description: 'Stroke width' },
  { name: 'className', type: 'string', default: '-', description: 'Additional CSS classes' },
];

const basicIcons = [Home, Search, Settings, User, Bell, Heart, Star, Mail];
const actionIcons = [Download, Upload, Share, Copy, Trash2, Edit, Eye, Plus];
const arrowIcons = [ChevronRight, ChevronDown, ArrowRight, ArrowLeft, ArrowUp, ArrowDown];
const statusIcons = [Check, X, Lock, Unlock, Shield, Key, Zap, Sparkles];
const socialIcons = [Github, Twitter, Linkedin, Instagram, Youtube, Facebook];

const variants = [
  {
    name: 'Basic Icons',
    preview: (
      <div className="flex flex-wrap gap-4">
        {basicIcons.map((Icon, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Icon className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">{Icon.displayName}</span>
          </div>
        ))}
      </div>
    ),
    code: basicIconCode,
  },
  {
    name: 'Sizes',
    preview: (
      <div className="flex items-end gap-6">
        <div className="flex flex-col items-center gap-2">
          <Home className="h-4 w-4" />
          <span className="text-xs text-muted-foreground">16px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Home className="h-5 w-5" />
          <span className="text-xs text-muted-foreground">20px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Home className="h-6 w-6" />
          <span className="text-xs text-muted-foreground">24px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Home className="h-8 w-8" />
          <span className="text-xs text-muted-foreground">32px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Home className="h-10 w-10" />
          <span className="text-xs text-muted-foreground">40px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Home className="h-12 w-12" />
          <span className="text-xs text-muted-foreground">48px</span>
        </div>
      </div>
    ),
    code: `<Home className="h-4 w-4" /> // 16px
<Home className="h-6 w-6" /> // 24px
<Home className="h-8 w-8" /> // 32px`,
  },
  {
    name: 'Colors',
    preview: (
      <div className="flex flex-wrap gap-4">
        <Heart className="h-6 w-6 text-foreground" />
        <Heart className="h-6 w-6 text-primary" />
        <Heart className="h-6 w-6 text-muted-foreground" />
        <Heart className="h-6 w-6 text-red-500" />
        <Heart className="h-6 w-6 text-green-500" />
        <Heart className="h-6 w-6 text-blue-500" />
        <Heart className="h-6 w-6 text-purple-500" />
        <Heart className="h-6 w-6 text-orange-500" />
      </div>
    ),
    code: `<Heart className="h-6 w-6 text-primary" />
<Heart className="h-6 w-6 text-red-500" />
<Heart className="h-6 w-6 text-muted-foreground" />`,
  },
  {
    name: 'Stroke Width',
    preview: (
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <Settings className="h-8 w-8" strokeWidth={1} />
          <span className="text-xs text-muted-foreground">1</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Settings className="h-8 w-8" strokeWidth={1.5} />
          <span className="text-xs text-muted-foreground">1.5</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Settings className="h-8 w-8" strokeWidth={2} />
          <span className="text-xs text-muted-foreground">2</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Settings className="h-8 w-8" strokeWidth={2.5} />
          <span className="text-xs text-muted-foreground">2.5</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Settings className="h-8 w-8" strokeWidth={3} />
          <span className="text-xs text-muted-foreground">3</span>
        </div>
      </div>
    ),
    code: `<Settings strokeWidth={1} />
<Settings strokeWidth={2} />
<Settings strokeWidth={3} />`,
  },
  {
    name: 'In Buttons',
    preview: (
      <div className="flex flex-wrap gap-3">
        <Button size="icon" variant="outline"><Home className="h-4 w-4" /></Button>
        <Button size="icon" variant="outline"><Search className="h-4 w-4" /></Button>
        <Button size="icon" variant="outline"><Settings className="h-4 w-4" /></Button>
        <Button size="icon" variant="outline"><Bell className="h-4 w-4" /></Button>
        <Button size="icon" variant="outline"><User className="h-4 w-4" /></Button>
        <Button size="icon" variant="ghost"><Heart className="h-4 w-4" /></Button>
        <Button size="icon" variant="ghost"><Star className="h-4 w-4" /></Button>
        <Button size="icon"><Plus className="h-4 w-4" /></Button>
      </div>
    ),
    code: `<Button size="icon" variant="outline">
  <Home className="h-4 w-4" />
</Button>`,
  },
  {
    name: 'With Text',
    preview: (
      <div className="flex flex-wrap gap-3">
        <Button><Mail className="mr-2 h-4 w-4" />Email</Button>
        <Button variant="outline"><Download className="mr-2 h-4 w-4" />Download</Button>
        <Button variant="secondary"><Share className="mr-2 h-4 w-4" />Share</Button>
        <Button variant="ghost"><Edit className="mr-2 h-4 w-4" />Edit</Button>
        <Button>Next<ArrowRight className="ml-2 h-4 w-4" /></Button>
      </div>
    ),
    code: `<Button><Mail className="mr-2 h-4 w-4" />Email</Button>
<Button>Next<ArrowRight className="ml-2 h-4 w-4" /></Button>`,
  },
  {
    name: 'Action Icons',
    preview: (
      <div className="flex flex-wrap gap-4">
        {actionIcons.map((Icon, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Icon className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">{Icon.displayName}</span>
          </div>
        ))}
      </div>
    ),
    code: `import { Download, Upload, Share, Copy, Trash2, Edit } from 'lucide-react'`,
  },
  {
    name: 'Arrow Icons',
    preview: (
      <div className="flex flex-wrap gap-4">
        {arrowIcons.map((Icon, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Icon className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">{Icon.displayName}</span>
          </div>
        ))}
      </div>
    ),
    code: `import { ChevronRight, ArrowRight, ArrowUp, ArrowDown } from 'lucide-react'`,
  },
  {
    name: 'Status Icons',
    preview: (
      <div className="flex flex-wrap gap-4">
        {statusIcons.map((Icon, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Icon className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">{Icon.displayName}</span>
          </div>
        ))}
      </div>
    ),
    code: `import { Check, X, Lock, Unlock, Shield, Key } from 'lucide-react'`,
  },
  {
    name: 'Social Icons',
    preview: (
      <div className="flex flex-wrap gap-4">
        {socialIcons.map((Icon, i) => (
          <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border hover:bg-muted transition-colors">
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    ),
    code: `import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'

<a href="#" className="h-10 w-10 rounded-full border flex items-center justify-center">
  <Github className="h-5 w-5" />
</a>`,
  },
  {
    name: 'Colored Social',
    preview: (
      <div className="flex flex-wrap gap-3">
        <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1DA1F2] text-white">
          <Twitter className="h-5 w-5" />
        </a>
        <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#333] text-white">
          <Github className="h-5 w-5" />
        </a>
        <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white">
          <Instagram className="h-5 w-5" />
        </a>
        <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-white">
          <Youtube className="h-5 w-5" />
        </a>
        <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white">
          <Facebook className="h-5 w-5" />
        </a>
      </div>
    ),
    code: `// Colored brand social icons`,
  },
  {
    name: 'In Input',
    preview: (
      <div className="space-y-3 w-full max-w-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-9" />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Email address" className="pl-9" />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="password" placeholder="Password" className="pl-9" />
          <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer" />
        </div>
      </div>
    ),
    code: `<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input placeholder="Search..." className="pl-9" />
</div>`,
  },
  {
    name: 'With Badge',
    preview: (
      <div className="flex gap-4">
        <div className="relative">
          <Bell className="h-6 w-6" />
          <Badge className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center text-[10px]">3</Badge>
        </div>
        <div className="relative">
          <ShoppingCart className="h-6 w-6" />
          <Badge className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center text-[10px]">5</Badge>
        </div>
        <div className="relative">
          <Mail className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
        </div>
      </div>
    ),
    code: `<div className="relative">
  <Bell className="h-6 w-6" />
  <Badge className="absolute -top-2 -right-2 h-4 w-4">3</Badge>
</div>`,
  },
  {
    name: 'Loading Spinner',
    preview: (
      <div className="flex items-center gap-6">
        <Loader2 className="h-6 w-6 animate-spin" />
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
        <RefreshCw className="h-6 w-6 animate-spin" />
        <Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Loading</Button>
      </div>
    ),
    code: `<Loader2 className="h-6 w-6 animate-spin" />
<Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Loading</Button>`,
  },
  {
    name: 'Feature Icons',
    preview: (
      <div className="grid grid-cols-4 gap-4">
        {[Zap, Sparkles, Shield, CreditCard, Package, Cloud, Clock, Calendar].map((Icon, i) => (
          <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-lg border">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground text-center">{Icon.displayName}</span>
          </div>
        ))}
      </div>
    ),
    code: `<div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
  <Zap className="h-5 w-5 text-primary" />
</div>`,
  },
  {
    name: 'Icon Grid',
    preview: (
      <div className="grid grid-cols-6 gap-3">
        {[Home, Search, Settings, User, Bell, Heart, Star, Mail, Phone, MapPin, Calendar, Clock, Check, X, Plus, Minus, Download, Upload].map((Icon, i) => (
          <div key={i} className="flex items-center justify-center p-3 rounded-lg border hover:bg-muted cursor-pointer transition-colors">
            <Icon className="h-5 w-5" />
          </div>
        ))}
      </div>
    ),
    code: `// Icon picker grid`,
  },
];

export function IconShowcasePage() {
  return (
    <ComponentShowcase
      title="Icons"
      description="Icon usage patterns with Lucide React including sizes, colors, buttons, and common patterns."
      preview={variants[0].preview}
      code={basicIconCode}
      filename="icons.tsx"
      usage={`Icons enhance UI clarity and visual appeal.

• Use consistent sizes throughout your app
• Match icon color to text color by default
• Use strokeWidth for visual weight adjustment
• Pair with buttons, inputs, and badges
• Add animate-spin for loading states`}
      props={iconProps}
      variants={variants}
    />
  );
}
