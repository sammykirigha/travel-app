import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import Logo from './ui/logo'

export default function Navbar() {
  return (
    <div className=' w-full fixed max-w-8xl flex items-center bg-[#01101a] z-50 h-[70px]'>
      <div className='px-5 w-full flex items-center justify-between '>
        <Logo />
        <ul className=' flex gap-7 items-center'>
          <li className=' text-[15px] leading-[17px] font-[400] text-[#ace0fb] cursor-pointer'>About</li>
          <li className=' text-[15px] leading-[17px] font-[400] text-[#ace0fb] cursor-pointer'>Destination</li>
          <li className=' text-[15px] leading-[17px] font-[400] text-[#ace0fb] cursor-pointer'>Exclusive tour</li>
          <li className=' text-[15px] leading-[15px] font-[400] text-[#ace0fb] cursor-pointer'>Review</li>
        </ul>
        <div className="flex gap-5 items-center justify-between">
          <FaFacebook className=' text-white text-lg cursor-pointer' />
          <FaInstagram className=' text-white text-lg cursor-pointer' />
          <FaTiktok className=' text-white text-lg cursor-pointer' />
        </div>
      </div>
    </div>
  )
}
