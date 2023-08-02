import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import { Input } from './../components/Input';
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {
  return (
    <div className={styles.root}>
      <CameraRollIcon /> <span className={styles.span}>Movies</span>
      <div className={styles.links}>
        <Link to={""} className={styles.link}>Home Page</Link>
        <Link to={"/movies"} className={styles.link}>Movies</Link>
        <Link to={"/serials"} className={styles.link}>Serials</Link>
        <Link to={"/persons"} className={styles.link}>Persons</Link>
        <Link to={"userprofile"} className={styles.link}>User Profile</Link>
      </div>
      <Input placeholder="szukaj" className={styles.input}/> <p className={styles.search}><SearchIcon/></p>
    </div>
  );
};

export default Header;
