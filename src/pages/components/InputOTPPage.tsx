import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}

const code = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

export function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`;

export function InputOTPPage() {
  return (
    <ComponentShowcase
      title="Input OTP"
      description="Accessible one-time password component with copy paste functionality."
      preview={<InputOTPDemo />}
      code={code}
      filename="InputOTPDemo.tsx"
      usage={`Use Input OTP for verification codes.
• Auto-focuses next slot on input
• Supports paste from clipboard
• Customizable slot count and styling`}
      props={[
        { name: 'maxLength', type: 'number', description: 'Number of OTP digits' },
        { name: 'value', type: 'string', description: 'Controlled value' },
        { name: 'onChange', type: '(value: string) => void', description: 'Value change handler' },
      ]}
    />
  );
}
