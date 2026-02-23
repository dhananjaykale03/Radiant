import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Menu, Settings, User, Bell, Shield, CreditCard, 
  Home, FileText, Users, HelpCircle, LogOut, X,
  ShoppingCart, Trash2, Plus, Minus, Filter, SlidersHorizontal
} from 'lucide-react';

const basicSheetCode = `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          {/* Content */}
        </div>
      </SheetContent>
    </Sheet>
  )
}`;

const sheetProps = [
  { name: 'side', type: '"top" | "right" | "bottom" | "left"', default: '"right"', description: 'Side to open from' },
  { name: 'open', type: 'boolean', default: '-', description: 'Controlled open state' },
  { name: 'onOpenChange', type: '(open: boolean) => void', default: '-', description: 'Open state callback' },
  { name: 'modal', type: 'boolean', default: 'true', description: 'Whether the sheet is modal' },
];

const cartItems = [
  { id: 1, name: 'Product One', price: 29.99, qty: 2 },
  { id: 2, name: 'Product Two', price: 49.99, qty: 1 },
  { id: 3, name: 'Product Three', price: 19.99, qty: 3 },
];

const notifications = [
  { id: 1, title: 'New message', desc: 'John sent you a message', time: '2m ago', unread: true },
  { id: 2, title: 'Order shipped', desc: 'Your order #1234 has shipped', time: '1h ago', unread: true },
  { id: 3, title: 'Payment received', desc: 'Payment of $99.00 confirmed', time: '3h ago', unread: false },
  { id: 4, title: 'New follower', desc: 'Jane started following you', time: '1d ago', unread: false },
];

const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: FileText, label: 'Documents', href: '/docs' },
  { icon: Users, label: 'Team', href: '/team' },
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: HelpCircle, label: 'Help', href: '/help' },
];

const filterCategories = ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books'];
const filterBrands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony'];

const variants = [
  {
    name: 'Basic',
    preview: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit Profile</SheetTitle>
            <SheetDescription>Make changes to your profile here. Click save when done.</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    ),
    code: basicSheetCode,
  },
  {
    name: 'Left Side',
    preview: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline"><Menu className="mr-2 h-4 w-4" />Menu</Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-2 mt-4">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
          <Separator className="my-4" />
          <Button variant="ghost" className="w-full justify-start text-destructive">
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        </SheetContent>
      </Sheet>
    ),
    code: `<SheetContent side="left" className="w-72">`,
  },
  {
    name: 'Top Side',
    preview: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Top Sheet</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Announcement</SheetTitle>
            <SheetDescription>Important update for all users.</SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">We're excited to announce new features coming next week!</p>
          </div>
        </SheetContent>
      </Sheet>
    ),
    code: `<SheetContent side="top">`,
  },
  {
    name: 'Bottom Side',
    preview: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Bottom Sheet</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Quick Actions</SheetTitle>
          </SheetHeader>
          <div className="flex gap-4 py-4">
            <Button className="flex-1">Share</Button>
            <Button variant="outline" className="flex-1">Copy Link</Button>
            <Button variant="secondary" className="flex-1">Download</Button>
          </div>
        </SheetContent>
      </Sheet>
    ),
    code: `<SheetContent side="bottom">`,
  },
  {
    name: 'Shopping Cart',
    preview: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart (3)
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
            <SheetDescription>You have 3 items in your cart</SheetDescription>
          </SheetHeader>
          <ScrollArea className="flex-1 my-4">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-2">
                  <div className="h-16 w-16 rounded-lg bg-muted" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-sm text-muted-foreground">${item.price}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm w-6 text-center">{item.qty}</span>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
          <Separator />
          <div className="space-y-4 pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">$169.94</span>
            </div>
            <Button className="w-full">Checkout</Button>
          </div>
        </SheetContent>
      </Sheet>
    ),
    code: `// Shopping cart sheet`,
  },
  {
    name: 'Notifications',
    preview: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] flex items-center justify-center text-primary-foreground">2</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Notifications</SheetTitle>
            <SheetDescription>You have 2 unread notifications</SheetDescription>
          </SheetHeader>
          <div className="mt-4 space-y-2">
            {notifications.map((notif) => (
              <div key={notif.id} className={`p-3 rounded-lg ${notif.unread ? 'bg-primary/5' : ''}`}>
                <div className="flex items-start gap-3">
                  <div className={`h-2 w-2 rounded-full mt-2 ${notif.unread ? 'bg-primary' : 'bg-muted'}`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{notif.title}</p>
                    <p className="text-xs text-muted-foreground">{notif.desc}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">Mark all as read</Button>
        </SheetContent>
      </Sheet>
    ),
    code: `// Notifications panel`,
  },
  {
    name: 'Settings',
    preview: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline"><Settings className="mr-2 h-4 w-4" />Settings</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
            <SheetDescription>Manage your account settings</SheetDescription>
          </SheetHeader>
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer">
              <User className="h-5 w-5" />
              <div>
                <p className="text-sm font-medium">Profile</p>
                <p className="text-xs text-muted-foreground">Manage your profile info</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer">
              <Bell className="h-5 w-5" />
              <div>
                <p className="text-sm font-medium">Notifications</p>
                <p className="text-xs text-muted-foreground">Configure alerts</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer">
              <Shield className="h-5 w-5" />
              <div>
                <p className="text-sm font-medium">Security</p>
                <p className="text-xs text-muted-foreground">Password & 2FA</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer">
              <CreditCard className="h-5 w-5" />
              <div>
                <p className="text-sm font-medium">Billing</p>
                <p className="text-xs text-muted-foreground">Manage payments</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    ),
    code: `// Settings panel`,
  },
  {
    name: 'User Profile',
    preview: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-lg">JD</AvatarFallback>
              </Avatar>
              <div>
                <SheetTitle>John Doe</SheetTitle>
                <SheetDescription>john@example.com</SheetDescription>
              </div>
            </div>
          </SheetHeader>
          <Separator className="my-4" />
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start"><User className="mr-2 h-4 w-4" />View Profile</Button>
            <Button variant="ghost" className="w-full justify-start"><Settings className="mr-2 h-4 w-4" />Settings</Button>
            <Button variant="ghost" className="w-full justify-start"><HelpCircle className="mr-2 h-4 w-4" />Help</Button>
          </div>
          <Separator className="my-4" />
          <Button variant="ghost" className="w-full justify-start text-destructive">
            <LogOut className="mr-2 h-4 w-4" />Log out
          </Button>
        </SheetContent>
      </Sheet>
    ),
    code: `// User profile sheet`,
  },
  {
    name: 'Filters',
    preview: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
            <SheetDescription>Narrow down your search</SheetDescription>
          </SheetHeader>
          <div className="mt-4 space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-3">Category</h4>
              <div className="space-y-2">
                {filterCategories.map((cat) => (
                  <div key={cat} className="flex items-center space-x-2">
                    <Checkbox id={cat} />
                    <Label htmlFor={cat} className="text-sm">{cat}</Label>
                  </div>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <h4 className="text-sm font-medium mb-3">Brand</h4>
              <div className="space-y-2">
                {filterBrands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox id={brand} />
                    <Label htmlFor={brand} className="text-sm">{brand}</Label>
                  </div>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <h4 className="text-sm font-medium mb-3">Price Range</h4>
              <div className="flex gap-2">
                <Input placeholder="Min" type="number" />
                <Input placeholder="Max" type="number" />
              </div>
            </div>
          </div>
          <SheetFooter className="mt-6">
            <Button variant="outline" className="w-full">Reset</Button>
            <SheetClose asChild>
              <Button className="w-full">Apply Filters</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    ),
    code: `// Filter panel`,
  },
  {
    name: 'Wide Sheet',
    preview: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Wide Sheet</Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Wider Content</SheetTitle>
            <SheetDescription>This sheet has more horizontal space</SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="text-muted-foreground">Use sm:max-w-lg or other widths for wider sheets.</p>
          </div>
        </SheetContent>
      </Sheet>
    ),
    code: `<SheetContent className="sm:max-w-lg">`,
  },
  {
    name: 'Full Width Mobile',
    preview: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Full Width (Mobile)</Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Mobile Optimized</SheetTitle>
            <SheetDescription>Full width on mobile, contained on desktop</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    ),
    code: `<SheetContent className="w-full sm:max-w-md">`,
  },
  {
    name: 'With Form',
    preview: (
      <Sheet>
        <SheetTrigger asChild>
          <Button>Create New</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create Item</SheetTitle>
            <SheetDescription>Fill out the form to create a new item</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter title" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input id="description" placeholder="Enter description" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Input id="category" placeholder="Select category" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
            <Button type="submit">Create</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    ),
    code: `// Form in sheet`,
  },
];

export function SheetPage() {
  return (
    <ComponentShowcase
      title="Sheet"
      description="Extends the Dialog component to display content that complements the main content of the screen."
      preview={variants[0].preview}
      code={basicSheetCode}
      filename="sheet.tsx"
      usage={`Sheets slide in from the edge of the screen.

• Use side prop for different positions (left, right, top, bottom)
• Great for navigation menus on mobile
• Use for shopping carts, filters, settings
• Include SheetHeader for title and description
• Use SheetFooter for action buttons`}
      props={sheetProps}
      variants={variants}
    />
  );
}
