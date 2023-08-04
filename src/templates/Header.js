import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import { Input } from './../components/Input';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("")

  useEffect(() => {
    getData();
  }, [query]);

  const getData = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=5219cb6186dc8cdfa863dcdc035f17f8&query=${query}&page=1`);
      console.log(response);
      const result = await response.json();
      setData(result.results);
    } catch (error) {
      setError("Nie udało się pobrać danych");
    }

  };

  console.log(data);
  console.log(query);
console.log(data.id);
  return (
    
    <div className={styles.root}>
    <div> {data.map((name)=>( <div key={name.id} > <Link to="/"> {name.id}</Link>  </div>))}  </div>
      <CameraRollIcon /> <span className={styles.span}>Movies</span>
      <div className={styles.links}>
        <Link to={""} className={styles.link}>Home Page</Link>
        <Link to={"/movies"} className={styles.link}>Movies</Link>
        <Link to={"/serials"} className={styles.link}>Serials</Link>
        <Link to={"/persons"} className={styles.link}>Persons</Link>
        <Link to={"userprofile"} className={styles.link}>User Profile</Link>
      </div>
      <Input placeholder="szukaj" onChange={(e) => setQuery(e.target.value)} value={query} className={styles.input} /> <p className={styles.search}><SearchIcon /></p>
   
    </div>
  );
};

export default Header;
