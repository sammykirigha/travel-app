import Image from 'next/image'
import React from 'react'
import new_york from "../public/cropped-new-york.jpg"
import new_york_hotel from "../public/new-york-hotel-2.webp"
import new_york_hotel_2 from "../public/new-york-hotel.jpg"
import new_york_swimming from "../public/new-york.webp"
import new_york_swimming_2 from "../public/new-york-swimming-2.jpg"
import { arvo } from '../app/fonts'
import { FaCheck } from 'react-icons/fa6'


export const AmericaComponent = () => {
    return (
        <div className='flex w-full flex-col '>
            <div className='flex flex-col gap-8'>
                <div className=" flex flex-col  w-full  mx-auto px-12">
                    <div className='grid grid-cols-3 w-5/6 mx-auto mt-5 gap-4 items-center justify-center'>
                        <div className=' border-[2px] col-span-2 border-white h-[300px] rounded-lg overflow-hidden cursor-pointer'>
                            <Image
                                src={new_york}
                                alt=''
                                className='h-full w-full rounded-lg object-cover transform transition duration-700 ease-in-out hover:scale-110' />
                        </div>
                        <div className=' border-[2px] border-white h-[300px] rounded-lg overflow-hidden cursor-pointer'>
                            <Image
                                src={new_york_hotel}
                                alt=''
                                className='h-full w-full rounded-lg  object-cover transform transition duration-700 ease-in-out hover:scale-110' />
                        </div>
                        <div className=' border-[2px] col-span-1 rounded-lg border-white h-[300px] overflow-hidden cursor-pointer'>
                            <Image
                                src={new_york_hotel_2}
                                alt=''
                                className='h-full w-full rounded-lg object-cover boarder transform transition duration-700 ease-in-out hover:scale-110' />
                        </div>
                        <div className=' border-[2px] rounded-lg col-span-1 border-white h-[300px] overflow-hidden cursor-pointer'>
                            <Image
                                src={new_york_swimming}
                                alt=''
                                className='h-full w-full rounded-lg object-cover transform transition duration-700 ease-in-out hover:scale-110' />
                        </div>
                        <div className=' border-[2px] rounded-lg col-span-1 border-white h-[300px] overflow-hidden cursor-pointer'>
                            <Image 
                            src={new_york_swimming_2} 
                            alt='' 
                            className='h-full w-full rounded-lg object-cover transform transition duration-700 ease-in-out hover:scale-110' />
                        </div>
                    </div>
                </div>
                <div className=' flex mx-auto w-2/3  items-center justify-evenly'>
                    <div className=' flex flex-col gap-12 mt-8 '>
                        <p className=' text-white text-[17px] w-[350px]'>Celebrate your special moments with our exclusive Hotels to create  magical memories!</p>
                        <div className='flex items-center justify-start w-full '>
                            <button className=' ring-1 ring-[#ff5722] hover:bg-[#ff5722] px-5 py-2 text-[#ff5722] hover:text-white rounded-lg'>Book a tour</button>
                        </div>
                    </div>
                    <div className=' '>
                        <h2 className={`mt-4 ${arvo.className} text-white text-[25px] font-[700] text-center w-full`}>Our Facilities:</h2>
                        <ul className=' flex flex-col'>
                            <li className=' flex gap-2 items-center justify-start '>
                                <FaCheck className=' text-white text-md ' />
                                <span className=' text-white text-lg '>Fitness Center</span>
                            </li>
                            <li className=' flex gap-2 items-center justify-start '>
                                <FaCheck className=' text-white text-md ' />
                                <span className=' text-white text-lg '>Swimming pools</span>
                            </li>
                            <li className=' flex gap-2 items-center justify-start '>
                                <FaCheck className=' text-white text-md ' />
                                <span className=' text-white text-lg '>Restaurants</span>
                            </li>
                            <li className=' flex gap-2 items-center justify-start '>
                                <FaCheck className=' text-white text-md ' />
                                <span className=' text-white text-lg '>Spa center</span>
                            </li>
                            <li className=' flex gap-2 items-center justify-start '>
                                <FaCheck className=' text-white text-md ' />
                                <span className=' text-white text-lg '>Bar & Lounge</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
