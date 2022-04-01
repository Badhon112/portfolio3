import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import img1 from "./3.jpg";
import img2 from "./4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
export default function Portfolio2() {
  return (
    <div className="portfolio min-h-full pt-14 px-40" id="portfolio">
      <div className="text-center flex flex-col  mb-6">
        <span className="text-5xl text-center text-yellow-600 font-semibold">Recent Project</span>
        <span className="text-3xl text-center text-black font-semibold ">Portfolio</span>
      </div>
      
       <Swiper

        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="pb-12">
        <img src={img1} alt="" className="img" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} alt="" className="img" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img1} alt="" className="img" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} alt="" className="img" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img1} alt="" className="img" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
