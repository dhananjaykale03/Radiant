import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Home, Search, Bell, User, Settings, Plus, Heart, 
  ShoppingCart, MessageCircle, Compass, Bookmark, 
  Camera, Music, Video, Grid, Menu, MoreHorizontal
} from 'lucide-react';

const basicBottomBarCode = `export function BottomBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background md:hidden">
      <div className="flex items-center justify-around h-16">
        <a href="#" className="flex flex-col items-center gap-1 text-primary">
          <Home className="h-5 w-5" />
          <span className="text-xs">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
          <Search className="h-5 w-5" />
          <span className="text-xs">Search</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
          <Bell className="h-5 w-5" />
          <span className="text-xs">Alerts</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
          <User className="h-5 w-5" />
          <span className="text-xs">Profile</span>
        </a>
      </div>
    </nav>
  )
}`;

const bottomBarProps = [
  { name: 'items', type: 'BottomBarItem[]', default: '-', description: 'Navigation items' },
  { name: 'activeItem', type: 'string', default: '-', description: 'Currently active item ID' },
  { name: 'onItemClick', type: '(id: string) => void', default: '-', description: 'Item click handler' },
];

const variants = [
  {
    name: 'Basic',
    preview: (
      <nav className="w-full border-t bg-background">
        <div className="flex items-center justify-around h-16">
          <a href="#" className="flex flex-col items-center gap-1 text-primary">
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
            <Search className="h-5 w-5" />
            <span className="text-xs">Search</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
            <Bell className="h-5 w-5" />
            <span className="text-xs">Alerts</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
            <User className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </a>
        </div>
      </nav>
    ),
    code: basicBottomBarCode,
  },
  {
    name: 'Icons Only',
    preview: (
      <nav className="w-full border-t bg-background">
        <div className="flex items-center justify-around h-14">
          <a href="#" className="p-2 text-primary"><Home className="h-6 w-6" /></a>
          <a href="#" className="p-2 text-muted-foreground hover:text-foreground"><Compass className="h-6 w-6" /></a>
          <a href="#" className="p-2 text-muted-foreground hover:text-foreground"><Heart className="h-6 w-6" /></a>
          <a href="#" className="p-2 text-muted-foreground hover:text-foreground"><MessageCircle className="h-6 w-6" /></a>
          <a href="#" className="p-2 text-muted-foreground hover:text-foreground"><User className="h-6 w-6" /></a>
        </div>
      </nav>
    ),
    code: `// Icons only bottom bar`,
  },
  {
    name: 'With Badge',
    preview: (
      <nav className="w-full border-t bg-background">
        <div className="flex items-center justify-around h-16">
          <a href="#" className="flex flex-col items-center gap-1 text-primary">
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">5</Badge>
            <span className="text-xs">Alerts</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground relative">
            <MessageCircle className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">3</Badge>
            <span className="text-xs">Messages</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <User className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </a>
        </div>
      </nav>
    ),
    code: `// With notification badges`,
  },
  {
    name: 'Center Action',
    preview: (
      <nav className="w-full border-t bg-background">
        <div className="flex items-center justify-around h-16 relative">
          <a href="#" className="flex flex-col items-center gap-1 text-primary">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Search className="h-5 w-5" />
            <span className="text-xs">Search</span>
          </a>
          <button className="absolute left-1/2 -translate-x-1/2 -top-5 h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
            <Plus className="h-6 w-6" />
          </button>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Heart className="h-5 w-5" />
            <span className="text-xs">Saved</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <User className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </a>
        </div>
      </nav>
    ),
    code: `// Center floating action button`,
  },
  {
    name: 'Pill Indicator',
    preview: (
      <nav className="w-full border-t bg-background">
        <div className="flex items-center justify-around h-16">
          <a href="#" className="flex flex-col items-center gap-1 text-primary relative">
            <span className="absolute -top-4 h-1 w-8 rounded-full bg-primary" />
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Compass className="h-5 w-5" />
            <span className="text-xs">Explore</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Bookmark className="h-5 w-5" />
            <span className="text-xs">Saved</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <User className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </a>
        </div>
      </nav>
    ),
    code: `// With top indicator pill`,
  },
  {
    name: 'E-commerce',
    preview: (
      <nav className="w-full border-t bg-background">
        <div className="flex items-center justify-around h-16">
          <a href="#" className="flex flex-col items-center gap-1 text-primary">
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">Shop</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Grid className="h-5 w-5" />
            <span className="text-xs">Categories</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground relative">
            <ShoppingCart className="h-5 w-5" />
            <Badge className="absolute -top-1 left-4 h-4 w-4 p-0 flex items-center justify-center text-[10px]">2</Badge>
            <span className="text-xs">Cart</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Heart className="h-5 w-5" />
            <span className="text-xs">Wishlist</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <User className="h-5 w-5" />
            <span className="text-xs">Account</span>
          </a>
        </div>
      </nav>
    ),
    code: `// E-commerce bottom navigation`,
  },
  {
    name: 'Social Media',
    preview: (
      <nav className="w-full border-t bg-background">
        <div className="flex items-center justify-around h-14">
          <a href="#" className="p-2 text-primary"><Home className="h-6 w-6" /></a>
          <a href="#" className="p-2 text-muted-foreground"><Search className="h-6 w-6" /></a>
          <a href="#" className="p-2 text-muted-foreground">
            <div className="h-8 w-8 rounded-lg border-2 border-muted-foreground flex items-center justify-center">
              <Plus className="h-5 w-5" />
            </div>
          </a>
          <a href="#" className="p-2 text-muted-foreground"><Video className="h-6 w-6" /></a>
          <a href="#" className="p-2 text-muted-foreground">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
          </a>
        </div>
      </nav>
    ),
    code: `// Social media style`,
  },
  {
    name: 'Rounded Container',
    preview: (
      <div className="w-full px-4 pb-4">
        <nav className="rounded-2xl border bg-background/95 backdrop-blur shadow-lg">
          <div className="flex items-center justify-around h-16">
            <a href="#" className="flex flex-col items-center gap-1 text-primary">
              <Home className="h-5 w-5" />
              <span className="text-xs font-medium">Home</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
              <Search className="h-5 w-5" />
              <span className="text-xs">Search</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
              <Bell className="h-5 w-5" />
              <span className="text-xs">Alerts</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
              <Settings className="h-5 w-5" />
              <span className="text-xs">Settings</span>
            </a>
          </div>
        </nav>
      </div>
    ),
    code: `// Floating rounded container`,
  },
  {
    name: 'Background Indicator',
    preview: (
      <nav className="w-full border-t bg-background">
        <div className="flex items-center justify-around h-16">
          <a href="#" className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl bg-primary/10 text-primary">
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 px-4 py-2 text-muted-foreground hover:bg-muted rounded-xl transition-colors">
            <Compass className="h-5 w-5" />
            <span className="text-xs">Explore</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 px-4 py-2 text-muted-foreground hover:bg-muted rounded-xl transition-colors">
            <Bell className="h-5 w-5" />
            <span className="text-xs">Alerts</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 px-4 py-2 text-muted-foreground hover:bg-muted rounded-xl transition-colors">
            <User className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </a>
        </div>
      </nav>
    ),
    code: `// Active state with background`,
  },
  {
    name: 'Three Items',
    preview: (
      <nav className="w-full border-t bg-background">
        <div className="flex items-center justify-around h-16">
          <a href="#" className="flex flex-col items-center gap-1 text-primary">
            <Home className="h-6 w-6" />
            <span className="text-xs font-medium">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Search className="h-6 w-6" />
            <span className="text-xs">Search</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Menu className="h-6 w-6" />
            <span className="text-xs">Menu</span>
          </a>
        </div>
      </nav>
    ),
    code: `// Three item navigation`,
  },
  {
    name: 'Media Player',
    preview: (
      <nav className="w-full border-t bg-background">
        <div className="flex items-center justify-around h-16">
          <a href="#" className="flex flex-col items-center gap-1 text-primary">
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Music className="h-5 w-5" />
            <span className="text-xs">Music</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Video className="h-5 w-5" />
            <span className="text-xs">Videos</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Camera className="h-5 w-5" />
            <span className="text-xs">Live</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <User className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </a>
        </div>
      </nav>
    ),
    code: `// Media app navigation`,
  },
  {
    name: 'Dot Indicator',
    preview: (
      <nav className="w-full border-t bg-background">
        <div className="flex items-center justify-around h-16">
          <a href="#" className="flex flex-col items-center gap-2 text-primary">
            <Home className="h-5 w-5" />
            <span className="h-1 w-1 rounded-full bg-primary" />
          </a>
          <a href="#" className="flex flex-col items-center gap-2 text-muted-foreground">
            <Search className="h-5 w-5" />
            <span className="h-1 w-1 rounded-full bg-transparent" />
          </a>
          <a href="#" className="flex flex-col items-center gap-2 text-muted-foreground">
            <Bell className="h-5 w-5" />
            <span className="h-1 w-1 rounded-full bg-transparent" />
          </a>
          <a href="#" className="flex flex-col items-center gap-2 text-muted-foreground">
            <User className="h-5 w-5" />
            <span className="h-1 w-1 rounded-full bg-transparent" />
          </a>
        </div>
      </nav>
    ),
    code: `// Minimal dot indicator`,
  },
  {
    name: 'With More Menu',
    preview: (
      <nav className="w-full border-t bg-background">
        <div className="flex items-center justify-around h-16">
          <a href="#" className="flex flex-col items-center gap-1 text-primary">
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Search className="h-5 w-5" />
            <span className="text-xs">Search</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <Bookmark className="h-5 w-5" />
            <span className="text-xs">Saved</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
            <MoreHorizontal className="h-5 w-5" />
            <span className="text-xs">More</span>
          </a>
        </div>
      </nav>
    ),
    code: `// With more menu option`,
  },
  {
    name: 'Glassmorphism',
    preview: (
      <div className="w-full px-4 pb-4">
        <nav className="rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg border border-white/30 dark:border-slate-700/40 shadow-lg">
          <div className="flex items-center justify-around h-16">
            <a href="#" className="flex flex-col items-center gap-1 text-primary">
              <Home className="h-5 w-5" />
              <span className="text-xs font-medium">Home</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
              <Compass className="h-5 w-5" />
              <span className="text-xs">Explore</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
              <Heart className="h-5 w-5" />
              <span className="text-xs">Saved</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-muted-foreground">
              <User className="h-5 w-5" />
              <span className="text-xs">Profile</span>
            </a>
          </div>
        </nav>
      </div>
    ),
    code: `// Glassmorphism style`,
  },
];

export function BottomBarPage() {
  return (
    <ComponentShowcase
      title="Bottom Bar"
      description="Mobile navigation bars fixed at the bottom of the screen for easy thumb access."
      preview={variants[0].preview}
      code={basicBottomBarCode}
      filename="bottom-bar.tsx"
      usage={`Bottom bars provide mobile-friendly navigation.

• Use 3-5 navigation items maximum
• Keep icons and labels clear
• Add badges for notifications
• Consider floating action button for primary action
• Hide on desktop, show on mobile`}
      props={bottomBarProps}
      variants={variants}
    />
  );
}
