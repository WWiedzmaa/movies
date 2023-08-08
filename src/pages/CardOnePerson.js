//https://api.themoviedb.org/3/person/{person_id}
import React from "react";
import { useLocation, useParams } from "react-router-dom";

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
      <div>
        <img src={`https://image.tmdb.org/t/p/w500/${img[0]}`} />
        <p>{title[0]}</p>
      </div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500/${img[1]}`} />
        <p>{title[1]}</p>
      </div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500/${img[2]}`} />
        <p>{title[2]}</p>
      </div>
    </div>
  );
};
