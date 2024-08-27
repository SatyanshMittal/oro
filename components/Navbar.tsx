import React from 'react'
import RoundLogo from './RoundLogo'

export default function Navbar() {
  return (
    <div className='w-full font-jost text-white flex justify-end items-center py-5'>
      <div>
        <RoundLogo/>
        <p className='float-end font-bold '>ORO</p>
      </div>
    </div>
  )
}
