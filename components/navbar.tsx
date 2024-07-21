"use client"
import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import Logo from './ui/logo'
import Link from 'next/link'
import { supabase_browser_client } from '../lib/supabaseClient'
import { Button } from './ui/button'
import { useRouter } from '../navigation'

export default function Navbar() {
  const [user, setUser] = useState<any>(null)

  const router = useRouter();

  const signOut = async() => {
    const {error} = await supabase_browser_client.auth.signOut();

    if(!error){
      router.push("/");
    }
    router.refresh()
  }

  useEffect(() => {
    const getUserSession = async() => {
      let {data, error} = await supabase_browser_client.auth.getSession();
      if(!error){
        const user = data?.session?.user
        setUser(user);
      }
    }
    getUserSession();
  },[])

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

        <div className="flex gap-5 items-center justify-between">
          {user?.id ? (
            <Button onClick={signOut} className=' text-[15px] leading-[15px] font-[400] text-[#ace0fb] cursor-pointer'>Sign Out</Button>

          ) : (
            <>
              <Link href="/auth/login" className=' text-[15px] leading-[15px] font-[400] text-[#ace0fb] cursor-pointer'>Login</Link>
              <Link href="/auth/sign-up" className=' text-[15px] leading-[15px] font-[400] text-[#ace0fb] cursor-pointer'>Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
