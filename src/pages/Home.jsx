import React from 'react'
import { ArrowRight, Play, Zap, Shield, Globe, Users, Server, Activity } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'

const Home = () => {
  // Featured features for the home page (Reusing ServiceCard)
  const featuredServices = [
    { 
      icon: <Zap size={24} />, 
      title: "Lightning Fast", 
      description: "Experience zero-lag streaming with our optimized global delivery network built on Edge computing." 
    },
    { 
      icon: <Shield size={24} />, 
      title: "Secure by Default", 
      description: "Your data is protected with end-to-end AES-256 encryption and advanced DDoS protection." 
    },
    { 
      icon: <Globe size={24} />, 
      title: "Global Reach", 
      description: "Connect with your audience anywhere in the world with our 50+ edge locations." 
    }
  ]

  const stats = [
    { icon: <Users className="text-blue-600" />, label: "Active Users", value: "1M+" },
    { icon: <Server className="text-blue-600" />, label: "Global Nodes", value: "500+" },
    { icon: <Activity className="text-blue-600" />, label: "Uptime", value: "99.99%" },
  ]

  return (
    <div className="flex flex-col w-full">
      {/* --- Section 1: Hero Section --- */}
      <section className="relative overflow-hidden py-20 px-4 md:py-32 bg-radial-[at_top_right] from-blue-50 to-white dark:from-blue-900/10 dark:to-slate-950">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-bold mb-6">
            v4.0 is now live 🚀
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Next Gen <span className="text-blue-600">Streaming</span> <br /> 
            Infrastructure
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            NovaStream provides the most powerful tools for creators and developers to deliver 
            high-quality content globally. Built for speed, security, and scalability.
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link 
              to="/services" 
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-2"
            >
              Explore Services <ArrowRight size={20} />
            </Link>
            <button className="px-8 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all flex items-center gap-2">
              Watch Demo <Play size={20} fill="currentColor" />
            </button>
          </div>
        </div>
      </section>

      {/* --- Section 2: Stats Banner --- */}
      <section className="max-w-7xl mx-auto w-full px-4 -mt-10 mb-20 relative z-20">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center justify-center md:justify-start gap-6">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900 dark:text-white">{stat.value}</div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 3: Featured Services (Reusing ServiceCard) --- */}
      <section className="max-w-7xl mx-auto px-4 pb-32 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Why Choose NovaStream?</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg">
              We provide enterprise-grade infrastructure at your fingertips.
            </p>
          </div>
          <Link 
            to="/services" 
            className="group text-blue-600 font-bold flex items-center gap-2 text-lg hover:underline"
          >
            See all features <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((item, i) => (
            <ServiceCard 
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* --- Section 4: Call to Action --- */}
      <section className="bg-blue-600 py-20 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to scale your content?</h2>
          <p className="text-blue-100 text-lg mb-10 opacity-90">
            Join thousands of developers and creators who trust NovaStream for their global infrastructure.
          </p>
          <Link 
            to="/contact" 
            className="px-10 py-5 bg-white text-blue-600 rounded-full font-black text-lg hover:bg-slate-100 transition-colors inline-block"
          >
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home