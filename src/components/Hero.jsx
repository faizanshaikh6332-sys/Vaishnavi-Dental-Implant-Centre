import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Calendar, Phone } from 'lucide-react'

const slides = [
  {
    img: '/hero1.png',
    title: 'Advanced Dental Care',
    highlight: '& Implant Solutions',
    sub: 'Experience painless treatments with modern technology, skilled dentists and hygienic environment.',
  },
  {
    img: '/hero2.png',
    title: 'Your Smile,',
    highlight: 'Our Passion',
    sub: 'State-of-the-art equipment combined with expert care to give you the healthiest, most beautiful smile.',
  },
  {
    img: '/hero3.png',
    title: 'Precision Dentistry',
    highlight: 'for Beautiful Smiles',
    sub: 'From implants to cosmetic dentistry — comprehensive dental solutions tailored just for you.',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (dir) => ({ opacity: 0, scale: 1.05, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, scale: 0.97, x: dir > 0 ? -40 : 40 }),
  }

  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence custom={direction} mode="sync">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          {/* Background Image with slow zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center hero-img-zoom"
            style={{ backgroundImage: `url(${slides[current].img})` }}
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-3xl"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-white/90 text-sm font-semibold">
                  Precision Dentistry for Healthy & Beautiful Smiles
                </span>
              </motion.div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 font-['Outfit']">
                {slides[current].title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
                  {slides[current].highlight}
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
                {slides[current].sub}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="btn-primary group flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold shadow-xl"
                  style={{ boxShadow: '0 0 30px rgba(14,165,233,0.45)' }}
                >
                  <Calendar size={20} className="relative z-10" />
                  <span>Book Appointment</span>
                </a>
                <a
                  href="tel:+919960969658"
                  className="group flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold border-2 border-white/30 text-white glass hover:border-sky-400 hover:bg-sky-500/10 transition-all duration-300 hover:scale-105"
                  style={{ backdropFilter: 'blur(16px)' }}
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mt-12">
                {[
                  { num: '5000+', label: 'Happy Patients' },
                  { num: '10+', label: 'Years Experience' },
                  { num: '15+', label: 'Services' },
                ].map((stat) => (
                  <div key={stat.label} className="text-white">
                    <div className="text-3xl font-black font-['Outfit'] text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
                      {stat.num}
                    </div>
                    <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
            className={`dot ${i === current ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 glass p-3 rounded-full text-white hover:bg-sky-500/30 transition-all duration-300 hover:scale-110 hidden sm:flex"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 glass p-3 rounded-full text-white hover:bg-sky-500/30 transition-all duration-300 hover:scale-110 hidden sm:flex"
      >
        <ChevronRight size={22} />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-8 z-20 hidden lg:flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs writing-mode-vertical font-medium tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  )
}
