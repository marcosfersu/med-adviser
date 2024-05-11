import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination } from "swiper/modules";

import { commentsData } from "./../libs/data";

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
          pagination,
        }}
        modules={[Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper animation"
      >
        {commentsData?.map(({ id, body, autor }) => (
          <SwiperSlide className="p-5 h-full" key={id}>
            <div className="p-5 rounded-md shadow-lg text-pretty h-full flex flex-col justify-between">
              <p>{body}</p>
              <h6 className="font-bold mt-5">{autor}</h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
