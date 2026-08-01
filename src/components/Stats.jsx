import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'
import { Counter } from './ui/Counter'
import { Icon } from '../lib/icons'
import { stats } from '../data/stats'
export function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden py-20 md:py-28">
      <div className="aurora-mesh pointer-events-none absolute inset-0 opacity-30" />
      <div className="section-shell">
        <div className="glass-strong relative overflow-hidden rounded-[2.5rem] px-8 py-12 md:px-14 md:py-16">
          <div className="grid-bg absolute inset-0 opacity-60" />
          <motion.div
            aria-hidden="true"
            className="aurora-orb -top-24 left-1/4 h-72 w-72 bg-electric-500"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.id} delay={i * 0.08} className="text-center">
                <div className="mb-4 inline-flex">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-glow/20 text-cyan-glow"
                  >
                    <Icon name={stat.icon} className="h-5 w-5" />
                  </motion.div>
                </div>
                {stat.value != null ? (
                  <Counter
                    to={stat.value}
                    suffix={stat.suffix}
                    className="block font-display text-4xl font-bold tracking-tight text-white md:text-5xl"
                  />
                ) : (
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="block font-display text-3xl font-bold tracking-tight text-white md:text-4xl"
                  >
                    {stat.text}
                  </motion.p>
                )}
                <p className="mt-2 font-display text-xs font-medium uppercase tracking-[0.18em] text-mist-400">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
