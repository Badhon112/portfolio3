import React from "react";
import "./Work.css";
import fiver from "./fiver1.png";
export default function Work() {
  return (
    <div className=" minh px-10  flex " id="Work">
      <div className="awesome flex-col pt-52 flex flex-1">
        <span className="text-5xl m-2 font-extrabold">Works for All these</span>
        <span className="text-5xl m-2 font-semibold text-lime-600">
          Brands & Clients
        </span>
        <br />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          nobis.
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, id?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>

        <a href="#Contact" className="w-44 mt-4 text-center   animate-bounce cursor-pointer hover:bg-white hover:text-lime-500 hover:ring-2 ring-lime-600  px-8 py-3 shadow-2xl   rounded-full font-semibold text-lg bg-green-400 text-white">
          Hire me
        </a>
      </div>
        <div className="flex items-center justify-center flex-1 pt-20">
          <div className="  mt-2 flex-col relative justify-between rings rounded-full shadow-2xl shadow-gray-400 flex  items-center">
            <div className="">
              <img
                src={fiver}
                className="w-28 h-28 rounded-full animate-bounce "
                alt=""
              />
            </div>
            <div className="flex space-x-16 ">
              <div>
                <img
                  src={fiver}
                  className="  w-28 h-28 animate-bounce rounded-full "
                  alt=""
                />
              </div>
              <div>
                <img
                  src={fiver}
                  className=" w-28 h-28 rounded-full animate-bounce "
                  alt=""
                />
              </div>
              <div>
                <img
                  src={fiver}
                  className="w-28 h-28 rounded-full animate-bounce "
                  alt=""
                />
              </div>
            </div>
            <div>
              <img
                src={fiver}
                className="  w-28 h-28 rounded-full animate-bounce"
                alt=""
              />
            </div>
          </div>
        </div>
    </div>
  );
}
