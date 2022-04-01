import React from "react";
import "./Services.css";
// import {Image}
import { Image } from "../../Data/Date";
import Color from "./Color2.jpg"
export default function Services() {
  return (
    <div className="Work flex flex-col items-center pt-16 overflow-y-hidden min-h-screen" id="Services">
      <div className=" overflow-hidden mt-2 flex flex-col">
        <span className="text-3xl font-semibold cursor-pointer">
          My Services
        </span>
        <div className="flex justify-center gap-2 p-2 items-center cursor-pointer ">
          {/* <span
            className=" animate-spin "
            onClick={() => {
              window.location.reload();
            }}
          >
            
          </span> */}
          <img className="w-5 h-5 object-cover flex items-center justify-center animate-spin" src={Color} alt="" onClick={() => {
              window.location.reload();
            }}/>
          <p
            onClick={() => {
              window.location.reload();
            }}
          >
            Tap to Animation
          </p>
        </div>
      </div>

      <div className="mt-2 flex flex-col items-center">
        <div className="top flex space-x-20 overflow-hidden ">
          <div className="flex one flex-col items-center w-60 h-60  rounded-3xl  border-green-800 ">
            <img
              src={Image.Ui}
              alt="Figma"
              className="w-10 h-10 mt-2 rounded-full animate-bounce"
            />
            <span className="font-bold text-lg p-2">Ui/UX</span>
            <span className="text-center text-sm  p-3">
              Design Website, Application, Logos User Interface Design and and
              User Experience Design
            </span>
          </div>
          <div className="flex two flex-col items-center w-60 h-60  rounded-3xl border-orange-600">
            <img
              src={Image.Illustration}
              alt="Figma"
              className="w-10 h-10 mt-2 rounded-full animate-spin"
            />
            <span className="font-bold text-lg p-2">Icon/iLLustration</span>
            <span className="text-center text-sm p-3">
              Character Design, Icon Set, Illustration Guide, Illustration Set
            </span>
          </div>
          <div className="flex three flex-col items-center w-60 h-60  rounded-3xl border-blue-700 ">
            <img
              src={Image.Mern}
              alt="Figma"
              className="w-10 h-10 mt-2 rounded-full animate-bounce"
            />
            <span className="font-bold text-lg p-2">Mern</span>
            <span className="text-center text-sm p-3">
              Rich Mern Stack Developer Develop Social Media E_commerce
            </span>
          </div>
          <div className="flex four flex-col items-center w-60 h-60  rounded-3xl border-green-400 ">
            <img
              src={Image.Development}
              alt="Figma"
              className="w-10 h-10 mt-2 rounded-full animate-pulse"
            />
            <span className="font-bold text-lg p-2">Development</span>
            <span className="text-center text-sm p-3">
              Html/Css, Javascipt,Animation,Respossive Animation
            </span>
          </div>
        </div>
        <div className="bottom mt-5 flex space-x-20  overflow-hidden">
          <div className="flex five flex-col items-center w-60 h-60  rounded-3xl border-yellow-300 ">
            <img
              src={Image.React}
              alt="Figma"
              className="w-10 h-10 mt-2 rounded-full animate-spin"
            />
            <span className="font-bold text-lg p-2">React</span>
            <span className="text-center text-sm p-3">
              2.5 Years of Experience and Build Some Amazing frontend Project
            </span>
          </div>
          <div className="flex six flex-col items-center w-60 h-60  rounded-3xl border-lime-800 ">
            <img
              src={Image.Nodejs}
              alt="Figma"
              className="w-10 h-10 mt-2 rounded-full animate-bounce"
            />
            <span className="font-bold text-lg p-2">Node js</span>
            <span className="text-center text-sm p-3">
              2 Years of Experience and Build Some Amazing Backend Project
            </span>
          </div>
          <div className="flex seven flex-col items-center w-60 h-60  rounded-3xl border-gray-500 ">
            <img
              src={Image.Eco}
              alt="Figma"
              className="w-10 h-10 mt-2 rounded-full animate-pulse"
            />
            <span className="font-bold text-lg p-2">E_commerce</span>
            <span className="text-center text-sm p-3">
              Done A Project that can Set Order, Get Order, Select Product,and
              so On,
            </span>
          </div>
          <div className="flex eight flex-col items-center w-60 h-60  rounded-3xl border-yellow-900 ">
            <img
              src={Image.SM}
              alt="Figma"
              className="w-10 h-10 mt-2 rounded-full animate-pulse"
            />
            <span className="font-bold text-lg p-2">Social Media</span>
            <span className="text-center text-sm p-3">
              Done A Project that can get data, delete data, post data, Like
              Count
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
