import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <div
      className="expericement flex items-center p-12 justify-center gap-20  "
      id="Experience"
    >

      <div className=" achievement flex flex-col items-center">
        <div className=" bg-slate-400  bcycle rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-bounce hover:bg-gradient-to-r hover:from-blue-400 hover:to-gray-400">
          <div className="text-2xl fixed circle w-20 h-20 bg-white rounded-full m-2 flex justify-center font-semibold mb-8 items-center">
            3+
          </div>
        </div>
        <span className="pt-5 font-semibold text-3xl">Years</span>
        <span className="text-orange-500 text-2xl">Experience</span>
      </div>
      <div className=" achievement flex flex-col items-center">
        <div className=" bg-slate-400 bcycle rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-bounce hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400">
          <div className="circle text-xl w-20 h-20 bg-white rounded-full  m-2 flex justify-center font-semibold mb-8 items-center">
            20 +
          </div>
        </div>
        <span className="pt-7 font-semibold text-3xl">completed</span>
        <span className="text-2xl text-orange-600">Projects</span>
      </div>
      <div className=" achievement flex flex-col items-center">
        <div className=" bg-slate-400 bcycle rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r hover:from-rose-400 hover:to-green-400 animate-bounce">
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
