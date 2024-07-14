"use client"
import Image from "next/image";
import HomeCarousel from "../components/Carousel/HomeCarousel";
import Navbar from "../components/Navbar/Navbar";
import { arvo, domine, margarine } from "./fonts";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { GiStarFormation } from "react-icons/gi";
import { PiAngularLogo } from "react-icons/pi";
import { FaChessQueen } from "react-icons/fa";
import image_five from "../public/beach-eight.jpg"
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import image_six from "../public/beach-thirteen.jpg"
import image_seven from "../public/beach-eight.jpg"
import { useState } from "react";
import { About } from "../components/About/About";
import { AfricaComponent } from "../components/AfricaComponent";
import { AmericaComponent } from "../components/AmericaComponent";
import { AsiaComponent } from "../components/AsiaComponent";

export default function Home() {
  const [selectedDestination, setSelectedDestination] = useState("africa")
  const [selectedDay, setSelectedDay] = useState("day_one")

  return (
    <div className="bg-[#01101a] h-screen max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <div className="bg-[url('../public/beach-eight.jpg')] h-screen opacity-90 relative  bg-cover bg-no-repeat">
        <div className=" flex flex-col items-start justify-end w-3/6 h-full py-10 px-10">
          <div className=" w-full flex items-start justify-start h-auto ">
            <h1 className={`text-stroke-2 ${domine.className} text-white pb-2 text-5xl font-bold text-start `}>
              Discover the beauty of the continent&apos;s world with us
            </h1>
          </div>
          <div className="flex w-2/3 flex-col rounded-lg ">
            <p className=" text-white text-[16px] leading-[20px] font-[400]">
              Unlock the wonders of the world: Your dream trip.
              Our tours offers a diverse range of destination that cater for a wide variety of interests </p>
            <button className=" px-8 py-4 font-bold bg-[#ff5722] text-white text-[20px] leading-4 outline outline-2 outline-[#ff5722] mt-10 mb-2 w-fit rounded-lg">Book a Tour</button>
          </div>
        </div>
      </div>

      <div className=" w-full flex items-center justify-center gap-10 mt-32 px-20">
        <div className=" flex flex-col items-start justify-center gap-10">
          <div className=" flex gap-5 items-center justify-center my-3">
            <div className=" flex flex-col gap-3 items-center justify-center">
              <FaCalendarAlt className=" text-2xl text-[#ace0fb]" />
              <p className=" tex-white text-[12px] leading-4 text-white">Years of experience</p>
              <h3 className=" text-2xl text-center text-white">10</h3>
            </div>
            <div className=" h-20 w-[2px] bg-[#ace0fb]"></div>
            <div className=" flex flex-col gap-3 items-center justify-center">
              <FaRegSmile className=" text-2xl text-[#ace0fb]" />
              <p className=" tex-white text-[12px] leading-4 text-white">Satisfied Clients</p>
              <h3 className=" text-2xl text-center text-white">5000</h3>
            </div>
            <div className=" h-20 w-[2px] bg-[#ace0fb]"></div>
            <div className=" flex flex-col gap-3 items-center justify-center">
              <GiWorld className=" text-2xl text-[#ace0fb]" />
              <p className=" tex-white text-[12px] leading-4 text-white">Countries Covered</p>
              <h3 className=" text-2xl text-center text-white">100</h3>
            </div>
          </div>
          <div className=" text-white max-w-[500px]">
            <p className=" text-[14px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dicta, est ipsa magni accusamus ullam suscipit impedit deleniti quasi, iusto, assumenda iste sunt minus aspernatur voluptate veniam dolore sed distinctio saepe earum quas nostrum illum.
            </p>
            <p className=" text-[14px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dicta, est ipsa magni accusamus ullam suscipit impedit deleniti quasi.</p>
          </div>
          <div className=" flex gap-12">
            <div className="flex gap-10">
              <FaChessQueen className=" text-white text-2xl" />
              <PiAngularLogo className=" text-white text-2xl" />
              <GiStarFormation className=" text-white text-2xl" />
            </div>
            <div className=" flex flex-col gap-0">
              <p className=" text-white text-[12px]">Learn More</p>
              <div className="flex items-center justify-center">
                <div className=" w-12 h-[1px] bg-red-400 -mr-1 "></div>
                <HiOutlineArrowLongRight className="text-red-400 text-lg pt-[1px] -pl-[5px]" />
              </div>
            </div>

          </div>
        </div>
        <div className=" flex  items-center justify-center my-12">
          <div
            className='skew-y-6 firstContainer h-[200px] z-10  w-[150px] -mr-4 mb-12'>
            <Image className=' object-cover w-full h-full first-image rounded-md border-[5px] border-white ' src={image_five} alt='' />
          </div>
          <div
            className='skew-y-6  firstContainer h-[270px] z-20 -mr-4  w-[200px] '>
            <Image className=' object-cover w-full h-full second-image rounded-md border-[5px] border-white' src={image_six} alt='' />
          </div>
          <div
            className='skew-y-6  firstContainer h-[350px] z-30  w-[230px] mt-10'>
            <Image className=' third-image object-cover w-full h-full rounded-md border-[5px] border-white' src={image_seven} alt='' />
          </div>

        </div>
      </div>

      <About />

      <div className=" w-full mt-14">
        <h2 className={`my-4 ${arvo.className} text-white text-[40px] font-[700] text-center w-full`}>Popular Destinations</h2>
        <div className="border-blue-500 bg-gradient-to-r from-[#01101a] via-[#ace0fb] to-[#01101a] w-full h-[2px]"></div>
        <div className=" flex gap-auto w-full items-center justify-evenly py-10 mt-2">
          <span onClick={() => setSelectedDestination("africa")} className={`cursor-pointer ${margarine.className} ${selectedDestination === "africa" ? "text-[#ff5722]" : "text-white"} text-[35px]  leading-[23px]`}>Africa</span>
          <span onClick={() => setSelectedDestination("america")} className={`cursor-pointer ${margarine.className} ${selectedDestination === "america" ? "text-[#ff5722]" : "text-white"} text-[35px]  leading-[23px]`}>New York City</span>
          <span onClick={() => setSelectedDestination("asia")} className={`cursor-pointer ${margarine.className} ${selectedDestination === "asia" ? "text-[#ff5722]" : "text-white"} text-[35px]  leading-[23px]`}>Asia</span>
          <span onClick={() => setSelectedDestination("europe")} className={`cursor-pointer ${margarine.className} ${selectedDestination === "europe" ? "text-[#ff5722]" : "text-white"} text-[35px]  leading-[23px]`}>Europe</span>
          <span onClick={() => setSelectedDestination("australia")} className={`cursor-pointer ${margarine.className} ${selectedDestination === "australia" ? "text-[#ff5722]" : "text-white"} text-[35px] leading-[23px]`}>Australia</span>
        </div>
        <div className="border-blue-500 bg-gradient-to-r from-[#01101a] via-[#ace0fb] to-[#01101a] w-full h-[2px]"></div>
        <div className="">
          {
            selectedDestination === "africa" ? (
              <AfricaComponent />
            ) : selectedDestination === "america" ? (
              <AmericaComponent />
            ) : selectedDestination === "asia" ? (
              <AsiaComponent />
            ) : selectedDestination === "europe" ? (
              <div className=" text-white">europr selected </div>
            ) : selectedDestination === "australia" ? (
              <div className=" text-white">australia selected </div>
            ) : null
          }
        </div>
      </div>

      <div className=" flex flex-col">
        <div className="flex flex-col w-full max-w-[1400px] mx-auto items-center justify-center  mt-5">
          <div className={`text-[55px] ${arvo.className} font-[700] leading-normal text-white`}>Exclusive Tours</div>
          <p className=" text-white text-lg">Every month NEW Tour</p>

          <div className=" flex gap-5 mt-20 items-start justify-evenly w-full px-10">
            <div className=' border-[2px] max-h-24 max-w-24 border-[#ace0fb] rounded-2xl rotate-45'>
              <Image src={image_six} className=' h-24 w-24 object-cover rounded-2xl' alt='' />
            </div>
            <div className=' border-[2px] m-2  h-44 w-44 border-[#ace0fb] rounded-2xl rotate-45'>
              <Image src={image_six} className=' h-44 w-44 object-cover rounded-2xl' alt='' />
            </div>
            <div className=' border-[2px] m-4 h-64 w-64 mx-4 border-[#ace0fb] rounded-2xl rotate-45'>
              <Image src={image_six} className=' h-64 w-64 object-cover rounded-2xl' alt='' />
            </div>
            <div className=' border-[2px] m-2 h-44 w-44 border-[#ace0fb] rounded-2xl rotate-45'>
              <Image src={image_six} className=' h-44 w-44 object-cover rounded-2xl' alt='' />
            </div>
            <div className=' border-[2px] h-24 w-24 border-[#ace0fb] rounded-2xl rotate-45'>
              <Image src={image_six} className=' h-24 w-24 object-cover rounded-2xl' alt='' />
            </div>
          </div>

          <div className='flex items-center justify-center w-full m-14 '>
            <button className=' ring-1 ring-[#ff5722] px-5 py-2 text-[#ff5722] rounded-lg'>Enter Gallery</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col w-full max-w-[1400px] mx-auto items-center justify-center  mt-5">
          <div className={`text-[55px] ${arvo.className} font-[700] leading-normal text-white`}>Cape Town</div>
          <p className=" text-white text-lg">Discover the wonders of South Africa</p>

          <div className="flex flex-col items-center px-28">
            <div className="flex flex-col mt-10">
              <div className="flex flex-col md:flex-row gap-12">

                <div className="flex line">
                  the line here
                </div>

                <div className="flex">
                  <div className="flex flex-col line">
                    <p className=" text-white text-lg">Arrival in Cape Town Day one</p>
                    <div className="flex">
                      <p className="text-white text-sm">
                        Arrive in Cape Town, check-in to your accommodation, and the rest of your journey.
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex line">
                  <p className=" text-white text-lg">Arrival in Cape Town Day Two</p>
                  <div className="flex">
                    <p className="text-white text-sm">
                      Arrive in Cape Town, check-in to your accommodation, and the rest of your journey.
                    </p>
                  </div>
                </div>

                <div className="flex line">
                  <p className=" text-white text-lg">Arrival in Cape Town Day Three</p>
                  <div className="flex">
                    <p className="text-white text-sm">
                      Arrive in Cape Town, check-in to your accommodation, and the rest of your journey.
                    </p>
                  </div>
                </div>

                <div className="flex line">
                  <p className=" text-white text-lg">Arrival in Cape Town Day Four</p>
                  <div className="flex">
                    <p className="text-white text-sm">
                      Arrive in Cape Town, check-in to your accommodation, and the rest of your journey.
                    </p>
                  </div>
                </div>

                <div className="flex line">
                  <p className=" text-white text-lg">Arrival in Cape Town Day Five</p>
                  <div className="flex">
                    <p className="text-white text-sm">
                      Arrive in Cape Town, check-in to your accommodation, and the rest of your journey.
                    </p>
                  </div>
                </div> */}
                </div>

                <div className="flex flex-1 line">
                  <div className='border-[2px] h-64 max-w-full border-[#ace0fb] rounded-2xl'>
                    <Image src={image_six} className=' h-64 max-w-[300] object-cover rounded-2xl' alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-10 items-start m-10">
              <div className="flex flex-col">
                <h2 className="text-lg text-white">Inclusions</h2>
                <ul className="flex flex-col">
                  <li className="text-white text-sm">4 nights accommodation in a luxury hotel</li>
                  <li className="text-white text-sm">Guided tours and activities</li>
                  <li className="text-white text-sm">Transportation during the tour</li>
                  <li className="text-white text-sm">Daily breakfast</li>
                  <li className="text-white text-sm">Experienced tour guides</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg text-white">Pricing</h2>
                <p className=" text-white text-lg">$1,200 per person</p>
                <span>excluding airfare</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg text-white">Duration</h2>
                <p className=" text-white text-lg">$1,200 per person</p>
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg text-white">Group size</h2>
                <p className=" text-white text-lg">Maximum 12 travelers</p>
              </div>
            </div>

            <div className='flex items-center justify-between w-full m-14 px-28 '>
            <button className=' ring-1 ring-[#ff5722] px-5 py-2 text-[#ff5722] rounded-lg'> Book a Tour</button>
            <p className=" text-white text-lg ">Booking Information</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
