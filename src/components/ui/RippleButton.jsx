import { useState } from 'react'
import { Magnetic } from './Magnetic'

export function RippleButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  ...props
}) {
  const [ripples, setRipples] = useState([])

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-[15px]',
    lg: 'px-9 py-4 text-base'
  }

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2.2
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    const id = Date.now() + Math.random()
    setRipples((r) => [...r, { id, x, y, size }])
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700)
  }

  const classes = `${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} ${sizes[size]} overflow-hidden select-none ${className}`

  const content = (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full bg-white/30 animate-[ripple_0.7s_ease-out_forwards]"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            animationName: 'ripple'
          }}
        />
      ))}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  )

  if (href) {
    return (
      <Magnetic strength={0.22}>
        <a
          href={href}
          className={classes}
          onClick={addRipple}
          {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
          {...props}
        >
          {content}
        </a>
      </Magnetic>
    )
  }

  return (
    <Magnetic strength={0.22}>
      <button className={classes} onClick={(e) => { addRipple(e); onClick?.(e) }} {...props}>
        {content}
      </button>
    </Magnetic>
  )
}
