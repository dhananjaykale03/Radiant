import { useState } from 'react';
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
  Package,
  TrendingUp,
  ShoppingCart,
  Eye,
  Calendar,
  Bell,
  Search,
  Filter,
  RefreshCw,
} from 'lucide-react';
import { cn } from '@/lib/utils';

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

const weeklyData = [
  { name: 'Mon', visitors: 1200, orders: 145 },
  { name: 'Tue', visitors: 1900, orders: 210 },
  { name: 'Wed', visitors: 1500, orders: 180 },
  { name: 'Thu', visitors: 2100, orders: 250 },
  { name: 'Fri', visitors: 2400, orders: 290 },
  { name: 'Sat', visitors: 1800, orders: 200 },
  { name: 'Sun', visitors: 1100, orders: 120 },
];

const pieData = [
  { name: 'Direct', value: 400, color: 'hsl(var(--primary))' },
  { name: 'Social', value: 300, color: 'hsl(var(--chart-2))' },
  { name: 'Organic', value: 200, color: 'hsl(var(--chart-3))' },
  { name: 'Referral', value: 100, color: 'hsl(var(--chart-4))' },
];

const recentTransactions = [
  {
    id: '1',
    customer: 'Dilip kumar',
    email: 'dilipkumar@email.com',
    avatar: '',
    amount: '+$1,999.00',
    status: 'completed',
  },
  {
    id: '2',
    customer: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    avatar: '',
    amount: '+39.00',
    status: 'completed',
  },
  {
    id: '3',
    customer: 'shravan dube',
    email: 'dubeshravan@email.com',
    avatar: '',
    amount: '+$299.00',
    status: 'pending',
  },
  {
    id: '4',
    customer: 'kin jong',
    email: 'kim@email.com',
    avatar: '',
    amount: '+$99.00',
    status: 'completed',
  },
  {
    id: '5',
    customer: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    avatar: '',
    amount: '+$39.00',
    status: 'failed',
  },
];

const recentActivity = [
  {
    id: '1',
    title: 'New order placed',
    description: 'Order #12345 was placed by Olivia Martin',
    time: '2 minutes ago',
    icon: ShoppingCart,
  },
  {
    id: '2',
    title: 'Payment received',
    description: 'Payment of $1,999.00 received from Jackson Lee',
    time: '15 minutes ago',
    icon: CreditCard,
  },
  {
    id: '3',
    title: 'New customer registered',
    description: 'dilip kumar created an account',
    time: '1 hour ago',
    icon: Users,
  },
  {
    id: '4',
    title: 'Product review',
    description: 'kim jong left a 5-star review',
    time: '2 hours ago',
    icon: TrendingUp,
  },
];

const teamMembers = [
  { name: 'Sofia Davis', role: 'Product Manager', avatar: '', status: 'online' },
  { name: 'kim jong', role: 'Developer', avatar: '', status: 'online' },
  { name: 'dilip kumar', role: 'Designer', avatar: '', status: 'away' },
  { name: 'Shravan dube', role: 'Marketing', avatar: '', status: 'offline' },
];

const topProducts = [
  { name: 'Product A', sales: 1250, revenue: '$12,500', growth: 12.5 },
  { name: 'Product B', sales: 980, revenue: '$9,800', growth: -3.2 },
  { name: 'Product C', sales: 750, revenue: '$7,500', growth: 8.1 },
  { name: 'Product D', sales: 620, revenue: '$6,200', growth: 15.3 },
];

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex-1 space-y-6 p-4 md:p-6 bg-muted/30 min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your business.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Jan 20, 2024 - Feb 09, 2024</span>
            <span className="sm:hidden">Date Range</span>
          </Button>
          <Button size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download Report</span>
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-md transition-shadow">
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
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <div className="flex items-center text-xs text-primary">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  +180.1% from last month
                </div>
                <Progress value={85} className="mt-3 h-1" />
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <div className="flex items-center text-xs text-primary">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  +19% from last month
                </div>
                <Progress value={62} className="mt-3 h-1" />
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <div className="flex items-center text-xs text-destructive">
                  <ArrowDownRight className="mr-1 h-3 w-3" />
                  -201 since last hour
                </div>
                <Progress value={45} className="mt-3 h-1" />
              </CardContent>
            </Card>
          </div>

          {/* Charts Row */}
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
            {/* Revenue Chart */}
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue and expenses comparison</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="name" 
                      className="text-xs"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      className="text-xs"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                      labelStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="total"
                      name="Revenue"
                      stroke="hsl(var(--primary))"
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                    <Area
                      type="monotone"
                      dataKey="expenses"
                      name="Expenses"
                      stroke="hsl(var(--chart-2))"
                      fillOpacity={1}
                      fill="url(#colorExpenses)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest actions on your account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <activity.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.description}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second Row */}
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
            {/* Visitors Chart */}
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Weekly Visitors</CardTitle>
                <CardDescription>Visitor and order trends this week</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="name" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar 
                      dataKey="visitors" 
                      name="Visitors"
                      fill="hsl(var(--primary))" 
                      radius={[4, 4, 0, 0]} 
                    />
                    <Bar 
                      dataKey="orders" 
                      name="Orders"
                      fill="hsl(var(--chart-3))" 
                      radius={[4, 4, 0, 0]} 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Team Members */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Your team's availability status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers.map((member) => (
                    <div key={member.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={member.avatar} />
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <span className={cn(
                            "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-background",
                            member.status === 'online' && "bg-primary",
                            member.status === 'away' && "bg-chart-4",
                            member.status === 'offline' && "bg-muted-foreground"
                          )} />
                        </div>
                        <div>
                          <p className="text-sm font-medium leading-none">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      <Badge variant={member.status === 'online' ? 'default' : 'secondary'} className="text-xs">
                        {member.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transactions Table */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest payment activities</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={transaction.avatar} />
                            <AvatarFallback>
                              {transaction.customer.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{transaction.customer}</span>
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell text-muted-foreground">
                        {transaction.email}
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            transaction.status === 'completed' 
                              ? 'default' 
                              : transaction.status === 'pending' 
                                ? 'secondary' 
                                : 'destructive'
                          }
                        >
                          {transaction.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-medium text-primary">
                        {transaction.amount}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Download receipt</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Refund
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Bottom Row - Top Products & Traffic Sources */}
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            {/* Top Products */}
            <Card>
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
                <CardDescription>Best selling products this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={product.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{product.name}</p>
                          <p className="text-xs text-muted-foreground">{product.sales} sales</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{product.revenue}</p>
                        <p className={cn(
                          "text-xs flex items-center justify-end",
                          product.growth > 0 ? "text-primary" : "text-destructive"
                        )}>
                          {product.growth > 0 ? (
                            <ArrowUpRight className="mr-1 h-3 w-3" />
                          ) : (
                            <ArrowDownRight className="mr-1 h-3 w-3" />
                          )}
                          {Math.abs(product.growth)}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Traffic Sources */}
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your visitors come from</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          borderColor: 'hsl(var(--border))',
                          borderRadius: '8px',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {pieData.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div 
                        className="h-3 w-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.name}</span>
                      <span className="ml-auto text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Detailed analytics and insights</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <BarChart className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                <p>Analytics content coming soon</p>
                <p className="text-sm">This tab will show detailed analytics</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and download reports</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <Download className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                <p>Reports content coming soon</p>
                <p className="text-sm">This tab will show downloadable reports</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Manage your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <Bell className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                <p>Notifications content coming soon</p>
                <p className="text-sm">This tab will show notification settings</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
