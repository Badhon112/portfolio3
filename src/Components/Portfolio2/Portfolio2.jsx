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
  const client=[
    {
      id:1,
      img:img1
    },
    {
      id:2,
      img:img2
    },
    {
      id:1,
      img:img1
    },
    {
      id:2,
      img:img2
    }
  ]
  return (
    <div className="portfolio min-h-full pt-14 px-40" id="portfolio">
      <div className="text-center flex flex-col  mb-6">
        <span className="text-5xl text-center text-lime-600 font-semibold">Recent Project</span>
        <span className="text-3xl text-center text-green-900 font-semibold ">Portfolio</span>
      </div>
      
       {/* <Swiper

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
        
      </Swiper> */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {client.map((client) => {
          return (
            <SwiperSlide key={client.id} className="pb-16 flex  flex-col  justify-center items-center ">
              <div className="testimonial w-3/4 h-96 border-4  gap-4 flex flex-col bg-green-100 text-white justify-center rounded-lg items-center ">
                <img src={client.img} alt="" className="w-full h-full rounded-lg ring-4 ring-blue-600" />
                {/* <span className="px-5 text-black text-lg">{client.review}</span> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
