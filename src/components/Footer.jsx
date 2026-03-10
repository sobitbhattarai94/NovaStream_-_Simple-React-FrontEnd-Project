import React from 'react'
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { title: "Platform", links: ["Features", "Security", "Pricing"] },
    { title: "Company", links: ["About Us", "Careers", "Contact"] },
    { title: "Resources", links: ["Documentation", "API Reference", "Status"] }
  ]

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-black text-blue-600 dark:text-blue-400">
              NovaStream
            </Link>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">
              Building the future of global streaming infrastructure. Fast, secure, and infinitely scalable.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://github.com/sobitbhattarai94" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-blue-600 transition-colors"><Github size={20} /></a>
              <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-blue-600 transition-colors"><Twitter size={20} /></a>
              <a href="https://www.linkedin.com/in/hari-bhattarai-2a25b6251" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 group">
                      {link} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {currentYear} NovaStream AI. Built for Tech Expo 2026.
          </p>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer