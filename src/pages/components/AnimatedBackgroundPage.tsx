import { ComponentShowcase } from '@/components/showcase/ComponentShowcase';
import { motion } from 'framer-motion';

const animatedBgCode = `import { motion } from "framer-motion"

export function GradientBackground() {
  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500"
        animate={{
          background: [
            "linear-gradient(to bottom right, hsl(var(--primary)), #8B5CF6, #EC4899)",
            "linear-gradient(to bottom right, #EC4899, hsl(var(--primary)), #8B5CF6)",
            "linear-gradient(to bottom right, #8B5CF6, #EC4899, hsl(var(--primary)))",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      {/* Content goes here */}
    </div>
  )
}`;

const animatedBgProps = [
  { name: 'colors', type: 'string[]', default: "['primary', 'purple', 'pink']", description: 'Gradient colors to animate between' },
  { name: 'duration', type: 'number', default: '10', description: 'Animation cycle duration in seconds' },
  { name: 'blur', type: 'boolean', default: 'false', description: 'Add blur effect to orbs' },
];

const variants = [
  {
    name: 'Gradient Shift',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, hsl(262, 83%, 58%) 0%, hsl(316, 73%, 52%) 50%, hsl(24, 100%, 50%) 100%)",
              "linear-gradient(135deg, hsl(316, 73%, 52%) 0%, hsl(24, 100%, 50%) 50%, hsl(262, 83%, 58%) 100%)",
              "linear-gradient(135deg, hsl(24, 100%, 50%) 0%, hsl(262, 83%, 58%) 50%, hsl(316, 73%, 52%) 100%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Gradient Shift
        </div>
      </div>
    ),
    code: animatedBgCode,
  },
  {
    name: 'Floating Orbs',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-slate-900">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${10 + i * 15}%`,
              top: `${10 + i * 10}%`,
              background: i % 2 === 0 ? 'hsl(262, 83%, 58%)' : 'hsl(316, 73%, 52%)',
              opacity: 0.4,
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Floating Orbs
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function FloatingOrbs() {
  return (
    <div className="relative h-screen overflow-hidden bg-slate-900">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: \`\${100 + i * 50}px\`,
            height: \`\${100 + i * 50}px\`,
            left: \`\${10 + i * 15}%\`,
            top: \`\${10 + i * 10}%\`,
            background: i % 2 === 0 ? 'hsl(262, 83%, 58%)' : 'hsl(316, 73%, 52%)',
            opacity: 0.4,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  )
}`,
  },
  {
    name: 'Aurora',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-slate-950">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(16, 185, 129, 0.1) 50%, transparent 100%)',
          }}
          animate={{
            x: [-200, 200, -200],
            skewX: [-10, 10, -10],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.15) 50%, transparent 100%)',
          }}
          animate={{
            x: [100, -100, 100],
            skewX: [5, -5, 5],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(236, 72, 153, 0.1) 50%, transparent 100%)',
          }}
          animate={{
            x: [-150, 150, -150],
            skewX: [-5, 5, -5],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Aurora
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function AuroraBackground() {
  return (
    <div className="relative h-screen overflow-hidden bg-slate-950">
      <motion.div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(16, 185, 129, 0.1), transparent)' }}
        animate={{ x: [-200, 200, -200], skewX: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.15), transparent)' }}
        animate={{ x: [100, -100, 100], skewX: [5, -5, 5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}`,
  },
  {
    name: 'Particles',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-slate-900">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.3, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Particles
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function ParticleBackground() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: \`\${Math.random() * 100}%\`,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 3,
  }))
  
  return (
    <div className="relative h-screen overflow-hidden bg-slate-900">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ left: p.left, bottom: 0 }}
          animate={{ y: [0, -window.innerHeight], opacity: [0.3, 0.8, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}
    </div>
  )
}`,
  },
  {
    name: 'Mesh Gradient',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 via-transparent to-pink-500/30" />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{
            x: [0, 100, 50, 0],
            y: [0, 50, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ left: '10%', top: '-20%' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-violet-500/20 blur-3xl"
          animate={{
            x: [0, -80, -40, 0],
            y: [0, 80, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ right: '10%', bottom: '-10%' }}
        />
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Mesh Gradient
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function MeshGradient() {
  return (
    <div className="relative h-screen overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 via-transparent to-pink-500/30" />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ x: [0, 100, 50, 0], y: [0, 50, 100, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ left: '10%', top: '-20%' }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-violet-500/20 blur-3xl"
        animate={{ x: [0, -80, 0], y: [0, 80, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ right: '10%', bottom: '-10%' }}
      />
    </div>
  )
}`,
  },
  {
    name: 'Waves',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-b from-blue-600 to-blue-900">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 left-0 right-0 h-24"
            style={{
              background: `rgba(255, 255, 255, ${0.1 - i * 0.02})`,
              borderRadius: '50% 50% 0 0',
            }}
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,165.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L0,320Z",
              ],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Waves
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function WavesBackground() {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-blue-600 to-blue-900">
      {[...Array(3)].map((_, i) => (
        <motion.svg
          key={i}
          className="absolute bottom-0 left-0 w-full"
          style={{ opacity: 0.1 - i * 0.02 }}
          viewBox="0 0 1440 320"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        >
          <path fill="white" d="M0,96L48,112C96,128,192,160,288,165.3..." />
        </motion.svg>
      ))}
    </div>
  )
}`,
  },
  {
    name: 'Grid Lines',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-slate-950">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Grid Lines
        </div>
      </div>
    ),
    code: `export function GridBackground() {
  return (
    <div className="relative h-screen overflow-hidden bg-slate-950">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} 
      />
      <motion.div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 50%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  )
}`,
  },
  {
    name: 'Spotlight',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-slate-950">
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            left: '50%',
            top: '50%',
            marginLeft: '-192px',
            marginTop: '-192px',
          }}
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Spotlight
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function SpotlightBackground() {
  return (
    <div className="relative h-screen overflow-hidden bg-slate-950">
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent 70%)',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}`,
  },
  {
    name: 'Noise Texture',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <motion.div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Noise Texture
        </div>
      </div>
    ),
    code: `export function NoiseBackground() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,...\")", // SVG noise filter
        }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  )
}`,
  },
  {
    name: 'Pulse Rings',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-primary/30"
            style={{
              width: `${100 + i * 60}px`,
              height: `${100 + i * 60}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut",
            }}
          />
        ))}
        <div className="relative z-10 text-white font-bold text-xl">
          Pulse Rings
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function PulseRings() {
  return (
    <div className="relative h-screen bg-slate-950 flex items-center justify-center">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/30"
          style={{ width: \`\${100 + i * 60}px\`, height: \`\${100 + i * 60}px\` }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </div>
  )
}`,
  },
  {
    name: 'Flowing Lines',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-slate-950">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            style={{
              width: '150%',
              top: `${20 + i * 15}%`,
              left: '-25%',
            }}
            animate={{
              x: ['-25%', '25%', '-25%'],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Flowing Lines
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function FlowingLines() {
  return (
    <div className="relative h-screen bg-slate-950">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          style={{ width: '150%', top: \`\${20 + i * 15}%\`, left: '-25%' }}
          animate={{ x: ['-25%', '25%', '-25%'] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  )
}`,
  },
  {
    name: 'Starfield',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-slate-950">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Starfield
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function Starfield() {
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    size: 1 + Math.random() * 2,
    left: \`\${Math.random() * 100}%\`,
    top: \`\${Math.random() * 100}%\`,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 2,
  }))
  
  return (
    <div className="relative h-screen bg-slate-950">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{ width: star.size, height: star.size, left: star.left, top: star.top }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: star.duration, repeat: Infinity, delay: star.delay }}
        />
      ))}
    </div>
  )
}`,
  },
  {
    name: 'Color Blobs',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-white dark:bg-slate-950">
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-yellow-400/30 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ left: '0%', top: '0%' }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-pink-400/30 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ right: '0%', top: '20%' }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-blue-400/30 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ left: '30%', bottom: '0%' }}
        />
        <div className="relative z-10 flex items-center justify-center h-full font-bold text-xl">
          Color Blobs
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function ColorBlobs() {
  return (
    <div className="relative h-screen overflow-hidden bg-white dark:bg-slate-950">
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-yellow-400/30 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ left: '0%', top: '0%' }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-pink-400/30 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ right: '0%', top: '20%' }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-blue-400/30 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ left: '30%', bottom: '0%' }}
      />
    </div>
  )
}`,
  },
  {
    name: 'Morphing Shapes',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900">
        <motion.div
          className="absolute left-1/2 top-1/2 w-32 h-32 bg-white/20"
          style={{ marginLeft: '-64px', marginTop: '-64px' }}
          animate={{
            borderRadius: ['20%', '50%', '30%', '50%', '20%'],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1, 0.8, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Morphing Shapes
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function MorphingShapes() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
      <motion.div
        className="w-64 h-64 bg-white/20"
        animate={{
          borderRadius: ['20%', '50%', '30%', '50%', '20%'],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}`,
  },
  {
    name: 'Gradient Mesh',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)',
          }}
          animate={{
            background: [
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Gradient Mesh
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function GradientMesh() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500" />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 50%)',
            'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3), transparent 50%)',
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}`,
  },
  {
    name: 'Glitch Effect',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-black">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent"
          animate={{
            x: [-5, 5, -2, 0],
            opacity: [0, 1, 0.5, 0],
          }}
          transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent to-red-500/20"
          animate={{
            x: [5, -5, 2, 0],
            opacity: [0, 1, 0.5, 0],
          }}
          transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2, delay: 0.05 }}
        />
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Glitch Effect
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function GlitchBackground() {
  return (
    <div className="relative h-screen bg-black">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent"
        animate={{ x: [-5, 5, -2, 0], opacity: [0, 1, 0.5, 0] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent to-red-500/20"
        animate={{ x: [5, -5, 2, 0], opacity: [0, 1, 0.5, 0] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2, delay: 0.05 }}
      />
    </div>
  )
}`,
  },
  {
    name: 'Bokeh',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-slate-900">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${['rgba(139,92,246,0.3)', 'rgba(236,72,153,0.3)', 'rgba(59,130,246,0.3)'][i % 3]} 0%, transparent 70%)`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Bokeh
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function BokehBackground() {
  const bokehCircles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: 20 + Math.random() * 60,
    left: \`\${Math.random() * 100}%\`,
    top: \`\${Math.random() * 100}%\`,
    color: ['rgba(139,92,246,0.3)', 'rgba(236,72,153,0.3)', 'rgba(59,130,246,0.3)'][i % 3],
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 4,
  }))
  
  return (
    <div className="relative h-screen bg-slate-900">
      {bokehCircles.map((c) => (
        <motion.div
          key={c.id}
          className="absolute rounded-full"
          style={{
            width: c.size, height: c.size,
            left: c.left, top: c.top,
            background: \`radial-gradient(circle, \${c.color} 0%, transparent 70%)\`,
          }}
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: c.duration, repeat: Infinity, delay: c.delay }}
        />
      ))}
    </div>
  )
}`,
  },
  {
    name: 'Diagonal Lines',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-slate-950">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(139,92,246,0.1) 10px, rgba(139,92,246,0.1) 11px)',
          }}
          animate={{ backgroundPosition: ['0px 0px', '100px 100px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Diagonal Lines
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function DiagonalLines() {
  return (
    <div className="relative h-screen bg-slate-950">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(139,92,246,0.1) 10px, rgba(139,92,246,0.1) 11px)',
        }}
        animate={{ backgroundPosition: ['0px 0px', '100px 100px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}`,
  },
  {
    name: 'Radial Pulse',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
        <motion.div
          className="absolute w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            scale: [0.8, 1.5, 0.8],
            opacity: [0.8, 0.2, 0.8],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 text-white font-bold text-xl">
          Radial Pulse
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function RadialPulse() {
  return (
    <div className="relative h-screen bg-slate-950 flex items-center justify-center">
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%)' }}
        animate={{ scale: [0.8, 1.5, 0.8], opacity: [0.8, 0.2, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}`,
  },
  {
    name: 'Vignette',
    preview: (
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.8) 100%)',
          }}
          animate={{
            background: [
              'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.8) 100%)',
              'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)',
              'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.8) 100%)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xl">
          Vignette
        </div>
      </div>
    ),
    code: `import { motion } from "framer-motion"

export function VignetteBackground() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-slate-800 to-slate-900">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.8) 100%)',
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)',
            'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.8) 100%)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}`,
  },
];

export function AnimatedBackgroundPage() {
  return (
    <ComponentShowcase
      title="Animated Backgrounds"
      description="Dynamic animated backgrounds with gradients, particles, orbs, and more visual effects."
      preview={variants[0].preview}
      code={animatedBgCode}
      filename="animated-background.tsx"
      usage={`Animated backgrounds add visual interest and depth to your UI.

• Use subtle animations to avoid distraction
• Respect prefers-reduced-motion for accessibility
• Keep performance in mind - use transform/opacity
• Layer multiple effects for complex visuals
• Consider dark/light mode compatibility`}
      props={animatedBgProps}
      variants={variants}
    />
  );
}
