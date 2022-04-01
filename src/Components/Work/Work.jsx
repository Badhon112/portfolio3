import React from "react";
import "./Work.css";
import fiver from "./fiver1.png";
export default function Work() {
  return (
    <div className=" minh px-10 pt-16 flex " id="Work">
      <div className="awesome flex-col flex flex-1">
        <span className="text-5xl m-2 font-extrabold">Works for All these</span>
        <span className="text-5xl m-2 font-semibold text-amber-600">
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

        <button className="w-40 text-xl mt-8  animate-bounce cursor-pointer hover:bg-white hover:text-orange-500 hover:ring-2 ring-orange-300  py-2 shadow-xl   rounded-full font-semibold bg-orange-400 text-white">
          Hire me
        </button>
      </div>
        <div className="flex items-center justify-center flex-1 ">
          <div className=" mt-10 flex-col relative justify-between rings rounded-full shadow-2xl shadow-gray-400 flex  items-center">
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
