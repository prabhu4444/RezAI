import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme/theme-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Router>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Router>
  );
}
