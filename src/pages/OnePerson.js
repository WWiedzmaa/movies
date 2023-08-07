import React from "react";
import useMyHook from "../hooks/useMyHook";
import { CardOnePerson } from "../components/persons/CardOnePerson";

const OnePerson = ({ person }) => {
  console.log(person.id);
  const [data, loading] = useMyHook(
    `https://api.themoviedb.org/3/person/${person.id}`
  );
  console.log(person.id);

  return (
    <div>
      {!loading &&
        data.results.map((person) => (
          <CardOnePerson person={person} key={person.id} />
        ))}
    </div>
  );
};

export default OnePerson;

// const [query, setQuery] = useState("");
// const [data, setData] = useState([]);
// const [error, setError] = useState("")

// useEffect(() => {
//   getData();
// }, [query]);

// const getData = async () => {
//     //'https://api.themoviedb.org/3/movie/343611?api_key=cf5c10f0a353056cc21ad67d62e7f055'
//     //https://api.themoviedb.org/3/person/{person_id}
//   try {
//     const response = await fetch(`https://api.themoviedb.org/3/person/${person.id}?api_key=5219cb6186dc8cdfa863dcdc035f17f8`);
//     console.log(response);
//     const result = await response.json();
//     setData(result.results);
//   } catch (error) {
//     setError("Nie udało się pobrać danych");
//   }

// };
