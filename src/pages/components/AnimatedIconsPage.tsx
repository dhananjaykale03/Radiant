import { useState } from 'react';
import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Heart, Star, Bell, Bookmark, ThumbsUp, Check, Plus, Minus, 
  Play, Pause, Volume2, VolumeX, Sun, Moon, Eye, EyeOff,
  Loader2, RefreshCw, Send, Download, Upload, Copy, Trash2, Edit
} from 'lucide-react';
import { cn } from '@/lib/utils';

const iconCode = `import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Bell } from 'lucide-react';

export function AnimatedIcons() {
  const [liked, setLiked] = useState(false);
  
  return (
    <motion.button
      onClick={() => setLiked(!liked)}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={liked ? { scale: [1, 1.3, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Heart 
          className={cn("h-6 w-6", liked && "fill-red-500 text-red-500")} 
        />
      </motion.div>
    </motion.button>
  );
}`;

const variants = [
  {
    name: 'Like/Heart',
    preview: (() => {
      const LikeButton = () => {
        const [liked, setLiked] = useState(false);
        
        return (
          <div className="flex flex-col items-center gap-4">
            <motion.button
              onClick={() => setLiked(!liked)}
              whileTap={{ scale: 0.9 }}
              className="relative p-3 rounded-full hover:bg-muted transition-colors"
            >
              <motion.div
                animate={liked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Heart 
                  className={cn(
                    "h-8 w-8 transition-colors",
                    liked ? "fill-red-500 text-red-500" : "text-muted-foreground"
                  )} 
                />
              </motion.div>
              {liked && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 rounded-full border-2 border-red-500"
                />
              )}
            </motion.button>
            <span className="text-sm text-muted-foreground">
              {liked ? 'Liked!' : 'Click to like'}
            </span>
          </div>
        );
      };
      return <LikeButton />;
    })(),
    code: iconCode,
  },
  {
    name: 'Star Rating',
    preview: (() => {
      const StarRating = () => {
        const [rating, setRating] = useState(0);
        const [hover, setHover] = useState(0);
        
        return (
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(star)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9, rotate: -15 }}
                  className="p-1"
                >
                  <motion.div
                    animate={star <= (hover || rating) ? { rotate: [0, -10, 10, 0] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <Star 
                      className={cn(
                        "h-8 w-8 transition-colors",
                        star <= (hover || rating) 
                          ? "fill-yellow-400 text-yellow-400" 
                          : "text-muted-foreground"
                      )} 
                    />
                  </motion.div>
                </motion.button>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {rating > 0 ? `${rating} star${rating > 1 ? 's' : ''}` : 'Rate this'}
            </span>
          </div>
        );
      };
      return <StarRating />;
    })(),
    code: `// Animated star rating with wiggle effect`,
  },
  {
    name: 'Notification Bell',
    preview: (() => {
      const NotificationBell = () => {
        const [hasNotification, setHasNotification] = useState(true);
        const [count, setCount] = useState(3);
        
        const handleClick = () => {
          if (hasNotification) {
            setCount(0);
            setHasNotification(false);
          } else {
            setCount(Math.floor(Math.random() * 9) + 1);
            setHasNotification(true);
          }
        };
        
        return (
          <div className="flex flex-col items-center gap-4">
            <motion.button
              onClick={handleClick}
              className="relative p-3 rounded-full hover:bg-muted transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={hasNotification ? { 
                  rotate: [0, -15, 15, -10, 10, -5, 5, 0],
                } : {}}
                transition={{ 
                  duration: 0.6,
                  repeat: hasNotification ? Infinity : 0,
                  repeatDelay: 2
                }}
              >
                <Bell className="h-8 w-8" />
              </motion.div>
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
            <span className="text-sm text-muted-foreground">
              {hasNotification ? 'New notifications' : 'Click for notifications'}
            </span>
          </div>
        );
      };
      return <NotificationBell />;
    })(),
    code: `// Notification bell with shake animation`,
  },
  {
    name: 'Toggle Icons',
    preview: (() => {
      const ToggleIcons = () => {
        const [states, setStates] = useState({
          play: false,
          volume: true,
          theme: false,
          visible: true,
        });
        
        const toggle = (key: keyof typeof states) => {
          setStates(prev => ({ ...prev, [key]: !prev[key] }));
        };
        
        const toggleButtons = [
          { 
            key: 'play' as const, 
            icons: [Play, Pause], 
            labels: ['Play', 'Pause'] 
          },
          { 
            key: 'volume' as const, 
            icons: [VolumeX, Volume2], 
            labels: ['Unmute', 'Mute'] 
          },
          { 
            key: 'theme' as const, 
            icons: [Sun, Moon], 
            labels: ['Light', 'Dark'] 
          },
          { 
            key: 'visible' as const, 
            icons: [EyeOff, Eye], 
            labels: ['Show', 'Hide'] 
          },
        ];
        
        return (
          <div className="flex gap-6">
            {toggleButtons.map(({ key, icons, labels }) => {
              const Icon = states[key] ? icons[1] : icons[0];
              return (
                <motion.button
                  key={key}
                  onClick={() => toggle(key)}
                  className="p-3 rounded-full hover:bg-muted transition-colors flex flex-col items-center gap-2"
                  whileTap={{ scale: 0.9 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={states[key] ? 'on' : 'off'}
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                  </AnimatePresence>
                  <span className="text-xs text-muted-foreground">
                    {states[key] ? labels[1] : labels[0]}
                  </span>
                </motion.button>
              );
            })}
          </div>
        );
      };
      return <ToggleIcons />;
    })(),
    code: `// Toggle icons with swap animation`,
  },
  {
    name: 'Action Icons',
    preview: (() => {
      const ActionIcons = () => {
        const [copied, setCopied] = useState(false);
        const [deleted, setDeleted] = useState(false);
        const [loading, setLoading] = useState<string | null>(null);
        
        const handleCopy = () => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        };
        
        const handleDelete = () => {
          setDeleted(true);
          setTimeout(() => setDeleted(false), 2000);
        };
        
        const handleAction = (action: string) => {
          setLoading(action);
          setTimeout(() => setLoading(null), 1500);
        };
        
        return (
          <div className="flex gap-4">
            <motion.button
              onClick={handleCopy}
              className="p-3 rounded-lg border hover:bg-muted transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Check className="h-5 w-5 text-green-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Copy className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            
            <motion.button
              onClick={handleDelete}
              className="p-3 rounded-lg border hover:bg-muted transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={deleted ? { rotate: [0, -20, 20, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                <Trash2 className={cn("h-5 w-5", deleted && "text-red-500")} />
              </motion.div>
            </motion.button>
            
            <motion.button
              onClick={() => handleAction('download')}
              className="p-3 rounded-lg border hover:bg-muted transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {loading === 'download' ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                  <Loader2 className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div whileHover={{ y: 2 }}>
                  <Download className="h-5 w-5" />
                </motion.div>
              )}
            </motion.button>
            
            <motion.button
              onClick={() => handleAction('upload')}
              className="p-3 rounded-lg border hover:bg-muted transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {loading === 'upload' ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                  <Loader2 className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div whileHover={{ y: -2 }}>
                  <Upload className="h-5 w-5" />
                </motion.div>
              )}
            </motion.button>
            
            <motion.button
              onClick={() => handleAction('send')}
              className="p-3 rounded-lg border hover:bg-muted transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {loading === 'send' ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                  <Loader2 className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div whileHover={{ x: 2, y: -2 }}>
                  <Send className="h-5 w-5" />
                </motion.div>
              )}
            </motion.button>
          </div>
        );
      };
      return <ActionIcons />;
    })(),
    code: `// Action icons with feedback animations`,
  },
  {
    name: 'Counter Icons',
    preview: (() => {
      const CounterIcons = () => {
        const [count, setCount] = useState(5);
        
        return (
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => setCount(Math.max(0, count - 1))}
              className="p-3 rounded-full border hover:bg-muted transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Minus className="h-5 w-5" />
            </motion.button>
            
            <motion.span
              key={count}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-3xl font-bold w-12 text-center"
            >
              {count}
            </motion.span>
            
            <motion.button
              onClick={() => setCount(count + 1)}
              className="p-3 rounded-full border hover:bg-muted transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Plus className="h-5 w-5" />
            </motion.button>
          </div>
        );
      };
      return <CounterIcons />;
    })(),
    code: `// Counter with animated number change`,
  },
  {
    name: 'Loading States',
    preview: (() => {
      const LoadingStates = () => {
        return (
          <div className="flex gap-8">
            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              >
                <Loader2 className="h-8 w-8 text-primary" />
              </motion.div>
              <span className="text-xs text-muted-foreground">Spinner</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              >
                <RefreshCw className="h-8 w-8 text-primary" />
              </motion.div>
              <span className="text-xs text-muted-foreground">Refresh</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <Heart className="h-8 w-8 text-red-500" />
              </motion.div>
              <span className="text-xs text-muted-foreground">Pulse</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
              >
                <Bell className="h-8 w-8 text-primary" />
              </motion.div>
              <span className="text-xs text-muted-foreground">Bounce</span>
            </div>
          </div>
        );
      };
      return <LoadingStates />;
    })(),
    code: `// Various loading animation styles`,
  },
];

export function AnimatedIconsPage() {
  return (
    <ComponentShowcase
      title="Animated Icons"
      description="Interactive icons with state-driven animations, micro-interactions, and feedback effects."
      preview={variants[0].preview}
      code={variants[0].code}
      variants={variants}
      filename="AnimatedIcons.tsx"
    />
  );
}
