import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { Icon } from '../lib/icons'
import { processSteps } from '../data/process'
import { useReducedMotion } from '../hooks/useMotion'

export function Process() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 60%', 'end 70%']
  })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 })

  return (
    <section id="process" className="relative overflow-hidden py-24 md:py-32">
      <div className="aurora-mesh pointer-events-none absolute inset-0 opacity-15" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Development Process"
          title={
            <>
              From Idea To Launch,{' '}
              <span className="text-gradient">Flawlessly Executed</span>
            </>
          }
          subtitle="A clear seven-stage pipeline that removes guesswork and keeps you informed from first call to launch."
        />

        <div ref={ref} className="relative mx-auto max-w-4xl">
          {/* Track */}
          <div className="absolute left-6 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            {!reduced && (
              <motion.div
                className="w-px bg-gradient-to-b from-electric-400 via-cyan-glow to-violet-600"
                style={{ scaleY: progress, originY: 0 }}
              />
            )}
          </div>

          <div className="space-y-10 md:space-y-16">
            {processSteps.map((step, i) => {
              const left = i % 2 === 0
              return (
                <div key={step.id} className="relative">
                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.1 }}
                    className="absolute left-6 top-8 z-10 -translate-x-1/2 md:left-1/2"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-glow/40 bg-navy-900 text-cyan-glow shadow-glow-cyan">
                      <Icon name={step.icon} className="h-5 w-5" />
                    </div>
                  </motion.div>

                  <Reveal
                    x={left ? -24 : 24}
                    y={0}
                    className={`ml-16 md:w-[calc(50%-3rem)] ${
                      left ? 'md:ml-0 md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    <div className="glass group relative rounded-2xl p-6 transition-colors duration-500 hover:border-electric-500/40">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-display text-4xl font-bold text-white/10 transition-colors duration-500 group-hover:text-electric-500/30">
                          {step.num}
                        </span>
                        <span className="rounded-full bg-cyan-glow/10 px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-glow">
                          Step {step.num}
                        </span>
                      </div>
                      <h3 className="mb-2 font-display text-lg font-semibold text-white">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-mist-400">{step.desc}</p>
                    </div>
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
