import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';

const calendarCode = `import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}`;

const calendarRangeCode = `import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { DateRange } from "react-day-picker"
import { addDays } from "date-fns"

export function CalendarRangeDemo() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })

  return (
    <Calendar
      mode="range"
      selected={date}
      onSelect={setDate}
      numberOfMonths={2}
      className="rounded-md border"
    />
  )
}`;

const calendarProps = [
  {
    name: 'mode',
    type: '"single" | "multiple" | "range"',
    default: '"single"',
    description: 'The selection mode of the calendar.',
  },
  {
    name: 'selected',
    type: 'Date | Date[] | DateRange',
    default: '-',
    description: 'The selected date(s).',
  },
  {
    name: 'onSelect',
    type: '(date: Date | undefined) => void',
    default: '-',
    description: 'Callback when a date is selected.',
  },
  {
    name: 'numberOfMonths',
    type: 'number',
    default: '1',
    description: 'The number of months to display.',
  },
  {
    name: 'disabled',
    type: 'Matcher | Matcher[]',
    default: '-',
    description: 'Dates that should be disabled.',
  },
];

export function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const variants = [
    {
      name: 'Default',
      preview: (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border pointer-events-auto"
        />
      ),
      code: calendarCode,
    },
    {
      name: 'Range Selection',
      preview: (
        <Calendar
          mode="range"
          numberOfMonths={2}
          className="rounded-md border pointer-events-auto"
        />
      ),
      code: calendarRangeCode,
    },
  ];

  return (
    <ComponentShowcase
      title="Calendar"
      description="A date picker component with support for single, multiple, and range selection."
      preview={variants[0].preview}
      code={calendarCode}
      filename="calendar-demo.tsx"
      usage={`Calendar provides an intuitive way to select dates.

• Use mode="single" for picking a single date
• Use mode="range" for selecting date ranges
• Use mode="multiple" for selecting multiple dates
• Combine with Popover for a dropdown date picker`}
      props={calendarProps}
      variants={variants}
    />
  );
}
