import Image from 'next/image'
import React from 'react'
import image_five from "../public/beach-eight.jpg"

export const AfricaComponent = () => {
    return (
        <div className='flex w-full '>
            <div className=' flex flex-col px-10'>
                <h2 className=' text-white  text-[20px] w-[50vw] text-center'>Five reasons to visit Africa</h2>
                <div className=' w-full  flex  '>
                    <div className=' mt-16 h-auto w-auto  flex items-start gap-5'>
                        <div className=' '>
                            <div className=' w-full min-w-[350px] flex flex-col items-center justify-center'>
                                <div className=' border-[2px] h-40 w-40 border-[#ace0fb] mt-7 rounded-2xl -rotate-45 mr-16'>
                                    <Image src={image_five} className=' h-40 w-40 object-cover translate-y-6 translate-x-6 scale-100 rounded-2xl' alt='' />
                                </div>
                                <div className='mt-16 '>
                                    <p className=' text-white text-[15px] w-4350px] '><span className=' text-[#ace0fb] text-[18px]'>Natural Beauty:</span>
                                        discover some of the most breathtaking natural landscapes in the world, including the towering Himalayas
                                        and lush tropical forest of Congo
                                    </p>
                                </div>
                            </div>
                            <div className=' mt-16 w-full min-w-[350px] flex flex-col items-center justify-center'>
                                <div className=' border-[2px] h-40 w-40 border-[#ace0fb] mt-7 rounded-2xl -rotate-45 mr-16'>
                                    <Image src={image_five} className=' h-40 w-40 object-cover translate-y-6 translate-x-6 scale-100 rounded-2xl' alt='' />
                                </div>
                                <div className='mt-16 '>
                                    <p className=' text-white text-[15px] w-4350px] '><span className=' text-[#ace0fb] text-[18px]'>Natural Beauty:</span>
                                        discover some of the most breathtaking natural landscapes in the world, including the towering Himalayas
                                        and lush tropical forest of Congo
                                    </p>
                                </div>
                            </div>
                            <div className=' mt-16 w-full min-w-[350px] flex flex-col items-center justify-center'>
                                <div className=' border-[2px] h-40 w-40 border-[#ace0fb] mt-7 rounded-2xl -rotate-45 mr-16'>
                                    <Image src={image_five} className=' h-40 w-40 object-cover translate-y-6 translate-x-6 scale-100 rounded-2xl' alt='' />
                                </div>
                                <div className='mt-16 '>
                                    <p className=' text-white text-[15px] w-4350px] '><span className=' text-[#ace0fb] text-[18px]'>Natural Beauty:</span>
                                        discover some of the most breathtaking natural landscapes in the world, including the towering Himalayas
                                        and lush tropical forest of Congo
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="border-blue-500  bg-gradient-to-b from-[#01101a] via-[#ace0fb] to-[#01101a] w-[3px] h-[1200px]"></div>

                        <div className='relative '>
                            <div className=' w-full mt-16 flex flex-col items-center justify-center'>
                                <div className=''>
                                    <p className=' text-white text-[15px] w-[450px]'><span className=' text-[#ace0fb] text-[18px]'>Natural Beauty:</span>
                                        discover some of the most breathtaking natural landscapes in the world, including the towering Himalayas
                                        and lush tropical forest of Congo
                                    </p>
                                </div>
                                <div className='mt-16 border-[2px] mr-24 h-40 w-40 border-[#ace0fb] rounded-2xl -rotate-45'>
                                    <Image src={image_five} className=' h-40 w-40 object-cover translate-y-6 translate-x-6 scale-100 rounded-2xl' alt='' />
                                </div>
                            </div>
                            <span className=' absolute top-24 -left-8 w-5 h-5 rounded-full bg-white text-transparent'>ff</span>
                            <div className=' w-full mt-24 flex flex-col items-center justify-center'>
                                <div className=''>
                                    <p className=' text-white text-[15px] w-[450px]'><span className=' text-[#ace0fb] text-[18px]'>Natural Beauty:</span>
                                        discover some of the most breathtaking natural landscapes in the world, including the towering Himalayas
                                        and lush tropical forest of Congo
                                    </p>
                                </div>
                                <div className='mt-16 border-[2px] mr-24 h-40 w-40 border-[#ace0fb] rounded-2xl -rotate-45'>
                                    <Image src={image_five} className=' h-40 w-40 object-cover translate-y-6 translate-x-6 scale-100 rounded-2xl' alt='' />
                                </div>
                            </div>
                            <span className=' absolute top-[268px] -left-8 w-5 h-5 rounded-full bg-white text-transparent'>ff</span>
                            <div className=' w-full mt-24 flex flex-col items-center justify-center'>
                                <div className=''>
                                    <p className=' text-white text-[15px] w-[450px]'><span className=' text-[#ace0fb] text-[18px]'>Natural Beauty:</span>
                                        discover some of the most breathtaking natural landscapes in the world, including the towering Himalayas
                                        and lush tropical forest of Congo
                                    </p>
                                </div>
                                <div className='mt-16 border-[2px] mr-24 h-40 w-40 border-[#ace0fb] rounded-2xl -rotate-45'>
                                    <Image src={image_five} className=' h-40 w-40 object-cover translate-y-6 translate-x-6 scale-100 rounded-2xl' alt='' />
                                </div>
                            </div>
                            <span className=' absolute top-[490px] -left-8 w-5 h-5 rounded-full bg-white text-transparent'>ff</span>
                            <span className=' absolute top-[660px] -left-8 w-5 h-5 rounded-full bg-white text-transparent'>ff</span>
                            <span className=' absolute top-[890px] -left-8 w-5 h-5 rounded-full bg-white text-transparent'>ff</span>
                            <span className=' absolute top-[1060px] -left-8 w-5 h-5 rounded-full bg-white text-transparent'>ff</span>
                        </div>
                    </div>
                    <div className=' w-[50%] bg-white h-full '>sdsd</div>
                </div>
            </div>
        </div>
    )
}
