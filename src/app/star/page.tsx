import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <>
      <Container className="sm:mt-22 mt-24 h-screen md:mt-36">
        <FadeIn className="flex max-w-7xl flex-col items-center justify-center text-center">
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

          <br />
          <Link
            href="#"
            className="group relative inline-flex items-center justify-start overflow-hidden rounded-xl bg-black px-6 py-3 font-medium transition-all"
          >
            <span className="absolute right-0 top-0 inline-block h-4 w-4 rounded bg-gray-700 transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-2xl bg-gray-800 transition-all delay-200 duration-500 ease-in-out group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-gray-500 transition-colors duration-200 ease-in-out group-hover:text-white">
              Contact us
            </span>
          </Link>
        </FadeIn>
      </Container>
    </>
  )
}
