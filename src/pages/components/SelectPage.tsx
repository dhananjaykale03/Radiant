import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from '@/components/ui/select';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Check, Globe, User, Palette, Bell, Shield, CreditCard, Mail, Clock, Flag, Star, Zap } from 'lucide-react';

const basicSelectCode = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
      </SelectContent>
    </Select>
  )
}`;

const selectProps = [
  { name: 'value', type: 'string', default: '-', description: 'Controlled value' },
  { name: 'defaultValue', type: 'string', default: '-', description: 'Default value' },
  { name: 'onValueChange', type: '(value: string) => void', default: '-', description: 'Change callback' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the select' },
  { name: 'placeholder', type: 'string', default: '-', description: 'Placeholder text' },
];

const timezones = [
  { value: 'utc', label: 'UTC', offset: '+00:00' },
  { value: 'est', label: 'Eastern', offset: '-05:00' },
  { value: 'pst', label: 'Pacific', offset: '-08:00' },
  { value: 'gmt', label: 'London', offset: '+00:00' },
  { value: 'cet', label: 'Paris', offset: '+01:00' },
  { value: 'jst', label: 'Tokyo', offset: '+09:00' },
];

const variants = [
  {
    name: 'Basic',
    preview: (
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
          <SelectItem value="mango">Mango</SelectItem>
        </SelectContent>
      </Select>
    ),
    code: basicSelectCode,
  },
  {
    name: 'With Label',
    preview: (
      <div className="grid w-[200px] gap-2">
        <Label htmlFor="country">Country</Label>
        <Select>
          <SelectTrigger id="country">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="au">Australia</SelectItem>
            <SelectItem value="de">Germany</SelectItem>
            <SelectItem value="fr">France</SelectItem>
          </SelectContent>
        </Select>
      </div>
    ),
    code: `<div className="grid gap-2">
  <Label htmlFor="country">Country</Label>
  <Select>
    <SelectTrigger id="country">
      <SelectValue placeholder="Select country" />
    </SelectTrigger>
    <SelectContent>...</SelectContent>
  </Select>
</div>`,
  },
  {
    name: 'With Groups',
    preview: (
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value="est">Eastern Time</SelectItem>
            <SelectItem value="cst">Central Time</SelectItem>
            <SelectItem value="pst">Pacific Time</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Europe</SelectLabel>
            <SelectItem value="gmt">GMT</SelectItem>
            <SelectItem value="cet">Central European</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Asia</SelectLabel>
            <SelectItem value="jst">Japan</SelectItem>
            <SelectItem value="cst-asia">China</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    ),
    code: `<SelectGroup>
  <SelectLabel>North America</SelectLabel>
  <SelectItem value="est">Eastern Time</SelectItem>
</SelectGroup>
<SelectSeparator />`,
  },
  {
    name: 'Disabled',
    preview: (
      <div className="flex gap-4">
        <Select disabled>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Disabled" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="With disabled option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Available</SelectItem>
            <SelectItem value="2" disabled>Unavailable</SelectItem>
            <SelectItem value="3">Available</SelectItem>
          </SelectContent>
        </Select>
      </div>
    ),
    code: `<Select disabled>...</Select>
<SelectItem value="2" disabled>Unavailable</SelectItem>`,
  },
  {
    name: 'With Icons',
    preview: (
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select preference" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="profile">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </div>
          </SelectItem>
          <SelectItem value="notifications">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </div>
          </SelectItem>
          <SelectItem value="security">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Security
            </div>
          </SelectItem>
          <SelectItem value="billing">
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Billing
            </div>
          </SelectItem>
          <SelectItem value="appearance">
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Appearance
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    ),
    code: `<SelectItem value="profile">
  <div className="flex items-center gap-2">
    <User className="h-4 w-4" />
    Profile
  </div>
</SelectItem>`,
  },
  {
    name: 'With Descriptions',
    preview: (
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a plan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="free">
            <div className="flex flex-col">
              <span className="font-medium">Free</span>
              <span className="text-xs text-muted-foreground">Up to 3 projects</span>
            </div>
          </SelectItem>
          <SelectItem value="pro">
            <div className="flex flex-col">
              <span className="font-medium">Pro - $10/mo</span>
              <span className="text-xs text-muted-foreground">Unlimited projects</span>
            </div>
          </SelectItem>
          <SelectItem value="enterprise">
            <div className="flex flex-col">
              <span className="font-medium">Enterprise</span>
              <span className="text-xs text-muted-foreground">Custom solutions</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    ),
    code: `<SelectItem value="pro">
  <div className="flex flex-col">
    <span className="font-medium">Pro - $10/mo</span>
    <span className="text-xs text-muted-foreground">Unlimited projects</span>
  </div>
</SelectItem>`,
  },
  {
    name: 'With Badges',
    preview: (
      <Select>
        <SelectTrigger className="w-[220px]">
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="active">
            <div className="flex items-center justify-between w-full gap-2">
              <span>Active</span>
              <Badge variant="default" className="h-5">Live</Badge>
            </div>
          </SelectItem>
          <SelectItem value="pending">
            <div className="flex items-center justify-between w-full gap-2">
              <span>Pending</span>
              <Badge variant="secondary" className="h-5">Review</Badge>
            </div>
          </SelectItem>
          <SelectItem value="draft">
            <div className="flex items-center justify-between w-full gap-2">
              <span>Draft</span>
              <Badge variant="outline" className="h-5">WIP</Badge>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    ),
    code: `<div className="flex items-center justify-between w-full gap-2">
  <span>Active</span>
  <Badge>Live</Badge>
</div>`,
  },
  {
    name: 'With Avatars',
    preview: (
      <Select>
        <SelectTrigger className="w-[220px]">
          <SelectValue placeholder="Assign to..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="john">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-xs">JD</AvatarFallback>
              </Avatar>
              <span>John Doe</span>
            </div>
          </SelectItem>
          <SelectItem value="jane">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-xs">JS</AvatarFallback>
              </Avatar>
              <span>Jane Smith</span>
            </div>
          </SelectItem>
          <SelectItem value="bob">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-xs">BJ</AvatarFallback>
              </Avatar>
              <span>Bob Johnson</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    ),
    code: `<div className="flex items-center gap-2">
  <Avatar className="h-6 w-6">
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <span>John Doe</span>
</div>`,
  },
  {
    name: 'Priority Select',
    preview: (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Set priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="urgent">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              Urgent
            </div>
          </SelectItem>
          <SelectItem value="high">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-orange-500" />
              High
            </div>
          </SelectItem>
          <SelectItem value="medium">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              Medium
            </div>
          </SelectItem>
          <SelectItem value="low">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Low
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    ),
    code: `<div className="flex items-center gap-2">
  <div className="h-2 w-2 rounded-full bg-red-500" />
  Urgent
</div>`,
  },
  {
    name: 'Language Select',
    preview: (
      <Select defaultValue="en">
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              English
            </div>
          </SelectItem>
          <SelectItem value="es">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Español
            </div>
          </SelectItem>
          <SelectItem value="fr">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Français
            </div>
          </SelectItem>
          <SelectItem value="de">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Deutsch
            </div>
          </SelectItem>
          <SelectItem value="ja">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              日本語
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    ),
    code: `<Select defaultValue="en">...</Select>`,
  },
  {
    name: 'Time Select',
    preview: (
      <Select>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Select time" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="9am">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              9:00 AM
            </div>
          </SelectItem>
          <SelectItem value="10am">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              10:00 AM
            </div>
          </SelectItem>
          <SelectItem value="11am">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              11:00 AM
            </div>
          </SelectItem>
          <SelectItem value="12pm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              12:00 PM
            </div>
          </SelectItem>
          <SelectItem value="1pm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              1:00 PM
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    ),
    code: `// Time selection dropdown`,
  },
  {
    name: 'Timezone',
    preview: (
      <Select>
        <SelectTrigger className="w-[240px]">
          <SelectValue placeholder="Select timezone" />
        </SelectTrigger>
        <SelectContent>
          {timezones.map((tz) => (
            <SelectItem key={tz.value} value={tz.value}>
              <div className="flex items-center justify-between w-full">
                <span>{tz.label}</span>
                <span className="text-xs text-muted-foreground ml-4">{tz.offset}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    ),
    code: `<div className="flex items-center justify-between w-full">
  <span>{timezone.label}</span>
  <span className="text-xs text-muted-foreground">{timezone.offset}</span>
</div>`,
  },
  {
    name: 'Rating Select',
    preview: (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Rate this" />
        </SelectTrigger>
        <SelectContent>
          {[5, 4, 3, 2, 1].map((rating) => (
            <SelectItem key={rating} value={rating.toString()}>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                  />
                ))}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    ),
    code: `// Star rating select`,
  },
  {
    name: 'Full Width',
    preview: (
      <div className="w-full max-w-sm">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    ),
    code: `<SelectTrigger className="w-full">`,
  },
  {
    name: 'Small Size',
    preview: (
      <Select>
        <SelectTrigger className="w-[150px] h-8 text-xs">
          <SelectValue placeholder="Small select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1" className="text-xs">Small Option 1</SelectItem>
          <SelectItem value="2" className="text-xs">Small Option 2</SelectItem>
          <SelectItem value="3" className="text-xs">Small Option 3</SelectItem>
        </SelectContent>
      </Select>
    ),
    code: `<SelectTrigger className="h-8 text-xs">`,
  },
];

export function SelectPage() {
  return (
    <ComponentShowcase
      title="Select"
      description="Displays a list of options for the user to pick from—triggered by a button."
      preview={variants[0].preview}
      code={basicSelectCode}
      filename="select.tsx"
      usage={`Select components let users choose from a list of options.

• Use for 5+ options (use radio for fewer)
• Group related options with SelectGroup
• Add icons for visual context
• Include descriptions for complex options
• Support disabled states for unavailable options`}
      props={selectProps}
      variants={variants}
    />
  );
}
