import React from 'react'
import "./Portfolio.css"
import img1 from "./1.jpg" 
import img2 from "./2.jpg" 
// import {Swiper, SwiperSlider} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";
// import "./styles.css";
import "swiper/css";
export default function Portfolio() {
  return (
    <div id='portfolio' className='min-h-screen p-16 '>
      <div className='flex justify-center items-center flex-col gap-4'>
        <span className='text-4xl font-semibold '>Recent projects</span>
        <span className='text-3xl font-black text-orange-700'>Portfolio</span>
      </div>
      <div className=' w-8/12 h-4/6 ml-44 pt-10'>
        <Swiper className='flex justify-center items-center'>
         <SwiperSlide>
           <img src={img1} alt="" className='w-full h-full object-cover' />
         </SwiperSlide>
         <SwiperSlide>
           <img src={img2} alt="" />
         </SwiperSlide>
         <SwiperSlide>
           <img src={img1} alt="" />
         </SwiperSlide>
         <SwiperSlide>
           <img src={img2} alt="" />
         </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
