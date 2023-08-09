import React from "react";
//import { Button } from "../components/Button";
import useMyHook from "./../hooks/useMyHook";
import SampleComponent from "../hooks/useClenHook";

const HomePage = () => {
  const { data, loading, error } = useMyHook(
    "https://api.themoviedb.org/3/person/changes"
  );
  return (
    <div>
      <SampleComponent />
    </div>
  );
};

export default HomePage;
