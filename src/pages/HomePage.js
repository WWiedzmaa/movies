import React, { useEffect, useState } from "react";

import HomePageCard from "../components/home/HomePageCard";
import ApiUtil from "./../hooks/ApiUtil";
import styles from "./HomePage.module.css";

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
      <div>
        {all?.results?.map((all) => (
          <HomePageCard key={all.id} trend={all} />
        ))}
      </div>
      <div className={styles.category}> Movie</div>
      <div>
        {trendMovie?.results?.map((all) => (
          <HomePageCard key={all.id} trend={trendMovie} />
        ))}
      </div>
      <div className={styles.category}> Serial</div>
      <div>
        {trendSerial?.results?.map((all) => (
          <HomePageCard key={all.id} trend={trendSerial} />
        ))}
      </div>
      <div className={styles.category}> People</div>
      <div>
        {trendPeople?.results?.map((all) => (
          <HomePageCard key={all.id} trend={trendPeople} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
