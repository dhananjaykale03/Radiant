import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';

const toastCode = `import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="outline"
        onClick={() => toast("Event has been created")}
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Event has been created", {
            description: "Monday, January 3rd at 6:00pm",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error("Event has been deleted", {
            description: "The event was removed from your calendar.",
          })
        }
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(
            new Promise((resolve) => setTimeout(resolve, 2000)),
            {
              loading: "Loading...",
              success: "Data loaded!",
              error: "Error loading data",
            }
          )
        }
      >
        Promise
      </Button>
    </div>
  )
}`;

const toastProps = [
  {
    name: 'message',
    type: 'string | React.ReactNode',
    default: '-',
    description: 'The main message to display.',
  },
  {
    name: 'description',
    type: 'string | React.ReactNode',
    default: '-',
    description: 'Additional description text.',
  },
  {
    name: 'duration',
    type: 'number',
    default: '4000',
    description: 'Duration in ms before auto-dismiss.',
  },
  {
    name: 'action',
    type: '{ label: string, onClick: () => void }',
    default: '-',
    description: 'Action button configuration.',
  },
];

function ToastPreview() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="outline"
        onClick={() => toast('Event has been created')}
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error('Event has been deleted', {
            description: 'The event was removed from your calendar.',
          })
        }
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(
            new Promise((resolve) => setTimeout(resolve, 2000)),
            {
              loading: 'Loading...',
              success: 'Data loaded!',
              error: 'Error loading data',
            }
          )
        }
      >
        Promise
      </Button>
    </div>
  );
}

export function ToastPage() {
  return (
    <ComponentShowcase
      title="Toast"
      description="A succinct message that is displayed temporarily."
      preview={<ToastPreview />}
      code={toastCode}
      filename="toast-demo.tsx"
      usage={`Toasts are used for non-blocking notifications.

• Use for success confirmations, errors, and updates
• Keep messages brief and actionable
• Success toasts for completed actions
• Error toasts for failures
• Use promise variant for async operations`}
      props={toastProps}
    />
  );
}
