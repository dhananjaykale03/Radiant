
-- Contact form submissions (public, no auth required)
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone can insert (public contact form)
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions FOR INSERT
WITH CHECK (true);

-- Anyone can read submissions (for demo purposes)
CREATE POLICY "Anyone can read contact submissions"
ON public.contact_submissions FOR SELECT
USING (true);

-- Todo items (public demo, no auth required)
CREATE TABLE public.demo_todos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.demo_todos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can CRUD demo todos"
ON public.demo_todos FOR ALL
USING (true)
WITH CHECK (true);

-- Feedback widget entries (public)
CREATE TABLE public.demo_feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.demo_feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit feedback"
ON public.demo_feedback FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can read feedback"
ON public.demo_feedback FOR SELECT
USING (true);
