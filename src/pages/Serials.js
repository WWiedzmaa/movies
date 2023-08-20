import React from "react";
import useMyHook from "../hooks/useMyHook";
import CardSerial from "../components/serials/CardSerial";
import styles from "./Serials.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Serials = () => {
  const { data: dataPopular, loading: loadingPopular, error: errorPopular } = useMyHook("https://api.themoviedb.org/3/tv/popular");
  const { data: dataAiring, loading: loadingAiring, error: errorAiring } = useMyHook("https://api.themoviedb.org/3/tv/airing_today");
  const { data: dataTop, loading: loadingTop, error: errorTop } = useMyHook("https://api.themoviedb.org/3/tv/top_rated");


  return (
    <div>
      <div className={styles.h3}>Popular </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {!loadingPopular && dataPopular.results.map((serial) => (
          <SwiperSlide key={serial.id} className={styles.slide}>
          <CardSerial serial={serial}  />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.h3}> Top </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {!loadingAiring && dataAiring.results.map((serial) => (
          <SwiperSlide key={serial.id} className={styles.slide}>
          <CardSerial serial={serial}  />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.h3}> Top </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {!loadingTop && dataTop.results.map((serial) => (
          <SwiperSlide key={serial.id} className={styles.slide}>
          <CardSerial serial={serial}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
};

export default Serials;
