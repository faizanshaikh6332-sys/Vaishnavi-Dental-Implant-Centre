import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Clock, Phone, Mail, Send, Calendar } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
    setForm({ name: '', phone: '', email: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-4 py-2 rounded-full text-sm font-semibold mb-5 border border-sky-100">
            <MapPin size={14} />
            Get In Touch
          </div>
          <h2 className="section-heading text-slate-900 mb-4 font-['Outfit']">
            Book Your <span className="gradient-text">Appointment</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Visit us today or fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Info Cards */}
            {[
              {
                icon: MapPin,
                color: 'text-sky-500',
                bg: 'bg-sky-50',
                title: 'Our Address',
                lines: ['Sambhaji Nagar, N1, CIDCO', 'Chhatrapati Sambhajinagar', 'Maharashtra 431006'],
              },
              {
                icon: Clock,
                color: 'text-teal-500',
                bg: 'bg-teal-50',
                title: 'Clinic Timings',
                lines: ['Monday – Saturday: 10 AM – 9 PM', 'Sunday: Closed'],
              },
              {
                icon: Phone,
                color: 'text-indigo-500',
                bg: 'bg-indigo-50',
                title: 'Call Us',
                lines: ['+91 8390127951'],
                link: 'tel:+918390127951',
              },
              {
                icon: Mail,
                color: 'text-rose-500',
                bg: 'bg-rose-50',
                title: 'Email Us',
                lines: ['info@vaishnavidental.com'],
                link: 'mailto:info@vaishnavidental.com',
              },
            ].map((info) => {
              const Icon = info.icon
              return (
                <div
                  key={info.title}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 ${info.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm mb-1">{info.title}</div>
                    {info.lines.map((line) =>
                      info.link ? (
                        <a key={line} href={info.link} className="block text-slate-600 text-sm hover:text-sky-500 transition-colors">{line}</a>
                      ) : (
                        <div key={line} className="text-slate-600 text-sm">{line}</div>
                      )
                    )}
                  </div>
                </div>
              )
            })}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-2">
              <a
                href="tel:+918390127951"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl border-2 border-sky-200 text-sky-600 font-bold text-sm hover:bg-sky-50 transition-all duration-300 hover:scale-105 bg-white"
              >
                <Phone size={18} /> Call Now
              </a>
              <a
                href="#contact"
                className="flex-1 btn-primary flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm"
                onClick={(e) => { e.preventDefault(); document.getElementById('book-form')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                <Calendar size={18} />
                <span>Book Online</span>
              </a>
            </div>

            {/* Map */}
            <div className="map-container h-52 mt-2 border border-slate-200">
              <iframe
                title="Vaishnavi Dental Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.563984043534!2d75.3433!3d19.8762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb98200000001%3A0xb2e3a67eabb83a48!2sCIDCO%2C%20Chhatrapati%20Sambhajinagar%2C%20Maharashtra%20431006!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            id="book-form"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-['Outfit']">
              Book an Appointment
            </h3>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-teal-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Send className="text-white w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Appointment Request Sent!</h4>
                <p className="text-slate-500">We'll contact you shortly to confirm your appointment.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Required</label>
                  <select name="service" value={form.service} onChange={handleChange} className="form-input">
                    <option value="">Select a Service</option>
                    <option>Dental Implants</option>
                    <option>Root Canal Treatment</option>
                    <option>Teeth Whitening</option>
                    <option>Smile Designing</option>
                    <option>Tooth Extraction</option>
                    <option>Ceramic Veneers</option>
                    <option>Crowns & Bridges</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Teeth Cleaning & Polishing</option>
                    <option>General Checkup</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your dental concern or preferred appointment time..."
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 shadow-xl"
                >
                  <span>Book Appointment</span>
                  <Send size={18} className="relative z-10" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
