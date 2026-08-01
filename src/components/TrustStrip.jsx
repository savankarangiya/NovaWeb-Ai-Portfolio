import { motion } from 'framer-motion'
import { trustStrip } from '../data/trust'
import { Icon } from '../lib/icons'

const items = [
  ...trustStrip,
  ...trustStrip
]

function Item({ item }) {
  return (
    <div className="flex items-center gap-4 px-8">
      <span className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
        {item.stat}
      </span>
      <span className="font-display text-sm uppercase tracking-[0.2em] text-mist-400">
        {item.label}
      </span>
      <Icon name="Sparkles" className="h-4 w-4 text-cyan-glow/70" />
    </div>
  )
}

export function TrustStrip() {
  return (
    <section id="trust" aria-label="Key numbers and capabilities" className="relative border-y border-white/[0.06] bg-navy-900/40 py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-navy-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-navy-950 to-transparent" />
      <div className="marquee-track">
        {items.map((item, i) => (
          <Item key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </section>
  )
}
