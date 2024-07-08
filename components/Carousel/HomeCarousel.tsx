"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa'
import image_one from "../../public/beach-ten.jpg"
import image_three from "../../public/beach-seven.jpg"
import image_four from "../../public/beach-four.jpg"
import image_five from "../../public/beach-eight.jpg"
import image_six from "../../public/beach-thirteen.jpg"
import image_seven from "../../public/beach-eight.jpg"
import { animate, motion } from 'framer-motion'

export default function HomeCarousel() {
    const [disableNextButton, setDisableNextButton] = useState(false)
    //track the image
    const [activeIndex, setActiveIndex] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState("next");

    // function to handle the next button
    const handleNextButton = () => {
        setTransitionDirection("next")
        setActiveIndex((prevIndex) => prevIndex === 2 ? prevIndex : prevIndex + 1)
    }

    // function to handle the next button
    const handlePreviousButton = () => {
        setTransitionDirection("previous")
        setActiveIndex((prevIndex) => prevIndex === 0 ? prevIndex : prevIndex - 1)
    }

    const textVariants = {
        hidden: {
            opacity: 0,
            x: transitionDirection === "next" ? 100 : -100,
            transition: { duration: 0.5, ease: 'easeInOut' }
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: 'easeInOut' }
        }
    }

    const textContainerVariant = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 }
        }
    }

    const texts = [
        {
            country: "USA",
            state: "Hawaii",
            destination: "Hawaii Beach",
            image: image_one,
            rating: 5.6
        },
        {
            country: "ASIA",
            state: "Asia",
            destination: "Hawaii Beach 222",
            image: image_four,
            rating: 6
        },
        {
            country: "USA",
            state: "Hawaii",
            destination: "Hawaii Beach",
            image: image_three,
            rating: 7.6
        },
    ]


    return (
        <div className='carousel-container flex gap-5 flex-1 items-center justify-between content-between  '>
            <motion.div
                className={`min-w-[400px] min-h-[230px] max-h-[230px] relative opacity-90 rounded-lg flex-col bg-purple-800 -mr-80`}
                key={activeIndex}
                variants={textContainerVariant}
                initial='hidden'
                animate='visible'
            >
                <Image className=' w-full h-full rounded-lg ' src={texts[activeIndex].image} alt='' width={200} height={200} />
                <div className='absolute rounded-lg right-1 top-1 flex items-center px-2 justify-center gap-2  bg-gray-800'>
                    <motion.span variants={textVariants} className=' text-white text-[14px]'>{`${texts[activeIndex].rating}`}</motion.span>
                    <FaStar className='text-[#faf038]' />
                </div>
                <div className=' absolute -bottom-10 flex flex-col gap-[1px] px-3 py-2'>
                    <motion.p variants={textVariants} className=' text-white text-[10px] '>{`${texts[activeIndex].country}`}</motion.p>
                    <motion.p variants={textVariants} className=' text-white text-[14px] '>{`${texts[activeIndex].state}`}</motion.p>
                    <motion.p variants={textVariants} className=' text-white text-[18px] '>{`${texts[activeIndex].destination}`}</motion.p>
                </div>
            </motion.div>
            <div className='image-container relative flex flex-row-reverse items-center justify-end px-10 '>
                <motion.div
                    animate={{
                        opacity: activeIndex === 0 ? 1 : activeIndex === 1 ? 0 : 0,
                        x: activeIndex === 0 ? "0px" : activeIndex === 1 ? "96px" : "96px",
                        scale: activeIndex === 0 ? 1 : activeIndex === 1 ? 1.2 : 1.2
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0,
                        ease: "easeInOut"
                    }}
                    className=' firstContainer h-[300px] z-20  w-[200px]'>
                    <Image className=' object-cover w-full h-full first-image rounded-md border-[2px] ' src={image_five} alt='' />
                </motion.div>
                <motion.div
                    animate={{
                        opacity: activeIndex === 0 ? 0.66 : activeIndex === 1 ? 1 : 0,
                        x: activeIndex === 0 ? "96px" : activeIndex === 1 ? "96px" : "96px",
                        scale: activeIndex === 0 ? 0.8 : activeIndex === 1 ? 1 : 1.2
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0,
                        ease: "easeInOut"
                    }}
                    className=' firstContainer h-[300px] z-10  w-[200px] '>
                    <Image className=' object-cover w-full h-full second-image rounded-md border-[2px] ' src={image_six} alt='' />
                </motion.div>
                <motion.div
                    animate={{
                        opacity: activeIndex === 0 ? 0.33 : activeIndex === 1 ? 0.66 : 1,
                        x: activeIndex === 0 ? "192px" : activeIndex === 1 ? "192px" : "200px",
                        scale: activeIndex === 0 ? 0.6 : activeIndex === 1 ? 0.8 : 1
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0,
                        ease: "easeInOut"
                    }}
                    className=' firstContainer h-[300px] z-0  w-[200px]'>
                    <Image className=' third-image object-cover w-full h-full rounded-md border-[2px] ' src={image_seven} alt='' />
                </motion.div>

                <div className='controls left-32  flex gap-6 z-50 translate-y-[185px] relative '>
                    <button
                        disabled={activeIndex === 0}
                        onClick={handlePreviousButton}
                        className={`p-2 rounded-full border-[2px] border-[#ff5722] ${activeIndex === 0 ? " cursor-not-allowed" : " hover:ring-[3px] hover:ring-[#ff5722] transform ease-in-out duration-300 "}`}>
                        <FaArrowLeft className={` ${activeIndex === 0 ? " text-gray-300" : "text-white"} text-lg `} />
                    </button>
                    <button
                        onClick={handleNextButton}
                        disabled={activeIndex === 2}
                        className={`p-2 rounded-full border-[2px] border-[#ff5722] ${activeIndex === 2 ? ' cursor-not-allowed' : ' hover:ring-[3px] hover:ring-[#ff5722] transform ease-in-out duration-300 '} `}>
                        <FaArrowRight className={` ${activeIndex === 2 ? " text-gray-300" : "text-white"} text-lg `} />
                    </button>
                </div>
            </div>
        </div>
    )
}
