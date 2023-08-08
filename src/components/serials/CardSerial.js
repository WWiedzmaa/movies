import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./CardSerial.module.css";
import { Link } from "react-router-dom";

const CardSerial = ({ serial }) => {
  console.log(serial);
  return (
    <Link className={styles.link} to={`/serch/${serial.id +"-" + (serial.name ?? serial.title).replaceAll(" ","-")}` } state={{ obj: serial }}>
    <Card className={styles.main} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, width: 200 }}
        image={`https://image.tmdb.org/t/p/w500/${serial.poster_path}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <span className={styles.name}>{serial.name}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span className={styles.text}>{serial.overview}</span>
        </Typography>
      </CardContent>
    </Card>
    </Link>
  );
};

export default CardSerial;
