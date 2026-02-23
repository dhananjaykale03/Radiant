import { Progress } from '@/components/ui/progress';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { useEffect, useState } from 'react';

const progressCode = `import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}`;

const progressProps = [
  {
    name: 'value',
    type: 'number',
    default: '0',
    description: 'The current progress value (0-100).',
  },
  {
    name: 'max',
    type: 'number',
    default: '100',
    description: 'The maximum value.',
  },
];

function ProgressPreview() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[300px]" />;
}

export function ProgressPage() {
  return (
    <ComponentShowcase
      title="Progress"
      description="Displays an indicator showing the completion progress of a task."
      preview={<ProgressPreview />}
      code={progressCode}
      filename="progress-demo.tsx"
      usage={`Progress bars show the completion status of a task.

• Use for file uploads, form completion, loading states
• Always show a numerical percentage when possible
• Animate transitions for smooth user experience
• Consider indeterminate state for unknown durations`}
      props={progressProps}
    />
  );
}
