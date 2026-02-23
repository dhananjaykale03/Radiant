import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useState } from 'react';
import { 
  User, Settings, CreditCard, Users, Plus, Mail, MessageSquare, 
  PlusCircle, UserPlus, Github, LifeBuoy, LogOut, Cloud, 
  Keyboard, MoreHorizontal, Edit, Copy, Trash2, Share, 
  Download, Eye, Star, Heart, Bookmark, Flag, ChevronDown,
  MoreVertical, FileText, Image, Video, Music, Archive
} from 'lucide-react';

const basicDropdownCode = `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`;

const dropdownProps = [
  { name: 'open', type: 'boolean', default: '-', description: 'Controlled open state' },
  { name: 'onOpenChange', type: '(open: boolean) => void', default: '-', description: 'Open state callback' },
  { name: 'modal', type: 'boolean', default: 'true', description: 'Whether the dropdown is modal' },
  { name: 'dir', type: '"ltr" | "rtl"', default: '"ltr"', description: 'Text direction' },
];

function CheckboxDropdown() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">View Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function RadioDropdown() {
  const [position, setPosition] = useState('bottom');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Panel Position</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="left">Left</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const variants = [
  {
    name: 'Basic',
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: basicDropdownCode,
  },
  {
    name: 'With Icons',
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <User className="mr-2 h-4 w-4" />
            Account
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive">
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: `<DropdownMenuItem>
  <User className="mr-2 h-4 w-4" />
  Profile
</DropdownMenuItem>`,
  },
  {
    name: 'With Shortcuts',
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Edit</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            Edit
            <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            Copy
            <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: `<DropdownMenuItem>
  Edit
  <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
</DropdownMenuItem>`,
  },
  {
    name: 'With Groups',
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Team</DropdownMenuLabel>
            <DropdownMenuItem><Users className="mr-2 h-4 w-4" />Members</DropdownMenuItem>
            <DropdownMenuItem><UserPlus className="mr-2 h-4 w-4" />Invite</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuLabel>Support</DropdownMenuLabel>
            <DropdownMenuItem><LifeBuoy className="mr-2 h-4 w-4" />Help</DropdownMenuItem>
            <DropdownMenuItem><Github className="mr-2 h-4 w-4" />GitHub</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: `<DropdownMenuGroup>
  <DropdownMenuLabel>Team</DropdownMenuLabel>
  <DropdownMenuItem>Members</DropdownMenuItem>
  <DropdownMenuItem>Invite</DropdownMenuItem>
</DropdownMenuGroup>`,
  },
  {
    name: 'With Submenu',
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Share</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem><Mail className="mr-2 h-4 w-4" />Email</DropdownMenuItem>
          <DropdownMenuItem><MessageSquare className="mr-2 h-4 w-4" />Message</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger><PlusCircle className="mr-2 h-4 w-4" />More</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem><Github className="mr-2 h-4 w-4" />GitHub</DropdownMenuItem>
                <DropdownMenuItem><Cloud className="mr-2 h-4 w-4" />Cloud</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Plus className="mr-2 h-4 w-4" />Create Link</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: `<DropdownMenuSub>
  <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent>
      <DropdownMenuItem>Option 1</DropdownMenuItem>
      <DropdownMenuItem>Option 2</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>`,
  },
  {
    name: 'Checkboxes',
    preview: <CheckboxDropdown />,
    code: `const [checked, setChecked] = useState(true);

<DropdownMenuCheckboxItem 
  checked={checked} 
  onCheckedChange={setChecked}
>
  Status Bar
</DropdownMenuCheckboxItem>`,
  },
  {
    name: 'Radio Group',
    preview: <RadioDropdown />,
    code: `const [position, setPosition] = useState('bottom');

<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
  <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>`,
  },
  {
    name: 'Icon Button',
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem><Eye className="mr-2 h-4 w-4" />View</DropdownMenuItem>
          <DropdownMenuItem><Edit className="mr-2 h-4 w-4" />Edit</DropdownMenuItem>
          <DropdownMenuItem><Copy className="mr-2 h-4 w-4" />Duplicate</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive">
            <Trash2 className="mr-2 h-4 w-4" />Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: `<Button variant="ghost" size="icon">
  <MoreHorizontal className="h-4 w-4" />
</Button>`,
  },
  {
    name: 'Vertical Dots',
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem><Share className="mr-2 h-4 w-4" />Share</DropdownMenuItem>
          <DropdownMenuItem><Download className="mr-2 h-4 w-4" />Download</DropdownMenuItem>
          <DropdownMenuItem><Archive className="mr-2 h-4 w-4" />Archive</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: `<MoreVertical className="h-4 w-4" />`,
  },
  {
    name: 'User Profile',
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem><User className="mr-2 h-4 w-4" />Profile</DropdownMenuItem>
          <DropdownMenuItem><Settings className="mr-2 h-4 w-4" />Settings</DropdownMenuItem>
          <DropdownMenuItem><Keyboard className="mr-2 h-4 w-4" />Shortcuts</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem><LogOut className="mr-2 h-4 w-4" />Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: `<DropdownMenuLabel className="font-normal">
  <div className="flex flex-col space-y-1">
    <p className="text-sm font-medium">John Doe</p>
    <p className="text-xs text-muted-foreground">john@example.com</p>
  </div>
</DropdownMenuLabel>`,
  },
  {
    name: 'Actions Menu',
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Actions
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem><Star className="mr-2 h-4 w-4" />Star</DropdownMenuItem>
          <DropdownMenuItem><Heart className="mr-2 h-4 w-4" />Like</DropdownMenuItem>
          <DropdownMenuItem><Bookmark className="mr-2 h-4 w-4" />Save</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem><Flag className="mr-2 h-4 w-4" />Report</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: `<Button>
  Actions
  <ChevronDown className="ml-2 h-4 w-4" />
</Button>`,
  },
  {
    name: 'File Type Menu',
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            New
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem><FileText className="mr-2 h-4 w-4" />Document</DropdownMenuItem>
          <DropdownMenuItem><Image className="mr-2 h-4 w-4" />Image</DropdownMenuItem>
          <DropdownMenuItem><Video className="mr-2 h-4 w-4" />Video</DropdownMenuItem>
          <DropdownMenuItem><Music className="mr-2 h-4 w-4" />Audio</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: `// File type creation menu`,
  },
  {
    name: 'Disabled Items',
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem>Available</DropdownMenuItem>
          <DropdownMenuItem disabled>Unavailable</DropdownMenuItem>
          <DropdownMenuItem>Available</DropdownMenuItem>
          <DropdownMenuItem disabled>Also unavailable</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: `<DropdownMenuItem disabled>Unavailable</DropdownMenuItem>`,
  },
  {
    name: 'Align End',
    preview: (
      <div className="flex justify-end w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Aligned End</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Option 1</DropdownMenuItem>
            <DropdownMenuItem>Option 2</DropdownMenuItem>
            <DropdownMenuItem>Option 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
    code: `<DropdownMenuContent align="end">`,
  },
  {
    name: 'Destructive Action',
    preview: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Manage</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem><Edit className="mr-2 h-4 w-4" />Edit</DropdownMenuItem>
          <DropdownMenuItem><Copy className="mr-2 h-4 w-4" />Duplicate</DropdownMenuItem>
          <DropdownMenuItem><Archive className="mr-2 h-4 w-4" />Archive</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive focus:text-destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete permanently
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: `<DropdownMenuItem className="text-destructive">
  <Trash2 className="mr-2 h-4 w-4" />
  Delete permanently
</DropdownMenuItem>`,
  },
];

export function DropdownMenuPage() {
  return (
    <ComponentShowcase
      title="Dropdown Menu"
      description="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
      preview={variants[0].preview}
      code={basicDropdownCode}
      filename="dropdown-menu.tsx"
      usage={`Dropdown menus display actions in a contextual popup.

• Use for navigation or actions related to a specific element
• Group related items with separators
• Support keyboard shortcuts
• Include icons for visual context
• Use submenus for nested options
• Support checkbox and radio items for selections`}
      props={dropdownProps}
      variants={variants}
    />
  );
}
