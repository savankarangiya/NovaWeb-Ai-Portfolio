import { motion } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { Icon } from '../lib/icons'
import {
  ReactIcon,
  TailwindIcon,
  JavaScriptIcon,
  HtmlIcon,
  CssIcon,
  GitIcon,
  GithubIcon,
  ViteIcon,
  MotionIcon
} from '../lib/brandIcons'
import { techStack } from '../data/techStack'

const brandMap = {
  React: ReactIcon,
  'Tailwind CSS': TailwindIcon,
  JavaScript: JavaScriptIcon,
  HTML: HtmlIcon,
  CSS: CssIcon,
  Git: GitIcon,
  GitHub: GithubIcon,
  Vite: ViteIcon,
  'Framer Motion': MotionIcon
}

export function TechStack() {
  return (
    <section id="stack" className="relative overflow-hidden py-24 md:py-32">
      <div className="aurora-mesh pointer-events-none absolute inset-0 opacity-20" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              Engineered With A{' '}
              <span className="text-gradient">Modern Arsenal</span>
            </>
          }
          subtitle="The tools behind the craft — battle-tested, fast and purpose-picked for premium results."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {techStack.map((tech, i) => {
            const Brand = brandMap[tech.name]
            return (
              <Reveal key={tech.name} delay={(i % 4) * 0.08} className="h-full">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  className="glass group relative flex h-full flex-col items-center gap-3 rounded-2xl p-6 text-center"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-electric-500/0 to-cyan-glow/0 opacity-0 transition-opacity duration-500 group-hover:from-electric-500/15 group-hover:to-cyan-glow/15 group-hover:opacity-100" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.04] text-cyan-glow transition-all duration-500 group-hover:scale-110 group-hover:text-white">
                    {Brand ? (
                      <Brand className="h-7 w-7" />
                    ) : (
                      <Icon name={tech.icon} className="h-7 w-7" />
                    )}
                  </div>
                  <div className="relative">
                    <p className="font-display text-sm font-semibold text-white">{tech.name}</p>
                    <p className="mt-0.5 text-[11px] uppercase tracking-wider text-mist-500">
                      {tech.group}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
