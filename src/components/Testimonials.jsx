import { motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'
import { RippleButton } from './ui/RippleButton'
import { Icon } from '../lib/icons'

const inviteCards = [
  {
    icon: 'Star',
    title: 'Real Stories Only',
    desc: 'We never fake social proof. Every testimonial here will come from a real client, a real project and a real result.'
  },
  {
    icon: 'MessageCircle',
    title: 'Your Experience',
    desc: 'When we work together, your words become the next proof point that helps another business say yes.'
  },
  {
    icon: 'TrendingUp',
    title: 'Measurable Impact',
    desc: 'We track bookings, enquiries and conversions — so the results we celebrate are the ones that matter to you.'
  }
]

export function Testimonials() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

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
              Your Business Could Be The{' '}
              <span className="text-gradient">Next Success Story</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-mist-400 md:text-lg">
              We don't publish invented praise. We earn it. The seat below is reserved for the
              words of our very next client.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {inviteCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.12} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="glass glass-card-hover relative flex h-full flex-col items-center gap-5 rounded-3xl p-8 text-center"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Icon key={s} name="Star" className="h-4 w-4 text-cyan-glow" />
                  ))}
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-500/20 to-cyan-glow/20 text-cyan-glow">
                  <Icon name={card.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-mist-400">{card.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 text-center">
            <RippleButton size="lg" onClick={() => scrollTo('contact')}>
              Be Our Next Success Story
              <Icon name="ArrowRight" className="h-4 w-4" />
            </RippleButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
