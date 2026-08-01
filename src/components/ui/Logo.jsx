import { motion } from 'framer-motion'

export function Logo({ className = '', compact = false, animate = true }) {
  const word = (
    <span className="flex items-baseline gap-1.5">
      <span className="font-display text-lg font-bold tracking-tight text-white">
        NOVA<span className="text-gradient-animated">WEB</span>
      </span>
      <span className="font-display text-lg font-light tracking-[0.3em] text-mist-300">AI</span>
    </span>
  )

  const mark = (
    <svg viewBox="0 0 40 40" className={`h-9 w-9 ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4f7cff" />
          <stop offset="0.5" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="#0a1230" stroke="rgba(255,255,255,0.12)" />
      <path d="M11 30V11h3l9 13V11h3v19h-3l-9-13v13h-3z" fill="url(#logo-grad)" />
    </svg>
  )

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {animate ? (
        <motion.div whileHover={{ rotate: -8, scale: 1.05 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
          {mark}
        </motion.div>
      ) : (
        mark
      )}
      {!compact && word}
    </div>
  )
}
