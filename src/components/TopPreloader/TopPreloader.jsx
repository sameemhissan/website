'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Dynamically import the RiveAnimation component
const LoadingRive = dynamic(
  () => import('@/components/LoadingRive').then((mod) => mod.default),
  {
    ssr: false, // Disable SSR for this component
  },
)

export default function TopPreloader() {
  const [visible, setVisible] = useState(true)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Set window dimensions
    setDimension({ width: window.innerWidth, height: window.innerHeight })

    // Hide the preloader after 5000ms
    const timeout = setTimeout(() => {
      setVisible(false)
    }, 5000)

    return () => clearTimeout(timeout) // Cleanup timeout
  }, [])

  const styles = {
    container: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      zIndex: 999,
      backgroundColor: '#fff',
    },
  }

  if (!visible) return null // Return nothing if not visible

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={styles.container}
    >
      <div className="mt-12 flex w-full scale-50 items-center justify-center sm:scale-150">
        <LoadingRive />
      </div>
    </motion.div>
  )
}
