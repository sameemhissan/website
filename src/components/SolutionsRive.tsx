'use client'

import React from 'react'
import { useRive } from '@rive-app/react-canvas'
import { Container } from './Container'
import { FadeIn } from './FadeIn'
import { RiveGridList } from './RiveGridList'

// Rive Component for immediate load
const LoadRive = ({ src, artboard, timeline }: any) => {
  const { rive, RiveComponent } = useRive({
    src,
    artboard,
    autoplay: true, // Autoplay immediately
  })

  React.useEffect(() => {
    if (rive) {
      rive.play(timeline) // Ensure the timeline starts playing
    }
  }, [rive, timeline])

  return (
    <div className="h-96 w-full">
      <RiveComponent />
    </div>
  )
}

// Export components as default
const SolutionsRiveAnimation = () => {
  return (
    <Container className="mt-16">
      <RiveGridList>
        <FadeIn>
          <li>
            <LoadRive
              src="/rive/SolutionsRive.riv"
              artboard="Animated Clock"
              timeline="State Machine"
            />
          </li>
        </FadeIn>
        <FadeIn>
          <li>
            <LoadRive
              src="/rive/SolutionsRive.riv"
              artboard="Flexible"
              timeline="State Machine 1"
            />
          </li>
        </FadeIn>
        <FadeIn>
          <li>
            <LoadRive
              src="/rive/SolutionsRive.riv"
              artboard="Commitment"
              timeline="State Machine"
            />
          </li>
        </FadeIn>
      </RiveGridList>
    </Container>
  )
}

export default SolutionsRiveAnimation
