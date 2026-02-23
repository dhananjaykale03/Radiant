import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = 'tsx',
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success('Copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="code-block overflow-hidden rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          {filename && (
            <span className="ml-2 text-xs text-muted-foreground font-mono">
              {filename}
            </span>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 text-xs gap-1.5 hover:bg-white/10 text-muted-foreground hover:text-foreground"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </Button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto p-4 scrollbar-thin">
        <pre className="text-sm leading-relaxed">
          <code>
            {lines.map((line, index) => (
              <div key={index} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-right text-muted-foreground/50 select-none">
                    {index + 1}
                  </span>
                )}
                <span className="table-cell">
                  {highlightSyntax(line, language)}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

// Simple syntax highlighting
function highlightSyntax(line: string, language: string): React.ReactNode {
  if (!line) return '\n';

  // Very simple tokenization for demo purposes
  const patterns = [
    { regex: /(\/\/.*$)/g, className: 'text-[hsl(var(--code-comment))]' },
    { regex: /(".*?"|'.*?'|`.*?`)/g, className: 'text-[hsl(var(--code-string))]' },
    { regex: /\b(import|export|from|const|let|var|function|return|if|else|for|while|class|extends|interface|type|async|await|new)\b/g, className: 'text-[hsl(var(--code-keyword))]' },
    { regex: /\b(\d+)\b/g, className: 'text-[hsl(var(--code-number))]' },
    { regex: /\b([A-Z][a-zA-Z0-9]*)\b/g, className: 'text-[hsl(var(--code-function))]' },
  ];

  let result = line;
  const parts: { start: number; end: number; content: string; className: string }[] = [];

  patterns.forEach(({ regex, className }) => {
    let match;
    while ((match = regex.exec(line)) !== null) {
      parts.push({
        start: match.index,
        end: match.index + match[0].length,
        content: match[0],
        className,
      });
    }
  });

  // Sort by start position
  parts.sort((a, b) => a.start - b.start);

  // Build result with non-overlapping highlights
  const elements: React.ReactNode[] = [];
  let lastEnd = 0;

  parts.forEach((part, index) => {
    if (part.start >= lastEnd) {
      if (part.start > lastEnd) {
        elements.push(line.slice(lastEnd, part.start));
      }
      elements.push(
        <span key={index} className={part.className}>
          {part.content}
        </span>
      );
      lastEnd = part.end;
    }
  });

  if (lastEnd < line.length) {
    elements.push(line.slice(lastEnd));
  }

  return elements.length > 0 ? elements : line;
}
