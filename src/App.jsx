import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader } from './components/Loader'
import { CustomCursor } from './components/CustomCursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustStrip } from './components/TrustStrip'
import { FeaturedProjects } from './components/FeaturedProjects'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { TechStack } from './components/TechStack'
import { WhyChoose } from './components/WhyChoose'
import { Stats } from './components/Stats'
import { Founder } from './components/Founder'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Icon } from './lib/icons'
import { useReducedMotion } from './hooks/useMotion'

function BackToTop() {
  const reduced = useReducedMotion()
  return (
    <motion.button
      onClick={() => document.getElementById('top')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-navy-900/80 text-cyan-glow shadow-glass backdrop-blur-md transition-colors hover:border-cyan-glow/40 hover:shadow-glow-cyan"
      aria-label="Back to top"
    >
      <Icon name="ArrowUpRight" className="h-5 w-5" />
    </motion.button>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <div className="noise relative min-h-screen overflow-x-clip bg-navy-950">
      <CustomCursor />

      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>

      <Navbar />

      <main>
        <Hero />
        <TrustStrip />
        <FeaturedProjects />
        <Services />
        <Process />
        <TechStack />
        <WhyChoose />
        <Stats />
        <Founder />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
