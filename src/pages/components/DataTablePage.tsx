import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';

type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

const data: Payment[] = [
  { id: 'm5gr84i9', amount: 316, status: 'success', email: 'ken99@yahoo.com' },
  { id: '3u1reuv4', amount: 242, status: 'success', email: 'abe45@gmail.com' },
  { id: 'derv1ws0', amount: 837, status: 'processing', email: 'monserrat44@gmail.com' },
  { id: '5kma53ae', amount: 874, status: 'success', email: 'silas22@gmail.com' },
  { id: 'bhqecj4p', amount: 721, status: 'failed', email: 'carmella@hotmail.com' },
];

function DataTableDemo() {
  const [filter, setFilter] = useState('');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const filteredData = data
    .filter((item) => item.email.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => (sortDir === 'asc' ? a.amount - b.amount : b.amount - a.amount));

  return (
    <div className="w-full max-w-2xl space-y-4">
      <Input
        placeholder="Filter emails..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="max-w-sm"
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Status</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  size="sm"
                  className="-ml-3 h-8"
                  onClick={() => setSortDir(sortDir === 'asc' ? 'desc' : 'asc')}
                >
                  Amount
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="capitalize">{payment.status}</TableCell>
                <TableCell>{payment.email}</TableCell>
                <TableCell>${payment.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <Button variant="outline" size="sm" disabled>
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <Button variant="outline" size="sm" disabled>
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

const code = `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const data = [
  { id: '1', amount: 316, status: 'success', email: 'ken@example.com' },
  { id: '2', amount: 242, status: 'pending', email: 'jane@example.com' },
];

export function DataTableDemo() {
  const [filter, setFilter] = useState('');

  const filteredData = data.filter((item) =>
    item.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <Input
        placeholder="Filter emails..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="max-w-sm"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{payment.status}</TableCell>
              <TableCell>{payment.email}</TableCell>
              <TableCell>\${payment.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}`;

export function DataTablePage() {
  return (
    <ComponentShowcase
      title="Data Table"
      description="Powerful table with sorting, filtering, and pagination."
      preview={<DataTableDemo />}
      code={code}
      filename="DataTableDemo.tsx"
      usage={`Use Data Table for complex data display and manipulation.
• Add filtering with Input component
• Sortable columns with button headers
• Pagination for large datasets`}
      props={[
        { name: 'data', type: 'T[]', description: 'Array of data to display' },
        { name: 'columns', type: 'ColumnDef<T>[]', description: 'Column definitions' },
      ]}
    />
  );
}
