import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import { Input } from "./../components/Input";
import SearchIcon from "@mui/icons-material/Search";
import SearchList from "../components/SearchList";
import Carousel from "react-material-ui-carousel";
import ApiUtil from "../hooks/ApiUtil";

const Header = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [movie, setmMovie] = useState(null);

  const [isVisible, setIsVisible] = useState(true); // kliknięcie na zwenątrz - stan
  const myRef = useRef(); // referencja do przycisku - button

  // czy klikamy w obszar referenacji
  const handleClickOutside = (e) => {
    console.log(e);
    if (!myRef.current.contains(e.target)) {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    async function movie() {
      const data = await ApiUtil.getMovies();
      setmMovie(data);
    }
    movie();
  }, []);
  console.log(movie);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [myRef]);

  useEffect(() => {
    getData();
    setIsVisible(true);
  }, [query]);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=5219cb6186dc8cdfa863dcdc035f17f8&query=${query}&page=1`
      );
      // console.log(response);
      const result = await response.json();
      setData(result.results);
    } catch (error) {
      setError("Nie udało się pobrać danych");
    }
  };

  const clean = () => {
    setData([]);
    setQuery("");
  };
  return (
    <div className={styles.main}>
      <div className={styles.root}>
        <div className={styles.logo}>
          <Link to="/">
            <CameraRollIcon /> <div className={styles.span}>Movies</div>
          </Link>
        </div>
        <div className={styles.links}>
          <Link to={""}>Home Page</Link>
          <Link to={"/movies"}>Movies</Link>
          <Link to={"/serials"}>Serials</Link>
          <Link to={"/persons"}>Persons</Link>
          <Link to={"userprofile"}>User Profile</Link>
        </div>
      </div>
      <div className={styles.carusel}>
        <Carousel
          indicators={false}
          stopAutoPlayOnHover={false}
        >
          {movie?.results?.map((movie) => (
            <div key={movie.id} className={styles.caruselImg}>
              <img
                src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
              />
            </div>
          ))}
        </Carousel>
        <div className={styles.searchBnt}>
          <div ref={myRef} className={styles.list}>
            <Input
              onClick={() => setIsVisible(true)}
              placeholder="szukaj"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              className={styles.input}
            />
            <p className={styles.search}>
              <SearchIcon />
            </p>
            {isVisible && (
              <div className={styles.listAbsolut}>
                <SearchList clean={clean} value={data} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
