import { MapPin, Phone, Clock, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctor', href: '#doctor' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Dental Implants',
  'Root Canal Treatment',
  'Teeth Whitening',
  'Smile Designing',
  'Ceramic Veneers',
  'Cosmetic Dentistry',
  'Teeth Cleaning',
  'Crowns & Bridges',
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white/80 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2C10.5 2 9.3 2.8 8.8 4c-.3.7-.3 1.5 0 2.2.5 1.2 1.7 2 3.2 2s2.7-.8 3.2-2c.3-.7.3-1.5 0-2.2C14.7 2.8 13.5 2 12 2zM6.5 6C5 6 3.8 7 3.3 8.3 2.6 10 2.8 12 3.8 13.5c.7 1 1.8 1.7 3 1.9l.5 4.6c.2 1.7 1.6 3 3.3 3h2.8c1.7 0 3.1-1.3 3.3-3l.5-4.6c1.2-.2 2.3-.9 3-1.9 1-1.5 1.2-3.5.5-5.2C20.2 7 19 6 17.5 6c-1.2 0-2.3.6-3 1.5C13.8 8.5 13 9 12 9s-1.8-.5-2.5-1.5C8.8 6.6 7.7 6 6.5 6z"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold font-['Outfit']">Vaishnavi Dental</div>
                <div className="text-sky-400 text-xs">& Implant Centre</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-6">
              Precision Dentistry for Healthy & Beautiful Smiles. Advanced care with modern technology and a patient-first approach.
            </p>
            <a
              href="#contact"
              className="btn-primary px-6 py-2.5 rounded-full text-sm font-bold inline-block"
            >
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 font-['Outfit']">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/60 hover:text-sky-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 font-['Outfit']">Our Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 hover:text-teal-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 font-['Outfit']">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white/60 leading-relaxed">
                  Sambhaji Nagar, N1, CIDCO<br />
                  Chhatrapati Sambhajinagar<br />
                  Maharashtra 431006
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/60">Mon–Sat: 10 AM – 9 PM</p>
                  <p className="text-sm text-rose-400/80">Sunday: Closed</p>
                </div>
              </div>
              <a href="tel:+918390127951" className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span className="text-sm text-white/60 group-hover:text-sky-400 transition-colors">+91 8390127951</span>
              </a>
              <a href="mailto:info@vaishnavidental.com" className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span className="text-sm text-white/60 group-hover:text-teal-400 transition-colors break-all">info@vaishnavidental.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm text-center">
            © 2025 Vaishnavi Dental Clinic & Implant Centre. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Chhatrapati Sambhajinagar, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  )
}
