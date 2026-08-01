import { motion } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { Icon } from '../lib/icons'
import { founderCapabilities, founderFocus } from '../data/socials'

const roles = ['AI Web Developer', 'React Developer', 'Frontend Engineer']

function PortraitPlaceholder() {
  return (
    <div className="glass-strong glow-ring relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem]">
      <div className="aurora-mesh absolute inset-0" />
      <motion.div
        aria-hidden="true"
        className="aurora-orb left-1/4 top-8 h-52 w-52 bg-electric-500"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Stylized portrait silhouette */}
      <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="avatar-grad" x1="0" y1="0" x2="400" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4f7cff" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <g transform="translate(200 214)">
          <circle cx="0" cy="-46" r="58" fill="url(#avatar-grad)" opacity="0.95" />
          <path d="M-120 210c0-72 54-120 120-120s120 48 120 120l-240 0z" fill="url(#avatar-grad)" opacity="0.85" />
        </g>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

      <motion.div
        className="glass absolute bottom-4 left-4 right-4 rounded-2xl p-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <p className="font-display text-sm font-semibold text-white">Savan Karangiya</p>
        <p className="text-xs text-mist-300">Founder — NOVAWEB AI</p>
      </motion.div>
    </div>
  )
}

export function Founder() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="aurora-mesh pointer-events-none absolute inset-0 opacity-20" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Hi, I'm{' '}
              <span className="text-gradient">Savan Karangiya</span>
            </>
          }
          subtitle="An AI-focused Frontend Developer passionate about modern, responsive and high-performance websites."
        />

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <PortraitPlaceholder />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <h3 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                Savan Karangiya
              </h3>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-3 flex flex-wrap gap-2">
                {roles.map((r) => (
                  <span
                    key={r}
                    className="rounded-full border border-cyan-glow/25 bg-cyan-glow/[0.07] px-3.5 py-1.5 font-display text-xs font-medium text-cyan-glow"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 space-y-4 text-pretty leading-relaxed text-mist-300">
                <p>
                  Hi, I'm Savan Karangiya — an AI-focused Frontend Developer passionate about
                  creating modern, responsive and high-performance websites.
                </p>
                <p>
                  I specialize in <span className="font-semibold text-white">React</span>,{' '}
                  <span className="font-semibold text-white">Vite</span>,{' '}
                  <span className="font-semibold text-white">Tailwind CSS</span> and AI-assisted
                  development workflows.
                </p>
                <p>
                  I'm currently building premium portfolio projects while helping businesses
                  establish a strong online presence.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {founderCapabilities.map((a) => (
                  <motion.div
                    key={a.label}
                    whileHover={{ y: -4 }}
                    className="glass flex items-center gap-3 rounded-2xl p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-electric-500/20 to-cyan-glow/20 text-cyan-glow">
                      <Icon name={a.icon} className="h-4 w-4" />
                    </div>
                    <p className="font-display text-xs font-medium leading-snug text-mist-200">
                      {a.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="relative mt-10 border-l border-white/10 pl-6">
                {founderFocus.map((t, i) => (
                  <motion.div
                    key={t.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
                    className="relative mb-6 last:mb-0"
                  >
                    <span className="absolute -left-[27px] top-1 h-2 w-2 rounded-full bg-cyan-glow shadow-glow-cyan" />
                    <p className="font-display text-sm font-semibold text-white">{t.title}</p>
                    <p className="mt-0.5 text-sm text-mist-400">{t.desc}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
