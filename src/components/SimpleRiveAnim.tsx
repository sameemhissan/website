'use client'

import { useRive } from '@rive-app/react-canvas'

const RiveAnimation = () => {
  const { RiveComponent } = useRive({
    src: '/rive/trial.riv', // Path to your .riv file
    // artboard: 'Card 2 - Dark Mode 2',
    autoplay: true, // Automatically plays the animation
  })

  return (
    <div style={{ width: '100vw', height: '400px' }}>
      <RiveComponent />
    </div>
  )
}

export default RiveAnimation
