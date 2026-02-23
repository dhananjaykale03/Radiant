import { useState, useEffect } from 'react';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';
import { Plus, Trash2, Loader2, ListTodo, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const code = `import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  created_at: string;
}

export function TodoCrud() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch todos
  const fetchTodos = async () => {
    const { data, error } = await supabase
      .from('demo_todos')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setTodos(data);
    setLoading(false);
  };

  useEffect(() => { fetchTodos(); }, []);

  // Create
  const addTodo = async () => {
    if (!newTitle.trim()) return;
    const { error } = await supabase
      .from('demo_todos')
      .insert([{ title: newTitle.trim() }]);
    if (!error) {
      setNewTitle('');
      fetchTodos();
      toast.success('Todo added!');
    }
  };

  // Update
  const toggleTodo = async (id: string, completed: boolean) => {
    await supabase
      .from('demo_todos')
      .update({ completed: !completed })
      .eq('id', id);
    fetchTodos();
  };

  // Delete
  const deleteTodo = async (id: string) => {
    await supabase.from('demo_todos').delete().eq('id', id);
    fetchTodos();
    toast.success('Todo deleted');
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <Input
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
          placeholder="Add a todo..."
          onKeyDown={e => e.key === 'Enter' && addTodo()}
        />
        <Button onClick={addTodo}>Add</Button>
      </div>
      {todos.map(todo => (
        <div key={todo.id} className="flex items-center gap-3 py-2">
          <Checkbox
            checked={todo.completed}
            onCheckedChange={() => toggleTodo(todo.id, todo.completed)}
          />
          <span className={todo.completed ? 'line-through text-muted-foreground' : ''}>
            {todo.title}
          </span>
          <Button variant="ghost" size="icon" onClick={() => deleteTodo(todo.id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}`;

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  created_at: string;
}

function TodoPreview() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('demo_todos')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20);
    if (data) setTodos(data);
    setLoading(false);
  };

  useEffect(() => { fetchTodos(); }, []);

  const addTodo = async () => {
    if (!newTitle.trim()) return;
    setAdding(true);
    const { error } = await supabase
      .from('demo_todos')
      .insert([{ title: newTitle.trim() }]);
    setAdding(false);
    if (error) {
      toast.error('Failed to add: ' + error.message);
      return;
    }
    setNewTitle('');
    fetchTodos();
    toast.success('Todo added!');
  };

  const toggleTodo = async (id: string, completed: boolean) => {
    await supabase.from('demo_todos').update({ completed: !completed }).eq('id', id);
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !completed } : t));
  };

  const deleteTodo = async (id: string) => {
    await supabase.from('demo_todos').delete().eq('id', id);
    setTodos(prev => prev.filter(t => t.id !== id));
    toast.success('Todo deleted');
  };

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <ListTodo className="h-5 w-5 text-primary" />
              Todo List (CRUD)
            </CardTitle>
            <CardDescription>Full Create, Read, Update, Delete with real database.</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={fetchTodos}>
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
        {todos.length > 0 && (
          <p className="text-xs text-muted-foreground">{completedCount}/{todos.length} completed</p>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Input
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            placeholder="Add a new todo..."
            onKeyDown={e => e.key === 'Enter' && addTodo()}
            disabled={adding}
          />
          <Button onClick={addTodo} disabled={adding || !newTitle.trim()} size="icon">
            {adding ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-8 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin mx-auto mb-2" />
            Loading...
          </div>
        ) : todos.length === 0 ? (
          <p className="text-center py-8 text-muted-foreground text-sm">No todos yet. Add one above!</p>
        ) : (
          <div className="space-y-1">
            <AnimatePresence>
              {todos.map(todo => (
                <motion.div
                  key={todo.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted/50 group transition-colors"
                >
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(todo.id, todo.completed)}
                  />
                  <span className={`flex-1 text-sm transition-all ${todo.completed ? 'line-through text-muted-foreground' : ''}`}>
                    {todo.title}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-destructive"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function TodoCrudPage() {
  return (
    <ComponentShowcase
      title="Todo CRUD (Backend)"
      description="A complete CRUD (Create, Read, Update, Delete) todo list powered by a real database. All operations persist across sessions."
      preview={<TodoPreview />}
      code={code}
      filename="TodoCrud.tsx"
    />
  );
}
