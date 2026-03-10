import React from 'react'
import { Zap, Shield, Globe, Cpu, Smartphone, Cloud } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  const allServices = [
    { icon: <Zap size={24} />, title: "Ultra Low Latency", description: "Real-time data streaming with sub-millisecond delay for the smoothest experience." },
    { icon: <Shield size={24} />, title: "Enterprise Security", description: "Military-grade encryption and multi-factor authentication for total data safety." },
    { icon: <Globe size={24} />, title: "Global CDN", description: "Distributed servers across 50+ countries to ensure high-speed access everywhere." },
    { icon: <Cpu size={24} />, title: "AI Integration", description: "Smart analytics and automated content moderation using advanced AI models." },
    { icon: <Smartphone size={24} />, title: "Cross-Platform", description: "Seamless experience across iOS, Android, and Web with native-like performance." },
    { icon: <Cloud size={24} />, title: "Cloud Storage", description: "Unlimited cloud scalability to grow your content library without worrying about space." }
  ]

  return (
    <div className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Our <span className="text-blue-600">Premium</span> Services
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          NovaStream provides cutting-edge infrastructure to power your digital content and streaming needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Services