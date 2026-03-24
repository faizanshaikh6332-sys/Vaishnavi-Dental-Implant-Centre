import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Stethoscope, Star, CheckCircle } from 'lucide-react'

const specializations = [
  'Dental Implants',
  'Cosmetic Dentistry',
  'Smile Designing',
  'Root Canal Specialist',
  'Ceramic Veneers',
]

export default function Doctor() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="doctor" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold mb-5 border border-indigo-100">
            <Stethoscope size={14} />
            Meet Your Doctor
          </div>
          <h2 className="section-heading text-slate-900 mb-4 font-['Outfit']">
            Our Expert <span className="gradient-text">Dental Specialist</span>
          </h2>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-teal-100 rounded-3xl transform rotate-3" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-500/20">
              <img
                src="/doctor.png"
                alt="Chief Dentist"
                loading="lazy"
                className="w-full h-[520px] object-cover object-top"
              />
              {/* Experience badge */}
              <div className="absolute bottom-6 right-6">
                <div className="bg-white rounded-2xl p-4 shadow-xl text-center">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-500 font-['Outfit']">10+</div>
                  <div className="text-slate-600 text-sm font-medium">Years Exp.</div>
                </div>
              </div>
            </div>

            {/* Rating floating */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-4 shadow-xl text-white"
            >
              <div className="flex items-center gap-1 text-lg font-bold">
                <Star className="fill-white w-5 h-5" /> 5.0
              </div>
              <div className="text-xs opacity-90">Patient Rating</div>
            </motion.div>
          </motion.div>

          {/* Doctor Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-3 py-1.5 rounded-full text-sm font-semibold mb-4 border border-sky-100">
              Chief Dental Surgeon
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-2 font-['Outfit']">
              Dr. Vaishnavi Patil
            </h3>
            <p className="text-sky-500 font-semibold text-lg mb-6">
              BDS, MDS — Implantology & Cosmetic Dentistry
            </p>

            <p className="text-slate-600 leading-relaxed mb-8 text-base">
              With over <strong className="text-slate-800">10+ years of experience</strong>, Dr. Vaishnavi Patil is
              a leading specialist in dental implants and cosmetic dentistry. Trained in the latest
              techniques, she combines artistry with precision to create beautiful, natural-looking smiles.
              Her patient-first philosophy ensures every treatment is comfortable and anxiety-free.
            </p>

            {/* Specializations */}
            <div className="mb-8">
              <div className="text-slate-700 font-bold mb-4 flex items-center gap-2">
                <Award className="text-sky-500 w-5 h-5" /> Specializations
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specializations.map((spec) => (
                  <div key={spec} className="flex items-center gap-3 group">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 font-medium text-sm">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { num: '5000+', label: 'Patients Treated' },
                { num: '500+', label: 'Implants Done' },
                { num: '10+', label: 'Awards Won' },
              ].map((s) => (
                <div key={s.label} className="text-center bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <div className="text-2xl font-black gradient-text font-['Outfit']">{s.num}</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base shadow-xl"
            >
              <span>Book Consultation</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
