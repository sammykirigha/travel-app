"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa'
import image_one from "../../public/beach-ten.jpg"
import image_two from "../../public/beach-seven.jpg"
import image_three from "../../public/beach-sixteen.jpg"

export default function HomeCarousel() {
    const [disableNextButton, setDisableNextButton] = useState(false)
    //track the image
    const [activeIndex, setActiveIndex] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState("next");


    return (
        <div className='carousel-container flex gap-10 flex-1 items-center justify-between content-between '>
            <div className="relative content-container bg-[url('../public/beach-four.jpg')] opacity-90 rounded-lg min-w-[400px] min-h-[230px] max-h-[230px] bg-cover bg-no-repeats flex-col ">
                <div className='absolute right-1 mt-2 flex items-center px-2 justify-center gap-2 rounded-full bg-gray-800'>
                    <span className=' text-white text-[14px]'>7.6</span>
                    <FaStar className='text-[#faf038]' />
                </div>
                <div className=' absolute bottom-0 flex flex-col gap-[1px] px-3 py-2 '>
                    <p className=' text-white text-[10px] '>USA</p>
                    <p className=' text-white text-[14px] '>Hawaii</p>
                    <p className=' text-white text-[18px] '>Hawaii Beach</p>
                </div>
            </div>
            <div className='image-container right-5 flex flex-row-reverse relative items-center justify-center gap-2 h-auto w-auto'>
                <div className=' firstContainer h-auto z-20 absolute right-5 w-[200px]'>
                    <Image className=' first-image rounded-md border-[2px] border-[#ff5722]' src={image_one} alt='' />
                </div>
                <div className=' firstContainer h-auto z-10 absolute right-5 w-[200px]'>
                    <Image className=' second-image rounded-md border-[2px] border-[#ff5722]' src={image_two} alt='' />
                </div>
                <div className=' firstContainer h-auto z-0 absolute right-5 w-[200px]'>
                    <Image className=' third-image rounded-md border-[2px] border-[#ff5722]' src={image_three} alt='' />
                </div>

                <div className='controls flex mt-14 gap-5 absolute right-32 z-50 translate-y-20 '>
                    <button className=' rounded-full p-3 border-[3px] border-[#ff5722]'>
                        <FaArrowLeft className=' text-white' />
                    </button>
                    <button disabled={disableNextButton} className={`${disableNextButton ? 'cursor-not-allowed' : ' '} rounded-full p-3 border-[3px] border-[#ff5722]`}>
                        <FaArrowRight className={`${disableNextButton ? 'text-gray-200 cursor-not-allowed' : 'text-white '}`} />
                    </button>
                </div>
            </div>


        </div>
    )
}
