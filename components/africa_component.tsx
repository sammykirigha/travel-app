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
import image_d from "../public/beach-one.jpg"
import { LiaFly } from "react-icons/lia";
import { GiEarthAsiaOceania } from "react-icons/gi";


export const AfricaComponent = () => {
    return (
        <div className='flex w-full my-5'>
            <div className=' flex flex-col px-10'>
                <div className=' w-full  flex '>
                    <div className=' w-[70vw]'>
                        <h2 className=' text-white  w-[70vw]  text-[20px] text-center'>Five reasons to visit Africa</h2>
                        <div className=' mt-16 h-auto w-auto  flex items-start gap-5'>
                            <div className='w-[50%] '>
                                <div className=' w-full flex flex-col items-end justify-center '>
                                    <div className=' border-[2px] h-40 w-40 border-[#ace0fb] mt-7 rounded-2xl rotate-45 mr-28'>
                                        <Image priority src={image_b} className='object-center h-40 w-40 object-cover -translate-y-3 translate-x-3 scale-100 rounded-2xl' alt='' />
                                    </div>
                                    <div className='mt-16 '>
                                        <p className=' text-white text-[15px] w-[400px] '><span className=' text-[#ace0fb] text-[18px]'>Natural Beauty:</span>
                                            discover some of the most breathtaking natural landscapes in the world, including the towering Himalayas
                                            and lush tropical forest of Congo
                                        </p>
                                    </div>
                                </div>
                                <div className=' mt-10 w-full flex flex-col items-end justify-center'>
                                    <div className=' border-[2px] h-40 w-40 border-[#ace0fb] mt-7 rounded-2xl rotate-45 mr-28'>
                                        <Image priority src={image_five} className='object-center h-40 w-40 object-cover -translate-y-3 translate-x-3  scale-100 rounded-2xl' alt='' />
                                    </div>
                                    <div className='mt-16 '>
                                        <p className=' text-white text-[15px] w-[400px] '><span className=' text-[#ace0fb] text-[18px]'>Natural Beauty:</span>
                                            discover some of the most breathtaking natural landscapes in the world, including the towering Himalayas
                                            and lush tropical forest of Congo
                                        </p>
                                    </div>
                                </div>
                                <div className=' mt-10 w-full flex flex-col items-end justify-center'>
                                    <div className=' border-[2px] h-40 w-40 border-[#ace0fb] mt-7 rounded-2xl rotate-45 mr-28'>
                                        <Image priority src={image_c} className='object-center h-40 w-40 object-cover -translate-y-3 translate-x-3  scale-100 rounded-2xl' alt='' />
                                    </div>
                                </div>
                            </div>

                            <div className="border-blue-500  bg-gradient-to-b from-[#01101a] via-[#ace0fb] to-[#01101a] w-[3px] h-[1100px]"></div>

                            <div className='relative w-[50%]'>
                                <div className=' w-full mt-10 flex flex-col items-center justify-center'>
                                    <div className=''>
                                        <p className=' text-white text-[15px] w-[400px]'><span className=' text-[#ace0fb] text-[18px]'>Natural Beauty:</span>
                                            discover some of the most breathtaking natural landscapes in the world, including the towering Himalayas
                                            and lush tropical forest of Congo
                                        </p>
                                    </div>
                                    <div className='mt-16 border-[2px] mr-24 h-40 w-40 border-[#ace0fb] rounded-2xl rotate-45'>
                                        <Image src={image_six} className='object-center h-40 w-40 object-cover translate-y-3 -translate-x-3 scale-100 rounded-2xl' alt='' />
                                    </div>
                                </div>
                                <span className=' absolute top-24 -left-8 w-5 h-5 rounded-full bg-white text-[#ff5722] text-center'>1</span>
                                <div className=' w-full mt-24 flex flex-col items-center justify-center'>
                                    <div className=''>
                                        <p className=' text-white text-[15px] w-[400px]'><span className=' text-[#ace0fb] text-[18px]'>Natural Beauty:</span>
                                            discover some of the most breathtaking natural landscapes in the world, including the towering Himalayas
                                            and lush tropical forest of Congo
                                        </p>
                                    </div>
                                    <div className='mt-12 border-[2px] mr-24 h-40 w-40 border-[#ace0fb] rounded-2xl rotate-45'>
                                        <Image src={image_seven} className='object-center h-40 w-40 object-cover translate-y-3 -translate-x-3 scale-100 rounded-2xl' alt='' />
                                    </div>
                                    
                                </div>
                                <span className=' absolute top-[268px] -left-8 w-5 h-5 rounded-full bg-white text-[#ff5722] text-center'>2</span>
                                <div className=' w-full mt-16 flex flex-col items-center justify-center'>
                                    <div className=''>
                                        <p className=' text-white text-[15px] w-[400px]'><span className=' text-[#ace0fb] text-[18px]'>Natural Beauty:</span>
                                            discover some of the most breathtaking natural landscapes in the world, including the towering Himalayas
                                            and lush tropical forest of Congo
                                        </p>
                                    </div>
                                </div>
                                <span className=' absolute top-[490px] -left-8 w-5 h-5 rounded-full bg-white text-[#ff5722] text-center'>3</span>
                                <span className=' absolute top-[660px] -left-8 w-5 h-5 rounded-full bg-white text-[#ff5722] text-center'>4</span>
                                <span className=' absolute top-[860px] -left-8 w-5 h-5 rounded-full bg-white text-[#ff5722] text-center'>5</span>
                            </div>

                        </div>
                        <div className='flex items-center justify-center w-full '>
                            <button className=' ring-1 ring-[#ff5722] px-5 py-2 text-[#ff5722] rounded-lg'>Book a tour</button>
                        </div>

                    </div>
                    <div className=' relative w-[30vw] flex-1  h-full flex flex-col items-start justify-start '>
                        <GiEarthAsiaOceania className=' absolute top-0 text-[250px] fill-gray-700 text-white' />
                        <div className=' rounded-lg w-full ml-48 mb-48 rotate-45'>
                            <div className='mr-24 h-40 w-40 flex'>
                                <Image priority src={image_five} className=' h-40 w-40 object-cover border-b-[4px] border-r-[2px] border-white ' alt='' />
                            </div>
                            <div className='mr-24 h-40 w-40 flex '>
                                <Image priority src={image_six} className=' h-40 w-40 object-cover border-b-[4px] border-r-[4px] border-white ' alt='' />
                                <Image priority src={image_five} className=' h-40 w-40 object-cover border-b-[4px] border-white' alt='' />
                            </div>
                            <div className='mr-24 h-40 w-40 flex '>
                                <Image priority src={image_seven} className=' h-40 w-40 object-cover border-b-[4px] border-r-[4px] border-white ' alt='' />
                                <Image priority src={image_eight} className=' h-40 w-40 object-cover border-b-[4px] border-r-[4px] border-white' alt='' />
                                <Image priority src={image_nine} className=' h-40 w-40 object-cover border-b-[4px] border-white' alt='' />
                            </div>
                            <div className='mr-24 h-40 w-40 flex '>
                                <Image priority src={image_ten} className=' h-40 w-40 object-cover border-b-[4px] border-r-[4px] border-white' alt='' />
                                <Image priority src={image_eleven} className=' h-40 w-40 object-cover border-b-[4px] border-r-[4px] border-white' alt='' />
                                <Image priority src={image_twelve} className=' h-40 w-40 object-cover border-b-[4px] border-r-[4px] border-white ' alt='' />
                                <Image priority src={image_thirteen} className=' h-40 w-40 object-cover border-b-[4px] border-white' alt='' />
                            </div>
                            <div className='mr-24 h-40 w-40 flex '>
                                <Image priority src={image_sixteen} className=' h-40 w-40 object-cover rounded-bl-xl  border-r-[4px] border-white' alt='' />
                                <Image priority src={image_fifteen} className=' h-40 w-40 object-cover  border-r-[4px] border-white' alt='' />
                                <Image priority src={image_b} className=' h-40 w-40 object-cover border-r-[4px] border-white' alt='' />
                                <Image priority src={image_c} className=' h-40 w-40 object-cover border-r-[4px] border-white' alt='' />
                                <Image priority src={image_d} className=' h-40 w-40 object-cover ' alt='' />
                            </div>
                        </div>

                        <div className=' text-white'>
                            <LiaFly className=' text-[250px] text-gray-700' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
