import { Link } from "react-router-dom";

import backup from '../assets/images/backup.png';

export const Card = ({movie}) => {
 const {id, original_title, overview, poster_path } = movie;

  const cardContainer = 'max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3';
  const cardTitle = 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white';
  const cardText = 'mb-3 font-normal text-gray-700 dark:text-gray-400';

  return (
    <div className={cardContainer}>
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : backup} alt="movie poster" />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className={cardTitle}>{original_title}</h5>
        </Link>
        <p className={cardText}>{overview}</p>
      </div>
    </div>
  )
};