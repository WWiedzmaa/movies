import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import { Input } from "./../components/Input";
import SearchIcon from "@mui/icons-material/Search";
import SearchList from "../components/SearchList";

const Header = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getData();
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
    <div className={styles.root}>
      <div className={styles.logo}>
        <Link to="/">
          <CameraRollIcon /> <div className={styles.span}>Movies</div>
        </Link>
      </div>
      <div className={styles.links}>
        <Link to={""} className={styles.link}>
          Home Page
        </Link>
        <Link to={"/movies"} className={styles.link}>
          Movies
        </Link>
        <Link to={"/serials"} className={styles.link}>
          Serials
        </Link>
        <Link to={"/persons"} className={styles.link}>
          Persons
        </Link>
        <Link to={"userprofile"} className={styles.link}>
          User Profile
        </Link>
      </div>
      <div className={styles.list}>
        <Input
          placeholder="szukaj"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className={styles.input}
        />
        <p className={styles.search}>
          <SearchIcon />
        </p>
        <div className={styles.listAbsolut}>
          <SearchList clean={clean} value={data} />
        </div>
      </div>
    </div>
  );
};

export default Header;
