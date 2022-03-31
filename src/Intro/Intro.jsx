import React from "react";
import "./Intro.css";
import { Image } from "../Data/Date";

export default function Intro() {
  return (
    <div className="intro min-h-screen flex ">
      <div className="i-left mt-24 gap-y-5 flex relative flex-1 flex-col ">
        <div className="i-name flex flex-col gap-y-3">
          <span className="text-black font-bold text-5xl">Hy! I Am</span>
          <span className="text-yellow-500 font-bold text-5xl">
            Badhon Biswas
          </span>
          <span className="font-semibold text-sm mt-3">
            I am a Computer Science Student in Bangladesh. Since beginning my
            journey as a freelance both fontend and backend designer nearly 3 years ago, I've done remote
            work for agencies, consulted for startups, and collaborated with
            talented people to create digital products for both business and
            consumer use. I'm quietly confident, naturally curious, and
            perpetually working on improving my chops one design problem at a
            time
          </span>
        </div>
        <button className="w-52  cursor-pointer hover:bg-white hover:text-orange-500 hover:ring-2 ring-orange-300  px-8 py-3 shadow-xl  rounded-full font-semibold text-sm bg-orange-400 text-white">
          Hire me
        </button>
        <div className="icon mt-12">
          <ul className="flex gap-x-10">
            <a href="https://www.stopstalk.com/user/profile/BadhonBiswas">
              <img
                className="w-12 h-12 object-cover"
                src={Image.stopstals}
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/badhon.bishaws/">
              <img
                className="w-12 h-12 object-cover"
                src={Image.facebook}
                alt=""
              />
            </a>
            <a href="https://github.com/Badhon112">
              <img
                className="w-12 h-12 object-cover"
                src={Image.Github}
                alt=""
              />
            </a>
            <a href="https://github.com/Badhon112">
              <img
                className="w-12 h-12 object-cover"
                src={Image.linkdin}
                alt=""
              />
            </a>
          </ul>
        </div>
      </div>
      <div className="i-left flex-1 w-full min-h-screen  relative flex justify-center items-center ">
        <img
          className=" rounded-xl h-full w-full object-cover "
          src={Image.Profile}
          alt=""
        />
      </div>
    </div>
  );
}
