import HomeCarousel from "../components/Carousel/HomeCarousel";
import Navbar from "../components/Navbar/Navbar";
import { domine, margarine } from "./fonts";

export default function Home() {

  return (
    <div className="bg-[url('../public/beach-two.jpg')] opacity-90 relative  bg-cover bg-no-repeat h-screen max-w-[100vw] overflow-x-hidden">
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
    </div>
  );
}
