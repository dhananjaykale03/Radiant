import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';

const datePickerCode = `import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerDemo() {
  const [date, setDate] = useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="pointer-events-auto"
        />
      </PopoverContent>
    </Popover>
  )
}`;

const datePickerProps = [
  {
    name: 'selected',
    type: 'Date | undefined',
    default: '-',
    description: 'The currently selected date.',
  },
  {
    name: 'onSelect',
    type: '(date: Date | undefined) => void',
    default: '-',
    description: 'Callback when a date is selected.',
  },
  {
    name: 'disabled',
    type: 'Matcher | Matcher[]',
    default: '-',
    description: 'Dates that should be disabled.',
  },
];

export function DatePickerPage() {
  const [date, setDate] = useState<Date>();

  const variants = [
    {
      name: 'Default',
      preview: (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'w-[240px] justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      ),
      code: datePickerCode,
    },
  ];

  return (
    <ComponentShowcase
      title="Date Picker"
      description="A date picker component built with Calendar and Popover."
      preview={variants[0].preview}
      code={datePickerCode}
      filename="date-picker-demo.tsx"
      usage={`Date Picker combines Calendar with a Popover for a dropdown experience.

• Uses Popover for the dropdown container
• Calendar handles date selection
• Format dates with date-fns for localization
• Add pointer-events-auto to Calendar for proper interaction`}
      props={datePickerProps}
      variants={variants}
    />
  );
}
