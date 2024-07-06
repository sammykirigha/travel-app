import Navbar from "../components/Navbar/Navbar";
import { domine, margarine } from "./fonts";

export default function Home() {

  return (
    <main className="">
      <div className="bg-[url('../public/beach-seventeen.jpg')]  bg-cover bg-no-repeat h-screen">
      <Navbar />
        <div className=" w-full flex items-center justify-center h-full">
          <h1 style={{ margin: 'auto', }} className={`text-stroke-3 ${domine.className} text-[100px] text-[#3ea8f4] pb-2 text-5xl font-bold text-center mb-12 mt-8`}>
            journey to all world courners
          </h1>
        </div>
      </div>
    </main>
  );
}
