'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Logo, Logomark } from '@/components/Logo'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

/* images */
import heroBg from '@/images/bg-blue.webp'
// import hissanAeroLogo from '@/images/headerLogo.svg'
// import hissanpng from '@/images/hissan-aero-logo.png'
import hissanlogo_transparent from '@/images/hissanlogo_transparent.svg'

import Image from 'next/image'
import StarrySky from './StarrySky'
import dynamic from 'next/dynamic'

const RiveMoon = dynamic(
  () => import('@/components/RiveMoon').then((mod) => mod.default),
  {
    ssr: false, // Disable SSR for this component
  },
)

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}: {
  panelId: string
  icon: React.ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: React.RefObject<HTMLButtonElement>
  invert?: boolean
}) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!

  return (
    <Container>
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="mx-2 px-2">
              <Link
                href="/"
                aria-label="Home"
                onMouseEnter={() => setLogoHovered(true)}
                onMouseLeave={() => setLogoHovered(false)}
              >
                <Image src={hissanlogo_transparent} alt="logo" width="220" />
              </Link>
            </PlusGridItem>
          </div>

          {/* added later  */}
          <nav className="relative hidden lg:flex">
            <PlusGridItem>
              <div className="flex h-full items-center justify-center bg-blue-300/5 hover:bg-blue-300/10">
                <Button href="/#contact" invert={invert} className="mx-4">
                  Contact us
                </Button>
              </div>
            </PlusGridItem>

            <PlusGridItem className="mx-4 my-3 flex flex-row">
              <button
                ref={toggleRef}
                type="button"
                onClick={onToggle}
                aria-expanded={expanded ? 'true' : 'false'}
                aria-controls={panelId}
                className={clsx(
                  'group -m-2.5 rounded-full p-2.5 transition',
                  invert ? 'hover:bg-white/10' : 'hover:bg-white',
                )}
                aria-label="Toggle navigation"
              >
                <Icon
                  className={clsx(
                    'h-8 w-8',
                    invert
                      ? 'fill-white group-hover:fill-neutral-200'
                      : 'fill-white group-hover:fill-neutral-700',
                  )}
                />
              </button>
              <div className="mr-4 h-2 w-2 bg-transparent"></div>
            </PlusGridItem>
          </nav>
          {/*  */}
        </PlusGridRow>
      </PlusGrid>
    </Container>
  )
}

function NavigationRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  )
}

function Navigation() {
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/#about">About Us</NavigationItem>
        <NavigationItem href="/#products">Our Products</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/#solutions">Solutions</NavigationItem>
        <NavigationItem href="/#contact">Connect</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef<React.ElementRef<'button'>>(null)
  let closeRef = useRef<React.ElementRef<'button'>>(null)
  let navRef = useRef<React.ElementRef<'div'>>(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-7"
          aria-hidden={expanded ? 'true' : undefined}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? '' : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded)
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true }),
              )
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : 'true'}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pb-16 pt-8">
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true }),
                  )
                }}
              />
            </div>
            <Navigation />
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">
                      Our offices
                    </h2>
                    <Offices
                      invert
                      className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                    />
                  </div>
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <h2 className="font-display text-base font-semibold text-white">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-6" invert />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full bg-cover bg-center fill-blue-100/5 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_99%,transparent_10%)]"
            yOffset={-96}
            style={{ backgroundImage: `url(${heroBg.src})` }} // Dynamically set the background image
            interactive
          />

          <div className="pointer-events-none absolute -top-20 left-[10%] z-50 h-screen w-full sm:pointer-events-auto sm:-left-[0%] sm:-top-0 lg:-left-[14%]">
            {/* <div className="absolute -top-20 left-[10%] z-50 h-screen w-full sm:-left-[0%] sm:-top-0 lg:-left-[18%]"> */}
            <RiveMoon />
          </div>

          {/* STARRY SKY ----------- */}
          <div
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full bg-cover bg-center fill-blue-200 stroke-neutral-950/5"
            // style={{ backgroundImage: `url(${heroBg.src})` }}
          >
            <StarrySky />
          </div>

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
