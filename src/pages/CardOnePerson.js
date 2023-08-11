//https://api.themoviedb.org/3/person/{person_id}
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const CardOnePerson = () => {
  const params = useParams();
  const id = params.id.replace(/\D/g, "");

  const location = useLocation();
  const { obj } = location.state;

  const img = obj.known_for.map((item) => item.backdrop_path);
  const title = obj.known_for.map((item) =>
    item.title ? item.title : item.name
  );

  console.log(obj);

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${obj.profile_path}`} />
      <h1>{obj.name}</h1>
      <h2>Znana/y z: </h2>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`https://image.tmdb.org/t/p/w500/${img[0]}`}
            alt="photo1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title[0]}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`https://image.tmdb.org/t/p/w500/${img[1]}`}
            alt="photo1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title[1]}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`https://image.tmdb.org/t/p/w500/${img[2]}`}
            alt="photo1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title[2]}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
