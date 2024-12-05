import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Spotify from './Spotify.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Spotify/>
  </StrictMode>,
)
