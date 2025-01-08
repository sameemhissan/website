'use client'

import React, { useEffect, useState } from 'react'
import anime from 'animejs'

const StarrySky = () => {
  const [dimensions, setDimensions] = useState({ vw: 0, vh: 0 })
  const numStars = 75

  useEffect(() => {
    // Set viewport dimensions after mounting
    setDimensions({
      vw: Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0,
      ),
      vh: Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0,
      ),
    })

    // Initialize animations
    starryNight()
    shootingStars()
  }, [])

  const starryNight = () => {
    anime({
      targets: ['#sky .star'],
      opacity: [
        { duration: 70, value: '0' },
        { duration: 70, value: '1' },
      ],
      easing: 'linear',
      loop: true,
      delay: (el, i) => 50 * i,
    })
  }

  const shootingStars = () => {
    anime({
      targets: ['#shootingstars .wish'],
      easing: 'linear',
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [{ duration: 700, value: '1' }],
      width: [{ value: '150px' }, { value: '0px' }],
      translateX: 350,
    })
  }

  const randomRadius = () => Math.random() * 1.5 + 0.6

  const getRandomX = () => Math.floor(Math.random() * dimensions.vw).toString()

  const getRandomY = () => Math.floor(Math.random() * dimensions.vh).toString()

  return (
    <div>
      <svg id="sky">
        {[...Array(numStars)].map((_, i) => (
          <circle
            cx={getRandomX()}
            cy={getRandomY()}
            r={randomRadius()}
            stroke="none"
            strokeWidth="0"
            fill="white"
            key={i}
            className="star"
          />
        ))}
      </svg>
      <div id="shootingstars">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="wish"
            style={{
              left: `${getRandomY()}px`,
              top: `${getRandomX()}px`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default StarrySky
