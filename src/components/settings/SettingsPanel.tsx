import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Sun, Moon, Monitor, Volume2, VolumeX, Sparkles, MousePointer, Box, RotateCcw } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useTheme } from '@/contexts/ThemeContext';
import { getMotionPreferences, setMotionPreferences, type MotionLevel } from '@/lib/motion';
import { soundManager } from '@/lib/sound';
import { cn } from '@/lib/utils';

interface SettingsSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function SettingsSection({ title, description, children }: SettingsSectionProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  );
}

interface SettingRowProps {
  icon: React.ElementType;
  label: string;
  description?: string;
  children: React.ReactNode;
}

function SettingRow({ icon: Icon, label, description, children }: SettingRowProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        <div>
          <Label className="text-sm font-medium">{label}</Label>
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </div>
      </div>
      {children}
    </div>
  );
}

export function SettingsPanel() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  
  // Motion preferences
  const [motionLevel, setMotionLevel] = useState<MotionLevel>('full');
  const [cursorEffects, setCursorEffects] = useState(true);
  const [tiltEffects, setTiltEffects] = useState(true);
  
  // Sound preferences
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [soundVolume, setSoundVolume] = useState(0.3);

  // Load preferences on mount
  useEffect(() => {
    const motionPrefs = getMotionPreferences();
    setMotionLevel(motionPrefs.level);
    setCursorEffects(motionPrefs.cursorEffects);
    setTiltEffects(motionPrefs.tiltEffects);
    
    const soundPrefs = soundManager.getPreferences();
    setSoundEnabled(soundPrefs.enabled);
    setSoundVolume(soundPrefs.volume);
  }, []);

  // Handlers with immediate preview
  const handleMotionLevelChange = (level: MotionLevel) => {
    setMotionLevel(level);
    setMotionPreferences({ level });
    if (level !== 'full') {
      setCursorEffects(false);
      setTiltEffects(false);
      setMotionPreferences({ cursorEffects: false, tiltEffects: false });
    }
    soundManager.play('toggle');
  };

  const handleCursorEffectsChange = (enabled: boolean) => {
    setCursorEffects(enabled);
    setMotionPreferences({ cursorEffects: enabled });
    soundManager.play('toggle');
  };

  const handleTiltEffectsChange = (enabled: boolean) => {
    setTiltEffects(enabled);
    setMotionPreferences({ tiltEffects: enabled });
    soundManager.play('toggle');
  };

  const handleSoundToggle = (enabled: boolean) => {
    setSoundEnabled(enabled);
    soundManager.setEnabled(enabled);
    if (enabled) {
      soundManager.play('toggle');
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const vol = value[0];
    setSoundVolume(vol);
    soundManager.setVolume(vol);
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    soundManager.play('click');
  };

  const resetAllPreferences = () => {
    // Reset motion
    setMotionLevel('full');
    setCursorEffects(true);
    setTiltEffects(true);
    setMotionPreferences({ level: 'full', cursorEffects: true, tiltEffects: true });
    
    // Reset sound
    setSoundEnabled(false);
    setSoundVolume(0.3);
    soundManager.setEnabled(false);
    soundManager.setVolume(0.3);
    
    // Reset theme
    setTheme('system');
    
    soundManager.play('success');
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Settings
          </SheetTitle>
          <SheetDescription>
            Customize your experience. Changes are saved automatically.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-8">
          {/* Appearance */}
          <SettingsSection 
            title="Appearance" 
            description="Choose how the interface looks"
          >
            <RadioGroup 
              value={theme} 
              onValueChange={(v) => handleThemeChange(v as 'light' | 'dark' | 'system')}
              className="grid grid-cols-3 gap-2"
            >
              {[
                { value: 'light', icon: Sun, label: 'Light' },
                { value: 'dark', icon: Moon, label: 'Dark' },
                { value: 'system', icon: Monitor, label: 'System' },
              ].map((option) => (
                <Label
                  key={option.value}
                  htmlFor={option.value}
                  className={cn(
                    'flex flex-col items-center gap-2 rounded-lg border-2 p-3 cursor-pointer transition-all',
                    theme === option.value
                      ? 'border-primary bg-primary/5'
                      : 'border-transparent bg-muted/50 hover:bg-muted'
                  )}
                >
                  <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                  <option.icon className="h-5 w-5" />
                  <span className="text-xs font-medium">{option.label}</span>
                </Label>
              ))}
            </RadioGroup>
          </SettingsSection>

          <Separator />

          {/* Motion */}
          <SettingsSection 
            title="Motion" 
            description="Control animations and effects"
          >
            <div className="space-y-4">
              <div>
                <Label className="text-xs text-muted-foreground mb-2 block">Animation Level</Label>
                <RadioGroup 
                  value={motionLevel} 
                  onValueChange={(v) => handleMotionLevelChange(v as MotionLevel)}
                  className="grid grid-cols-3 gap-2"
                >
                  {[
                    { value: 'full', label: 'Full' },
                    { value: 'reduced', label: 'Reduced' },
                    { value: 'off', label: 'Off' },
                  ].map((option) => (
                    <Label
                      key={option.value}
                      htmlFor={`motion-${option.value}`}
                      className={cn(
                        'flex items-center justify-center rounded-lg border-2 py-2 cursor-pointer transition-all text-sm',
                        motionLevel === option.value
                          ? 'border-primary bg-primary/5'
                          : 'border-transparent bg-muted/50 hover:bg-muted'
                      )}
                    >
                      <RadioGroupItem value={option.value} id={`motion-${option.value}`} className="sr-only" />
                      {option.label}
                    </Label>
                  ))}
                </RadioGroup>
              </div>

              <SettingRow 
                icon={MousePointer} 
                label="Cursor Effects" 
                description="Magnetic hover on buttons"
              >
                <Switch 
                  checked={cursorEffects} 
                  onCheckedChange={handleCursorEffectsChange}
                  disabled={motionLevel !== 'full'}
                />
              </SettingRow>

              <SettingRow 
                icon={Box} 
                label="3D Effects" 
                description="Tilt on feature cards"
              >
                <Switch 
                  checked={tiltEffects} 
                  onCheckedChange={handleTiltEffectsChange}
                  disabled={motionLevel !== 'full'}
                />
              </SettingRow>
            </div>
          </SettingsSection>

          <Separator />

          {/* Sound */}
          <SettingsSection 
            title="Sound" 
            description="UI feedback sounds"
          >
            <div className="space-y-4">
              <SettingRow 
                icon={soundEnabled ? Volume2 : VolumeX} 
                label="UI Sounds" 
                description="Subtle interaction feedback"
              >
                <Switch 
                  checked={soundEnabled} 
                  onCheckedChange={handleSoundToggle}
                />
              </SettingRow>

              {soundEnabled && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-11 space-y-2"
                >
                  <Label className="text-xs text-muted-foreground">Volume</Label>
                  <Slider
                    value={[soundVolume]}
                    onValueChange={handleVolumeChange}
                    max={1}
                    step={0.1}
                    className="w-full"
                  />
                </motion.div>
              )}
            </div>
          </SettingsSection>

          <Separator />

          {/* Accessibility */}
          <SettingsSection 
            title="Accessibility" 
            description="System preferences are respected automatically"
          >
            <div className="rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
              <p className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                When your system has "Reduce Motion" enabled, animations are automatically simplified.
              </p>
            </div>
          </SettingsSection>

          <Separator />

          {/* Reset */}
          <div className="pt-2">
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={resetAllPreferences}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset All Preferences
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
