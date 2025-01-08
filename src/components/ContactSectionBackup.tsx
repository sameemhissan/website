// Import necessary dependencies
'use client'

import { useState } from 'react'
import { useId } from 'react'
import dynamic from 'next/dynamic'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'
import Link from 'next/link'
import clsx from 'clsx'

const ContactRiveAnimation = dynamic(
  () => import('@/components/ContactRive').then((mod) => mod.default),
  { ssr: false },
)

const initValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
  interest: '',
}

// @ts-ignore
function TextInput({ label, ...props }) {
  const id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

// @ts-ignore
function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: '',
  })

  const [status, setStatus] = useState({
    isLoading: false,
    error: '',
    success: '',
  })

  //@ts-ignore
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  //@ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ isLoading: true, error: '', success: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send email')

      setStatus({
        isLoading: false,
        error: '',
        success: 'Message sent successfully!',
      })
    } catch (error) {
      //@ts-ignore
      setStatus({ isLoading: false, error: error.message, success: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
        <TextInput
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
        />
        <TextInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <TextInput
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <TextInput
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <div className="border border-neutral-300 px-6 py-4 first:rounded-t-2xl last:rounded-b-2xl">
          <fieldset>
            <legend className="text-base/6 text-[#00367F]">
              Interested about...
            </legend>
            <div className="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <RadioInput
                label="About Product"
                name="interest"
                value="About Product"
                onChange={handleChange}
              />
              <RadioInput
                label="Other Matter"
                name="interest"
                value="Other Matter"
                onChange={handleChange}
              />
            </div>
          </fieldset>
        </div>
      </div>
      <Button type="submit" className="mt-6" disabled={status.isLoading}>
        {status.isLoading ? 'Sending...' : 'Let’s work together'}
      </Button>
      {status.error && <p className="mt-4 text-red-500">{status.error}</p>}
      {status.success && (
        <p className="mt-4 text-green-500">{status.success}</p>
      )}
    </form>
  )
}

function ContactDetails() {
  return (
    <div>
      <h2>Email us</h2>
      <p>sales@hissan-aero.com</p>
      <p>Phone: +971588424676</p>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <div className="mt-12 w-screen md:pl-28 md:pr-24">
        <ContactRiveAnimation />
      </div>
      <section id="contact">
        <FadeIn>
          <div className="ml-8 mt-24 sm:mt-32 md:ml-32 lg:mt-40">
            Contact us
          </div>

          <div className="ml-8 mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl md:ml-32">
            Get in Touch with Hissan Aero
          </div>
        </FadeIn>

        <Container className="mt-20 sm:mt-32 lg:mt-4">
          <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <ContactForm />
            <ContactDetails />
          </div>
        </Container>
      </section>
    </>
  )
}
