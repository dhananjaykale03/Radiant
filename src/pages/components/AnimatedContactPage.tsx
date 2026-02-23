import { useState } from 'react';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Send, Check, Mail, User, MessageSquare, Phone, MapPin, 
  ArrowRight, Sparkles, Heart, AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const contactCode = `import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function AnimatedContactForm() {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <motion.div
        animate={focused === 'name' ? { scale: 1.02 } : { scale: 1 }}
      >
        <Input
          placeholder="Your name"
          onFocus={() => setFocused('name')}
          onBlur={() => setFocused(null)}
        />
      </motion.div>
      
      <Button type="submit">
        <AnimatePresence mode="wait">
          {submitted ? <Check /> : <Send />}
        </AnimatePresence>
      </Button>
    </motion.form>
  );
}`;

const variants = [
  {
    name: 'Floating Labels',
    preview: (() => {
      const FloatingLabelForm = () => {
        const [formData, setFormData] = useState({ name: '', email: '', message: '' });
        const [focused, setFocused] = useState<string | null>(null);
        const [submitted, setSubmitted] = useState(false);
        
        const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
          }, 3000);
        };
        
        const FloatingInput = ({ 
          name, label, type = 'text', icon: Icon 
        }: { 
          name: string; label: string; type?: string; icon: React.ElementType 
        }) => {
          const value = formData[name as keyof typeof formData];
          const isActive = focused === name || value;
          
          return (
            <motion.div 
              className="relative"
              animate={focused === name ? { scale: 1.01 } : { scale: 1 }}
            >
              <motion.label
                htmlFor={name}
                className={cn(
                  "absolute left-10 text-muted-foreground pointer-events-none transition-all",
                  isActive ? "text-xs top-2 text-primary" : "text-sm top-1/2 -translate-y-1/2"
                )}
                animate={isActive ? { y: 0 } : {}}
              >
                {label}
              </motion.label>
              <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id={name}
                type={type}
                value={value}
                onChange={(e) => setFormData(prev => ({ ...prev, [name]: e.target.value }))}
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused(null)}
                className={cn("pl-10 pt-5 pb-2 h-14", focused === name && "ring-2 ring-primary")}
              />
            </motion.div>
          );
        };
        
        return (
          <div className="w-full max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Check className="h-8 w-8 text-green-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <FloatingInput name="name" label="Your Name" icon={User} />
                  <FloatingInput name="email" label="Email Address" type="email" icon={Mail} />
                  
                  <motion.div 
                    className="relative"
                    animate={focused === 'message' ? { scale: 1.01 } : { scale: 1 }}
                  >
                    <motion.label
                      htmlFor="message"
                      className={cn(
                        "absolute left-10 text-muted-foreground pointer-events-none transition-all",
                        (focused === 'message' || formData.message) 
                          ? "text-xs top-2 text-primary" 
                          : "text-sm top-4"
                      )}
                    >
                      Message
                    </motion.label>
                    <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      className={cn("pl-10 pt-6 min-h-[120px]", focused === 'message' && "ring-2 ring-primary")}
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        );
      };
      return <FloatingLabelForm />;
    })(),
    code: contactCode,
  },
  {
    name: 'Split Layout',
    preview: (() => {
      const SplitForm = () => {
        const [submitted, setSubmitted] = useState(false);
        
        return (
          <div className="w-full max-w-3xl mx-auto grid md:grid-cols-2 gap-8 p-6 rounded-xl border bg-card">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                <p className="text-muted-foreground">
                  We'd love to hear from you. Send us a message.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'hello@example.com' },
                  { icon: Phone, label: '+1 (555) 123-4567' },
                  { icon: MapPin, label: 'San Francisco, CA' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    {item.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="email2">Email</Label>
                <Input id="email2" type="email" placeholder="john@example.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="message2">Message</Label>
                <Textarea id="message2" placeholder="Your message..." className="mt-1 min-h-[100px]" />
              </div>
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
                  >
                    <Check className="h-4 w-4" />
                    Message sent successfully!
                  </motion.div>
                ) : (
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </div>
        );
      };
      return <SplitForm />;
    })(),
    code: `// Split layout contact form`,
  },
  {
    name: 'Minimal Card',
    preview: (() => {
      const MinimalForm = () => {
        const [step, setStep] = useState(0);
        const [formData, setFormData] = useState({ email: '', message: '' });
        
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-sm mx-auto p-6 rounded-2xl border bg-card shadow-lg"
          >
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3"
                    >
                      <Mail className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold">Contact Us</h3>
                    <p className="text-sm text-muted-foreground">Enter your email to start</p>
                  </div>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                  <Button onClick={() => setStep(1)} className="w-full">
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              )}
              
              {step === 1 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="text-center">
                    <h3 className="font-semibold">Your Message</h3>
                    <p className="text-sm text-muted-foreground">What can we help with?</p>
                  </div>
                  <Textarea
                    placeholder="Type your message..."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="min-h-[100px]"
                  />
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setStep(0)} className="flex-1">
                      Back
                    </Button>
                    <Button onClick={() => setStep(2)} className="flex-1">
                      Send
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}
              
              {step === 2 && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.1 }}
                    className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Check className="h-8 w-8 text-green-600" />
                  </motion.div>
                  <h3 className="font-semibold mb-1">Thank You!</h3>
                  <p className="text-sm text-muted-foreground mb-4">We'll respond within 24 hours.</p>
                  <Button variant="outline" onClick={() => { setStep(0); setFormData({ email: '', message: '' }); }}>
                    Send Another
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      };
      return <MinimalForm />;
    })(),
    code: `// Multi-step minimal contact form`,
  },
  {
    name: 'With Validation',
    preview: (() => {
      const ValidationForm = () => {
        const [formData, setFormData] = useState({ name: '', email: '', message: '' });
        const [errors, setErrors] = useState<Record<string, string>>({});
        const [touched, setTouched] = useState<Record<string, boolean>>({});
        
        const validate = (field: string, value: string) => {
          if (field === 'name' && value.length < 2) return 'Name is too short';
          if (field === 'email' && !value.includes('@')) return 'Invalid email address';
          if (field === 'message' && value.length < 10) return 'Message is too short';
          return '';
        };
        
        const handleBlur = (field: string) => {
          setTouched(prev => ({ ...prev, [field]: true }));
          const error = validate(field, formData[field as keyof typeof formData]);
          setErrors(prev => ({ ...prev, [field]: error }));
        };
        
        const handleChange = (field: string, value: string) => {
          setFormData(prev => ({ ...prev, [field]: value }));
          if (touched[field]) {
            const error = validate(field, value);
            setErrors(prev => ({ ...prev, [field]: error }));
          }
        };
        
        const InputWithValidation = ({ name, label, type = 'text' }: { name: string; label: string; type?: string }) => {
          const hasError = touched[name] && errors[name];
          const isValid = touched[name] && !errors[name] && formData[name as keyof typeof formData];
          
          return (
            <motion.div layout className="space-y-1">
              <Label htmlFor={name}>{label}</Label>
              <div className="relative">
                <Input
                  id={name}
                  type={type}
                  value={formData[name as keyof typeof formData]}
                  onChange={(e) => handleChange(name, e.target.value)}
                  onBlur={() => handleBlur(name)}
                  className={cn(
                    "pr-10",
                    hasError && "border-red-500 focus-visible:ring-red-500",
                    isValid && "border-green-500 focus-visible:ring-green-500"
                  )}
                />
                <AnimatePresence>
                  {hasError && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    </motion.div>
                  )}
                  {isValid && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <Check className="h-4 w-4 text-green-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <AnimatePresence>
                {hasError && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-red-500"
                  >
                    {errors[name]}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          );
        };
        
        return (
          <div className="w-full max-w-sm mx-auto p-6 rounded-xl border bg-card">
            <h3 className="text-lg font-semibold mb-4">Contact Form</h3>
            <form className="space-y-4">
              <InputWithValidation name="name" label="Name" />
              <InputWithValidation name="email" label="Email" type="email" />
              
              <div className="space-y-1">
                <Label htmlFor="msgValidation">Message</Label>
                <div className="relative">
                  <Textarea
                    id="msgValidation"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    className={cn(
                      touched.message && errors.message && "border-red-500",
                      touched.message && !errors.message && formData.message && "border-green-500"
                    )}
                  />
                </div>
                <AnimatePresence>
                  {touched.message && errors.message && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-red-500"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              
              <Button type="button" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        );
      };
      return <ValidationForm />;
    })(),
    code: `// Contact form with animated validation`,
  },
];

export function AnimatedContactPage() {
  return (
    <ComponentShowcase
      title="Animated Contact Form"
      description="Beautiful contact forms with floating labels, multi-step flows, validation animations, and success states."
      preview={variants[0].preview}
      code={variants[0].code}
      variants={variants}
      filename="AnimatedContact.tsx"
    />
  );
}
