import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { AlertCircle, Terminal, CheckCircle2, Info } from 'lucide-react';

const alertCode = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}`;

const alertDestructiveCode = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}`;

const alertProps = [
  {
    name: 'variant',
    type: '"default" | "destructive"',
    default: '"default"',
    description: 'The visual style variant of the alert.',
  },
];

const variants = [
  {
    name: 'Default',
    preview: (
      <Alert className="max-w-md">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    ),
    code: alertCode,
  },
  {
    name: 'Destructive',
    preview: (
      <Alert variant="destructive" className="max-w-md">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    ),
    code: alertDestructiveCode,
  },
];

export function AlertPage() {
  return (
    <ComponentShowcase
      title="Alert"
      description="Displays a callout for user attention."
      preview={variants[0].preview}
      code={alertCode}
      filename="alert-demo.tsx"
      usage={`Alerts are used to display important messages to users.

• Default: General information or tips
• Destructive: Errors or critical warnings
• Always include a clear title and description
• Use appropriate icons to reinforce the message type`}
      props={alertProps}
      variants={variants}
    />
  );
}
