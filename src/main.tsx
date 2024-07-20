import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { dark } from '@clerk/themes';
import '@/styles/globals.css'
import Providers from '@/components/providers.tsx'
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/" appearance={{
        baseTheme: dark
      }}>
    <Providers>
        <App />
    </Providers>
    </ClerkProvider>
  </React.StrictMode>,
)
