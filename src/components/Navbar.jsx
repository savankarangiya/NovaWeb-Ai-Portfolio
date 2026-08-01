import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Logo } from './ui/Logo'
import { RippleButton } from './ui/RippleButton'
import { Icon } from '../lib/icons'
import { useReducedMotion } from '../hooks/useMotion'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'stack', label: 'Stack' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'border-b border-white/[0.06] bg-navy-950/70 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className="section-shell flex h-[72px] items-center justify-between" aria-label="Primary">
          <button onClick={() => scrollTo('top')} className="shrink-0" aria-label="NOVAWEB AI home">
            <Logo />
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className="group relative rounded-full px-4 py-2 font-display text-sm font-medium text-mist-300 transition-colors hover:text-white"
                >
                  {l.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-electric-400 to-cyan-glow transition-transform duration-300 group-hover:scale-x-100" />
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <RippleButton size="sm" onClick={() => scrollTo('contact')}>
              Contact Me
            </RippleButton>
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'X' : 'Menu'} className="h-5 w-5" />
          </button>
        </nav>

        <motion.div
          className="h-[2px] origin-left bg-gradient-to-r from-electric-400 via-cyan-glow to-violet-600"
          style={{ scaleX: progress }}
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-navy-950/95 backdrop-blur-2xl lg:hidden"
          >
            <div aria-hidden="true" className="aurora-mesh absolute inset-0 opacity-40" />
            {links.map((l, i) => (
              <motion.button
                key={l.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                onClick={() => scrollTo(l.id)}
                className="relative z-10 py-2 font-display text-3xl font-semibold text-mist-100 transition-colors hover:text-white"
              >
                {l.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="relative z-10 mt-6"
            >
              <RippleButton onClick={() => scrollTo('contact')}>Contact Me</RippleButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
