import { motion } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { Icon } from '../lib/icons'
import { services } from '../data/services'

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="aurora-mesh pointer-events-none absolute inset-0 opacity-20" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Everything Your Brand Needs To{' '}
              <span className="text-gradient">Win Online</span>
            </>
          }
          subtitle="From landing pages to full AI-integrated platforms — each service is delivered with the same obsessive standard of craft."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="group glass-card-hover glass relative h-full overflow-hidden rounded-3xl p-7"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-electric-500/0 blur-3xl transition-all duration-700 group-hover:bg-electric-500/25" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-glow/0 blur-3xl transition-all duration-700 group-hover:bg-cyan-glow/20" />

                <div className="relative mb-6 inline-flex">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-500/20 to-cyan-glow/20 text-cyan-glow transition-all duration-500 group-hover:from-electric-500 group-hover:to-cyan-glow group-hover:text-white group-hover:shadow-glow-blue">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="relative mb-3 font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="relative mb-6 text-sm leading-relaxed text-mist-400">{service.desc}</p>

                <ul className="relative flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1 text-xs font-medium text-mist-300"
                    >
                      <Icon name="Check" className="h-3 w-3 text-cyan-glow" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
