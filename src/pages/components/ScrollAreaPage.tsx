import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

const scrollAreaCode = `import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => \`v1.2.0-beta.\${a.length - i}\`
)

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}`;

const scrollAreaHorizontalCode = `import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function ScrollAreaHorizontal() {
  return (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {artworks.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={artwork.art}
                alt={artwork.artist}
                className="aspect-[3/4] h-fit w-fit object-cover"
              />
            </div>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}`;

const scrollAreaProps = [
  {
    name: 'className',
    type: 'string',
    default: '-',
    description: 'Additional CSS classes.',
  },
  {
    name: 'orientation',
    type: '"vertical" | "horizontal"',
    default: '"vertical"',
    description: 'The scrollbar orientation.',
  },
];

const variants = [
  {
    name: 'Vertical',
    preview: (
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {tags.slice(0, 15).map((tag) => (
            <div key={tag}>
              <div className="text-sm">{tag}</div>
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
    ),
    code: scrollAreaCode,
  },
  {
    name: 'Horizontal',
    preview: (
      <ScrollArea className="w-80 whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="shrink-0 w-20 h-20 rounded-md bg-muted flex items-center justify-center">
              <span className="font-semibold">{i}</span>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    ),
    code: scrollAreaHorizontalCode,
  },
];

export function ScrollAreaPage() {
  return (
    <ComponentShowcase
      title="Scroll Area"
      description="Augments native scroll functionality for custom styling."
      preview={variants[0].preview}
      code={scrollAreaCode}
      filename="scroll-area-demo.tsx"
      usage={`Scroll Area provides styled, cross-browser scrollbars.

• Set a fixed height/width to enable scrolling
• Add ScrollBar for horizontal scrolling
• Works great for lists, menus, and sidebars
• Maintains native scroll behavior and accessibility`}
      props={scrollAreaProps}
      variants={variants}
    />
  );
}
