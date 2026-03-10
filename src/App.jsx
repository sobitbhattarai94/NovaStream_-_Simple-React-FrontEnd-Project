import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout' // Yo import garna nabhula
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        {/* Sabai bhanda mathi MainLayout rakhne */}
        <Route path="/" element={<MainLayout />}>
          {/* Index bhanya default "/" path ma Home dekhau bhaneko */}
          <Route index element={<Home />} /> 
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App