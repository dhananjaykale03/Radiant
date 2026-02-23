import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

function SonnerDemo() {
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
            description: 'Sunday, December 03, 2023 at 9:00 AM',
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error('Event has been deleted', {
            description: 'The event was permanently removed.',
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
              success: 'Data loaded successfully!',
              error: 'Failed to load data',
            }
          )
        }
      >
        Promise
      </Button>
    </div>
  );
}

const code = `import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

export function SonnerDemo() {
  return (
    <div className="flex gap-4">
      <Button onClick={() => toast('Event has been created')}>
        Default
      </Button>
      <Button
        onClick={() =>
          toast.success('Success!', {
            description: 'Your action was completed.',
          })
        }
      >
        Success
      </Button>
      <Button
        onClick={() =>
          toast.error('Error!', {
            description: 'Something went wrong.',
          })
        }
      >
        Error
      </Button>
      <Button
        onClick={() =>
          toast.promise(fetchData(), {
            loading: 'Loading...',
            success: 'Data loaded!',
            error: 'Failed to load',
          })
        }
      >
        Promise
      </Button>
    </div>
  );
}`;

export function SonnerPage() {
  return (
    <ComponentShowcase
      title="Sonner"
      description="An opinionated toast component for React."
      preview={<SonnerDemo />}
      code={code}
      filename="SonnerDemo.tsx"
      usage={`Sonner provides beautiful toast notifications with minimal setup.
• Use toast() for default notifications
• toast.success(), toast.error() for variants
• toast.promise() for async operations`}
      props={[
        { name: 'message', type: 'string', description: 'Toast message content' },
        { name: 'description', type: 'string', description: 'Additional description text' },
        { name: 'duration', type: 'number', default: '4000', description: 'Duration in ms' },
      ]}
    />
  );
}
