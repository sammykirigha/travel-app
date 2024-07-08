import Image from "next/image";
import HomeCarousel from "../components/Carousel/HomeCarousel";
import Navbar from "../components/Navbar/Navbar";
import { domine, margarine } from "./fonts";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import image_five from "../public/beach-eight.jpg"
import image_six from "../public/beach-thirteen.jpg"
import image_seven from "../public/beach-eight.jpg"

export default function Home() {

  return (
    <div className="bg-[url('../public/twenty-two.jpg')] opacity-90 relative  bg-cover bg-no-repeat h-screen max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <div className=" flex flex-col items-center justify-center pt-[80px]">
        <div className=" w-fit flex mx-10 items-start justify-start h-auto">
          <h1
            style={{ margin: 'auto', }}
            className={`text-stroke-3 ${domine.className} text-[100px] text-[#5a6e7c] pb-2 text-5xl font-bold text-start mb-12 mt-8`}>
            journey to all world courners
          </h1>
        </div>
        <div className="flex items-center max-w-full  ">
          {/* <div className="flex  flex-col mx-10  p-2 rounded-lg ">
            <p className=" text-white text-[16px] leading-[20px] font-[400]">
              Unlock the wonders of the world: Your dream trip.
              Our tours offers a diverse range of destination that cater for a wide variety of interests </p>
            <button className=" px-8 py-4 font-bold bg-[#ff5722] text-white text-[20px] leading-4 outline outline-2 outline-[#ff5722] mt-10 mb-2 w-fit rounded-lg">Book a Tour</button>
          </div> */}
          <HomeCarousel />
        </div>
      </div>

      <div className=" bg-[#01101a] w-full flex items-center justify-center gap-10 mt-32 px-20">
        <div className=" flex flex-col items-start justify-center gap-10">
          <div className=" flex gap-5 items-center justify-center my-3">
            <div className=" flex flex-col gap-3 items-center justify-center">
              <FaCalendarAlt className=" text-2xl text-[#ace0fb]" />
              <p className=" tex-white text-[12px] leading-4 text-white">Years of experience</p>
              <h3 className=" text-2xl text-center text-white">10</h3>
            </div>
            <div className=" flex flex-col gap-3 items-center justify-center">
              <FaRegSmile className=" text-2xl text-[#ace0fb]" />
              <p className=" tex-white text-[12px] leading-4 text-white">Satisfied Clients</p>
              <h3 className=" text-2xl text-center text-white">5000</h3>
            </div>
            <div className=" flex flex-col gap-3 items-center justify-center">
              <GiWorld className=" text-2xl text-[#ace0fb]" />
              <p className=" tex-white text-[12px] leading-4 text-white">Countries Covered</p>
              <h3 className=" text-2xl text-center text-white">10</h3>
            </div>
          </div>
          <div className=" text-white max-w-[500px]">
            <p className=" text-[14px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dicta, est ipsa magni accusamus ullam suscipit impedit deleniti quasi, iusto, assumenda iste sunt minus aspernatur voluptate veniam dolore sed distinctio saepe earum quas nostrum illum.
            </p>
            <p className=" text-[14px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dicta, est ipsa magni accusamus ullam suscipit impedit deleniti quasi.</p>
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
    </div>
  );
}
