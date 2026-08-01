import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useMotion'

export function Tilt({ children, max = 10, scale = 1.02, className, glare = true }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 180, damping: 20 })
  const sy = useSpring(py, { stiffness: 180, damping: 20 })

  const rotateX = useTransform(sy, [0, 1], [max, -max])
  const rotateY = useTransform(sx, [0, 1], [-max, max])
  const glareBg = useTransform(
    [sx, sy],
    ([x, y]) => `radial-gradient(420px circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.14), transparent 55%)`
  )

  const onMove = (e) => {
    if (reduced) return
    const rect = ref.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const onLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={reduced ? {} : { scale }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      className={`relative [transform-style:preserve-3d] ${className ?? ''}`}
    >
      {children}
      {glare && !reduced && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ background: glareBg }}
        />
      )}
    </motion.div>
  )
}
