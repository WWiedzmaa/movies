import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";

const SwiperCard = (props) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.children}
    </Swiper>
  );
};

export default SwiperCard;
