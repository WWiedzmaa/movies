import React from "react";

const CardPersons = ({ person }) => {
  console.log(person);
  return (
    <div>
      <h3>{person.name}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
        alt="person_photo"
      />
      <p>
        {person.known_for.map((item) => (item.title ? item.title : item.name))}
        {/* {person.known_for[0].title},{person.known_for[1].title},
        {person.known_for[2].title} */}
      </p>
    </div>
  );
};

export default CardPersons;
