import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonialCode = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechCorp",
    avatar: "/avatars/sarah.jpg",
    content: "This product has transformed how we work. Highly recommended!",
    rating: 5
  },
]

export function Testimonials() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">What our customers say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name}>
            <CardContent className="pt-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}`;

const testimonialProps = [
  { name: 'testimonials', type: 'Testimonial[]', default: '[]', description: 'Array of testimonial objects' },
  { name: 'columns', type: 'number', default: '3', description: 'Number of columns in the grid' },
  { name: 'showRating', type: 'boolean', default: 'true', description: 'Show star ratings' },
];

const sampleTestimonials = [
  { name: 'Sarah Johnson', role: 'CEO at TechCorp', initials: 'SJ', content: 'This product has completely transformed how our team works. The attention to detail is incredible.', rating: 5 },
  { name: 'Michael Chen', role: 'Lead Developer', initials: 'MC', content: 'Best developer experience I\'ve had. The documentation is top-notch and the components are beautifully designed.', rating: 5 },
  { name: 'Emily Davis', role: 'Product Designer', initials: 'ED', content: 'Finally, a component library that actually looks good out of the box. Saved us weeks of work.', rating: 5 },
];

const variants = [
  {
    name: 'Card Grid',
    preview: (
      <div className="grid md:grid-cols-3 gap-4 w-full max-w-4xl">
        {sampleTestimonials.map((t) => (
          <Card key={t.name}>
            <CardContent className="pt-6">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{t.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    ),
    code: testimonialCode,
  },
  {
    name: 'Quote Style',
    preview: (
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">
        {sampleTestimonials.slice(0, 2).map((t) => (
          <div key={t.name} className="relative p-6 rounded-xl border bg-card">
            <Quote className="absolute top-4 right-4 h-8 w-8 text-muted-foreground/20" />
            <p className="text-lg mb-6">"{t.content}"</p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{t.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    code: `import { Quote } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function QuoteTestimonials() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {testimonials.map((t) => (
        <div key={t.name} className="relative p-6 rounded-xl border bg-card">
          <Quote className="absolute top-4 right-4 h-8 w-8 text-muted-foreground/20" />
          <p className="text-lg mb-6">"{t.content}"</p>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>{t.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}`,
  },
  {
    name: 'Featured',
    preview: (
      <div className="w-full max-w-2xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <blockquote className="text-xl font-medium mb-6">
          "This is hands down the best component library I've ever used. The quality and attention to detail is unmatched."
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p className="font-semibold">Sarah Johnson</p>
            <p className="text-sm text-muted-foreground">CEO at TechCorp</p>
          </div>
        </div>
      </div>
    ),
    code: `export function FeaturedTestimonial() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <blockquote className="text-xl font-medium mb-6">
        "This is hands down the best component library I've ever used."
      </blockquote>
      <div className="flex items-center justify-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarFallback>SJ</AvatarFallback>
        </Avatar>
        <div className="text-left">
          <p className="font-semibold">Sarah Johnson</p>
          <p className="text-sm text-muted-foreground">CEO at TechCorp</p>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: 'Twitter Style',
    preview: (
      <div className="grid md:grid-cols-2 gap-4 w-full max-w-3xl">
        {sampleTestimonials.slice(0, 2).map((t) => (
          <Card key={t.name} className="hover:border-blue-500/50 transition-colors">
            <CardContent className="pt-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">@{t.name.toLowerCase().replace(' ', '')}</p>
                  </div>
                </div>
                <Twitter className="h-4 w-4 text-blue-500" />
              </div>
              <p className="text-sm">{t.content}</p>
              <p className="text-xs text-muted-foreground mt-3">2:30 PM · Jan 15, 2024</p>
            </CardContent>
          </Card>
        ))}
      </div>
    ),
    code: `import { Twitter } from "lucide-react"

export function TwitterTestimonials() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {testimonials.map((t) => (
        <Card key={t.name} className="hover:border-blue-500/50">
          <CardContent className="pt-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{t.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">@username</p>
                </div>
              </div>
              <Twitter className="h-4 w-4 text-blue-500" />
            </div>
            <p className="text-sm">{t.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}`,
  },
  {
    name: 'Carousel',
    preview: (
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative overflow-hidden rounded-xl border p-8 bg-card">
          <div className="text-center">
            <Avatar className="h-16 w-16 mx-auto mb-4">
              <AvatarFallback className="text-lg">SJ</AvatarFallback>
            </Avatar>
            <blockquote className="text-lg mb-4">
              "This product has completely transformed how our team works. The attention to detail is incredible."
            </blockquote>
            <p className="font-semibold">Sarah Johnson</p>
            <p className="text-sm text-muted-foreground">CEO at TechCorp</p>
          </div>
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <Button size="icon" variant="ghost"><ChevronLeft className="h-4 w-4" /></Button>
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <Button size="icon" variant="ghost"><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <button key={i} className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-primary' : 'bg-muted'}`} />
          ))}
        </div>
      </div>
    ),
    code: `import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-xl border p-8 bg-card text-center">
        <Avatar className="h-16 w-16 mx-auto mb-4">
          <AvatarFallback>{testimonials[current].initials}</AvatarFallback>
        </Avatar>
        <blockquote className="text-lg mb-4">{testimonials[current].content}</blockquote>
        <p className="font-semibold">{testimonials[current].name}</p>
        <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
      </div>
      <Button variant="ghost" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2" onClick={() => setCurrent(c => c - 1)}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2" onClick={() => setCurrent(c => c + 1)}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}`,
  },
  {
    name: 'Minimal',
    preview: (
      <div className="w-full max-w-lg mx-auto text-center">
        <p className="text-xl font-medium italic text-muted-foreground mb-6">
          "Simple, elegant, and incredibly powerful. This has become an essential part of our development workflow."
        </p>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm font-medium">Michael Chen, Lead Developer</span>
          <div className="h-px flex-1 bg-border" />
        </div>
      </div>
    ),
    code: `export function MinimalTestimonial() {
  return (
    <div className="max-w-lg mx-auto text-center">
      <p className="text-xl font-medium italic text-muted-foreground mb-6">
        "Simple, elegant, and incredibly powerful."
      </p>
      <div className="flex items-center justify-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-sm font-medium">Michael Chen, Lead Developer</span>
        <div className="h-px flex-1 bg-border" />
      </div>
    </div>
  )
}`,
  },
  {
    name: 'With Logo',
    preview: (
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">
        {sampleTestimonials.slice(0, 2).map((t) => (
          <Card key={t.name} className="bg-muted/30">
            <CardContent className="pt-6">
              <div className="h-8 w-24 bg-muted rounded mb-4" />
              <p className="text-sm text-muted-foreground mb-4">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">{t.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    ),
    code: `export function LogoTestimonials() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {testimonials.map((t) => (
        <Card key={t.name} className="bg-muted/30">
          <CardContent className="pt-6">
            <img src={t.companyLogo} alt="" className="h-8 w-24 object-contain mb-4" />
            <p className="text-sm text-muted-foreground mb-4">"{t.content}"</p>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{t.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}`,
  },
  {
    name: 'Gradient',
    preview: (
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border">
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl font-medium mb-6">
              "The best investment we've made for our product development. Worth every penny."
            </blockquote>
            <Avatar className="h-14 w-14 mx-auto mb-3">
              <AvatarFallback>ED</AvatarFallback>
            </Avatar>
            <p className="font-semibold">Emily Davis</p>
            <p className="text-sm text-muted-foreground">Product Designer at Startup</p>
          </div>
        </div>
      </div>
    ),
    code: `export function GradientTestimonial() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border">
        <div className="text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <blockquote className="text-xl font-medium mb-6">
            "The best investment we've made for our product development."
          </blockquote>
          <Avatar className="h-14 w-14 mx-auto mb-3">
            <AvatarFallback>ED</AvatarFallback>
          </Avatar>
          <p className="font-semibold">Emily Davis</p>
          <p className="text-sm text-muted-foreground">Product Designer</p>
        </div>
      </div>
    </div>
  )
}`,
  },
  {
    name: 'Side by Side',
    preview: (
      <div className="w-full max-w-3xl grid md:grid-cols-2 gap-8 items-center">
        <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
          <Avatar className="h-24 w-24">
            <AvatarFallback className="text-2xl">SJ</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <blockquote className="text-lg mb-6">
            "This product has completely transformed how our team works. The attention to detail is incredible and the support team is amazing."
          </blockquote>
          <p className="font-semibold">Sarah Johnson</p>
          <p className="text-sm text-muted-foreground">CEO at TechCorp</p>
        </div>
      </div>
    ),
    code: `export function SideBySideTestimonial() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
        <Avatar className="h-24 w-24">
          <AvatarFallback className="text-2xl">SJ</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <blockquote className="text-lg mb-6">"..."</blockquote>
        <p className="font-semibold">Sarah Johnson</p>
        <p className="text-sm text-muted-foreground">CEO at TechCorp</p>
      </div>
    </div>
  )
}`,
  },
  {
    name: 'Masonry',
    preview: (
      <div className="columns-2 gap-4 w-full max-w-3xl">
        {[...sampleTestimonials, { ...sampleTestimonials[0], name: 'Alex Turner', content: 'Quick setup, great docs.' }].map((t, i) => (
          <Card key={i} className="mb-4 break-inside-avoid">
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">"{t.content}"</p>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">{t.initials || 'AT'}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    ),
    code: `export function MasonryTestimonials() {
  return (
    <div className="columns-2 md:columns-3 gap-4">
      {testimonials.map((t, i) => (
        <Card key={i} className="mb-4 break-inside-avoid">
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground mb-4">"{t.content}"</p>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{t.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}`,
  },
  {
    name: 'Video',
    preview: (
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative aspect-video rounded-xl bg-muted border overflow-hidden group cursor-pointer mb-4">
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-foreground border-b-8 border-b-transparent ml-1" />
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="font-semibold">Sarah Johnson</p>
          <p className="text-sm text-muted-foreground">CEO at TechCorp</p>
        </div>
      </div>
    ),
    code: `export function VideoTestimonial() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer mb-4">
        <video poster="/testimonial-poster.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="h-6 w-6 ml-1" />
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="font-semibold">Sarah Johnson</p>
        <p className="text-sm text-muted-foreground">CEO at TechCorp</p>
      </div>
    </div>
  )
}`,
  },
];

export function TestimonialsPage() {
  return (
    <ComponentShowcase
      title="Testimonials"
      description="Customer testimonial sections with various layouts including cards, quotes, and carousels."
      preview={variants[0].preview}
      code={testimonialCode}
      filename="testimonials.tsx"
      usage={`Testimonials build trust and social proof.

• Include customer name, role, and company
• Add star ratings for credibility
• Use real photos when possible
• Feature compelling quotes
• Consider carousel for multiple testimonials`}
      props={testimonialProps}
      variants={variants}
    />
  );
}
