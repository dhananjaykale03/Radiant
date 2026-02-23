import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CodeBlock } from './CodeBlock';
import { cn } from '@/lib/utils';

interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
}

interface ComponentShowcaseProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  usage?: string;
  props?: PropDefinition[];
  filename?: string;
  variants?: {
    name: string;
    preview: React.ReactNode;
    code: string;
  }[];
}

export function ComponentShowcase({
  title,
  description,
  preview,
  code,
  usage,
  props,
  filename,
  variants,
}: ComponentShowcaseProps) {
  const [activeVariant, setActiveVariant] = useState(0);

  const currentPreview = variants ? variants[activeVariant].preview : preview;
  const currentCode = variants ? variants[activeVariant].code : code;

  return (
    <div className="space-y-8 animate-slide-in-from-bottom">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      {/* Variants selector */}
      {variants && variants.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {variants.map((variant, index) => (
            <button
              key={variant.name}
              onClick={() => setActiveVariant(index)}
              className={cn(
                'px-3 py-1.5 text-sm font-medium rounded-lg transition-colors',
                activeVariant === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              )}
            >
              {variant.name}
            </button>
          ))}
        </div>
      )}

      {/* Main content */}
      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          {usage && <TabsTrigger value="usage">Usage</TabsTrigger>}
          {props && <TabsTrigger value="props">Props</TabsTrigger>}
        </TabsList>

        <TabsContent value="preview" className="mt-0">
          <Card className="glass-card p-8">
            <div className="flex items-center justify-center min-h-[200px]">
              {currentPreview}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="mt-0">
          <CodeBlock code={currentCode} filename={filename} />
        </TabsContent>

        {usage && (
          <TabsContent value="usage" className="mt-0">
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">When to use</h3>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <p className="text-muted-foreground whitespace-pre-line">{usage}</p>
              </div>
            </Card>
          </TabsContent>
        )}

        {props && (
          <TabsContent value="props" className="mt-0">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium">Prop</th>
                      <th className="px-4 py-3 text-left font-medium">Type</th>
                      <th className="px-4 py-3 text-left font-medium">Default</th>
                      <th className="px-4 py-3 text-left font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {props.map((prop) => (
                      <tr key={prop.name} className="hover:bg-muted/30">
                        <td className="px-4 py-3 font-mono text-xs">
                          <Badge variant="secondary">{prop.name}</Badge>
                        </td>
                        <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                          {prop.type}
                        </td>
                        <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                          {prop.default || '-'}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {prop.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
