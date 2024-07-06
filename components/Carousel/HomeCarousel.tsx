import React from 'react'
import { FaStar } from 'react-icons/fa'


export default function HomeCarousel() {
    return (
        <div>
            <div className="bg-[url('../public/beach-four.jpg')] opacity-90 rounded-lg min-w-[400px] min-h-[230px] bg-cover bg-no-repeats max-w-auto flex flex-col ">
                <p className='absolute right-5 m-1 flex items-center px-2 justify-center gap-2 rounded-full bg-gray-800'>
                    <span className=' text-white text-[14px]'>7.6</span>
                    <FaStar className='text-[#faf038]' />
                </p>
                <div className=' absolute bottom-0 flex flex-col gap-[1px] px-3 py-2 bg-transparent/20'>
                    <p className=' text-white text-[10px] '>USA</p>
                    <p className=' text-white text-[14px] '>Hawaii</p>
                    <p className=' text-white text-[18px] '>Hawaii Beach</p>
                </div>
            </div>

        </div>
    )
}
