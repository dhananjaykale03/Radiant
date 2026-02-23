// Motion System - Premium Configuration
// Philosophy: Communicate hierarchy, guide attention, confirm interaction
// Inspired by Vercel, Linear, Stripe, Apple

// ═══════════════════════════════════════════════════════════════════════════
// TIMING STANDARDS
// ═══════════════════════════════════════════════════════════════════════════

export const timing = {
  micro: 0.15,      // 120-180ms - Hover, micro interactions
  fast: 0.2,        // 200ms - Quick UI transitions
  normal: 0.25,     // 250ms - Standard transitions
  moderate: 0.3,    // 300ms - Modals, sheets
  slow: 0.4,        // 400ms - Page transitions (max)
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// EASING PRESETS
// ═══════════════════════════════════════════════════════════════════════════

export const easing = {
  default: [0.25, 0.1, 0.25, 1],      // ease-out for most cases
  enter: [0, 0, 0.2, 1],              // ease-out for entering
  exit: [0.4, 0, 1, 1],               // ease-in for exiting
  smooth: [0.4, 0, 0.2, 1],           // ease-in-out
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// SPRING CONFIGURATIONS (Low bounce, high damping)
// ═══════════════════════════════════════════════════════════════════════════

export const spring = {
  gentle: { type: 'spring' as const, stiffness: 120, damping: 20 },
  snappy: { type: 'spring' as const, stiffness: 300, damping: 30 },
  stiff: { type: 'spring' as const, stiffness: 400, damping: 35 },
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENT ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════

// Buttons: Hover scale 1.02, Active press 0.98
export const buttonVariants = {
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
  transition: { duration: timing.micro },
};

// Cards: Hover lift Y -4px, shadow increase
export const cardVariants = {
  hover: { y: -4 },
  transition: { duration: timing.fast, ease: easing.default },
};

// Modals: Enter fade + scale (0.96 → 1), Exit fade only
export const modalVariants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0 },
  transition: { duration: timing.moderate, ease: easing.enter },
};

// Dropdowns: Fade + Y slide (4-8px), fast exit
export const dropdownVariants = {
  initial: { opacity: 0, y: -4 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -4 },
  transition: { duration: timing.fast, ease: easing.default },
};

// Toasts: Slide from edge
export const toastVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: { duration: timing.fast, ease: easing.default },
};

// ═══════════════════════════════════════════════════════════════════════════
// SCROLL REVEAL ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: timing.normal, ease: easing.enter },
};

export const staggerConfig = {
  staggerChildren: 0.08,  // 60-100ms gap
  delayChildren: 0.1,
};

// ═══════════════════════════════════════════════════════════════════════════
// 3D TILT CONFIGURATION (Feature/Pricing cards only)
// ═══════════════════════════════════════════════════════════════════════════

export const tiltConfig = {
  maxTilt: 8,
  perspective: 1000,
  scale: 1.02,
  glareOpacity: 0.15,
};

// ═══════════════════════════════════════════════════════════════════════════
// MAGNETIC CURSOR (Primary CTAs only)
// ═══════════════════════════════════════════════════════════════════════════

export const magneticConfig = {
  strength: 0.3,
  radius: 100,
};

// ═══════════════════════════════════════════════════════════════════════════
// SETTINGS & PREFERENCES
// ═══════════════════════════════════════════════════════════════════════════

export type MotionLevel = 'full' | 'reduced' | 'off';

interface MotionPreferences {
  level: MotionLevel;
  cursorEffects: boolean;
  tiltEffects: boolean;
}

const STORAGE_KEY = 'motion-preferences';

const defaultPreferences: MotionPreferences = {
  level: 'full',
  cursorEffects: true,
  tiltEffects: true,
};

// Get preferences from localStorage or OS
export function getMotionPreferences(): MotionPreferences {
  if (typeof window === 'undefined') return defaultPreferences;
  
  // Check OS preference on first load
  const osReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultPreferences;
    }
  }
  
  // Auto-detect OS preference
  if (osReducedMotion) {
    return { ...defaultPreferences, level: 'reduced', cursorEffects: false, tiltEffects: false };
  }
  
  return defaultPreferences;
}

export function setMotionPreferences(prefs: Partial<MotionPreferences>) {
  if (typeof window === 'undefined') return;
  const current = getMotionPreferences();
  const updated = { ...current, ...prefs };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new CustomEvent('motion-preferences-change', { detail: updated }));
}

// ═══════════════════════════════════════════════════════════════════════════
// UTILITY CHECKS
// ═══════════════════════════════════════════════════════════════════════════

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  const prefs = getMotionPreferences();
  return prefs.level !== 'full' || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || 'ontouchstart' in window;
};

export const isLowEndDevice = () => {
  if (typeof window === 'undefined') return false;
  return navigator.hardwareConcurrency <= 4;
};

export const shouldEnableEffects = () => {
  const prefs = getMotionPreferences();
  return prefs.level === 'full' && !isMobile() && !isLowEndDevice();
};

export const shouldEnableCursor = () => {
  const prefs = getMotionPreferences();
  return prefs.cursorEffects && shouldEnableEffects();
};

export const shouldEnableTilt = () => {
  const prefs = getMotionPreferences();
  return prefs.tiltEffects && shouldEnableEffects();
};
