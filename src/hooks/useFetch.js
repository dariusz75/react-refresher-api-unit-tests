import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm='') => {
  const basePath = process.env.REACT_APP_BASE_PATH;
  const apiKey = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState([]);
  const url = `${basePath}/${apiPath}?api_key=${apiKey}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    };
    fetchMovies();
  },[url]);

  return {data};
}
