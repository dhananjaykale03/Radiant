import { useState } from 'react';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';
import { Send, CheckCircle2, Loader2, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const code = `import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function ContactFormBackend() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase
      .from('contact_submissions')
      .insert([{ name: form.name, email: form.email, message: form.message }]);
    
    setLoading(false);
    
    if (error) {
      toast.error('Failed to submit. Please try again.');
      return;
    }
    
    setSubmitted(true);
    toast.success('Message sent successfully!');
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="text-lg font-semibold">Message Sent!</h3>
        <p className="text-muted-foreground">We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} required rows={4} />
      </div>
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}`;

interface Submission {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

function ContactFormPreview() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from('contact_submissions')
      .insert([{ name: form.name, email: form.email, message: form.message }]);

    setLoading(false);

    if (error) {
      toast.error('Failed to submit: ' + error.message);
      return;
    }

    setSubmitted(true);
    toast.success('Message sent successfully!');
  };

  const loadHistory = async () => {
    const { data } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5);
    if (data) setSubmissions(data);
    setShowHistory(true);
  };

  return (
    <div className="space-y-6">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="h-5 w-5 text-primary" />
            Contact Us
          </CardTitle>
          <CardDescription>This form saves to a real database.</CardDescription>
        </CardHeader>
        <CardContent>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold">Message Sent!</h3>
                <p className="text-sm text-muted-foreground mt-1">Your submission is stored in the database.</p>
                <Button variant="outline" className="mt-4" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}>
                  Send Another
                </Button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" placeholder="John Doe" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea id="contact-message" placeholder="Your message..." value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} required rows={3} />
                </div>
                <Button type="submit" disabled={loading} className="w-full gap-2">
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button variant="ghost" size="sm" onClick={loadHistory} className="gap-2">
          <Clock className="h-4 w-4" />
          View Recent Submissions
        </Button>
      </div>

      {showHistory && submissions.length > 0 && (
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-sm">Recent Submissions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {submissions.map(s => (
              <div key={s.id} className="border rounded-lg p-3 text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-xs text-muted-foreground">{new Date(s.created_at).toLocaleDateString()}</span>
                </div>
                <p className="text-muted-foreground text-xs">{s.email}</p>
                <p className="text-muted-foreground">{s.message}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export function ContactFormBackendPage() {
  return (
    <ComponentShowcase
      title="Contact Form (Backend)"
      description="A fully functional contact form that persists submissions to a real database. Includes form validation, loading states, and submission history."
      preview={<ContactFormPreview />}
      code={code}
      filename="ContactFormBackend.tsx"
    />
  );
}
