import React from 'react'

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-2xl">
      <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 group-hover:text-blue-50 transition-colors leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default ServiceCard