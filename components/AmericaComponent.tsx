import Image from 'next/image'
import React from 'react'
import image_five from "../public/beach-eight.jpg"
import image_six from "../public/beach-nine.jpg"
import image_seven from "../public/beach-ten.jpg"
import image_eight from "../public/beach-four.jpg"
import image_nine from "../public/beach-seven.jpg"
import image_ten from "../public/beach-six.jpg"
import image_eleven from "../public/beach-five.jpg"
import image_twelve from "../public/beach-three.jpg"
import image_thirteen from "../public/beach-thirteen.jpg"
import image_sixteen from "../public/forteen.jpg"
import image_fifteen from "../public/twenty.jpg"
import image_b from "../public/twenty-two.jpg"
import image_c from "../public/twenty-one.jpg"
import new_york from "../public/new-york-2.jpg"
import new_york_hotel from "../public/new-york-hotel-2.webp"
import new_york_hotel_2 from "../public/new-york-hotel.jpg"
import new_york_swimming from "../public/new-york-swimming.jpg"
import new_york_swimming_2 from "../public/new-york-swimming-2.jpg"
import { LiaFly } from "react-icons/lia";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { arvo } from '../app/fonts'
import { FaCheck } from 'react-icons/fa6'


export const AmericaComponent = () => {
    return (
        <div className='flex w-full flex-col '>
            <div className="bg-[url('../public/new-york-2.jpg')] h-[900px] flex flex-col w-full">
                <div className=' w-full h-auto mt-32 flex flex-col items-center justify-start'>
                    <h2 className={`my-4 ${arvo.className} text-white text-[40px] font-[700] text-center w-full`}>The New York City</h2>
                    <p className=' text-white text-3xl'>Lets explore the beautiful city of New York</p>
                </div>
                <div className=' flex relative  top-0s h-3/5 gap-20 mx-auto w-2/3  items-center justify-center'>
                    <div className=' absolute bottom-0 left-0  rounded-full border-[2px] border-white h-[400px] w-[400px]'>
                        <Image src={new_york_hotel} alt='' className=' rounded-full h-full w-full' />
                    </div>
                    <div className=' absolute top-12 z-20 rounded-full border-[2px] border-white h-[300px] w-[300px]'>
                        <Image src={new_york_hotel_2} alt='' className=' rounded-full h-full w-full' />
                    </div>
                    <div className=' absolute top-0 right-0  rounded-full border-[2px] border-white h-[400px] w-[400px]'>
                        <Image src={new_york_swimming_2} alt='' className=' rounded-full h-full w-full' />
                    </div>
                </div>
                <div className=' bg-gradient-to-t from-[#01101a] '>
                    <div className=' flex mx-auto w-2/3  items-center justify-evenly'>
                        <div className=' flex flex-col gap-12 mt-8 '>
                            <p className=' text-white text-[17px] w-[350px]'>Celebrate your special moments with our exclusive Hotels to create  magical memories!</p>
                            <div className='flex items-center justify-start w-full '>
                                <button className=' ring-1 ring-[#ff5722] hover:bg-[#ff5722] px-5 py-2 text-[#ff5722] hover:text-white rounded-lg'>Book a tour</button>
                            </div>
                        </div>
                        <div className=' '>
                            <h2 className={`my-4 ${arvo.className} text-white text-[25px] font-[700] text-center w-full`}>Our Facilities:</h2>
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
        </div>
    )
}
