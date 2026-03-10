import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext' // context import gareko

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> {/* Wrap gareko, yaa ko <App /> utaa children ho */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
)