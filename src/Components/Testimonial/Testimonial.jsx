import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import client from "./client.png";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

export default function Testimonial() {
  const clients = [
    {
      id: 1,
      img: client,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam velit quod ad earum recusandae iure architecto ut est quidem totam",
    },
    {
      id: 2,
      img: client,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam velit quod ad earum recusandae iure architecto ut est quidem totam",
    },
    {
      id: 3,
      img: client,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam velit quod ad earum recusandae iure architecto ut est quidem totam",
    },
    {
      id: 4,
      img: client,
      review:
        "Loreum recusandae iure architecto ut est quidem tota sit amet consectetur adipisicing elit. Quisquam velit quod ad earum recusandae iure architecto ut est quidem totam",
    },
  ];

  return (
    <div id="Testimonials" className=" t-wrapper min-h-screen pt-40 py-12">
      <div className="t-heading text-center flex mb-16 space-x-2 items-center justify-center">
        <span className="font-medium text-4xl ">Clients always get </span>
        <span className="text-orange-700 text-4xl  font-semibold">
          {" "}
          Exceptional Work
        </span>
        <span className="font-medium text-4xl "> From me...</span>
        {/* slider */}{" "}
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client) => {
          return (
            <SwiperSlide key={client.id} className="pb-16 flex flex-col  justify-center items-center ">
              <div className="testimonial w-3/4 h-72 border-4  gap-4 flex flex-col bg-green-100 text-white justify-center rounded-lg items-center ">
                <img src={client.img} alt="" className="w-40 h-40 ring-4 ring-blue-600 rounded-full" />
                <span className="px-5 text-black text-lg">{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
