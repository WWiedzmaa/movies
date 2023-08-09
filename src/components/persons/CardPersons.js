import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./CardPersons.module.css";

const CardPersons = ({ person }) => {
  const title = person.known_for.map((item) =>
    item.title ? item.title : item.name
  );
  return (
    <div>
      <Link
        to={`/person/${person.id + "-" + person.name.replaceAll(" ", "-")}`}
        state={{ obj: person }}
      >
        <Card className={styles.main} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140, width: 200 }}
            image={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <span className={styles.name}>{person.name}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className={styles.text}>
                {title[0]}, {title[1]}, {title[2]}
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default CardPersons;
