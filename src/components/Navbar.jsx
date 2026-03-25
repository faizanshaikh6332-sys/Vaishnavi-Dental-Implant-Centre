import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-blue-500/10 border-b border-blue-100/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M12 2C10.5 2 9.3 2.8 8.8 4c-.3.7-.3 1.5 0 2.2.5 1.2 1.7 2 3.2 2s2.7-.8 3.2-2c.3-.7.3-1.5 0-2.2C14.7 2.8 13.5 2 12 2zM6.5 6C5 6 3.8 7 3.3 8.3 2.6 10 2.8 12 3.8 13.5c.7 1 1.8 1.7 3 1.9l.5 4.6c.2 1.7 1.6 3 3.3 3h2.8c1.7 0 3.1-1.3 3.3-3l.5-4.6c1.2-.2 2.3-.9 3-1.9 1-1.5 1.2-3.5.5-5.2C20.2 7 19 6 17.5 6c-1.2 0-2.3.6-3 1.5C13.8 8.5 13 9 12 9s-1.8-.5-2.5-1.5C8.8 6.6 7.7 6 6.5 6z"/>
              </svg>
            </div>
            <div>
              <div className={`font-bold text-base leading-tight font-['Outfit'] transition-colors duration-300 ${
                scrolled ? 'text-slate-800' : 'text-white'
              }`}>
                Vaishnavi Dental
              </div>
              <div className={`text-xs font-medium transition-colors duration-300 ${
                scrolled ? 'text-sky-500' : 'text-sky-200'
              }`}>
                & Implant Centre
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link text-sm font-semibold transition-colors duration-300 ${
                  scrolled ? 'text-slate-700 hover:text-sky-500' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918390127951"
              className="flex items-center gap-2 text-sm font-semibold text-sky-500 hover:text-teal-500 transition-colors duration-300"
            >
              <Phone size={16} />
              <span className={scrolled ? 'text-slate-700' : 'text-white'}>Call Now</span>
            </a>
            <a
              href="#contact"
              className="btn-primary px-6 py-2.5 rounded-full text-sm font-bold shadow-md"
            >
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors duration-300 ${
              scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-700 font-semibold text-base py-2 border-b border-slate-100 hover:text-sky-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary px-6 py-3 rounded-full text-center font-bold mt-2"
              >
                <span>Book Appointment</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
