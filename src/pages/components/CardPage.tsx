import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Bell, Check, CreditCard, Settings } from 'lucide-react';

const cardCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>
          Deploy your new project in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Your new project will be created with all the default settings.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}`;

const cardNotificationCode = `import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Check } from "lucide-react"

const notifications = [
  { title: "Your call has been confirmed.", time: "1 hour ago" },
  { title: "You have a new message!", time: "2 hours ago" },
  { title: "Your subscription is expiring soon!", time: "3 hours ago" },
]

export function CardNotifications() {
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Notifications
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {notifications.map((notification, index) => (
          <div key={index} className="flex items-start gap-4">
            <Check className="h-4 w-4 mt-0.5 text-primary" />
            <div className="space-y-1">
              <p className="text-sm font-medium">{notification.title}</p>
              <p className="text-xs text-muted-foreground">{notification.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}`;

const cardProps = [
  {
    name: 'className',
    type: 'string',
    default: '-',
    description: 'Additional CSS classes to apply to the card.',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    default: '-',
    description: 'The content of the card (CardHeader, CardContent, CardFooter).',
  },
];

const notifications = [
  { title: 'Your call has been confirmed.', time: '1 hour ago' },
  { title: 'You have a new message!', time: '2 hours ago' },
  { title: 'Your subscription is expiring soon!', time: '3 hours ago' },
];

const variants = [
  {
    name: 'Default',
    preview: (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Your new project will be created with all the default settings.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    ),
    code: cardCode,
  },
  {
    name: 'Notifications',
    preview: (
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {notifications.map((notification, index) => (
            <div key={index} className="flex items-start gap-4">
              <Check className="h-4 w-4 mt-0.5 text-primary" />
              <div className="space-y-1">
                <p className="text-sm font-medium">{notification.title}</p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    ),
    code: cardNotificationCode,
  },
];

export function CardPage() {
  return (
    <ComponentShowcase
      title="Card"
      description="Displays a card with header, content, and footer sections."
      preview={variants[0].preview}
      code={cardCode}
      filename="card-demo.tsx"
      usage={`Cards are used to group related content and actions.

• Use CardHeader for titles and descriptions
• Use CardContent for the main body
• Use CardFooter for actions
• Cards work great for dashboards, settings panels, and feature highlights`}
      props={cardProps}
      variants={variants}
    />
  );
}
