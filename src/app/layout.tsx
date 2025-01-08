'use client'

import { type Metadata } from 'next'
import { RootLayout } from '@/components/RootLayout'
import '@/styles/tailwind.css'

import { AnimatePresence } from 'framer-motion'
import TopPreloader from '@/components/TopPreloader/TopPreloader'
import { useEffect, useState } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      window.scrollTo(0, 0)
    }, 5000)
  }, [])

  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <AnimatePresence mode="wait">
          {isLoading && <TopPreloader />}
        </AnimatePresence>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
