import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '../hooks/useMotion'

const LETTERS = ['N', 'O', 'V', 'A', 'W', 'E', 'B', 'A', 'I']

export function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    const start = performance.now()
    const duration = 1800
    let raf

    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setProgress(Math.round(eased * 100))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(onDone, 250)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-navy-950"
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      role="status"
      aria-label="Loading NOVAWEB AI"
    >
      <div aria-hidden="true" className="aurora-mesh absolute inset-0 opacity-60" />
      <div className="aurora-orb left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 bg-[#4f7cff] animate-pulse-glow" />

      <div className="relative flex items-center gap-1">
        {LETTERS.map((l, i) => (
          <motion.span
            key={`${l}-${i}`}
            className="font-display text-4xl font-bold tracking-tight md:text-6xl"
            initial={reduced ? false : { opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              color: i >= 4 && i <= 6 ? 'transparent' : '#ffffff',
              backgroundImage: i >= 4 && i <= 6 ? 'linear-gradient(110deg,#4f7cff,#22d3ee)' : undefined,
              WebkitBackgroundClip: i >= 4 && i <= 6 ? 'text' : undefined,
              backgroundClip: i >= 4 && i <= 6 ? 'text' : undefined
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-4 font-display text-[11px] font-medium uppercase tracking-[0.5em] text-mist-400"
      >
        Premium AI Web Development
      </motion.p>

      <div className="relative mt-10 h-[3px] w-56 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-electric-400 via-cyan-glow to-violet-600"
          style={{ width: `${progress}%` }}
          transition={{ ease: 'easeOut' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 font-display text-sm tabular-nums text-mist-300"
      >
        {progress}%
      </motion.div>
    </motion.div>
  )
}
