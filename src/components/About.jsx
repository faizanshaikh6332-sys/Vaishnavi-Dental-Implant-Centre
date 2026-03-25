import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShieldCheck, Cpu, Sparkles, Users } from 'lucide-react'

const highlights = [
  { icon: ShieldCheck, label: 'Skilled Dentist', desc: 'Experienced & certified professionals', color: 'text-sky-500', bg: 'bg-sky-50' },
  { icon: Cpu, label: 'Advanced Technology', desc: 'Modern dental equipment & tools', color: 'text-teal-500', bg: 'bg-teal-50' },
  { icon: Sparkles, label: 'Hygienic Clinic', desc: 'Sterilized & spotless environment', color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { icon: Users, label: 'Friendly Staff', desc: 'Caring and compassionate team', color: 'text-purple-500', bg: 'bg-purple-50' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-500/20 group">
              <img
                src="/about.png"
                alt="Vaishnavi Dental Clinic"
                loading="lazy"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                      <path d="M12 2C10.5 2 9.3 2.8 8.8 4c-.3.7-.3 1.5 0 2.2.5 1.2 1.7 2 3.2 2s2.7-.8 3.2-2c.3-.7.3-1.5 0-2.2C14.7 2.8 13.5 2 12 2zM6.5 6C5 6 3.8 7 3.3 8.3 2.6 10 2.8 12 3.8 13.5c.7 1 1.8 1.7 3 1.9l.5 4.6c.2 1.7 1.6 3 3.3 3h2.8c1.7 0 3.1-1.3 3.3-3l.5-4.6c1.2-.2 2.3-.9 3-1.9 1-1.5 1.2-3.5.5-5.2C20.2 7 19 6 17.5 6c-1.2 0-2.3.6-3 1.5C13.8 8.5 13 9 12 9s-1.8-.5-2.5-1.5C8.8 6.6 7.7 6 6.5 6z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">5000+ Happy Patients</div>
                    <div className="text-white/70 text-sm">Trusted dental care since 2014</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-sky-500 to-teal-500 rounded-2xl p-4 shadow-xl text-white hidden sm:block"
            >
              <div className="text-3xl font-black">10+</div>
              <div className="text-sm font-medium opacity-90">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-4 py-2 rounded-full text-sm font-semibold mb-5 border border-sky-100">
              <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
              About Our Clinic
            </div>

            <h2 className="section-heading text-slate-900 mb-6 font-['Outfit']">
              Why Choose{' '}
              <span className="gradient-text">Vaishnavi Dental</span>?
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Vaishnavi Dental Clinic and Implant Centre provides advanced dental treatments
              using modern equipment and patient-friendly approach. Our goal is to deliver
              healthy and confident smiles with <strong className="text-slate-800">precision and care</strong>.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 bg-white group"
                  >
                    <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-sm">{item.label}</div>
                      <div className="text-slate-500 text-xs mt-1">{item.desc}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="btn-primary inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full font-bold text-base shadow-xl"
            >
              <span>Schedule a Visit</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
