import React from "react";
import useMyHook from "./../hooks/useMyHook";
import CardPersons from "./CardPersons";

const Person = () => {
  const { data, loading, error } = useMyHook(
    "https://api.themoviedb.org/3/person/popular"
  );

  return (
    <div>
      {!loading &&
        data.results.map((person) => (
          <CardPersons person={person} key={person.id} />
        ))}
      ;
    </div>
  );
};

export default Person;
