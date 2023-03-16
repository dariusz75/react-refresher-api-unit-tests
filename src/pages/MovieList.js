import { useEffect, useState } from "react";
import { Card } from "../components";

export const MovieList = () => {
  const [movies, setMovies] = useState([1, 2]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f2960d24d3589db02d7917c654ff10fe');
      const data = await response.json();
      console.log('movies are', data)
      setMovies(data.results);
    };
    fetchMovies();
  },[]);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => {return <Card key={movie.id} movie={movie} />}
          )}
        </div>
      </section>
    </main>
  )
}
