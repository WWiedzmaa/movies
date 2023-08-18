import React, { useEffect, useState } from "react";

import HomePageCard from "../components/home/HomePageCard";
import ApiUtil from "./../hooks/ApiUtil";
import styles from "./HomePage.module.css";
import SwiperCard from "../components/SwiperCard";

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
      <SwiperCard>
        {all?.results?.map((all) => (
          <HomePageCard key={all.id} trend={all} />
        ))}
      </SwiperCard>
      <div className={styles.category}> Movie</div>
      <SwiperCard>
        {trendMovie?.results?.map((movie) => (
          <HomePageCard key={movie.id} trend={movie} />
        ))}
      </SwiperCard>
      <div className={styles.category}> Serial</div>
      <SwiperCard>
        {trendSerial?.results?.map((serial) => (
          <HomePageCard key={serial.id} trend={serial} />
        ))}
      </SwiperCard>
      <div className={styles.category}> People</div>
      <SwiperCard>
        {trendPeople?.results?.map((people) => (
          <HomePageCard key={people.id} trend={people} />
        ))}
      </SwiperCard>
    </div>
  );
};

export default HomePage;
