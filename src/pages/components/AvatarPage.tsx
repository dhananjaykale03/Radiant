import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';

const avatarCode = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  )
}`;

const avatarProps = [
  {
    name: 'src',
    type: 'string',
    default: '-',
    description: 'The image source URL.',
  },
  {
    name: 'alt',
    type: 'string',
    default: '-',
    description: 'Alt text for the avatar image.',
  },
  {
    name: 'fallback',
    type: 'string',
    default: '-',
    description: 'Text to show when image fails to load.',
  },
];

function AvatarPreview() {
  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function AvatarPage() {
  return (
    <ComponentShowcase
      title="Avatar"
      description="An image element with a fallback for representing the user."
      preview={<AvatarPreview />}
      code={avatarCode}
      filename="avatar-demo.tsx"
      usage={`Avatars represent users or entities with images or initials.

• Always provide a fallback (initials) for when images fail
• Use consistent sizes across your app
• Consider adding a status indicator for online/offline states`}
      props={avatarProps}
    />
  );
}
