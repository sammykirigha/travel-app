import Image from 'next/image'
import React from 'react'
import { BsShieldFillCheck } from 'react-icons/bs'
import { FaClock, FaDollarSign } from 'react-icons/fa'
import image_five from "../../public/beach-eight.jpg"
import { arvo } from '@/@/app/fonts'

export const About = () => {
  return (
    <div className=" flex  w-full py-5 items-center gap-5 ">
    <div className=" w-[650px] h-[400px] rounded-lg -ml-3 ">
      <Image src={image_five} alt="" className=" border-r-[5px] rounded-lg border-y-[5px] border-white  h-[400px]" />
    </div>
    <div className="flex flex-col flex-1 px-5">
      <h2 className={`text-[65px] ${arvo.className} text-white `}>About Us</h2>
      <p className=" text-white text-[16px]">Our team of travel experts is passionate about exploring the world and helping the clients to do the same. With years of experience in travel industry
        , we have developed strong relationships with suppliers and vendors around the world, allowing us to offer exclusive deals and insider access
        to some of the world&apos;s most incredible destinations.
      </p>
      <p className=" text-white text-[16px]">At our travel agency, we believe that travel is more than just visiting new places -
        its experiencing new cultures, meeting new people, and creating memories that last a lifetime.</p>

      <div className="flex gap-32 my-5">
        <p className="  flex flex-col gap-2">
          <BsShieldFillCheck className=" text-[#ace0fb] text-[40px]" />
          <span className="text-white">Reliability</span>
        </p>
        <p className="  flex flex-col gap-2">
          <FaClock className=" text-[#ace0fb] text-[40px]" />
          <span className="text-white">All fast</span>
        </p>
        <p className="  flex flex-col gap-2">
          <FaDollarSign className=" text-[#ace0fb] text-[40px]" />
          <span className="text-white">Profitability</span>
        </p>
      </div>
    </div>
  </div>
  )
}
