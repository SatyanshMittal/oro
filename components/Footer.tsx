import React from 'react'
import logo from "@/public/blackLogo.svg"
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='w-full pt-9 pb-6 flex justify-between px-6 items-center text-black font-jost text-lg bg-white'>
        <div className='space-y-2'>
          <div className='flex gap-2 items-center'>
            <Image width={30} height={30} alt='logo' src={logo}/>
            <p className='font-bold text-2xl font-jost'>ORO</p>
            </div>
            <p className='text-opacity-50'>Copyright © 2024 ORO Gold. All rights reserved.</p>

        </div>

        <p>usman@orogold.app</p>
    </div>
  )
}
