import { Check, Zap, Shield, Globe, Code2, Palette, Layers, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';

const pricingCode = `import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for side projects",
    features: ["5 components", "Basic support", "Community access"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For professional developers",
    features: ["Unlimited components", "Priority support", "Premium templates", "Custom themes"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large teams",
    features: ["Everything in Pro", "Dedicated support", "Custom development", "SLA guarantee"],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
        <p className="text-muted-foreground mt-2">Choose the plan that works for you</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.popular ? "border-primary shadow-lg" : ""}>
            <CardHeader>
              {plan.popular && <Badge className="w-fit mb-2">Most Popular</Badge>}
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">
                {plan.price}
                {plan.period && <span className="text-lg font-normal text-muted-foreground">{plan.period}</span>}
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}`;

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for side projects',
    features: ['5 components', 'Basic support', 'Community access'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For professional developers',
    features: ['Unlimited components', 'Priority support', 'Premium templates', 'Custom themes'],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large teams',
    features: ['Everything in Pro', 'Dedicated support', 'Custom development', 'SLA guarantee'],
    cta: 'Contact Sales',
    popular: false,
  },
];

function PricingPreview() {
  return (
    <section className="py-8 w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Simple, transparent pricing</h2>
        <p className="text-muted-foreground mt-2">Choose the plan that works for you</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={plan.popular ? 'border-primary shadow-lg scale-105' : ''}
          >
            <CardHeader className="pb-2">
              {plan.popular && (
                <Badge className="w-fit mb-2">Most Popular</Badge>
              )}
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <CardDescription className="text-xs">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-2xl font-bold">
                {plan.price}
                {plan.period && (
                  <span className="text-sm font-normal text-muted-foreground">
                    {plan.period}
                  </span>
                )}
              </div>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" />
                    <span className="text-xs">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-2">
              <Button
                className="w-full"
                size="sm"
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function PricingPage() {
  return (
    <ComponentShowcase
      title="Pricing Section"
      description="A pricing comparison section with multiple tiers."
      preview={<PricingPreview />}
      code={pricingCode}
      filename="pricing-section.tsx"
      usage={`Pricing sections help users compare plans and make decisions.

• Highlight the most popular plan
• Keep feature lists scannable
• Use clear CTAs for each tier
• Show annual/monthly toggle for savings`}
      props={[
        { name: 'plans', type: 'Plan[]', default: '-', description: 'Array of pricing plans.' },
        { name: 'onSelect', type: '(plan: Plan) => void', default: '-', description: 'Callback when a plan is selected.' },
      ]}
    />
  );
}
