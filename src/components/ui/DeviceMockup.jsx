import { useState } from 'react'
import { motion } from 'framer-motion'

export function LaptopFrame({ site, className = '', aspect = 'aspect-[16/10]' }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {/* Screen with fallback preview */}
      <div className={`relative w-full overflow-hidden rounded-xl ${aspect}`}>
        <img
          src={site.previewImage}
          alt={`${site.name} preview`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-navy-900/60 backdrop-blur-sm">
          <p className="font-display text-sm font-semibold text-white">{site.name}</p>
          <p className="text-xs text-mist-400">{site.tagline}</p>
        </div>
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy-900/70">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-cyan-glow" />
          </div>
        )}
        <iframe
          src={site.liveUrl}
          title={`${site.name} live preview`}
          className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </div>
  )
}

export function PhoneFrame({ site, className = '' }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.div
      className={`relative w-40 shrink-0 rounded-[2rem] border border-white/15 bg-navy-900 p-2 shadow-2xl ${className}`}
      style={{ boxShadow: '0 30px 80px -20px rgba(2,6,23,0.9), 0 0 60px -20px rgba(79,124,255,0.5)' }}
    >
      <div className="absolute left-1/2 top-2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white/20" />
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[1.5rem] bg-navy-950">
        <img
          src={site.previewImage}
          alt={`${site.name} mobile preview`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-900/60" />
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy-900/70">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/10 border-t-cyan-glow" />
          </div>
        )}
        <iframe
          src={site.liveUrl}
          title={`${site.name} mobile live preview`}
          className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </motion.div>
  )
}
