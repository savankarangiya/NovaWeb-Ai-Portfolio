import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { Magnetic } from './ui/Magnetic'
import { Icon } from '../lib/icons'
import { socials } from '../data/socials'

const contactChannels = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    sub: '+91 78618 85995',
    href: 'https://wa.me/917861885995',
    icon: 'MessageCircle'
  },
  {
    id: 'email',
    label: 'Email',
    sub: 'savanahir.dev@gmail.com',
    href: 'mailto:savanahir.dev@gmail.com',
    icon: 'Mail'
  },
  {
    id: 'github',
    label: 'GitHub',
    sub: 'SavanKarangiya',
    href: 'https://github.com/savankarangiya',
    icon: 'Github'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    sub: 'Savan Karangiya',
    href: 'https://www.linkedin.com/in/savan-karangiya-a55925272/',
    icon: 'Linkedin'
  }
]

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email'
    if (form.message.trim().length < 10) e.message = 'Tell us a bit more (10+ characters)'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('sending')
    window.location.href = mailto
    setTimeout(() => setStatus('sent'), 1600)
  }

  const handle = (key) => (ev) => setForm({ ...form, [key]: ev.target.value })

  const mailto = `mailto:savanahir.dev@gmail.com?subject=${encodeURIComponent(
    `Project enquiry from ${form.name || 'portfolio visitor'}`
  )}&body=${encodeURIComponent(form.message)}`

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="aurora-mesh pointer-events-none absolute inset-0 opacity-25" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's Build Something{' '}
              <span className="text-gradient">Unforgettable</span>
            </>
          }
          subtitle="Tell me about your project and I'll get back to you with a clear plan and honest timeline."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Channels */}
          <div className="space-y-4">
            {contactChannels.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.08}>
                <Magnetic strength={0.12}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer noopener"
                    className="group glass glass-card-hover flex items-center gap-4 rounded-2xl p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-cyan-glow text-white shadow-glow-blue">
                      <Icon name={c.icon} className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-sm font-semibold text-white">{c.label}</p>
                      <p className="truncate text-xs text-mist-400">{c.sub}</p>
                    </div>
                    <Icon name="ArrowUpRight" className="ml-auto h-4 w-4 shrink-0 text-mist-500 transition-colors group-hover:text-white" />
                  </a>
                </Magnetic>
              </Reveal>
            ))}

            <Reveal delay={0.4}>
              <a
                href="/resume.pdf"
                download="Savan-Karangiya-Resume.pdf"
                className="btn-ghost w-full rounded-2xl px-6 py-4"
              >
                <Icon name="FileText" className="h-4 w-4 text-cyan-glow" />
                Download Resume
              </a>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="glass rounded-2xl p-5">
                <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-mist-400">
                  Quick links
                </p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-mist-300 transition-all duration-300 hover:border-cyan-glow/40 hover:text-cyan-glow hover:shadow-glow-cyan"
                    >
                      <Icon name={s.icon} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.15}>
            <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 md:p-10">
              <div className="aurora-orb -right-16 -top-16 h-56 w-56 bg-electric-500/50 animate-pulse-glow" />

              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex min-h-[380px] flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.2 }}
                      className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-electric-500 to-cyan-glow text-white shadow-glow-blue"
                    >
                      <Icon name="Check" className="h-9 w-9" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-white">Message Received</h3>
                    <p className="mt-3 max-w-sm text-sm text-mist-400">
                      Thanks {form.name.split(' ')[0] || 'for reaching out'}! I'll get back to you
                      as soon as possible with next steps.
                    </p>
                    <button
                      onClick={() => {
                        setStatus('idle')
                        setForm({ name: '', email: '', message: '' })
                      }}
                      className="mt-8 font-display text-sm font-semibold text-cyan-glow hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={onSubmit}
                    className="relative space-y-5"
                    noValidate
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="c-name" className="mb-2 block font-display text-xs font-semibold uppercase tracking-[0.18em] text-mist-400">
                          Name
                        </label>
                        <input
                          id="c-name"
                          type="text"
                          className="field"
                          placeholder="Jane Doe"
                          value={form.name}
                          onChange={handle('name')}
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="c-email" className="mb-2 block font-display text-xs font-semibold uppercase tracking-[0.18em] text-mist-400">
                          Email
                        </label>
                        <input
                          id="c-email"
                          type="email"
                          className="field"
                          placeholder="jane@company.com"
                          value={form.email}
                          onChange={handle('email')}
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="c-message" className="mb-2 block font-display text-xs font-semibold uppercase tracking-[0.18em] text-mist-400">
                        Project Details
                      </label>
                      <textarea
                        id="c-message"
                        rows={6}
                        className="field resize-none"
                        placeholder="Tell us about your business, goals and timeline..."
                        value={form.message}
                        onChange={handle('message')}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-1">
                      <motion.button
                        type="submit"
                        disabled={status === 'sending'}
                        whileTap={{ scale: 0.97 }}
                        className="btn-primary px-8 py-4 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {status === 'sending' ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Icon name="Send" className="h-4 w-4" />
                          </>
                        )}
                      </motion.button>
                      <a href={mailto} className="font-display text-sm font-semibold text-mist-300 transition-colors hover:text-cyan-glow">
                        or email directly
                      </a>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
