import { motion } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { Tilt } from './ui/Tilt'
import { LaptopFrame, PhoneFrame } from './ui/DeviceMockup'
import { RippleButton } from './ui/RippleButton'
import { Icon } from '../lib/icons'
import { projects } from '../data/projects'

function ProjectVisual({ project, index }) {
  return (
    <div className="relative">
      <div
        className={`absolute inset-0 -z-10 h-full rounded-[2rem] bg-gradient-to-br opacity-30 blur-2xl ${project.accent}`}
      />
      <Tilt max={7} scale={1.01} className="rounded-2xl">
        <div className="glass-strong glow-ring rounded-2xl p-3">
          <div className="mb-2 flex items-center justify-between px-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            </div>
            <span className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-mist-400">
              {project.id.split('-')[0]}.vercel.app
            </span>
          </div>
          <LaptopFrame site={project} />
        </div>
        <div className="mx-auto h-3 w-[116%] rounded-b-2xl bg-gradient-to-b from-navy-700 to-navy-800" />
      </Tilt>

      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 8 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute -bottom-8 ${index % 2 === 0 ? '-right-3 md:-right-8' : '-left-3 md:-left-8'} animate-float`}
        style={{ animationDelay: '1s' }}
      >
        <PhoneFrame site={project} />
      </motion.div>

      <motion.span
        className="pointer-events-none absolute -top-8 right-6 font-display text-[6rem] font-bold leading-none text-white/5 md:text-[8rem]"
        whileHover={{ scale: 1.05 }}
        aria-hidden="true"
      >
        0{index + 1}
      </motion.span>
    </div>
  )
}

function ProjectDetails({ project, index }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div>
      <Reveal>
        <span className="eyebrow">
          <Icon name="Rocket" className="h-3.5 w-3.5" />
          {project.category}
        </span>
      </Reveal>

      <Reveal delay={0.1}>
        <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          {project.name}
        </h3>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-1 font-display text-sm font-medium text-cyan-glow">{project.tagline}</p>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-5 text-pretty leading-relaxed text-mist-300">{project.overview}</p>
      </Reveal>

      <div className="mt-7 space-y-4">
        {[
          { label: 'Problem', text: project.problem, icon: 'AlertTriangle' },
          { label: 'Solution', text: project.solution, icon: 'Lightbulb' },
          { label: 'Result', text: project.result, icon: 'TrendingUp' }
        ].map((block, i) => (
          <Reveal key={block.label} delay={0.25 + i * 0.1}>
            <div className="glass rounded-2xl p-4">
              <p className="mb-1.5 flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-cyan-glow">
                <Icon name={block.icon} className="h-3.5 w-3.5" />
                {block.label}
              </p>
              <p className="text-sm leading-relaxed text-mist-300">{block.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.55}>
        <div className="mt-7 flex flex-wrap items-center gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-display text-xs font-medium text-mist-200"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.65}>
        <div className="mt-8 flex flex-wrap gap-4">
          <RippleButton href={project.liveUrl}>
            Live Demo
            <Icon name="ArrowUpRight" className="h-4 w-4" />
          </RippleButton>
          <RippleButton variant="ghost" href={project.githubUrl}>
            <Icon name="Github" className="h-4 w-4" />
            GitHub
          </RippleButton>
          <button
            onClick={() => scrollTo('contact')}
            className="group inline-flex items-center gap-1.5 self-center font-display text-sm font-semibold text-mist-300 transition-colors hover:text-white"
          >
            Start a similar project
            <Icon name="ArrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </Reveal>
    </div>
  )
}

export function FeaturedProjects() {
  return (
    <section id="work" className="relative overflow-hidden py-24 md:py-32">
      <div className="aurora-mesh pointer-events-none absolute inset-0 opacity-30" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured Work"
          title={
            <>
              Websites That Feel{' '}
              <span className="text-gradient">Impossible To Ignore</span>
            </>
          }
          subtitle="Every project is engineered end-to-end — strategy, premium design, motion and performance — then stress-tested against real business goals."
        />

        <div className="space-y-32 md:space-y-40">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`grid items-center gap-16 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="px-2 pb-10 md:px-8">
                <ProjectVisual project={project} index={i} />
              </div>
              <div>
                <ProjectDetails project={project} index={i} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
