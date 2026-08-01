import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'
import { Icon } from '../lib/icons'

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 md:py-32">
      <div className="aurora-mesh pointer-events-none absolute inset-0 opacity-20" />
      <div className="section-shell">
        <div className="relative text-center">
          <Reveal>
            <span className="eyebrow">Testimonials</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-5 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.08] tracking-tightest text-white md:text-5xl lg:text-6xl">
              Real Stories, <span className="text-gradient">Coming Soon</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-mist-400 md:text-lg">
              I won't fill this space with invented reviews. Genuine client feedback will appear
              here after real projects are delivered.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Reveal delay={0.15}>
            <div className="glass-strong glow-ring relative overflow-hidden rounded-[2rem] p-10 text-center md:p-14">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-electric-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-glow/15 blur-3xl" />

              <motion.div
                whileHover={{ scale: 1.06, rotate: 3 }}
                className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-500 to-cyan-glow text-white shadow-glow-blue"
              >
                <Icon name="Quote" className="h-7 w-7" />
              </motion.div>

              <p className="text-balance font-display text-xl font-medium leading-relaxed text-white md:text-2xl">
                Real client testimonials will appear here after successful project delivery.
              </p>
              <p className="mt-5 font-display text-sm font-medium text-cyan-glow">
                Quality matters more than invented reviews.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
