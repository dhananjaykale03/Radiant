import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { AspectRatio } from '@/components/ui/aspect-ratio';

function AspectRatioDemo() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  );
}

const code = `import { AspectRatio } from '@/components/ui/aspect-ratio';

export function AspectRatioDemo() {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd"
          alt="Photo by Drew Beamer"
          className="h-full w-full object-cover rounded-md"
        />
      </AspectRatio>
    </div>
  );
}`;

export function AspectRatioPage() {
  return (
    <ComponentShowcase
      title="Aspect Ratio"
      description="Displays content within a desired ratio."
      preview={<AspectRatioDemo />}
      code={code}
      filename="AspectRatioDemo.tsx"
      usage={`Use Aspect Ratio to maintain consistent proportions for media.
• Common ratios: 16/9 (video), 4/3, 1/1 (square)
• Great for responsive images and videos
• Prevents layout shifts during loading`}
      props={[
        { name: 'ratio', type: 'number', default: '1', description: 'The desired aspect ratio' },
        { name: 'children', type: 'ReactNode', description: 'Content to display' },
      ]}
    />
  );
}
