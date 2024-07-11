import React from 'react'
import Logo from '../Logo.tsx/Logo'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className='px-5 fixed w-full flex items-center justify-between z-50 bg-[#001928]/10 bg-black h-[70px]'>
        <Logo />
        <ul className=' flex gap-7 items-center'>
            <li className=' text-[15px] leading-[17px] font-[400] text-[#ff5722] hover:border-b-[2px] hover:border-[#ff5722]  cursor-pointer'>About</li>
            <li className=' text-[15px] leading-[17px] font-[400] text-[#ff5722] hover:border-b-[2px] hover:border-[#ff5722]  cursor-pointer'>Destination</li>
            <li className=' text-[15px] leading-[17px] font-[400] text-[#ff5722] hover:border-b-[2px] hover:border-[#ff5722]  cursor-pointer'>Exclusive tour</li>
            <li className=' text-[15px] leading-[15px] font-[400] text-[#ff5722] hover:border-b-[2px] hover:border-[#ff5722]  cursor-pointer'>Review</li>
        </ul>
        <div className="flex gap-5 items-center justify-between">
            <FaFacebook className=' text-white text-lg cursor-pointer' />
            <FaInstagram className=' text-white text-lg cursor-pointer' />
            <FaTiktok className=' text-white text-lg cursor-pointer' />
        </div>
    </div>
  )
}
