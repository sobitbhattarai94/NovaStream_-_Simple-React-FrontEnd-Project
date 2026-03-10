import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400">404</h1>
      <p className="text-xl mt-4 text-slate-600 dark:text-slate-400">Oops! Yo page ta bhetiyena ta.</p>
      <Link 
        to="/" 
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        Go To Home Page
      </Link>
    </div>
  )
}

export default NotFound