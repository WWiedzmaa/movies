import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import styles from "./HomePageCard.module.css";

const HomePageCard = ({ trend }) => {
  function detals() {
    switch (trend.media_type) {
      case "movie":
        return (
          <div>
            <div>{trend.release_date}</div>
            <div>{trend.overview}</div>
          </div>
        );
      case "tv":
        return (
          <div>
            <div>{trend.first_air_date}</div>
            <div>{trend.overview}</div>
          </div>
        );
      case "person":
        console.log(trend);
        return trend.known_for.map((playIn) => (
          <div key={playIn.id}>{playIn.original_title} </div>
        ));
      default:
        break;
    }
  }
  return (
    <div className={styles.root}>
      <Link
        to={`/serch/${
          trend.id + "-" + (trend.name ?? trend.title)?.replaceAll(" ", "-")
        }`}
        state={{ obj: trend }}
        className={styles.link}
      >
        <Card sx={{ maxWidth: 345, height:300 }}>
          <CardMedia
            sx={{ height: 140, width: 200 }}
            image={`https://image.tmdb.org/t/p/w500/${
              trend.poster_path ?? trend.profile_path
            }`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className={styles.name}>
              {trend.name ?? trend.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className={styles.text}>{detals()}</span>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default HomePageCard;
