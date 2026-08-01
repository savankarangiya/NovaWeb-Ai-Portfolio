import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useMediaQuery, useReducedMotion } from '../hooks/useMotion'

export function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 220, damping: 24, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 220, damping: 24, mass: 0.6 })
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [visible, setVisible] = useState(false)
  const fine = useMediaQuery('(pointer: fine)')
  const reduced = useReducedMotion()
  const enabled = fine && !reduced

  useEffect(() => {
    if (!enabled) return
    document.body.classList.add('has-cursor')

    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)

      const target = e.target.closest('a, button, [data-cursor]')
      setHovering(!!target)
    }

    const onDown = () => setPressed(true)
    const onUp = () => setPressed(false)
    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      document.body.classList.remove('has-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[200] h-2 w-2 rounded-full bg-cyan-glow"
        style={{ x, y, translateX: '-50%', translateY: '-50%', opacity: visible ? 1 : 0 }}
        animate={{
          scale: hovering ? 0.4 : pressed ? 0.8 : 1,
          boxShadow: hovering
            ? '0 0 24px 4px rgba(34,211,238,0.7)'
            : '0 0 12px 2px rgba(34,211,238,0.4)'
        }}
        transition={{ duration: 0.2 }}
      />
      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[199] rounded-full border"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%', opacity: visible ? 1 : 0 }}
        animate={{
          width: hovering ? 56 : 34,
          height: hovering ? 56 : 34,
          backgroundColor: hovering ? 'rgba(79,124,255,0.12)' : 'rgba(255,255,255,0)',
          borderColor: hovering ? 'rgba(79,124,255,0.7)' : 'rgba(255,255,255,0.35)',
          scale: pressed ? 0.85 : 1
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      />
    </>
  )
}
