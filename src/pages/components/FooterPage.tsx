import { useState } from 'react';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Github, Twitter, Linkedin, Instagram, Youtube, Facebook, Mail, 
  MapPin, Phone, ArrowRight, Heart, Sparkles, Globe, Send, 
  Zap, Shield, Star, ChevronRight, ExternalLink, Headphones,
  MessageCircle, Clock, Award, Rocket, ArrowUpRight, CheckCircle2
} from 'lucide-react';

const basicFooterCode = `export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Features</a></li>
              <li><a href="#" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About</a></li>
              <li><a href="#" className="hover:text-foreground">Blog</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}`;

const footerProps = [
  { name: 'logo', type: 'ReactNode', default: '-', description: 'Company logo element' },
  { name: 'links', type: 'FooterLink[]', default: '-', description: 'Navigation links grouped by category' },
  { name: 'social', type: 'SocialLink[]', default: '-', description: 'Social media links' },
  { name: 'newsletter', type: 'boolean', default: 'false', description: 'Show newsletter signup' },
];

const socialLinks = [
  { icon: Twitter, href: '#' },
  { icon: Github, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
];

// Animated link component
function AnimatedLink({ children, href = '#' }: { children: React.ReactNode; href?: string }) {
  return (
    <motion.a
      href={href}
      className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
      whileHover={{ x: 4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
      <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
}

// Animated social icon
function AnimatedSocialIcon({ icon: Icon, href = '#' }: { icon: React.ElementType; href?: string }) {
  return (
    <motion.a
      href={href}
      className="h-10 w-10 rounded-xl border border-border/50 bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-colors"
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Icon className="h-4 w-4" />
    </motion.a>
  );
}

// Newsletter with state
function NewsletterInput() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (subscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 text-sm text-green-500"
      >
        <CheckCircle2 className="h-4 w-4" />
        Thanks for subscribing!
      </motion.div>
    );
  }

  return (
    <div className="flex gap-2">
      <Input
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="max-w-xs bg-muted/50 border-border/50"
      />
      <Button onClick={() => setSubscribed(true)} size="sm">
        <Send className="h-4 w-4" />
      </Button>
    </div>
  );
}

const variants = [
  {
    name: 'Premium Mega',
    preview: (
      <footer className="w-full relative overflow-hidden">
        {/* Animated gradient top border */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="relative py-16 px-6">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />
          
          <div className="relative">
            {/* Top section - Brand + Newsletter */}
            <div className="flex flex-col lg:flex-row justify-between gap-10 mb-14">
              <div className="max-w-sm">
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/20">
                    <Zap className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-xl tracking-tight">Acme</span>
                </motion.div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Building the future of web development with beautiful, accessible components that ship fast.
                </p>
                <div className="flex gap-2">
                  {[Twitter, Github, Linkedin, Instagram, Youtube].map((Icon, i) => (
                    <AnimatedSocialIcon key={i} icon={Icon} />
                  ))}
                </div>
              </div>
              
              <div className="max-w-md">
                <h3 className="font-semibold mb-2">Stay ahead of the curve</h3>
                <p className="text-sm text-muted-foreground mb-4">Get weekly insights, new components, and exclusive content.</p>
                <NewsletterInput />
                <p className="text-xs text-muted-foreground mt-2">No spam. Unsubscribe anytime.</p>
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
              {[
                {
                  title: 'Product',
                  links: [
                    { name: 'Features', badge: null },
                    { name: 'Components', badge: '200+' },
                    { name: 'Templates', badge: 'New' },
                    { name: 'Pricing', badge: null },
                    { name: 'Changelog', badge: null },
                  ],
                },
                {
                  title: 'Resources',
                  links: [
                    { name: 'Documentation', badge: null },
                    { name: 'API Reference', badge: null },
                    { name: 'Guides & Tutorials', badge: null },
                    { name: 'Blog', badge: null },
                    { name: 'Community', badge: null },
                  ],
                },
                {
                  title: 'Company',
                  links: [
                    { name: 'About Us', badge: null },
                    { name: 'Careers', badge: 'Hiring' },
                    { name: 'Press Kit', badge: null },
                    { name: 'Partners', badge: null },
                    { name: 'Contact', badge: null },
                  ],
                },
                {
                  title: 'Support',
                  links: [
                    { name: 'Help Center', badge: null },
                    { name: 'Status Page', badge: null },
                    { name: 'Bug Reports', badge: null },
                    { name: 'Feature Requests', badge: null },
                  ],
                },
              ].map((section) => (
                <div key={section.title}>
                  <h4 className="font-semibold text-sm mb-4">{section.title}</h4>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <AnimatedLink>
                          <span className="text-sm">{link.name}</span>
                          {link.badge && (
                            <span className="ml-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                              {link.badge}
                            </span>
                          )}
                        </AnimatedLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 py-6 border-y border-border/50">
              {[
                { icon: Shield, text: 'SOC 2 Certified' },
                { icon: Award, text: 'Best in Class' },
                { icon: Star, text: '4.9/5 Rating' },
                { icon: Headphones, text: '24/7 Support' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary/70" />
                  {text}
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                © 2024 Acme Inc. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-foreground transition-colors">Cookie Preferences</a>
                <a href="#" className="hover:text-foreground transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    ),
    code: `import { motion } from 'framer-motion';
import { Zap, Shield, Award, Star, Headphones, Send, ChevronRight } from 'lucide-react';

function AnimatedLink({ children, href = '#' }) {
  return (
    <motion.a href={href} className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 group"
      whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
      {children}
      <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
}

export function PremiumMegaFooter() {
  return (
    <footer className="w-full relative overflow-hidden">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="py-16 px-6">
        {/* Brand + Newsletter + Link Columns + Trust Badges + Bottom Bar */}
      </div>
    </footer>
  );
}`,
  },
  {
    name: 'Glassmorphism',
    preview: (
      <footer className="w-full relative py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative">
          {/* Glass card */}
          <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Rocket className="h-5 w-5 text-primary" />
                  <span className="font-bold text-lg">Launch with confidence</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Join 50,000+ teams already shipping faster with our platform.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <Button variant="outline" className="border-border/50">
                  View Demo
                </Button>
                <Button className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <span className="font-semibold">Studio</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                Design, build, and ship production-ready apps 10x faster.
              </p>
              <div className="flex gap-2">
                {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                  <AnimatedSocialIcon key={i} icon={Icon} />
                ))}
              </div>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'API'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'GDPR'] },
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-medium text-sm mb-3">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Separator className="opacity-50" />
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <span>© 2024 Studio Inc. Made with <Heart className="inline h-3 w-3 text-red-500 mx-0.5" /> worldwide</span>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              All systems operational
            </div>
          </div>
        </div>
      </footer>
    ),
    code: `import { motion } from 'framer-motion';
import { Rocket, Sparkles, Heart, ArrowRight } from 'lucide-react';

export function GlassmorphismFooter() {
  return (
    <footer className="w-full relative py-16 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="relative">
        {/* CTA Glass Card */}
        <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 mb-8">
          ...
        </div>
        {/* Links + Bottom bar */}
      </div>
    </footer>
  );
}`,
  },
  {
    name: 'Animated Reveal',
    preview: (
      <footer className="w-full border-t py-14 px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {[
            { title: 'Product', links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
            { title: 'Developers', links: ['Docs', 'API Reference', 'SDKs', 'Open Source'] },
            { title: 'Resources', links: ['Blog', 'Guides', 'Community', 'Templates'] },
            { title: 'Company', links: ['About', 'Careers', 'Contact', 'Brand'] },
          ].map((section, sectionIdx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIdx * 0.1 }}
            >
              <h4 className="font-semibold text-sm mb-4 text-primary/80">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link, i) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sectionIdx * 0.1 + i * 0.05 }}
                  >
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                      {link}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-50 group-hover:translate-y-0 transition-all" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <Separator />
        </motion.div>
        <motion.div
          className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-sm text-muted-foreground">© 2024 Company. All rights reserved.</span>
          <div className="flex gap-3">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <AnimatedSocialIcon key={i} icon={Icon} />
            ))}
          </div>
        </motion.div>
      </footer>
    ),
    code: `import { motion } from 'framer-motion';

export function AnimatedRevealFooter() {
  return (
    <footer className="w-full border-t py-14 px-6">
      {sections.map((section, idx) => (
        <motion.div key={section.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}>
          <h4>{section.title}</h4>
          {section.links.map((link, i) => (
            <motion.li key={link}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + i * 0.05 }}>
              <a href="#">{link}</a>
            </motion.li>
          ))}
        </motion.div>
      ))}
    </footer>
  );
}`,
  },
  {
    name: 'Dark Premium',
    preview: (
      <footer className="w-full bg-foreground/[0.03] py-14 px-6 rounded-t-3xl border-t">
        <div className="max-w-4xl mx-auto">
          {/* Top brand */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center">
                  <Star className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-lg">Stellar</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Premium tools for premium teams. Ship pixel-perfect products every time.
              </p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <Badge variant="secondary" className="gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                v3.2.1 Latest
              </Badge>
              <div className="flex gap-2">
                {[Twitter, Github, Linkedin, Youtube].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="h-9 w-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Link rows */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { title: 'Product', links: ['Components', 'Templates', 'Figma Kit', 'CLI'] },
              { title: 'Resources', links: ['Documentation', 'Tutorials', 'Examples', 'Showcase'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'License', 'DPA'] },
            ].map((section) => (
              <div key={section.title}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-3">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>© 2024 Stellar. Crafted with precision.</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> Last updated: Jan 2024
            </span>
          </div>
        </div>
      </footer>
    ),
    code: `import { motion } from 'framer-motion';
import { Star, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function DarkPremiumFooter() {
  return (
    <footer className="w-full bg-foreground/[0.03] py-14 px-6 rounded-t-3xl border-t">
      <div className="max-w-4xl mx-auto">
        {/* Brand with version badge + social icons */}
        {/* 4-column link grid with uppercase section titles */}
        {/* Gradient separator + timestamp */}
      </div>
    </footer>
  );
}`,
  },
  {
    name: 'Split CTA',
    preview: (
      <footer className="w-full">
        <div className="bg-primary text-primary-foreground py-14 px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to build something amazing?</h3>
              <p className="opacity-80">Free forever for individuals. No credit card required.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" size="lg">Learn More</Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-background py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { title: 'Product', links: ['Features', 'Pricing', 'Updates'] },
                { title: 'Company', links: ['About', 'Blog', 'Careers'] },
                { title: 'Resources', links: ['Docs', 'Community', 'Support'] },
                { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies'] },
              ].map((section) => (
                <div key={section.title}>
                  <h4 className="font-medium text-sm mb-3">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Separator className="mb-6" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <span>© 2024 Company Inc.</span>
              <div className="flex gap-3">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    ),
    code: `export function SplitCTAFooter() {
  return (
    <footer>
      <div className="bg-primary text-primary-foreground py-14 px-6">
        {/* CTA section with heading + buttons */}
      </div>
      <div className="bg-background py-8 px-6">
        {/* 4-col links + bottom bar */}
      </div>
    </footer>
  );
}`,
  },
  {
    name: 'Multi-Column',
    preview: (
      <footer className="w-full border-t bg-background py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Docs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Partners</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <Separator className="my-8 mx-4" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
          <p className="text-sm text-muted-foreground">© 2024 Company Inc. All rights reserved.</p>
          <div className="flex gap-4">
            {socialLinks.map((link, i) => (
              <a key={i} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    ),
    code: `// Multi-column footer with categories`,
  },
  {
    name: 'Newsletter Card',
    preview: (
      <footer className="w-full bg-muted/30 py-12 px-4">
        <div className="max-w-md mx-auto text-center mb-8">
          <motion.div 
            className="rounded-2xl border bg-background p-8 shadow-sm"
            whileHover={{ y: -2, boxShadow: '0 8px 30px -10px hsl(var(--primary) / 0.15)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Send className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Stay in the loop</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Join 10,000+ developers getting weekly updates.
            </p>
            <NewsletterInput />
          </motion.div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © 2024 Company. All rights reserved.
        </div>
      </footer>
    ),
    code: `import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function NewsletterCardFooter() {
  return (
    <footer className="w-full bg-muted/30 py-12 px-4">
      <motion.div className="rounded-2xl border bg-background p-8 shadow-sm"
        whileHover={{ y: -2, boxShadow: '...' }}>
        <Send className="h-5 w-5 text-primary" />
        <h3>Stay in the loop</h3>
        <p>Join 10,000+ developers getting weekly updates.</p>
        <Input placeholder="you@example.com" />
        <Button>Join</Button>
      </motion.div>
    </footer>
  );
}`,
  },
  {
    name: 'Minimal',
    preview: (
      <footer className="w-full py-6 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2024 Company</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    ),
    code: `export function MinimalFooter() {
  return (
    <footer className="w-full py-6 px-4">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>© 2024 Company</span>
        <div className="flex gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}`,
  },
  {
    name: 'App Status',
    preview: (
      <footer className="w-full border-t bg-muted/30 py-4 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Status:</span>
            <span className="flex items-center gap-1.5 text-sm">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              All systems operational
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Docs</a>
            <a href="#" className="hover:text-foreground transition-colors">API</a>
            <a href="#" className="hover:text-foreground transition-colors">Status</a>
            <a href="#" className="hover:text-foreground transition-colors">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    ),
    code: `export function AppStatusFooter() {
  return (
    <footer className="w-full border-t bg-muted/30 py-4 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          All systems operational
        </div>
        <div className="flex gap-4 text-sm">
          <a href="#">Docs</a>
          <a href="#">API</a>
        </div>
      </div>
    </footer>
  );
}`,
  },
  {
    name: 'Social Grid',
    preview: (
      <footer className="w-full border-t bg-background py-12 px-4">
        <div className="text-center mb-8">
          <h3 className="font-semibold mb-2">Connect with us</h3>
          <p className="text-sm text-muted-foreground mb-6">Follow us on your favorite platform</p>
          <div className="flex justify-center gap-3">
            {[Twitter, Github, Linkedin, Youtube, Instagram, Facebook].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                className="h-12 w-12 rounded-xl border bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          © 2024 Company. Made with <Heart className="inline h-3 w-3 text-red-500" /> love.
        </div>
      </footer>
    ),
    code: `import { motion } from 'framer-motion';

export function SocialGridFooter() {
  return (
    <footer className="w-full border-t py-12 px-4">
      <div className="flex justify-center gap-3">
        {icons.map((Icon, i) => (
          <motion.a key={i} href="#"
            className="h-12 w-12 rounded-xl border bg-muted/50 flex items-center justify-center"
            whileHover={{ y: -4, scale: 1.08 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}>
            <Icon className="h-5 w-5" />
          </motion.a>
        ))}
      </div>
    </footer>
  );
}`,
  },
];

export function FooterPage() {
  return (
    <ComponentShowcase
      title="Footer"
      description="Premium website footer components with animations, glassmorphism, newsletter signups, and responsive layouts."
      preview={variants[0].preview}
      code={basicFooterCode}
      filename="footer.tsx"
      usage={`Footers provide navigation and information at the bottom of pages.

• Premium Mega — Full-featured with brand, newsletter, trust badges
• Glassmorphism — Modern glass-effect card CTA with status indicator
• Animated Reveal — Staggered scroll-triggered entrance animations
• Dark Premium — Sophisticated with version badge & timestamp
• Split CTA — Bold primary-color CTA banner above link grid
• Multi-Column — Classic 4-column categorized navigation
• Newsletter Card — Floating card with interactive subscribe form
• Minimal — Simple copyright + legal links
• App Status — Status indicator with API/docs links
• Social Grid — Animated icon grid with hover effects`}
      props={footerProps}
      variants={variants}
    />
  );
}
