import React from "react";
import useMyHook from "../hooks/useMyHook";
import CardSerial from "../components/serials/CardSerial";
import styles from "./Serials.module.css"

const Serials = () => {
  const { data: dataPopular, loading: loadingPopular, error: errorPopular } = useMyHook("https://api.themoviedb.org/3/tv/popular");
  const { data: dataAiring, loading: loadingAiring, error: errorAiring } = useMyHook("https://api.themoviedb.org/3/tv/airing_today");
  const { data: dataTop, loading: loadingTop, error: errorTop } = useMyHook("https://api.themoviedb.org/3/tv/top_rated");


  return (
    <div>
      <div className={styles.h3}>Popular </div>
      <div className={styles.main}>
        {!loadingPopular && dataPopular.results.map((serial) => <CardSerial serial={serial} key={serial.id} />)}
      </div>
      <div>Grane </div>
      <div className={styles.main}>
        {!loadingAiring && dataAiring.results.map((serial) => <CardSerial serial={serial} key={serial.id} />)}
      </div>
      <div>Top </div>
      <div className={styles.main}>
        {!loadingTop && dataTop.results.map((serial) => <CardSerial serial={serial} key={serial.id} />)}
      </div>
    </div>
  )
};

export default Serials;
