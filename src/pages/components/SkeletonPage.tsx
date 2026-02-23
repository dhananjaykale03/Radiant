import { Skeleton } from '@/components/ui/skeleton';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const skeletonCode = `import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}`;

const skeletonCardCode = `import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function SkeletonCard() {
  return (
    <Card className="w-[300px]">
      <CardHeader className="space-y-2">
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-4 w-4/5" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>
    </Card>
  )
}`;

const skeletonProps = [
  {
    name: 'className',
    type: 'string',
    default: '-',
    description: 'Additional CSS classes for size and shape.',
  },
];

const variants = [
  {
    name: 'Default',
    preview: (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    ),
    code: skeletonCode,
  },
  {
    name: 'Card',
    preview: (
      <Card className="w-[300px]">
        <CardHeader className="space-y-2">
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-4 w-4/5" />
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </CardContent>
      </Card>
    ),
    code: skeletonCardCode,
  },
];

export function SkeletonPage() {
  return (
    <ComponentShowcase
      title="Skeleton"
      description="Use to show a placeholder while content is loading."
      preview={variants[0].preview}
      code={skeletonCode}
      filename="skeleton-demo.tsx"
      usage={`Skeleton loaders improve perceived performance during content loading.

• Match the skeleton shape to the expected content
• Use subtle animation to indicate loading state
• Group related skeletons together
• Avoid using too many skeletons on one screen`}
      props={skeletonProps}
      variants={variants}
    />
  );
}
