import React from 'react'

const Input = ({ label, type = "text", placeholder, name }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-900 dark:text-white"
        required
      />
    </div>
  )
}

export default Input