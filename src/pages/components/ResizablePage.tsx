import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';

const resizableCode = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`;

const resizableVerticalCode = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableVertical() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`;

const resizableProps = [
  {
    name: 'direction',
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: 'The direction of the panel group.',
  },
  {
    name: 'defaultSize',
    type: 'number',
    default: '-',
    description: 'The initial size of a panel (percentage).',
  },
  {
    name: 'minSize',
    type: 'number',
    default: '-',
    description: 'The minimum size of a panel (percentage).',
  },
  {
    name: 'maxSize',
    type: 'number',
    default: '-',
    description: 'The maximum size of a panel (percentage).',
  },
];

const variants = [
  {
    name: 'Horizontal',
    preview: (
      <ResizablePanelGroup direction="horizontal" className="min-h-[200px] max-w-md rounded-lg border">
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Two</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    ),
    code: resizableCode,
  },
  {
    name: 'Vertical',
    preview: (
      <ResizablePanelGroup direction="vertical" className="min-h-[200px] max-w-md rounded-lg border">
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Header</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    ),
    code: resizableVerticalCode,
  },
  {
    name: 'With Handle',
    preview: (
      <ResizablePanelGroup direction="horizontal" className="min-h-[200px] max-w-md rounded-lg border">
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Left</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Right</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    ),
    code: `<ResizableHandle withHandle />`,
  },
];

export function ResizablePage() {
  return (
    <ComponentShowcase
      title="Resizable"
      description="Accessible resizable panel groups and layouts."
      preview={variants[0].preview}
      code={resizableCode}
      filename="resizable-demo.tsx"
      usage={`Resizable creates flexible, user-adjustable layouts.

• Wrap panels in ResizablePanelGroup
• Add ResizableHandle between panels
• Use withHandle for visible drag indicator
• Set minSize/maxSize for constraints`}
      props={resizableProps}
      variants={variants}
    />
  );
}
