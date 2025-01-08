'use client'

import React, { useEffect } from 'react'
import { useRive } from '@rive-app/react-canvas'
import { useInView } from 'react-intersection-observer'
import { Container } from './Container'
import { FadeIn } from './FadeIn'
import { RiveGridList } from './RiveGridList'

// LazyLoadRive Component
const LazyLoadRive = ({ src, artboard, timeline }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Load only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  })

  const { rive, RiveComponent } = useRive({
    src,
    artboard,
    autoplay: false, // Initially, don't autoplay
  })

  useEffect(() => {
    if (rive && inView) {
      rive.play(timeline) // Start playing when in view
    }
  }, [rive, inView, timeline])

  return (
    <div ref={ref} className="h-96 w-full">
      {inView ? <RiveComponent /> : null}
    </div>
  )
}

// Export ComplexRiveAnimation Component
const ComplexRiveAnimation = () => {
  return (
    <Container className="mt-16">
      <RiveGridList>
        <FadeIn>
          <li>
            <LazyLoadRive
              src="/rive/ui_cards_bento_DarkMode.riv"
              artboard="Card 1 - Dark Mode"
              timeline="Card 1 All Motion"
            />
          </li>
        </FadeIn>
        <FadeIn>
          <li>
            <LazyLoadRive
              src="/rive/ui_cards_bento_DarkMode.riv"
              artboard="Card 2 - Dark Mode"
              timeline="Card 2 All Motion"
            />
          </li>
        </FadeIn>
        <FadeIn>
          <li>
            <LazyLoadRive
              src="/rive/ui_cards_bento_DarkMode.riv"
              artboard="Card 3 - Dark Mode"
              timeline="Card 3 All Motion"
            />
          </li>
        </FadeIn>
      </RiveGridList>
    </Container>
  )
}

export default ComplexRiveAnimation
