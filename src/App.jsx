import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/home' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // Page haru import gareko
// import Home from './pages/Home';
// import Services from './pages/Services';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* "/" bhanya Home page ho */}
//         <Route path="/" element={<Home />} />
        
//         {/* "/services" bhanya Services page ho */}
//         <Route path="/services" element={<Services />} />
        
//         {/* "/contact" bhanya Contact page ho */}
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;