import { SectionIntro } from '@/components/SectionIntro'

// import { RiveAnim } from '@/components/RiveAnim'

// Dynamically load Rive to avoid SSR issues
import dynamic from 'next/dynamic'

// Dynamically import the RiveAnimation component
// const ComplexRiveAnimation = dynamic(
//   () => import('@/components/ComplexRiveAnimation').then((mod) => mod.default),
//   {
//     ssr: false, // Disable SSR for this component
//   },
// )
const WhyChooseUsRive = dynamic(
  () => import('@/components/WhyChooseUsRive').then((mod) => mod.default),
  {
    ssr: true, // Disable SSR for this component
  },
)

export function WhyUs() {
  return (
    <div className="bg-neutral-950 py-24 lg:py-32">
      <SectionIntro
        eyebrow="Why Choose Us"
        title="Why we are your best choice"
        invert
      >
        <p>For us Quality is everything.</p>
      </SectionIntro>

      {/* <Container className="mt-16">
        <GridList>
          <GridListItem title="Strategic Location" invert>
            Based in Ajman, UAE, for swift access to the Middle Eastern and
            global markets.
          </GridListItem>
          <GridListItem
            title="
Trusted Suppliers"
            invert
          >
            We partner with certified suppliers to ensure product quality and
            reliability.
          </GridListItem>
          <GridListItem
            title="
Client-Centric Approach"
            invert
          >
            From consultation to delivery, we prioritize your needs every step
            of the way.
          </GridListItem>
        </GridList>
      </Container> */}

      {/* rive */}
      <div className="mt-20 w-screen md:pl-28 md:pr-24">
        <WhyChooseUsRive />
      </div>
    </div>
  )
}
