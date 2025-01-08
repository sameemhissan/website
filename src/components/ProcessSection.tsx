import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSectionShort } from '@/components/ContactSectionShort'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import consumables from '@/images/Consumables.jpg'
import rotables from '@/images/Rotables.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import toolsEquipment from '@/images/Tools_equipment.jpg'
import dynamic from 'next/dynamic'

// Dynamically import the RiveAnimation component
const SolutionsRiveAnimation = dynamic(
  () => import('@/components/SolutionsRive').then((mod) => mod.default),
  {
    ssr: true, // Disable SSR for this component
  },
)

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-[#00367F] before:content-['/_'] after:text-[#00367F] after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[#00367F] sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Consumables() {
  return (
    <Section title="Consumables & Expendables" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Providing a range of{' '}
          <strong className="font-semibold text-neutral-950">
            consumables
          </strong>{' '}
          essential for maintenance and daily operations, including lubricants,
          adhesives, and cleaning agents. Our consumables are sourced from
          trusted brands, ensuring safety and performance with every use.
        </p>
        <p>More Details would be good for SEO...</p>
      </div>

      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Consumables We Deal With
      </h3>
      <TagList className="mt-4">
        <TagListItem>Consumable 1</TagListItem>
        <TagListItem>Consumable 2</TagListItem>
        <TagListItem>Consumable 3</TagListItem>
        <TagListItem>Consumable 4</TagListItem>
        <TagListItem>Consumable 5</TagListItem>
        <TagListItem>Consumable 6</TagListItem>
      </TagList> */}
    </Section>
  )
}

function Rotables() {
  return (
    <Section title="Rotables" image={{ src: rotables, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We offer high-quality rotables that meet OEM standards. Each item is
          carefully inspected and certified, allowing you to focus on
          maintaining flight readiness without worry.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Team', role: 'Hissan Aero' }}
        className="mt-12"
      >
        Customer Satisfaction are our utmost priority!
      </Blockquote>
    </Section>
  )
}

function ConsumablesExpendables() {
  return (
    <Section
      title="Consumables & Expendables"
      image={{ src: consumables, shape: 2 }}
    >
      {/* <div className="space-y-6 text-base text-neutral-600">
        <p>
          Providing a range of{' '}
          <strong className="font-semibold text-neutral-950">
            consumables
          </strong>{' '}
          essential for maintenance and daily operations, including lubricants,
          adhesives, and cleaning agents.
        </p>
      </div> */}

      <h3 className="mt-12 font-display text-base font-semibold text-[#00367F]">
        We're good at
      </h3>
      <List className="mt-8">
        <ListItem title="Consumables">
          Providing a range of{' '}
          <strong className="font-semibold text-gray-600">consumables</strong>{' '}
          essential for maintenance and daily operations, including lubricants,
          adhesives, and cleaning agents. Our consumables are sourced from
          trusted brands, ensuring safety and performance with every use.
        </ListItem>
        <ListItem title="Expendables">
          Our expendable inventory is fully stocked with fasteners, seals,
          gaskets, and more, helping your maintenance teams operate efficiently
          and reduce downtime.
        </ListItem>
      </List>
    </Section>
  )
}
function ToolsEquipment() {
  return (
    <Section
      title="Tools & Equipment"
      image={{ src: toolsEquipment, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          From specialized tools to standard maintenance equipment, we provide
          everything your technicians need to perform precise and effective
          repairs and inspections.
        </p>
      </div>

      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Our Tools & Equipment Options include:
      </h3>
      <List className="mt-8">
        <ListItem title="Demo Text: Testing">
          <br />
          Exquipment ...
        </ListItem>
        <ListItem title="Demo Text: Infrastructure">
          <br />
          Exquipment ...
        </ListItem>
        <ListItem title="Demo Text: Support">
          <br />
          Exquipment ...
        </ListItem>
      </List> */}
    </Section>
  )
}

function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full scale-150 fill-blue-300 stroke-blue-500 [mask-image:linear-gradient(to_bottom_left,white_10%,transparent_50%)]"
          yOffset={-180}
          interactive
        />
      </div>

      <SectionIntro
        eyebrow="Solutions"
        title="Customized Aviation Supply Solutions for Unmatched Reliability"
      >
        <p>
          Our tailored supply solutions are designed to meet the unique needs of
          aircraft maintenance operations across the Middle East and beyond.
          <br />
          <span className="font-medium">
            We understand the complexities of fleet maintenance and offer
            flexible, responsive service with access to a vast range of
            essential products.
          </span>
        </p>
      </SectionIntro>

      {/* <Container className="mt-24">
        <GridList>
          <GridListItem title="24/7 Availability">
            Supporting you whenever needed.
          </GridListItem>
          <GridListItem title="Flexible Delivery Options">
            Rapid and reliable logistics to minimize operational downtime.
          </GridListItem>
          <GridListItem title="Commitment to Compliance">
            We prioritize compliance with aviation standards and regulations.
          </GridListItem>
        </GridList>
      </Container> */}

      {/* rive */}
      <div className="mt-12 w-screen scale-110 md:pl-28 md:pr-24">
        <SolutionsRiveAnimation />
      </div>
    </section>
  )
}

export default function ProductsSection() {
  return (
    <section id="products">
      <PageIntro eyebrow="Products & Services" title="Our Products">
        <p>We believe in Authenticity and Quality the most. </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <ConsumablesExpendables />
        <Rotables />
        {/* <Consumables /> */}
        <ToolsEquipment />
      </div>

      <SolutionsSection />
    </section>
  )
}
