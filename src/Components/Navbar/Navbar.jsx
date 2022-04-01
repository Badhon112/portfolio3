import React from "react";
import "./Navbar.css";
export default function Navbar() {
  // const refreshpage=(e)=>{
  //   // e.preventDeafault()
  //   window.location.reload(false)
  // }
  return (
    <div className="wrapper flex pt-4 px-14 justify-between items-center fixed w-full text-xl">
      <div className="left flex items-center flex-1 gap-8 ">
        <div className="name">Badhon</div>
        <span>Toggol</span>
      </div>
      <div className="right flex justify-between items-center font-normal ml-40">
        <div className="list ">
          <ul className="flex gap-8 mr-16 hover:cursor-pointer space-x-7 items-center">
            <a href="#Home" className="hover:text-yellow-400">Home</a>
            <a  href="#Services"  className="hover:text-yellow-400">Services</a>
            <a className="hover:text-yellow-400" href="#Experience">Experience</a>
            <a href="#Work" className="hover:text-yellow-400">Work</a>
            <a className="hover:text-yellow-400" href="#portfolio">portfolio</a>
            <a className="hover:text-yellow-400" href="#Testimonials">Testimonials</a>
          </ul>
        </div>
        <a href="#Contact" className="button  cursor-pointer hover:bg-white hover:text-orange-500 hover:ring-2 ring-orange-300  px-8 py-3 shadow-xl  rounded-full font-semibold text-sm bg-orange-400 text-white">
          Contact
        </a>
      </div>
    </div>
  );
}
