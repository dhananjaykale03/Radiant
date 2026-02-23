import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { 
  Home, Settings, Users, FileText, BarChart3, Mail, Calendar, 
  ChevronRight, ChevronDown, Search, Bell, Plus, Folder, Star,
  CreditCard, LogOut, HelpCircle, Zap, Layers, MessageSquare,
  CheckSquare, Clock, Archive, Trash2, Send, PanelLeftClose
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarCode = `import { Home, Settings, Users, FileText, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Users, label: "Team", href: "/team" },
  { icon: FileText, label: "Documents", href: "/docs" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background h-screen flex flex-col">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-lg">My App</h2>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm",
                  "hover:bg-muted transition-colors"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}`;

const sidebarProps = [
  { name: 'collapsed', type: 'boolean', default: 'false', description: 'Whether sidebar is collapsed to icon-only mode' },
  { name: 'items', type: 'NavItem[]', default: '[]', description: 'Navigation items to display' },
  { name: 'onCollapse', type: '() => void', default: '-', description: 'Callback when collapse toggle is clicked' },
];

const navItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: Users, label: 'Team', badge: '3' },
  { icon: FileText, label: 'Documents' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Settings, label: 'Settings' },
];

const variants = [
  {
    name: 'Basic',
    preview: (
      <aside className="w-56 border rounded-lg bg-background h-80 flex flex-col">
        <div className="p-4 border-b">
          <h2 className="font-semibold">My App</h2>
        </div>
        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm",
                    item.active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    ),
    code: sidebarCode,
  },
  {
    name: 'With Search',
    preview: (
      <aside className="w-56 border rounded-lg bg-background h-80 flex flex-col">
        <div className="p-3 border-b">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8 h-8" />
          </div>
        </div>
        <nav className="flex-1 p-2 overflow-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href="#" className={cn("flex items-center gap-3 px-3 py-2 rounded-lg text-sm", item.active ? "bg-primary text-primary-foreground" : "hover:bg-muted")}>
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    ),
    code: `import { Input } from "@/components/ui/input"
import { Search, Home, Users, FileText, BarChart3, Settings } from "lucide-react"

export function SearchSidebar() {
  return (
    <aside className="w-64 border-r bg-background h-screen flex flex-col">
      <div className="p-3 border-b">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-8" />
        </div>
      </div>
      <nav className="flex-1 p-2 overflow-auto">
        {/* Navigation items */}
      </nav>
    </aside>
  )
}`,
  },
  {
    name: 'With User',
    preview: (
      <aside className="w-56 border rounded-lg bg-background h-80 flex flex-col">
        <div className="p-4 border-b flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">john@example.com</p>
          </div>
        </div>
        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            {navItems.slice(0, 4).map((item) => (
              <li key={item.label}>
                <a href="#" className={cn("flex items-center gap-3 px-3 py-2 rounded-lg text-sm", item.active ? "bg-muted font-medium" : "hover:bg-muted")}>
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-2 border-t">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-muted text-muted-foreground">
            <LogOut className="h-4 w-4" />
            Log out
          </a>
        </div>
      </aside>
    ),
    code: `import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { LogOut } from "lucide-react"

export function UserSidebar() {
  return (
    <aside className="w-64 border-r bg-background h-screen flex flex-col">
      <div className="p-4 border-b flex items-center gap-3">
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">John Doe</p>
          <p className="text-xs text-muted-foreground">john@example.com</p>
        </div>
      </div>
      <nav className="flex-1 p-2">{/* Navigation */}</nav>
      <div className="p-2 border-t">
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-muted">
          <LogOut className="h-4 w-4" />
          Log out
        </a>
      </div>
    </aside>
  )
}`,
  },
  {
    name: 'Collapsed',
    preview: (
      <aside className="w-16 border rounded-lg bg-background h-80 flex flex-col items-center">
        <div className="p-3 border-b w-full flex justify-center">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">A</span>
          </div>
        </div>
        <nav className="flex-1 p-2 flex flex-col items-center gap-1">
          {navItems.map((item) => (
            <button key={item.label} className={cn("p-2 rounded-lg", item.active ? "bg-primary text-primary-foreground" : "hover:bg-muted")}>
              <item.icon className="h-5 w-5" />
            </button>
          ))}
        </nav>
        <div className="p-2 border-t w-full flex justify-center">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">JD</AvatarFallback>
          </Avatar>
        </div>
      </aside>
    ),
    code: `export function CollapsedSidebar() {
  return (
    <aside className="w-16 border-r bg-background h-screen flex flex-col items-center">
      <div className="p-3 border-b w-full flex justify-center">
        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-xs">A</span>
        </div>
      </div>
      <nav className="flex-1 p-2 flex flex-col items-center gap-1">
        {navItems.map((item) => (
          <button key={item.label} className="p-2 rounded-lg hover:bg-muted">
            <item.icon className="h-5 w-5" />
          </button>
        ))}
      </nav>
    </aside>
  )
}`,
  },
  {
    name: 'With Badges',
    preview: (
      <aside className="w-56 border rounded-lg bg-background h-80 flex flex-col">
        <div className="p-4 border-b">
          <h2 className="font-semibold">Inbox</h2>
        </div>
        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            {[
              { icon: Mail, label: 'All Mail', badge: '128' },
              { icon: Send, label: 'Sent' },
              { icon: Star, label: 'Starred', badge: '5' },
              { icon: Archive, label: 'Archive' },
              { icon: Trash2, label: 'Trash', badge: '23' },
            ].map((item) => (
              <li key={item.label}>
                <a href="#" className="flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-muted">
                  <span className="flex items-center gap-3">
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </span>
                  {item.badge && (
                    <Badge variant="secondary" className="h-5 px-1.5 text-xs">{item.badge}</Badge>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    ),
    code: `import { Badge } from "@/components/ui/badge"
import { Mail, Send, Star, Archive, Trash2 } from "lucide-react"

export function BadgeSidebar() {
  const items = [
    { icon: Mail, label: 'All Mail', badge: '128' },
    { icon: Send, label: 'Sent' },
    { icon: Star, label: 'Starred', badge: '5' },
    { icon: Archive, label: 'Archive' },
    { icon: Trash2, label: 'Trash', badge: '23' },
  ]
  
  return (
    <aside className="w-64 border-r bg-background h-screen">
      <nav className="p-2">
        {items.map((item) => (
          <a key={item.label} href="#" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-muted">
            <span className="flex items-center gap-3">
              <item.icon className="h-4 w-4" />
              {item.label}
            </span>
            {item.badge && <Badge variant="secondary">{item.badge}</Badge>}
          </a>
        ))}
      </nav>
    </aside>
  )
}`,
  },
  {
    name: 'With Groups',
    preview: (
      <aside className="w-56 border rounded-lg bg-background h-80 flex flex-col overflow-hidden">
        <ScrollArea className="flex-1">
          <div className="p-2">
            <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase">Main</p>
            <ul className="space-y-1">
              <li><a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm bg-muted"><Home className="h-4 w-4" />Dashboard</a></li>
              <li><a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-muted"><BarChart3 className="h-4 w-4" />Analytics</a></li>
            </ul>
            <Separator className="my-4" />
            <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase">Workspace</p>
            <ul className="space-y-1">
              <li><a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-muted"><FileText className="h-4 w-4" />Documents</a></li>
              <li><a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-muted"><Users className="h-4 w-4" />Team</a></li>
            </ul>
          </div>
        </ScrollArea>
      </aside>
    ),
    code: `import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

export function GroupedSidebar() {
  return (
    <aside className="w-64 border-r bg-background h-screen">
      <ScrollArea className="h-full">
        <div className="p-2">
          <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase">Main</p>
          <ul className="space-y-1">
            <li><a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted">Dashboard</a></li>
            <li><a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted">Analytics</a></li>
          </ul>
          <Separator className="my-4" />
          <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase">Workspace</p>
          <ul className="space-y-1">
            <li><a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted">Documents</a></li>
            <li><a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted">Team</a></li>
          </ul>
        </div>
      </ScrollArea>
    </aside>
  )
}`,
  },
  {
    name: 'With Nested',
    preview: (
      <aside className="w-56 border rounded-lg bg-background h-80 flex flex-col overflow-hidden">
        <div className="p-4 border-b font-semibold">Projects</div>
        <ScrollArea className="flex-1 p-2">
          <ul className="space-y-1">
            <li>
              <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm hover:bg-muted">
                <ChevronDown className="h-4 w-4" />
                <Folder className="h-4 w-4" />
                Design System
              </button>
              <ul className="ml-6 mt-1 space-y-1 border-l pl-3">
                <li><a href="#" className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground">Components</a></li>
                <li><a href="#" className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground">Tokens</a></li>
              </ul>
            </li>
            <li>
              <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm hover:bg-muted">
                <ChevronRight className="h-4 w-4" />
                <Folder className="h-4 w-4" />
                Marketing
              </button>
            </li>
          </ul>
        </ScrollArea>
      </aside>
    ),
    code: `import { ChevronDown, ChevronRight, Folder } from "lucide-react"

export function NestedSidebar() {
  return (
    <aside className="w-64 border-r bg-background h-screen">
      <nav className="p-2">
        <ul className="space-y-1">
          <li>
            <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-muted">
              <ChevronDown className="h-4 w-4" />
              <Folder className="h-4 w-4" />
              Design System
            </button>
            <ul className="ml-6 mt-1 space-y-1 border-l pl-3">
              <li><a href="#" className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground">Components</a></li>
              <li><a href="#" className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground">Tokens</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  )
}`,
  },
  {
    name: 'Dark Theme',
    preview: (
      <aside className="w-56 border rounded-lg bg-slate-900 text-white h-80 flex flex-col">
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold">Acme Inc</span>
          </div>
        </div>
        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href="#" className={cn("flex items-center gap-3 px-3 py-2 rounded-lg text-sm", item.active ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white hover:bg-slate-800")}>
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    ),
    code: `export function DarkSidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen">
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
            <Zap className="h-4 w-4" />
          </div>
          <span className="font-semibold">Acme Inc</span>
        </div>
      </div>
      <nav className="p-2">
        {navItems.map((item) => (
          <a key={item.label} href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
            <item.icon className="h-4 w-4" />
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}`,
  },
  {
    name: 'Workspace Switcher',
    preview: (
      <aside className="w-56 border rounded-lg bg-background h-80 flex flex-col">
        <div className="p-3 border-b">
          <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted text-left">
            <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">A</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Acme Corp</p>
              <p className="text-xs text-muted-foreground">Pro Plan</p>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            {navItems.slice(0, 4).map((item) => (
              <li key={item.label}>
                <a href="#" className={cn("flex items-center gap-3 px-3 py-2 rounded-lg text-sm", item.active ? "bg-muted" : "hover:bg-muted")}>
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    ),
    code: `export function WorkspaceSidebar() {
  return (
    <aside className="w-64 border-r bg-background h-screen">
      <div className="p-3 border-b">
        <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted">
          <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-semibold text-primary">A</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Acme Corp</p>
            <p className="text-xs text-muted-foreground">Pro Plan</p>
          </div>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
      <nav className="p-2">{/* Navigation */}</nav>
    </aside>
  )
}`,
  },
  {
    name: 'With Actions',
    preview: (
      <aside className="w-56 border rounded-lg bg-background h-80 flex flex-col">
        <div className="p-3 border-b flex items-center justify-between">
          <h2 className="font-semibold">Tasks</h2>
          <Button size="sm" variant="ghost"><Plus className="h-4 w-4" /></Button>
        </div>
        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            {[
              { icon: CheckSquare, label: 'All Tasks', count: 24 },
              { icon: Clock, label: 'In Progress', count: 8 },
              { icon: Star, label: 'Important', count: 3 },
              { icon: Calendar, label: 'Scheduled' },
            ].map((item) => (
              <li key={item.label}>
                <a href="#" className="flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-muted">
                  <span className="flex items-center gap-3">
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </span>
                  {item.count && <span className="text-xs text-muted-foreground">{item.count}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Plus, CheckSquare, Clock, Star, Calendar } from "lucide-react"

export function ActionSidebar() {
  return (
    <aside className="w-64 border-r bg-background h-screen">
      <div className="p-3 border-b flex items-center justify-between">
        <h2 className="font-semibold">Tasks</h2>
        <Button size="sm" variant="ghost"><Plus className="h-4 w-4" /></Button>
      </div>
      <nav className="p-2">
        {/* Task items with counts */}
      </nav>
    </aside>
  )
}`,
  },
  {
    name: 'Floating',
    preview: (
      <aside className="w-56 m-2 rounded-xl bg-background/80 backdrop-blur border shadow-lg h-72 flex flex-col">
        <div className="p-4 flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
            <Layers className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold">Layers</span>
        </div>
        <nav className="flex-1 px-2 pb-2">
          <ul className="space-y-1">
            {navItems.slice(0, 4).map((item) => (
              <li key={item.label}>
                <a href="#" className={cn("flex items-center gap-3 px-3 py-2 rounded-lg text-sm", item.active ? "bg-primary/10 text-primary" : "hover:bg-muted")}>
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    ),
    code: `export function FloatingSidebar() {
  return (
    <aside className="w-64 m-3 rounded-xl bg-background/80 backdrop-blur border shadow-lg h-screen">
      <div className="p-4 flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-600">
          <Layers className="h-4 w-4 text-white" />
        </div>
        <span className="font-semibold">Layers</span>
      </div>
      <nav className="px-2 pb-2">{/* Navigation */}</nav>
    </aside>
  )
}`,
  },
  {
    name: 'With Footer',
    preview: (
      <aside className="w-56 border rounded-lg bg-background h-80 flex flex-col">
        <div className="p-4 border-b font-semibold">App Name</div>
        <nav className="flex-1 p-2">
          <ul className="space-y-1">
            {navItems.slice(0, 3).map((item) => (
              <li key={item.label}>
                <a href="#" className={cn("flex items-center gap-3 px-3 py-2 rounded-lg text-sm", item.active ? "bg-muted" : "hover:bg-muted")}>
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-3 border-t bg-muted/50">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Help & Support</span>
          </div>
        </div>
      </aside>
    ),
    code: `import { HelpCircle } from "lucide-react"

export function FooterSidebar() {
  return (
    <aside className="w-64 border-r bg-background h-screen flex flex-col">
      <nav className="flex-1 p-2">{/* Navigation */}</nav>
      <div className="p-3 border-t bg-muted/50">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>Help & Support</span>
        </div>
      </div>
    </aside>
  )
}`,
  },
  {
    name: 'Minimal',
    preview: (
      <aside className="w-48 h-80 flex flex-col py-4">
        <nav className="flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href="#" className={cn("flex items-center gap-3 px-4 py-2 text-sm border-l-2", item.active ? "border-primary text-primary font-medium" : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground")}>
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    ),
    code: `export function MinimalSidebar() {
  return (
    <aside className="w-48 h-screen py-4">
      <nav>
        {navItems.map((item) => (
          <a key={item.label} href="#" className="flex items-center gap-3 px-4 py-2 text-sm border-l-2 border-transparent hover:border-muted-foreground">
            <item.icon className="h-4 w-4" />
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}`,
  },
];

export function SidebarComponentPage() {
  return (
    <ComponentShowcase
      title="Sidebar"
      description="Navigation sidebars with various layouts, user sections, and collapsible states."
      preview={variants[0].preview}
      code={sidebarCode}
      filename="sidebar.tsx"
      usage={`Sidebars provide primary navigation for applications.

• Include clear navigation hierarchy
• Support collapsed/expanded states
• Add user profile section at top or bottom
• Use icons for quick recognition
• Group related items with separators`}
      props={sidebarProps}
      variants={variants}
    />
  );
}
