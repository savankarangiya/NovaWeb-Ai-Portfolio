import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { Icon } from '../lib/icons'
import { faqs } from '../data/faqs'
import { useReducedMotion } from '../hooks/useMotion'

export function FAQ() {
  const [open, setOpen] = useState(0)
  const reduced = useReducedMotion()

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="aurora-mesh pointer-events-none absolute inset-0 opacity-15" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="text-gradient">Answered</span>
            </>
          }
          subtitle="Everything you might want to know before we start building something exceptional together."
        />

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className={`glass overflow-hidden rounded-2xl transition-colors duration-500 ${
                  isOpen ? 'border-electric-500/40' : ''
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`font-display text-base font-semibold md:text-lg ${isOpen ? 'text-white' : 'text-mist-100'}`}>
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                      isOpen
                        ? 'border-cyan-glow/50 bg-cyan-glow/10 text-cyan-glow'
                        : 'border-white/10 bg-white/5 text-mist-300'
                    }`}
                  >
                    <Icon name="Plus" className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduced ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-mist-400 md:text-base">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
