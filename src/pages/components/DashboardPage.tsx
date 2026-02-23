import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Dashboard } from '@/components/dashboard/Dashboard';

const code = `import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  Activity,
  CreditCard,
  DollarSign,
  Download,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
} from 'lucide-react';

// Sample data for charts
const revenueData = [
  { name: 'Jan', total: 1500, expenses: 900 },
  { name: 'Feb', total: 2300, expenses: 1200 },
  { name: 'Mar', total: 3200, expenses: 1800 },
  { name: 'Apr', total: 2800, expenses: 1500 },
  { name: 'May', total: 4100, expenses: 2100 },
  { name: 'Jun', total: 3900, expenses: 1900 },
  { name: 'Jul', total: 4800, expenses: 2300 },
];

export function Dashboard() {
  return (
    <div className="flex-1 space-y-6 p-6 bg-muted/30 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your business.
          </p>
        </div>
        <Button size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Download Report
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <div className="flex items-center text-xs text-primary">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              +20.1% from last month
            </div>
            <Progress value={75} className="mt-3 h-1" />
          </CardContent>
        </Card>
        ...
      </div>

      {/* Charts & Activity */}
      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={revenueData}>
                <Area type="monotone" dataKey="total" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        ...
      </div>

      {/* Recent Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              ...
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}`;

const usage = `// Import the Dashboard component
import { Dashboard } from '@/components/dashboard/Dashboard';

// Use it in your app
function App() {
  return (
    <div className="min-h-screen bg-background">
      <Dashboard />
    </div>
  );
}

// The dashboard includes:
// - Stats cards with KPIs and progress indicators
// - Revenue chart (area chart with gradient)
// - Bar chart for weekly visitors & orders
// - Pie chart for traffic sources
// - Recent activity feed with icons
// - Transactions table with avatars & status badges
// - Top products ranking
// - Team members with online status
// - Tabbed navigation (Overview, Analytics, Reports, Notifications)`;

export function DashboardPage() {
  return (
    <ComponentShowcase
      title="Dashboard"
      description="A comprehensive dashboard layout with stats cards, charts, tables, and activity feeds following shadcn/ui patterns."
      preview={<Dashboard />}
      code={code}
      usage={usage}
    />
  );
}
