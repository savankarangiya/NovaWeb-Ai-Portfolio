import { motion } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { Icon } from '../lib/icons'
import { whyChoose } from '../data/whyChoose'

export function WhyChoose() {
  return (
    <section id="why" className="relative overflow-hidden py-24 md:py-32">
      <div className="aurora-mesh pointer-events-none absolute inset-0 opacity-25" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why Work With Me"
          title={
            <>
              A Developer You Can{' '}
              <span className="text-gradient">Actually Count On</span>
            </>
          }
          subtitle="Six commitments that show up in every project — honest work, clean craft and clear communication."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="group glass-card-hover glass glow-ring relative h-full overflow-hidden rounded-3xl p-7"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-electric-500/[0.06] via-transparent to-cyan-glow/[0.06] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-cyan-glow text-white shadow-glow-blue transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </div>
                  <span className="font-display text-xs font-semibold text-white/15">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mb-2 font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-mist-400">{item.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
