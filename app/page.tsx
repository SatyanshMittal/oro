import React from 'react'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import EarlyAccess from '@/components/EarlyAccess'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'


export default function page() {
  return (
    <div className='bg-[#0A0E1E] px-10'>
      <Navbar/>
      <Hero/>
      <Benefits/>
      <EarlyAccess/>      
    </div>
  )
}
