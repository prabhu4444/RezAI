import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/styles/globals.css'
import Providers from '@/components/providers.tsx'
import Navbar from "@/components/custum/navbar/index.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <main>
        <Navbar />
        <App />
      </main>
    </Providers>
  </React.StrictMode>,
)
