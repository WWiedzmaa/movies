import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SwiperCard.css";
import { Pagination } from "swiper/modules";

const SwiperCard = (props) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>{props.children}</SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperCard;
