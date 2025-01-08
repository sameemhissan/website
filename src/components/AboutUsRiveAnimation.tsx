'use client'

import React, { useEffect } from 'react'
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas'

const AboutUsRiveAnimation = () => {
  const layout = new Layout({
    fit: Fit.Contain, // Makes the animation responsive within the container
    alignment: Alignment.Center, // Aligns the animation in the center
  })

  // Use `useRive` to load the Rive animation
  const { rive, RiveComponent } = useRive({
    src: '/rive/aboutus.riv', // Path to your .riv file
    artboard: 'About Us',
    autoplay: true, // Disable autoplay to control manually
  })

  useEffect(() => {
    if (rive) {
      // Play a specific timeline by name
      rive.play('main-machine') // Replace "TimelineName" with the actual animation name
    }
  }, [rive]) // Ensure this runs once the Rive instance is ready

  return (
    <div style={{ width: '100vw', height: '640px' }}>
      <RiveComponent />
    </div>
  )
}

export default AboutUsRiveAnimation
