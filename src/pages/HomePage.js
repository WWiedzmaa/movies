import React from "react";
//import { Button } from "../components/Button";
import useMyHook from './../hooks/useMyHook';

const HomePage = () => {
  const {data, loading, error} = useMyHook(
    "https://api.themoviedb.org/3/person/changes"
  );
  console.log(data);
  return <div></div>;
};

export default HomePage;
