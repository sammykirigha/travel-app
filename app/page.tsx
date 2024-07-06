import HomeCarousel from "../components/Carousel/HomeCarousel";
import Navbar from "../components/Navbar/Navbar";
import { domine, margarine } from "./fonts";

export default function Home() {

  return (
    <main className="">
      <div className="bg-[url('../public/twenty-one.jpg')] opacity-90 relative  bg-cover bg-no-repeat h-screen">
        <Navbar />
        <div className=" w-fit flex mx-10 items-start justify-start h-auto absolute top-[20%]">
          <h1
            style={{ margin: 'auto', }}
            className={`text-stroke-3 ${domine.className} text-[100px] text-[#3ea8f4] pb-2 text-5xl font-bold text-start mb-12 mt-8`}>
            journey to all world courners
          </h1>
        </div>

        <div className="flex flex-col absolute left-0 top-[55%] mx-10 max-w-lg bg-transparent/10 p-2 rounded-lg ">
          <p className=" text-white text-[18px] leading-[20px] font-[400]">
            Unlock the wonders of the world: Your dream trip.
            Our tours offers a diverse range of destination that cater for a wide variety of interests </p>
          <button className=" px-10 py-4 font-bold text-[#faf038] text-[20px] leading-4 outline outline-2 outline-[#faf038] mt-10 mb-2 w-fit rounded-lg">Book a Tour</button>
        </div>
        <div className=" absolute top-[40%] right-0 w-auto">
          <div className=" mx-2">
            <HomeCarousel />
          </div>
        </div>
      </div>
    </main>
  );
}
