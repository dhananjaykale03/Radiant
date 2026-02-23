import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Menu, X, Search, Bell, Settings, User, ChevronDown, 
  Sun, Moon, ShoppingCart, Globe, Command, LogOut, Sparkles
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const basicNavbarCode = `export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold">Brand</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#" className="transition-colors hover:text-foreground/80">Features</a>
            <a href="#" className="transition-colors hover:text-foreground/80">Pricing</a>
            <a href="#" className="transition-colors hover:text-foreground/80">About</a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button>Sign In</Button>
        </div>
      </div>
    </header>
  )
}`;

const navbarProps = [
  { name: 'logo', type: 'ReactNode', default: '-', description: 'Logo or brand element' },
  { name: 'links', type: 'NavLink[]', default: '-', description: 'Navigation links' },
  { name: 'sticky', type: 'boolean', default: 'true', description: 'Stick to top on scroll' },
  { name: 'transparent', type: 'boolean', default: 'false', description: 'Transparent background' },
];

const navLinks = [
  { name: 'Features', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
];

const variants = [
  {
    name: 'Simple',
    preview: (
      <header className="w-full border-b bg-background">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <span className="font-bold">Brand</span>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <Button size="sm">Sign In</Button>
        </div>
      </header>
    ),
    code: basicNavbarCode,
  },
  {
    name: 'With Logo',
    preview: (
      <header className="w-full border-b bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg">Brand</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>
    ),
    code: `// Navbar with logo icon`,
  },
  {
    name: 'Centered Links',
    preview: (
      <header className="w-full border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4">
          <span className="font-bold text-lg">Brand</span>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Log in</Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>
    ),
    code: `// Centered navigation links`,
  },
  {
    name: 'With Search',
    preview: (
      <header className="w-full border-b bg-background">
        <div className="flex h-16 items-center gap-4 px-4">
          <span className="font-bold text-lg shrink-0">Brand</span>
          <div className="flex-1 flex items-center justify-center max-w-md mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9 w-full" />
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="ghost" size="icon"><Bell className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon"><User className="h-4 w-4" /></Button>
          </div>
        </div>
      </header>
    ),
    code: `// Navbar with search bar`,
  },
  {
    name: 'Command Search',
    preview: (
      <header className="w-full border-b bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <span className="font-bold text-lg">Brand</span>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navLinks.slice(0, 3).map(link => (
                <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <button className="hidden md:flex items-center gap-2 rounded-lg border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted w-64">
            <Search className="h-4 w-4" />
            <span>Search...</span>
            <kbd className="ml-auto rounded border bg-background px-1.5 text-[10px] font-mono">
              <Command className="inline h-3 w-3" />K
            </kbd>
          </button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden"><Search className="h-4 w-4" /></Button>
            <Button size="sm">Sign In</Button>
          </div>
        </div>
      </header>
    ),
    code: `// Command palette style search`,
  },
  {
    name: 'With Dropdown',
    preview: (
      <header className="w-full border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <span className="font-bold text-lg">Brand</span>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                  Products <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Analytics</DropdownMenuItem>
                  <DropdownMenuItem>Automation</DropdownMenuItem>
                  <DropdownMenuItem>Reports</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Docs</a>
            </nav>
          </div>
          <Button size="sm">Get Started</Button>
        </div>
      </header>
    ),
    code: `// Navbar with dropdown menu`,
  },
  {
    name: 'User Menu',
    preview: (
      <header className="w-full border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <span className="font-bold text-lg">Dashboard</span>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="text-foreground font-medium">Overview</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Analytics</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Reports</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Settings</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] text-primary-foreground flex items-center justify-center">3</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem><User className="mr-2 h-4 w-4" />Profile</DropdownMenuItem>
                <DropdownMenuItem><Settings className="mr-2 h-4 w-4" />Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><LogOut className="mr-2 h-4 w-4" />Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    ),
    code: `// App navbar with user menu`,
  },
  {
    name: 'E-commerce',
    preview: (
      <header className="w-full border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <span className="font-bold text-lg">Store</span>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground">New Arrivals</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Women</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Men</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Sale</a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon"><Search className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon"><User className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px]">2</Badge>
            </Button>
          </div>
        </div>
      </header>
    ),
    code: `// E-commerce navbar`,
  },
  {
    name: 'Transparent',
    preview: (
      <header className="w-full bg-transparent absolute top-0 left-0 right-0 z-50">
        <div className="flex h-16 items-center justify-between px-4">
          <span className="font-bold text-lg text-white">Brand</span>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
            Contact
          </Button>
        </div>
      </header>
    ),
    code: `// Transparent navbar for hero sections`,
  },
  {
    name: 'With Badge',
    preview: (
      <header className="w-full border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">Brand</span>
              <Badge variant="secondary" className="text-[10px]">Beta</Badge>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm">Sign up free</Button>
          </div>
        </div>
      </header>
    ),
    code: `// Navbar with beta badge`,
  },
  {
    name: 'Dark Solid',
    preview: (
      <header className="w-full bg-slate-900 text-white">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <span className="font-bold text-lg">Brand</span>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
              Log in
            </Button>
            <Button size="sm" className="bg-white text-slate-900 hover:bg-slate-100">
              Get Started
            </Button>
          </div>
        </div>
      </header>
    ),
    code: `// Dark solid navbar`,
  },
  {
    name: 'Mobile Menu',
    preview: (
      <header className="w-full border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4">
          <span className="font-bold text-lg">Brand</span>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">Log in</Button>
            <Button size="sm" className="hidden md:inline-flex">Sign up</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
    ),
    code: `// Navbar with mobile hamburger menu`,
  },
  {
    name: 'Language & Theme',
    preview: (
      <header className="w-full border-b bg-background/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <span className="font-bold text-lg">Brand</span>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navLinks.slice(0, 3).map(link => (
                <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon"><Globe className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon"><Sun className="h-4 w-4" /></Button>
            <Button size="sm" className="ml-2">Sign In</Button>
          </div>
        </div>
      </header>
    ),
    code: `// Navbar with language and theme toggles`,
  },
  {
    name: 'Announcement Bar',
    preview: (
      <div className="w-full">
        <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
          🎉 New feature released! <a href="#" className="underline font-medium">Learn more</a>
        </div>
        <header className="border-b bg-background">
          <div className="flex h-14 items-center justify-between px-4">
            <span className="font-bold">Brand</span>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navLinks.slice(0, 3).map(link => (
                <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground">
                  {link.name}
                </a>
              ))}
            </nav>
            <Button size="sm">Get Started</Button>
          </div>
        </header>
      </div>
    ),
    code: `// Navbar with announcement bar`,
  },
  {
    name: 'Pill Nav',
    preview: (
      <header className="w-full border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4">
          <span className="font-bold text-lg">Brand</span>
          <nav className="hidden md:flex items-center gap-1 bg-muted rounded-full p-1">
            <a href="#" className="px-4 py-1.5 rounded-full bg-background text-sm font-medium shadow-sm">Home</a>
            <a href="#" className="px-4 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground">Features</a>
            <a href="#" className="px-4 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground">Pricing</a>
            <a href="#" className="px-4 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground">About</a>
          </nav>
          <Button size="sm">Contact</Button>
        </div>
      </header>
    ),
    code: `// Pill-style navigation`,
  },
  {
    name: 'Floating',
    preview: (
      <div className="relative pt-4 pb-8 px-4">
        <header className="mx-auto max-w-4xl rounded-full border bg-background/95 backdrop-blur shadow-lg">
          <div className="flex h-14 items-center justify-between px-6">
            <span className="font-bold">Brand</span>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navLinks.slice(0, 3).map(link => (
                <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground">
                  {link.name}
                </a>
              ))}
            </nav>
            <Button size="sm" className="rounded-full">Get Started</Button>
          </div>
        </header>
      </div>
    ),
    code: `// Floating rounded navbar`,
  },
];

export function NavbarComponentPage() {
  return (
    <ComponentShowcase
      title="Navbar"
      description="Navigation bar components with various layouts, search, user menus, and responsive designs."
      preview={variants[0].preview}
      code={basicNavbarCode}
      filename="navbar.tsx"
      usage={`Navbars provide primary navigation for your application.

• Keep navigation simple and focused
• Include search for content-heavy apps
• Add user menu for authenticated users
• Make responsive with mobile hamburger menu
• Consider sticky positioning for better UX`}
      props={navbarProps}
      variants={variants}
    />
  );
}
