import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import sustainableImage from '@/images/sustainable.png'
import Contact from '@/components/ContactSection'
import ProductsSection from '@/components/ProcessSection'
import dynamic from 'next/dynamic'
import { GridPattern } from '@/components/GridPattern'
import { WhyUs } from '@/components/WhyUs'
import { Metadata } from 'next'
import Link from 'next/link'

// Dynamically import the RiveAnimation component
const AboutUsRiveAnimation = dynamic(
  () => import('@/components/AboutUsRiveAnimation').then((mod) => mod.default),
  {
    ssr: true, // Disable SSR for this component
  },
)
const AboutUsRiveAnimationMobile = dynamic(
  () =>
    import('@/components/AboutUsRiveAnimationMobile').then(
      (mod) => mod.default,
    ),
  {
    ssr: true, // Disable SSR for this component
  },
)

export const metadata: Metadata = {
  metadataBase: new URL('https://hissan-aero.com'), // Replace with your domain
  title: {
    template: '%s - Hissan Aero',
    default:
      'Hissan Aero, Based in UAE, we specialize in aicraft consumables, rotables and equipments.',
  },
  description:
    'We provide aircraft parts and tools with exceptional quality and service.',
  openGraph: {
    title: 'Hissan Aero',
    description:
      'Hissan Aero, Based in UAE, we specialize in aicraft consumables, rotables and equipments.',
    url: 'https://hissan-aero.com', // Replace with your domain
    siteName: 'Hissan Aero',
    images: [
      {
        url: 'https://hissan-aero.com/images/og.png', // Relative path
        alt: 'Hissan Aero',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: 'https://hissan-aero.com/favicon.ico',
  },
  themeColor: '#6f96ff', // Customize the theme color
  twitter: {
    card: 'summary_large_image',
    site: '@HissanAero',
    creator: '@HissanAero',
    title: 'Hissan Aero',
    description:
      'Hissan Aero, Based in UAE, we specialize in aicraft consumables, rotables and equipments.',
    images: ['/images/og.png'],
  },
}

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function AboutAnimRive() {
  return (
    <div className="mt-24 bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      {/* Desktop Animation */}
      <div className="mt-12 hidden w-full scale-100 sm:block">
        <AboutUsRiveAnimation />
      </div>

      {/* MObile */}
      <div className="relative">
        {/* Overlay to Prevent Touch Movement */}
        <div className="absolute bottom-0 left-0 right-0 top-0 z-40 bg-neutral-950 opacity-50 sm:hidden" />

        {/* Mobile Animation */}
        <div className="relative z-50 mt-16 block w-full scale-150 sm:hidden">
          <AboutUsRiveAnimationMobile />
        </div>
      </div>
    </div>
  )
}
function AboutInner() {
  return (
    <div className="mt-12 w-screen md:pl-28 md:pr-24">
      <AboutUsRiveAnimationMobile />
    </div>
  )
}

function Sustainability() {
  return (
    <section
      id="sustainability"
      className="relative mt-4 pt-14 sm:mt-12 sm:pt-12 lg:mt-20 lg:pt-20"
    >
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-screen scale-125 fill-green-500 stroke-green-500 [mask-image:linear-gradient(to_top_right,white_10%,transparent_60%)]"
          yOffset={-180}
          interactive
        />
      </div>
      <SectionIntro
        eyebrow="Sustainability"
        title="Our Commitment to Responsible and Sustainable Operations"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          At <strong>Hissan Aero</strong>, we’re committed to sustainability. We
          work with eco-conscious suppliers and follow strict policies to
          minimize waste and support sustainable aviation initiatives.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={sustainableImage}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Eco-Friendly Practices">
              <br />
              We emphasize using eco-friendly packaging and resource-efficient
              supply chain practices.
            </ListItem>
            <ListItem title="Compliance & Transparency">
              <br />
              Our operations adhere to environmental and regulatory standards to
              promote sustainability in the aviation sector.
            </ListItem>
          </List>
        </div>
      </Container>

      <div className="fixed bottom-4 right-4 z-50 sm:hidden">
        <button className="rounded-3xl bg-black px-4 py-2 text-white shadow-lg shadow-blue-500/50 transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500">
          <Link href="#contact" aria-label="Home">
            Contact Us
          </Link>
        </button>
      </div>
    </section>
  )
}

export default async function Home() {
  return (
    <div>
      <Container className="mt-24 sm:mt-28 md:mt-52">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-white [text-wrap:balance] sm:text-7xl">
            <span
              className="text-5xl tracking-wide sm:text-7xl"
              style={{
                fontSize: '78px',
                background:
                  'linear-gradient(to top right, #6db5bd, #ffffff, #129cff)',
                //   'linear-gradient(to top right, #6db5bd, #ffffff, #7bc7fe)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitTextStroke: '1px #fff',
              }}
            >
              Hissan Aero
            </span>
            <br />
            <span className="font-light">
              Your Trusted Partner in Aviation Supply
            </span>
          </h1>

          <p className="mt-6 max-w-5xl text-xl font-light text-neutral-300">
            Based in{' '}
            <span className="font-medium text-white">United Arab Emirates</span>
            , we specialize in the supply of high-quality
            <span className="font-normal text-white">
              {' '}
              aircraft consumables
            </span>
            , <span className="font-normal text-white">rotables</span>,{' '}
            <span className="font-normal text-white">expendables</span>,{' '}
            <span className="font-normal text-white">tools and equipment</span>
            .
            <br />
            <span>
              Whether you're looking for essential consumables or specialized
              tools, we have you covered.
            </span>
          </p>
        </FadeIn>
      </Container>

      <AboutAnimRive />
      {/* <AboutInner /> */}
      <WhyUs />

      <ProductsSection />

      {/* <CaseStudies caseStudies={caseStudies} /> */}

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        Very Satified with the Products from Hissan Aero. Great Quality!
      </Testimonial> */}

      {/* <TeamSection /> */}
      <Sustainability />

      <Contact />
    </div>
  )
}
