import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { Aurora } from './ui/Aurora'
import { RippleButton } from './ui/RippleButton'
import { Tilt } from './ui/Tilt'
import { LaptopFrame } from './ui/DeviceMockup'
import { Icon } from '../lib/icons'
import { projects } from '../data/projects'
import { trustBadges } from '../data/trust'
import { useReducedMotion } from '../hooks/useMotion'

const line1 = 'Modern Websites'
const line2 = 'Built For Growing'
const line3 = 'Businesses'

function HeroLaptop() {
  const [index, setIndex] = useState(0)
  const site = projects[index]

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % projects.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={site.id}
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.015 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-navy-900"
        >
          <LaptopFrame site={site} className="absolute inset-0" priority />
        </motion.div>
      </AnimatePresence>

      {/* Rotating site indicator */}
      <div className="absolute -bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-navy-900/80 px-3 py-1.5 backdrop-blur-md">
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? 'w-6 bg-cyan-glow' : 'w-1.5 bg-white/25 hover:bg-white/50'
            }`}
            aria-label={`Show ${p.name}`}
          />
        ))}
        <span className="pl-1 font-display text-[10px] font-medium uppercase tracking-widest text-mist-300">
          {site.name}
        </span>
      </div>
    </div>
  )
}

function FloatingCard({ className, delay = 0, children, depth = 1 }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={`glass absolute z-20 rounded-2xl p-4 ${className}`}
      style={{ transform: `translateZ(${depth * 40}px)` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {!reduced && <motion.div className="animate-float" style={{ animationDelay: `${delay}s` }}>{children}</motion.div>}
      {reduced && children}
    </motion.div>
  )
}

export function Hero() {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })

  const onMouseMove = (e) => {
    if (reduced) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2)
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2)
  }

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <Aurora variant="hero" />

      <div className="section-shell relative z-10 grid items-center gap-16 lg:grid-cols-2">
        {/* Left — Copy */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 inline-flex"
          >
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-glow opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-glow" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          <h1 className="font-display text-[2.6rem] font-bold leading-[1.02] tracking-tightest text-white sm:text-6xl lg:text-[4.2rem]">
            {line1.split(' ').map((w, i) => (
              <motion.span
                key={`${w}-${i}`}
                className="mr-3 inline-block"
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
            <span className="block">
              {line2.split(' ').map((w, i) => (
                <motion.span
                  key={`${w}-${i}`}
                  className="mr-3 inline-block"
                  initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="text-gradient-animated block">
              {line3.split(' ').map((w, i) => (
                <motion.span
                  key={`${w}-${i}`}
                  className="mr-3 inline-block"
                  initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.8 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-mist-400 md:text-lg lg:mx-0"
          >
            Hi, I'm Savan Karangiya — I build modern, responsive and high-performance websites
            with React, Vite and Tailwind CSS, powered by AI-assisted development workflows and
            clean, maintainable code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <RippleButton size="lg" onClick={() => scrollTo('work')}>
              View My Work
              <Icon name="ArrowRight" className="h-4 w-4" />
            </RippleButton>
            <RippleButton size="lg" variant="ghost" onClick={() => scrollTo('contact')}>
              Contact Me
            </RippleButton>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            {trustBadges.map((b, i) => (
              <motion.li
                key={b.id}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-mist-200"
              >
                <Icon name={b.icon} className="h-4 w-4 text-cyan-glow" />
                {b.label}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right — Laptop + floating cards */}
        <div className="relative mx-auto w-full max-w-xl">
          <motion.div
            style={{ x: sx, y: sy }}
            className="perspective-1200"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow under laptop */}
            <div className="absolute inset-x-8 -bottom-6 h-24 rounded-[100%] bg-gradient-to-r from-electric-500/40 to-cyan-glow/30 blur-3xl" />

            <Tilt max={6} scale={1.01} className="rounded-2xl">
              <div className="glass-strong rounded-2xl p-2.5">
                <div className="mb-2 flex items-center gap-1.5 px-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  <span className="ml-2 rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-mist-400">
                    novaweb.ai
                  </span>
                </div>
                <HeroLaptop />
              </div>
              {/* Base */}
              <div className="mx-auto h-3 w-[118%] rounded-b-2xl bg-gradient-to-b from-navy-700 to-navy-800 shadow-lg" />
              <div className="mx-auto h-2 w-[130%] rounded-b-2xl bg-navy-900/80" />
            </Tilt>
          </motion.div>

          <FloatingCard
            className="-left-4 top-8 hidden md:block lg:-left-12"
            delay={1.1}
            depth={1.4}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-cyan-glow/70 text-white shadow-glow-blue">
                <Icon name="Sparkles" className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-white">AI Powered</p>
                <p className="text-xs text-mist-400">Workflow</p>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="-right-2 top-1/3 hidden md:block lg:-right-8" delay={1.3} depth={2}>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-electric-500 text-white">
                <Icon name="Gauge" className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-white">
                  Fast <span className="text-cyan-glow">&amp;</span> Responsive
                </p>
                <p className="text-xs text-mist-400">Performance</p>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="-bottom-6 left-10 hidden md:block" delay={1.5} depth={1.1}>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              <p className="font-display text-xs font-medium text-white">
                Latest project: <span className="text-cyan-glow">{projects[0].name}</span>
              </p>
            </div>
          </FloatingCard>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('trust')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist-500 transition-colors hover:text-white md:flex"
        aria-label="Scroll to content"
      >
        <span className="font-display text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          className="block h-8 w-px bg-gradient-to-b from-cyan-glow to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.button>
    </section>
  )
}
