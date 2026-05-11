import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  // Force dark mode permanently – no light mode toggle
  const isDarkMode = true
  // Ensure the <html> element has the dark class
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('dark')
  }
  const toggleTheme = () => {}


  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Component {...pageProps} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </div>
  )
}

export default MyApp
