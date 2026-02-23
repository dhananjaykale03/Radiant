import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Mail, Moon, Wifi, Bluetooth, Volume2, Vibrate, Shield, Eye, Lock, Zap, Globe, Smartphone, Monitor, Sun } from 'lucide-react';

const basicSwitchCode = `import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}`;

const switchProps = [
  { name: 'checked', type: 'boolean', default: '-', description: 'Controlled checked state' },
  { name: 'defaultChecked', type: 'boolean', default: 'false', description: 'Default checked state' },
  { name: 'onCheckedChange', type: '(checked: boolean) => void', default: '-', description: 'Change callback' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the switch' },
  { name: 'required', type: 'boolean', default: 'false', description: 'Mark as required' },
];

function ControlledSwitch() {
  const [checked, setChecked] = useState(true);
  return (
    <div className="flex items-center space-x-2">
      <Switch id="controlled" checked={checked} onCheckedChange={setChecked} />
      <Label htmlFor="controlled">{checked ? 'Enabled' : 'Disabled'}</Label>
    </div>
  );
}

function DarkModeSwitch() {
  const [dark, setDark] = useState(false);
  return (
    <div className="flex items-center justify-between w-[200px]">
      <div className="flex items-center gap-2">
        {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        <Label>Dark Mode</Label>
      </div>
      <Switch checked={dark} onCheckedChange={setDark} />
    </div>
  );
}

const variants = [
  {
    name: 'Basic',
    preview: (
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    ),
    code: basicSwitchCode,
  },
  {
    name: 'Checked',
    preview: (
      <div className="flex items-center space-x-2">
        <Switch id="checked" defaultChecked />
        <Label htmlFor="checked">Enabled by default</Label>
      </div>
    ),
    code: `<Switch id="checked" defaultChecked />`,
  },
  {
    name: 'Disabled',
    preview: (
      <div className="flex flex-col gap-4">
        <div className="flex items-center space-x-2">
          <Switch id="disabled-off" disabled />
          <Label htmlFor="disabled-off" className="text-muted-foreground">Disabled (off)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="disabled-on" disabled defaultChecked />
          <Label htmlFor="disabled-on" className="text-muted-foreground">Disabled (on)</Label>
        </div>
      </div>
    ),
    code: `<Switch disabled />
<Switch disabled defaultChecked />`,
  },
  {
    name: 'Controlled',
    preview: <ControlledSwitch />,
    code: `const [checked, setChecked] = useState(true);

<Switch 
  checked={checked} 
  onCheckedChange={setChecked} 
/>`,
  },
  {
    name: 'With Icons',
    preview: (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between w-[200px]">
          <div className="flex items-center gap-2">
            <Wifi className="h-4 w-4" />
            <Label>Wi-Fi</Label>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between w-[200px]">
          <div className="flex items-center gap-2">
            <Bluetooth className="h-4 w-4" />
            <Label>Bluetooth</Label>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between w-[200px]">
          <div className="flex items-center gap-2">
            <Volume2 className="h-4 w-4" />
            <Label>Sound</Label>
          </div>
          <Switch defaultChecked />
        </div>
      </div>
    ),
    code: `<div className="flex items-center justify-between">
  <div className="flex items-center gap-2">
    <Wifi className="h-4 w-4" />
    <Label>Wi-Fi</Label>
  </div>
  <Switch defaultChecked />
</div>`,
  },
  {
    name: 'Dark Mode Toggle',
    preview: <DarkModeSwitch />,
    code: `const [dark, setDark] = useState(false);

<div className="flex items-center justify-between">
  <div className="flex items-center gap-2">
    {dark ? <Moon /> : <Sun />}
    <Label>Dark Mode</Label>
  </div>
  <Switch checked={dark} onCheckedChange={setDark} />
</div>`,
  },
  {
    name: 'Settings Card',
    preview: (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-lg">Notifications</CardTitle>
          <CardDescription>Manage your notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <Label>Email notifications</Label>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <Label>Push notifications</Label>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Vibrate className="h-4 w-4 text-muted-foreground" />
              <Label>Vibration</Label>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    ),
    code: `<Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4" />
        <Label>Email notifications</Label>
      </div>
      <Switch defaultChecked />
    </div>
  </CardContent>
</Card>`,
  },
  {
    name: 'Privacy Settings',
    preview: (
      <div className="space-y-4 w-[280px]">
        <div className="flex items-center justify-between py-2 border-b">
          <div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span className="text-sm font-medium">Profile visibility</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Make your profile public</p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between py-2 border-b">
          <div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Two-factor auth</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Add extra security</p>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between py-2">
          <div>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              <span className="text-sm font-medium">Private account</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Approve followers</p>
          </div>
          <Switch />
        </div>
      </div>
    ),
    code: `// Privacy settings with descriptions`,
  },
  {
    name: 'Feature Flags',
    preview: (
      <div className="space-y-3 w-[280px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-500" />
            <span className="text-sm">Experimental features</span>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-blue-500" />
            <span className="text-sm">Beta program</span>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="h-4 w-4 text-green-500" />
            <span className="text-sm">Mobile sync</span>
          </div>
          <Switch defaultChecked />
        </div>
      </div>
    ),
    code: `// Feature flag toggles`,
  },
  {
    name: 'Device Settings',
    preview: (
      <div className="space-y-3 w-[260px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Monitor className="h-4 w-4" />
            <span className="text-sm">Desktop notifications</span>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="h-4 w-4" />
            <span className="text-sm">Mobile notifications</span>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Volume2 className="h-4 w-4" />
            <span className="text-sm">Sound alerts</span>
          </div>
          <Switch />
        </div>
      </div>
    ),
    code: `// Device-specific settings`,
  },
  {
    name: 'Right Label',
    preview: (
      <div className="flex items-center space-x-2">
        <Switch id="right-label" />
        <Label htmlFor="right-label">Accept terms and conditions</Label>
      </div>
    ),
    code: `<Switch id="terms" />
<Label htmlFor="terms">Accept terms</Label>`,
  },
  {
    name: 'Left Label',
    preview: (
      <div className="flex items-center space-x-2">
        <Label htmlFor="left-label">Enable notifications</Label>
        <Switch id="left-label" />
      </div>
    ),
    code: `<Label htmlFor="notifications">Enable</Label>
<Switch id="notifications" />`,
  },
  {
    name: 'Form Group',
    preview: (
      <div className="rounded-lg border p-4 space-y-4 w-[300px]">
        <h4 className="font-medium text-sm">Email Preferences</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="marketing" className="text-sm">Marketing emails</Label>
            <Switch id="marketing" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="social" className="text-sm">Social notifications</Label>
            <Switch id="social" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="security" className="text-sm">Security alerts</Label>
            <Switch id="security" defaultChecked />
          </div>
        </div>
      </div>
    ),
    code: `// Grouped form switches`,
  },
  {
    name: 'Inline',
    preview: (
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <Switch id="inline1" />
          <Label htmlFor="inline1">Option 1</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="inline2" />
          <Label htmlFor="inline2">Option 2</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="inline3" />
          <Label htmlFor="inline3">Option 3</Label>
        </div>
      </div>
    ),
    code: `// Inline switch options`,
  },
  {
    name: 'Required',
    preview: (
      <div className="flex items-center space-x-2">
        <Switch id="required" required />
        <Label htmlFor="required">
          I agree to the terms <span className="text-destructive">*</span>
        </Label>
      </div>
    ),
    code: `<Switch id="required" required />
<Label>I agree to the terms <span>*</span></Label>`,
  },
];

export function SwitchPage() {
  return (
    <ComponentShowcase
      title="Switch"
      description="A control that allows the user to toggle between checked and unchecked states."
      preview={variants[0].preview}
      code={basicSwitchCode}
      filename="switch.tsx"
      usage={`Switches toggle a single setting on or off.

• Use for binary choices (on/off, enable/disable)
• Place label on the left or right based on layout
• Include icons for visual context
• Group related switches together
• Use in settings panels and forms`}
      props={switchProps}
      variants={variants}
    />
  );
}
