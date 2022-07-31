import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './components/GifExpertApp'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //  <React.StrictMode> Este no se usa en producción
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
