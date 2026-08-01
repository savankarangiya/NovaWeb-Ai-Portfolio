import { motion } from 'framer-motion'

export function Aurora({ variant = 'hero', className = '' }) {
  if (variant === 'hero') {
    return (
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
        <div className="aurora-mesh absolute inset-0" />
        <motion.div
          className="aurora-orb left-[8%] top-[6%] h-[34rem] w-[34rem] bg-[#4f7cff]"
          animate={{ x: [0, 40, 0], y: [0, 24, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="aurora-orb right-[4%] top-[24%] h-[30rem] w-[30rem] bg-[#22d3ee]"
          animate={{ x: [0, -36, 0], y: [0, 40, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="aurora-orb bottom-[6%] left-[30%] h-[26rem] w-[26rem] bg-[#7c3aed]"
          animate={{ x: [0, 28, 0], y: [0, -24, 0], scale: [1, 1.16, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="grid-bg absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-navy-950 to-transparent" />
      </div>
    )
  }

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="aurora-orb left-[10%] top-[0%] h-96 w-96 bg-[#4f7cff]"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="aurora-orb right-[6%] top-[30%] h-80 w-80 bg-[#22d3ee]"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
