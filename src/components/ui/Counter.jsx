import { useEffect, useRef } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useMotion'

export function Counter({ to, suffix = '', duration = 2, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!inView) return
    if (reduced) return
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`
      }
    })
    return () => controls.stop()
  }, [inView, to, suffix, duration, reduced])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {reduced ? `${to}${suffix}` : `0${suffix}`}
    </motion.span>
  )
}
