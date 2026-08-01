import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '../../lib/icons'
import { useReducedMotion } from '../../hooks/useMotion'

function Screenshot({ src, alt, className = '', priority = false }) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-navy-900">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-cyan-glow" />
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...(priority ? { fetchpriority: 'high' } : {})}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover object-top transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}

export function LaptopFrame({ site, className = '', aspect = 'aspect-[16/10]', priority = false }) {
  const reduced = useReducedMotion()
  const overlay = (
    <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex translate-y-full items-center justify-center gap-2 bg-navy-950/70 py-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-transform duration-500 group-hover:translate-y-0">
      <Icon name="ExternalLink" className="h-3.5 w-3.5 text-cyan-glow" />
      View live site
    </span>
  )

  return (
    <motion.a
      href={site.liveUrl}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Open ${site.name} live site in a new tab`}
      className={`group relative block overflow-hidden rounded-xl ${aspect}`}
      whileHover={reduced ? {} : { scale: 1.012 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <Screenshot src={site.previewImage} alt={`${site.name} — desktop website preview`} priority={priority} />
      <span className="pointer-events-none absolute inset-0 z-[5] rounded-xl ring-1 ring-inset ring-white/10" />
      {overlay}
    </motion.a>
  )
}

export function PhoneFrame({ site, className = '', priority = false }) {
  const reduced = useReducedMotion()

  return (
    <motion.a
      href={site.liveUrl}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Open ${site.name} mobile site in a new tab`}
      whileHover={reduced ? {} : { y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`group relative block w-40 shrink-0 rounded-[2rem] border border-white/15 bg-navy-900 p-2 shadow-2xl ${className}`}
      style={{ boxShadow: '0 30px 80px -20px rgba(2,6,23,0.9), 0 0 60px -20px rgba(79,124,255,0.5)' }}
    >
      <div className="absolute left-1/2 top-2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white/20" />
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[1.5rem] bg-navy-950">
        <Screenshot src={site.previewMobile} alt={`${site.name} — mobile website preview`} priority={priority} />
      </div>
      <span className="pointer-events-none absolute inset-0 z-[5] rounded-[2rem] ring-1 ring-inset ring-white/10 transition-colors duration-500 group-hover:ring-cyan-glow/40" />
    </motion.a>
  )
}
