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
import { arvo } from './ui/fonts'
import { FaCheck } from 'react-icons/fa6'


export const AsiaComponent = () => {
    return (
        <div className='flex w-full flex-col '>
            <div className=' w-full h-auto mt-32 flex flex-col items-center justify-start'>
                <h2 className={`my-4 ${arvo.className} text-white text-[40px] font-[700] text-center w-full`}>What is so special about Asia!!</h2>
                <p className=' text-white text-3xl'>The beautiful places with beautiful sceneries</p>
            </div>
        </div>
    )
}
