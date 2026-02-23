import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';

const sliderCode = `import { Slider } from "@/components/ui/slider"

export function SliderDemo() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className="w-[60%]"
    />
  )
}`;

const sliderRangeCode = `import { Slider } from "@/components/ui/slider"

export function SliderRange() {
  return (
    <Slider
      defaultValue={[25, 75]}
      max={100}
      step={1}
      className="w-[60%]"
    />
  )
}`;

const sliderProps = [
  {
    name: 'defaultValue',
    type: 'number[]',
    default: '-',
    description: 'The initial value(s) of the slider.',
  },
  {
    name: 'value',
    type: 'number[]',
    default: '-',
    description: 'The controlled value(s) of the slider.',
  },
  {
    name: 'onValueChange',
    type: '(value: number[]) => void',
    default: '-',
    description: 'Callback when the value changes.',
  },
  {
    name: 'max',
    type: 'number',
    default: '100',
    description: 'The maximum value of the slider.',
  },
  {
    name: 'step',
    type: 'number',
    default: '1',
    description: 'The step increment of the slider.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Whether the slider is disabled.',
  },
];

export function SliderPage() {
  const [value, setValue] = useState([50]);
  const [rangeValue, setRangeValue] = useState([25, 75]);

  const variants = [
    {
      name: 'Default',
      preview: (
        <div className="w-full max-w-sm space-y-4">
          <Slider value={value} onValueChange={setValue} max={100} step={1} />
          <p className="text-sm text-muted-foreground text-center">Value: {value[0]}</p>
        </div>
      ),
      code: sliderCode,
    },
    {
      name: 'Range',
      preview: (
        <div className="w-full max-w-sm space-y-4">
          <Slider value={rangeValue} onValueChange={setRangeValue} max={100} step={1} />
          <p className="text-sm text-muted-foreground text-center">
            Range: {rangeValue[0]} - {rangeValue[1]}
          </p>
        </div>
      ),
      code: sliderRangeCode,
    },
  ];

  return (
    <ComponentShowcase
      title="Slider"
      description="An input for selecting a value from a range."
      preview={variants[0].preview}
      code={sliderCode}
      filename="slider-demo.tsx"
      usage={`Slider provides a way to select numeric values from a range.

• Use defaultValue for an uncontrolled slider
• Use value and onValueChange for controlled behavior
• Pass multiple values for a range slider
• Customize with max, min, and step props`}
      props={sliderProps}
      variants={variants}
    />
  );
}
