import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Priya Sharma',
    role: 'Dental Implant Patient',
    rating: 5,
    text: 'Doctor explains everything clearly before treatment. I was nervous about implants but the whole experience was painless and professional. Highly recommend!',
    avatar: 'PS',
    color: 'from-sky-500 to-teal-500',
  },
  {
    name: 'Rahul Deshmukh',
    role: 'Smile Designing Patient',
    rating: 5,
    text: 'Highly skilled doctors with excellent service. My smile transformation is absolutely stunning. The clinic is very modern and hygienic. Hats off to the entire team!',
    avatar: 'RD',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Sneha Jadhav',
    role: 'Root Canal Patient',
    rating: 5,
    text: 'Very professional clinic with modern treatment. I was afraid of root canal but it was completely painless. The staff is so friendly and caring. Best dental clinic in the city.',
    avatar: 'SJ',
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Amir Khan',
    role: 'Teeth Whitening Patient',
    rating: 5,
    text: 'The clinic has a very calming atmosphere and the doctor is extremely skilled. My teeth are now several shades whiter and I couldn\'t be happier with the results!',
    avatar: 'AK',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    name: 'Meera Patil',
    role: 'Cosmetic Dentistry Patient',
    rating: 5,
    text: 'Wonderful experience from start to finish. The doctor is patient, knowledgeable and takes extra care to make sure you\'re comfortable throughout. Five stars without doubt!',
    avatar: 'MP',
    color: 'from-rose-500 to-red-500',
  },
]

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((p) => (p + 1) % reviews.length)
  }, [])

  const prev = () => {
    setDirection(-1)
    setCurrent((p) => (p - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next])

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -80 : 80 }),
  }

  return (
    <section id="reviews" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <Star className="w-4 h-4 fill-amber-400" />
            Patient Reviews
          </div>
          <h2 className="section-heading text-white mb-4 font-['Outfit']">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">Patients Say</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white/80 text-lg font-semibold">5.0 / 5.0</span>
            <span className="text-white/50 text-sm">(500+ Google Reviews)</span>
          </div>
        </motion.div>

        {/* Slider */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px] overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="glass rounded-3xl p-8 sm:p-10 text-white relative"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-8 w-12 h-12 text-white/10" />

                {/* Stars */}
                <div className="flex mb-5">
                  {[...Array(reviews[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-white/90 text-lg leading-relaxed mb-8 font-medium">
                  "{reviews[current].text}"
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reviews[current].color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg`}>
                    {reviews[current].avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">{reviews[current].name}</div>
                    <div className="text-white/50 text-sm">{reviews[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full glass text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2 items-center">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`dot ${i === current ? 'active' : 'bg-white/30'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full glass text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {[
            { num: '5000+', label: 'Happy Patients' },
            { num: '10+', label: 'Years Experience' },
            { num: '500+', label: 'Google Reviews' },
            { num: '100%', label: 'Satisfaction Rate' },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5 text-center">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400 mb-1 font-['Outfit']">
                {s.num}
              </div>
              <div className="text-white/60 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
