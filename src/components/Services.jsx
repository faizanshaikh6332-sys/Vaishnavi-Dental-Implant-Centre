import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Smile, Activity, Sparkles, Star, Scissors, Gem, Crown, Camera, Droplets
} from 'lucide-react'

const services = [
  { icon: Crown, label: 'Dental Implants', desc: 'Permanent tooth replacement with natural-looking implants.', color: 'from-sky-500 to-sky-600', glow: 'shadow-sky-500/30' },
  { icon: Activity, label: 'Root Canal Treatment', desc: 'Pain-free removal of infection to save your natural tooth.', color: 'from-rose-500 to-rose-600', glow: 'shadow-rose-500/30' },
  { icon: Sparkles, label: 'Teeth Whitening', desc: 'Professional whitening for a radiant, confident smile.', color: 'from-amber-500 to-amber-600', glow: 'shadow-amber-500/30' },
  { icon: Smile, label: 'Smile Designing', desc: 'Custom smile makeover combining multiple aesthetic treatments.', color: 'from-teal-500 to-teal-600', glow: 'shadow-teal-500/30' },
  { icon: Scissors, label: 'Tooth Extraction', desc: 'Safe, comfortable removal of damaged or wisdom teeth.', color: 'from-slate-500 to-slate-600', glow: 'shadow-slate-500/30' },
  { icon: Gem, label: 'Ceramic Veneers', desc: 'Ultra-thin porcelain shells for a flawless smile.', color: 'from-purple-500 to-purple-600', glow: 'shadow-purple-500/30' },
  { icon: Crown, label: 'Crowns & Bridges', desc: 'Durable dental crowns and bridges for restored function.', color: 'from-indigo-500 to-indigo-600', glow: 'shadow-indigo-500/30' },
  { icon: Camera, label: 'Cosmetic Dentistry', desc: 'Complete aesthetic dental care for a beautiful, natural look.', color: 'from-pink-500 to-pink-600', glow: 'shadow-pink-500/30' },
  { icon: Droplets, label: 'Teeth Cleaning', desc: 'Professional scaling, polishing and oral hygiene care.', color: 'from-cyan-500 to-cyan-600', glow: 'shadow-cyan-500/30' },
]

const beforeAfter = [
  { label: 'Teeth Whitening', before: 'bg-yellow-200', after: 'bg-white' },
  { label: 'Smile Designing', before: 'bg-gray-300', after: 'bg-sky-50' },
  { label: 'Dental Implants', before: 'bg-slate-300', after: 'bg-teal-50' },
]

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [sliderPos, setSliderPos] = useState([50, 50, 50])

  const handleSlider = (i, e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100))
    setSliderPos((prev) => { const n = [...prev]; n[i] = x; return n })
  }

  return (
    <section id="services" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold mb-5 border border-teal-100">
            <Star size={14} className="fill-teal-500 text-teal-500" />
            Our Services
          </div>
          <h2 className="section-heading text-slate-900 mb-4 font-['Outfit']">
            Comprehensive <span className="gradient-text">Dental Solutions</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From routine checkups to advanced implants — we offer a full range of dental treatments with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`service-card bg-white rounded-3xl p-7 border border-slate-100 hover:border-transparent shadow-sm hover:shadow-2xl ${svc.glow} group cursor-pointer`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5 shadow-lg ${svc.glow} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 text-xl mb-2 font-['Outfit'] group-hover:text-sky-600 transition-colors duration-300">
                  {svc.label}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sky-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more →
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Before / After Gallery */}
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-slate-900 mb-3 font-['Outfit']">
            Treatment <span className="gradient-text">Transformations</span>
          </h3>
          <p className="text-slate-500">Drag the slider to see before & after results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beforeAfter.map((item, i) => (
            <div
              key={item.label}
              className="before-after-container h-52 cursor-ew-resize select-none bg-slate-200 relative rounded-2xl"
              onMouseMove={(e) => handleSlider(i, e)}
              onTouchMove={(e) => {
                const t = e.touches[0]
                const rect = e.currentTarget.getBoundingClientRect()
                const x = Math.max(0, Math.min(100, ((t.clientX - rect.left) / rect.width) * 100))
                setSliderPos((prev) => { const n = [...prev]; n[i] = x; return n })
              }}
            >
              {/* Before */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-400">
                <div className="text-slate-600 font-bold text-lg opacity-50">BEFORE</div>
              </div>
              {/* After */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-100 to-teal-100 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos[i]}% 0 0)` }}
              >
                <div className="gradient-text font-bold text-lg">AFTER</div>
              </div>
              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
                style={{ left: `${sliderPos[i]}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center text-xs text-slate-600 font-bold border-2 border-sky-400">
                  ◁▷
                </div>
              </div>
              {/* Label */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
