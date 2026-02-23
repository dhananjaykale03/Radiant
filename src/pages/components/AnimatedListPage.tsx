import { useState } from 'react';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Plus, X, GripVertical, Check, Trash2, Star, 
  Mail, User, Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';

const listCode = `import { useState } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';

export function AnimatedList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  
  return (
    <Reorder.Group values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item
          key={item}
          value={item}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          whileDrag={{ scale: 1.02, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}
        >
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}`;

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

const variants = [
  {
    name: 'Staggered Entry',
    preview: (() => {
      const StaggeredList = () => {
        const [items, setItems] = useState([
          { id: '1', icon: Mail, text: 'Check your inbox', badge: '5 new' },
          { id: '2', icon: User, text: 'Update profile picture' },
          { id: '3', icon: Star, text: 'Review starred items', badge: '12' },
          { id: '4', icon: Bell, text: 'Enable notifications' },
        ]);
        const [key, setKey] = useState(0);
        
        return (
          <div className="w-full max-w-md">
            <Button onClick={() => setKey(k => k + 1)} size="sm" className="mb-4">
              Replay Animation
            </Button>
            
            <motion.div
              key={key}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="space-y-2"
            >
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="flex-1">{item.text}</span>
                  {item.badge && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        );
      };
      return <StaggeredList />;
    })(),
    code: listCode,
  },
  {
    name: 'Draggable Reorder',
    preview: (() => {
      const DraggableList = () => {
        const [items, setItems] = useState([
          { id: '1', text: 'Design system updates' },
          { id: '2', text: 'API documentation' },
          { id: '3', text: 'User testing sessions' },
          { id: '4', text: 'Performance optimization' },
        ]);
        
        return (
          <div className="w-full max-w-md">
            <p className="text-sm text-muted-foreground mb-4">
              Drag items to reorder
            </p>
            
            <Reorder.Group
              axis="y"
              values={items}
              onReorder={setItems}
              className="space-y-2"
            >
              {items.map((item) => (
                <Reorder.Item
                  key={item.id}
                  value={item}
                  className="flex items-center gap-3 p-4 rounded-lg border bg-card cursor-grab active:cursor-grabbing"
                  whileDrag={{
                    scale: 1.02,
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2)',
                    zIndex: 50,
                  }}
                >
                  <GripVertical className="h-5 w-5 text-muted-foreground" />
                  <span className="flex-1">{item.text}</span>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        );
      };
      return <DraggableList />;
    })(),
    code: `// Draggable list with reorder`,
  },
  {
    name: 'Todo List',
    preview: (() => {
      const TodoList = () => {
        const [todos, setTodos] = useState<TodoItem[]>([
          { id: '1', text: 'Complete project proposal', completed: false },
          { id: '2', text: 'Review pull requests', completed: true },
          { id: '3', text: 'Update documentation', completed: false },
        ]);
        const [newTodo, setNewTodo] = useState('');
        
        const addTodo = () => {
          if (!newTodo.trim()) return;
          setTodos([...todos, { id: Date.now().toString(), text: newTodo, completed: false }]);
          setNewTodo('');
        };
        
        const toggleTodo = (id: string) => {
          setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
        };
        
        const deleteTodo = (id: string) => {
          setTodos(todos.filter(t => t.id !== id));
        };
        
        return (
          <div className="w-full max-w-md">
            <div className="flex gap-2 mb-4">
              <Input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task..."
                onKeyDown={(e) => e.key === 'Enter' && addTodo()}
              />
              <Button onClick={addTodo} size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            <AnimatePresence mode="popLayout">
              {todos.map((todo) => (
                <motion.div
                  key={todo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8, x: -100 }}
                  className="flex items-center gap-3 p-4 rounded-lg border bg-card mb-2"
                >
                  <motion.button
                    onClick={() => toggleTodo(todo.id)}
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                      "h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors",
                      todo.completed ? "bg-primary border-primary" : "border-muted-foreground"
                    )}
                  >
                    {todo.completed && <Check className="h-4 w-4 text-primary-foreground" />}
                  </motion.button>
                  <span className={cn("flex-1", todo.completed && "line-through text-muted-foreground")}>
                    {todo.text}
                  </span>
                  <motion.button
                    onClick={() => deleteTodo(todo.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {todos.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-muted-foreground py-8"
              >
                No tasks yet. Add one above!
              </motion.p>
            )}
          </div>
        );
      };
      return <TodoList />;
    })(),
    code: `// Interactive todo list with animations`,
  },
  {
    name: 'Swipe to Delete',
    preview: (() => {
      const SwipeList = () => {
        const [items, setItems] = useState([
          { id: '1', title: 'Meeting with team', time: '10:00 AM' },
          { id: '2', title: 'Code review', time: '2:00 PM' },
          { id: '3', title: 'Design sync', time: '4:00 PM' },
        ]);
        
        const deleteItem = (id: string) => {
          setItems(items.filter(i => i.id !== id));
        };
        
        return (
          <div className="w-full max-w-md">
            <p className="text-sm text-muted-foreground mb-4">
              Swipe items left to delete
            </p>
            
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-2 overflow-hidden"
                >
                  <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -80) {
                        deleteItem(item.id);
                      }
                    }}
                    className="relative"
                  >
                    <div className="absolute inset-y-0 right-0 w-20 bg-destructive flex items-center justify-center rounded-r-lg">
                      <Trash2 className="h-5 w-5 text-destructive-foreground" />
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg border bg-card relative z-10">
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.time}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {items.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <p className="text-muted-foreground mb-4">All items deleted!</p>
                <Button 
                  onClick={() => setItems([
                    { id: '1', title: 'Meeting with team', time: '10:00 AM' },
                    { id: '2', title: 'Code review', time: '2:00 PM' },
                    { id: '3', title: 'Design sync', time: '4:00 PM' },
                  ])}
                  variant="outline"
                >
                  Reset List
                </Button>
              </motion.div>
            )}
          </div>
        );
      };
      return <SwipeList />;
    })(),
    code: `// Swipe to delete list items`,
  },
  {
    name: 'Expandable Items',
    preview: (() => {
      const ExpandableList = () => {
        const [expandedId, setExpandedId] = useState<string | null>(null);
        const items = [
          { id: '1', title: 'What is your refund policy?', content: 'We offer a 30-day money-back guarantee on all purchases. If you are not satisfied, contact our support team.' },
          { id: '2', title: 'How do I upgrade my plan?', content: 'You can upgrade your plan at any time from your account settings. The new pricing will be prorated.' },
          { id: '3', title: 'Do you offer enterprise plans?', content: 'Yes! Contact our sales team for custom enterprise solutions tailored to your organization.' },
        ];
        
        return (
          <div className="w-full max-w-md space-y-2">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="rounded-lg border bg-card overflow-hidden cursor-pointer"
              >
                <motion.div layout="position" className="p-4 flex items-center justify-between">
                  <span className="font-medium">{item.title}</span>
                  <motion.div
                    animate={{ rotate: expandedId === item.id ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus className="h-5 w-5 text-muted-foreground" />
                  </motion.div>
                </motion.div>
                
                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-4 pb-4 text-sm text-muted-foreground">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        );
      };
      return <ExpandableList />;
    })(),
    code: `// Expandable list with accordion-like behavior`,
  },
];

export function AnimatedListPage() {
  return (
    <ComponentShowcase
      title="Animated Lists"
      description="Dynamic lists with staggered animations, drag-to-reorder, swipe gestures, and smooth item transitions."
      preview={variants[0].preview}
      code={variants[0].code}
      variants={variants}
      filename="AnimatedList.tsx"
    />
  );
}
