import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  id
}) {
  const alignment =
    align === 'center'
      ? 'items-center text-center mx-auto'
      : 'items-start text-left'

  return (
    <div className={`mb-16 flex max-w-3xl flex-col gap-5 md:mb-20 ${alignment} ${className}`} id={id}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="text-balance font-display text-4xl font-bold leading-[1.08] tracking-tightest text-white md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="text-pretty text-base leading-relaxed text-mist-400 md:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
