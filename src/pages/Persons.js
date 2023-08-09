import React from "react";
import useMyHook from "./../hooks/useMyHook";
import CardPersons from "../components/persons/CardPersons";
import styles from "./Persons.module.css";

const Person = () => {
  const { data, loading } = useMyHook(
    "https://api.themoviedb.org/3/person/popular"
  );

  return (
    <div className={styles.main}>
      {!loading &&
        data.results.map((person) => (
          <CardPersons person={person} key={person.id} />
        ))}
      ;
    </div>
  );
};

export default Person;
