//https://api.themoviedb.org/3/person/changes?api_key=5219cb6186dc8cdfa863dcdc035f17f8

import { useEffect, useState } from "react";

const useMyHook = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url+'?api_key=5219cb6186dc8cdfa863dcdc035f17f8');
      if (!response.ok) {
        setError("Nie udało się pobrać danych");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError("Nie udało się pobrać danych");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error };
};

export default useMyHook;
