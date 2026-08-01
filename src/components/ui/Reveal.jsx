import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useMotion'

export function Reveal({
  children,
  delay = 0,
  y = 32,
  x = 0,
  duration = 0.8,
  once = true,
  amount = 0.25,
  className,
  as = 'div'
}) {
  const reduced = useReducedMotion()
  const Comp = motion[as]

  return (
    <Comp
      className={className}
      initial={reduced ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  )
}
