import { motion } from 'framer-motion'
import { Logo } from './ui/Logo'
import { Icon } from '../lib/icons'
import { socials } from '../data/socials'

const footerLinks = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
]

export function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] pt-16 pb-8">
      <div className="aurora-mesh pointer-events-none absolute inset-0 opacity-20" />

      {/* Giant watermark */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-8 text-center">
        <motion.span
          className="font-display text-[18vw] font-bold leading-none text-white/[0.02]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          NOVAWEB
        </motion.span>
      </div>

      <div className="section-shell relative">
        <div className="flex flex-col items-center justify-between gap-10 border-b border-white/[0.06] pb-12 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <motion.button
              onClick={() => scrollTo('top')}
              whileHover={{ scale: 1.03 }}
              className="inline-flex"
              aria-label="Back to top"
            >
              <Logo />
            </motion.button>
            <p className="mt-4 text-sm leading-relaxed text-mist-400">
              Premium AI web development agency building modern, high-converting websites that grow
              businesses.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="mb-4 text-center font-display text-xs font-semibold uppercase tracking-[0.2em] text-mist-500 md:text-left">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5 md:grid-cols-1">
              {footerLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="group flex items-center gap-2 font-display text-sm text-mist-300 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-cyan-glow transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-center md:text-right">
            <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-mist-500">
              Connect
            </p>
            <div className="flex justify-center gap-3 md:justify-end">
              {socials.map((s) => (
                <motion.a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  whileHover={{ y: -4 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-mist-300 transition-colors duration-300 hover:border-cyan-glow/40 hover:text-cyan-glow"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-3 pt-8 md:flex-row">
          <p className="font-display text-xs text-mist-500">
            &copy; {year} NOVAWEB AI. All rights reserved.
          </p>
          <p className="font-display text-xs text-mist-500">
            Crafted with <span className="text-cyan-glow">precision</span> by Savan Karangiya
          </p>
        </div>
      </div>
    </footer>
  )
}
