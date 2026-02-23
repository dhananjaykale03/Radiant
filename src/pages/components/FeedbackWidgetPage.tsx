import { useState, useEffect } from 'react';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';
import { Star, Loader2, MessageCircle, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const code = `import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export function FeedbackWidget() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [stats, setStats] = useState({ avg: 0, total: 0 });

  // Fetch aggregate stats
  const fetchStats = async () => {
    const { data } = await supabase
      .from('demo_feedback')
      .select('rating');
    if (data && data.length > 0) {
      const avg = data.reduce((sum, d) => sum + d.rating, 0) / data.length;
      setStats({ avg: Math.round(avg * 10) / 10, total: data.length });
    }
  };

  useEffect(() => { fetchStats(); }, []);

  const submitFeedback = async () => {
    if (rating === 0) return;
    setLoading(true);
    const { error } = await supabase
      .from('demo_feedback')
      .insert([{ rating, comment: comment || null }]);
    setLoading(false);
    if (error) {
      toast.error('Failed to submit');
      return;
    }
    setSubmitted(true);
    toast.success('Thanks for your feedback!');
    fetchStats();
  };

  return (
    <div>
      {/* Star rating + comment + submit */}
      {/* Stats bar showing average and total */}
    </div>
  );
}`;

interface FeedbackEntry {
  id: string;
  rating: number;
  comment: string | null;
  created_at: string;
}

function FeedbackPreview() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [stats, setStats] = useState({ avg: 0, total: 0, distribution: [0, 0, 0, 0, 0] });
  const [recentFeedback, setRecentFeedback] = useState<FeedbackEntry[]>([]);

  const fetchStats = async () => {
    const { data } = await supabase.from('demo_feedback').select('rating');
    if (data && data.length > 0) {
      const avg = data.reduce((sum, d) => sum + d.rating, 0) / data.length;
      const dist = [0, 0, 0, 0, 0];
      data.forEach(d => dist[d.rating - 1]++);
      setStats({ avg: Math.round(avg * 10) / 10, total: data.length, distribution: dist });
    }
  };

  const fetchRecent = async () => {
    const { data } = await supabase
      .from('demo_feedback')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5);
    if (data) setRecentFeedback(data);
  };

  useEffect(() => { fetchStats(); fetchRecent(); }, []);

  const submitFeedback = async () => {
    if (rating === 0) return;
    setLoading(true);
    const { error } = await supabase
      .from('demo_feedback')
      .insert([{ rating, comment: comment || null }]);
    setLoading(false);
    if (error) {
      toast.error('Failed to submit: ' + error.message);
      return;
    }
    setSubmitted(true);
    toast.success('Thanks for your feedback!');
    fetchStats();
    fetchRecent();
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            Feedback Widget
          </CardTitle>
          <CardDescription>Rate and leave feedback — stored in a real database.</CardDescription>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-6">
              <div className="text-4xl mb-2">🎉</div>
              <h3 className="font-semibold">Thank you!</h3>
              <p className="text-sm text-muted-foreground">Your feedback has been recorded.</p>
              <Button variant="outline" className="mt-4" onClick={() => { setSubmitted(false); setRating(0); setComment(''); }}>
                Submit Another
              </Button>
            </motion.div>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">How would you rate this?</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      onClick={() => setRating(star)}
                      className="p-1 transition-transform hover:scale-110"
                    >
                      <Star
                        className={cn(
                          'h-7 w-7 transition-colors',
                          (hover || rating) >= star
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground/30'
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Any additional comments? (optional)"
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  rows={3}
                />
              </div>
              <Button onClick={submitFeedback} disabled={loading || rating === 0} className="w-full gap-2">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Submit Feedback
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats */}
      {stats.total > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              Feedback Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold">{stats.avg}</div>
              <div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(s => (
                    <Star key={s} className={cn('h-4 w-4', stats.avg >= s ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/20')} />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">{stats.total} total reviews</p>
              </div>
            </div>
            <div className="space-y-1">
              {[5, 4, 3, 2, 1].map(star => {
                const count = stats.distribution[star - 1];
                const pct = stats.total > 0 ? (count / stats.total) * 100 : 0;
                return (
                  <div key={star} className="flex items-center gap-2 text-sm">
                    <span className="w-3 text-muted-foreground">{star}</span>
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        className="h-full bg-yellow-400 rounded-full"
                      />
                    </div>
                    <span className="w-8 text-xs text-muted-foreground text-right">{count}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent feedback */}
      {recentFeedback.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Recent Feedback</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentFeedback.map(fb => (
              <div key={fb.id} className="border rounded-lg p-3 text-sm space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star key={s} className={cn('h-3 w-3', fb.rating >= s ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/20')} />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{new Date(fb.created_at).toLocaleDateString()}</span>
                </div>
                {fb.comment && <p className="text-muted-foreground">{fb.comment}</p>}
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export function FeedbackWidgetPage() {
  return (
    <ComponentShowcase
      title="Feedback Widget (Backend)"
      description="An interactive star-rating feedback widget with real database persistence. Includes aggregate stats, distribution chart, and recent feedback display."
      preview={<FeedbackPreview />}
      code={code}
      filename="FeedbackWidget.tsx"
    />
  );
}
