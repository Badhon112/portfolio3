import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <div
      className="expericement flex items-center p-12 justify-center gap-20  "
      id="Experience"
    >

      <div className=" achievement flex flex-col items-center">
        <div className=" bg-slate-400  bcycle rounded-full bg-gradient-to-r from-lime-500 to-green-500 animate-bounce hover:bg-gradient-to-r hover:from-green-200 hover:to-cyan-900">
          <div className="text-2xl fixed circle w-20 h-20 bg-white rounded-full m-2 flex justify-center font-semibold mb-8 items-center">
            3+
          </div>
        </div>
        <span className="pt-5 font-semibold text-3xl">Years</span>
        <span className="text-orange-500 text-2xl">Experience</span>
      </div>
      <div className=" achievement flex flex-col items-center">
        <div className=" bg-slate-400 bcycle rounded-full bg-gradient-to-r from-green-400 to-lime-500 animate-bounce hover:bg-gradient-to-r hover:from-lime-500 hover:to-green-800 ">
          <div className="circle text-xl w-20 h-20 bg-white rounded-full  m-2 flex justify-center font-semibold mb-8 items-center">
            20 +
          </div>
        </div>
        <span className="pt-7 font-semibold text-3xl">completed</span>
        <span className="text-2xl text-orange-600">Projects</span>
      </div>
      <div className=" achievement flex flex-col items-center">
        <div className=" bg-slate-400 bcycle rounded-full bg-gradient-to-r from-lime-500 to-green-500 hover:bg-gradient-to-r hover:from-lime-900 hover:to-green-200 animate-bounce">
          <div className="circle  w-20 h-20 bg-white rounded-full   m-2 flex justify-center font-semibold mb-8   items-center">
            5+
          </div>
        </div>
        <span className="pt-7 font-semibold text-3xl">Companies</span>
        <span className="text-2xl text-orange-500">Work</span>
      </div>
      
      
      
    </div>
  );
}
