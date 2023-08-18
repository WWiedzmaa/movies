import React, { useEffect, useState } from "react";

import HomePageCard from "../components/home/HomePageCard";
import ApiUtil from "./../hooks/ApiUtil";
import styles from "./HomePage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HomePage = () => {
  const [all, setAll] = useState(null);
  const [trendMovie, setTrendMovie] = useState(null);
  const [trendSerial, setTrendSerial] = useState(null);
  const [trendPeople, setTrendPeople] = useState(null);

  useEffect(() => {
    async function all() {
      const data = await ApiUtil.getAll();
      setAll(data);
    }
    async function movie() {
      const data = await ApiUtil.getMovies();
      setTrendMovie(data);
    }
    async function serial() {
      const data = await ApiUtil.getSerial();
      setTrendSerial(data);
    }
    async function people() {
      const data = await ApiUtil.getPeople();
      setTrendPeople(data);
    }
    people();
    serial();
    movie();
    all();
  }, []);
   

  return (
    <div className={styles.root}>
      <div className={styles.category}> All</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {all?.results?.map((all) => (
          <SwiperSlide key={all.id}>
            <HomePageCard trend={all} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className={styles.category}> Movie</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {trendMovie?.results?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <HomePageCard trend={movie} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.category}> Serial</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {trendSerial?.results?.map((serial) => (
          <SwiperSlide key={serial.id}>
            <HomePageCard trend={serial} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.category}> People</div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {trendPeople?.results?.map((people) => (
          <SwiperSlide key={people.id}>
            <HomePageCard trend={people} />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default HomePage;
