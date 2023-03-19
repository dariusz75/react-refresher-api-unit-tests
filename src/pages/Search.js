import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

import { Card } from "../components";

export const Search = ({apiPath}) => {
  const [ searchParams ] = useSearchParams();
  const queryTerm = searchParams.get('q');

  const {data: movies} = useFetch(apiPath, queryTerm);

  useEffect(() => {
    console.log('queryTerm', queryTerm);
  })

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-grey-700 dark:text-white">
          {movies.length === 0 ? `No fesult found for ${queryTerm}` : `${movies.length} results found for ${queryTerm}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => {return <Card key={movie.id} movie={movie} />}
          )}
        </div>
      </section>
    </main>
  )
}
