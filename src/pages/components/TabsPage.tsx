import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const tabsCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Account settings content...</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Password settings content...</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}`;

const tabsProps = [
  {
    name: 'defaultValue',
    type: 'string',
    default: '-',
    description: 'The value of the tab to show by default.',
  },
  {
    name: 'value',
    type: 'string',
    default: '-',
    description: 'Controlled value of the active tab.',
  },
  {
    name: 'onValueChange',
    type: '(value: string) => void',
    default: '-',
    description: 'Callback when the active tab changes.',
  },
];

function TabsPreview() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Make changes to your account here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Account settings content...</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Password settings content...</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export function TabsPage() {
  return (
    <ComponentShowcase
      title="Tabs"
      description="A set of layered sections of content—known as tab panels—that are displayed one at a time."
      preview={<TabsPreview />}
      code={tabsCode}
      filename="tabs-demo.tsx"
      usage={`Tabs organize content into multiple sections and allow users to navigate between them.

• Use for related content that doesn't need to be viewed simultaneously
• Keep tab labels short and descriptive
• Consider the number of tabs - too many can be overwhelming
• Content should be related but distinct`}
      props={tabsProps}
    />
  );
}
