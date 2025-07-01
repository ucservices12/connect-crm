import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="Default" storageKey="vite-ui-theme">
        <div className='custom-scrollbar '>
          <App />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
