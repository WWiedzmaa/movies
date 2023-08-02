import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Footer.module.css";
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import { Divider } from "@mui/material";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.root}>
        <CameraRollIcon /> <span className={styles.span}>Movies</span>
        <div className={styles.links}>
          <div className={styles.grup}>
            <span className={styles.text}> O nas</span>
            <Link to={"/about"}>O Nas</Link>
            <Link to={"/contact"}>Kontakt</Link>
          </div>
          <div className={styles.grup}>
            <span className={styles.text}> Zaangażuj się </span>
            <Link to={"/newFilm"}>Nowy Film</Link>
            <Link to={"/newSerials"}>Nowy Serial</Link>
          </div>
          <div className={styles.grup}>
            <span className={styles.text}> Prawnie </span>
            <Link to={"/termsAndConditions"}>Regulamin</Link>
            <Link to={"/privacyPolicy"}>Polityka Prywatności</Link>
          </div>
        </div>
      </div>
      <Divider />
      <div>Create by  Ela, Natalia i Mateusz</div>
    </div>
  )
};

export default Footer;
