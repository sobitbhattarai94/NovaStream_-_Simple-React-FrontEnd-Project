import React from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Input from '../components/ui/Input'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message sent successfully! (Demo)")
  }

  return (
    <div className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Hami sadhai help garna ready chau. Kunei pani technical query wa project collaboration ko lagi contact garnu hola.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Email Us</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">hello@novastream.ai</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Office</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Full Name" placeholder="John Doe" name="name" />
              <Input label="Email" type="email" placeholder="john@example.com" name="email" />
            </div>
            <Input label="Subject" placeholder="Project Inquiry" name="subject" />
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Message</label>
              <textarea 
                rows="4" 
                placeholder="How can we help you?"
                className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-900 dark:text-white"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-4 w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-500/20"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact