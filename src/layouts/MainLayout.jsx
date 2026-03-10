// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const MainLayout = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
//       {/* Navbar sadhai mathi bascha */}
//       <Navbar />

//       {/* Outlet bhanya 'Khali Thau' ho, jahan aru pages aayerah baschan */}
//       <main className="flex-grow">
//         <Outlet />
//       </main>

//       {/* Footer sadhai muni bascha */}
//       <Footer />
//     </div>
//   )
// }

// export default MainLayout

import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <Navbar />
      {/* outlet is an empty space where the rest of the pages show */}
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout