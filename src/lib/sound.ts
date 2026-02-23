// Sound Manager - Elegant UI Sounds
// Rules: Never autoplay, trigger only on direct interaction

type SoundType = 'click' | 'toggle' | 'copy' | 'open' | 'close' | 'success' | 'error';

interface SoundPreferences {
  enabled: boolean;
  volume: number;
}

const STORAGE_KEY = 'sound-preferences';

const defaultPreferences: SoundPreferences = {
  enabled: false, // Off by default - user must opt-in
  volume: 0.3,    // Soft default
};

class SoundManager {
  private static instance: SoundManager;
  private preferences: SoundPreferences;
  private audioContext: AudioContext | null = null;

  private constructor() {
    this.preferences = this.loadPreferences();
  }

  public static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  private loadPreferences(): SoundPreferences {
    if (typeof window === 'undefined') return defaultPreferences;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return defaultPreferences;
      }
    }
    return defaultPreferences;
  }

  private savePreferences() {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.preferences));
    window.dispatchEvent(new CustomEvent('sound-preferences-change', { detail: this.preferences }));
  }

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return this.audioContext;
  }

  public setEnabled(enabled: boolean) {
    this.preferences.enabled = enabled;
    this.savePreferences();
  }

  public isEnabled(): boolean {
    return this.preferences.enabled;
  }

  public setVolume(volume: number) {
    this.preferences.volume = Math.max(0, Math.min(1, volume));
    this.savePreferences();
  }

  public getVolume(): number {
    return this.preferences.volume;
  }

  public getPreferences(): SoundPreferences {
    return { ...this.preferences };
  }

  public resetPreferences() {
    this.preferences = { ...defaultPreferences };
    this.savePreferences();
  }

  // Generate subtle UI sounds using Web Audio API
  public play(type: SoundType) {
    if (!this.preferences.enabled) return;
    
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && 
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = this.getAudioContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    const now = ctx.currentTime;
    const volume = this.preferences.volume;

    switch (type) {
      case 'click':
        oscillator.frequency.setValueAtTime(800, now);
        oscillator.frequency.exponentialRampToValueAtTime(400, now + 0.05);
        gainNode.gain.setValueAtTime(volume * 0.25, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        oscillator.start(now);
        oscillator.stop(now + 0.05);
        break;

      case 'toggle':
        oscillator.frequency.setValueAtTime(600, now);
        oscillator.frequency.exponentialRampToValueAtTime(900, now + 0.06);
        gainNode.gain.setValueAtTime(volume * 0.2, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        oscillator.start(now);
        oscillator.stop(now + 0.06);
        break;

      case 'copy':
        oscillator.frequency.setValueAtTime(1000, now);
        oscillator.frequency.setValueAtTime(1200, now + 0.04);
        gainNode.gain.setValueAtTime(volume * 0.2, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        oscillator.start(now);
        oscillator.stop(now + 0.08);
        break;

      case 'open':
        oscillator.frequency.setValueAtTime(350, now);
        oscillator.frequency.exponentialRampToValueAtTime(550, now + 0.1);
        gainNode.gain.setValueAtTime(volume * 0.15, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        oscillator.start(now);
        oscillator.stop(now + 0.1);
        break;

      case 'close':
        oscillator.frequency.setValueAtTime(550, now);
        oscillator.frequency.exponentialRampToValueAtTime(350, now + 0.08);
        gainNode.gain.setValueAtTime(volume * 0.15, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        oscillator.start(now);
        oscillator.stop(now + 0.08);
        break;

      case 'success':
        oscillator.frequency.setValueAtTime(523, now);
        oscillator.frequency.setValueAtTime(659, now + 0.08);
        oscillator.frequency.setValueAtTime(784, now + 0.16);
        gainNode.gain.setValueAtTime(volume * 0.18, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
        oscillator.start(now);
        oscillator.stop(now + 0.24);
        break;

      case 'error':
        oscillator.frequency.setValueAtTime(200, now);
        oscillator.frequency.setValueAtTime(150, now + 0.08);
        gainNode.gain.setValueAtTime(volume * 0.2, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        oscillator.start(now);
        oscillator.stop(now + 0.12);
        break;
    }
  }
}

export const soundManager = SoundManager.getInstance();
export type { SoundType, SoundPreferences };
