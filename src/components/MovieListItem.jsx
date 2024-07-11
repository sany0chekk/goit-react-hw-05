import { Link, useLocation } from "react-router-dom";

const MovieListItem = ({
  movie: { id, poster_path, original_title, release_date, vote_average },
}) => {
  const location = useLocation();

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  return (
    <li className="bg-neutral-500 rounded-md overflow-hidden flex flex-col">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original/${poster_path}`
            : defaultImg
        }
        alt={original_title}
        className="max-h-sm h-full object-cover"
      />
      <div className="mt-auto p-2 flex flex-col gap-5">
        <h2 className="text-center font-bold text-lg">{original_title}</h2>
        <div className="">
          <p className="font-normal text-center">
            Release: <span className="opacity-50">{release_date}</span>
          </p>
          <p className="font-normal text-center">
            Rating:{" "}
            <span className="opacity-50">{Math.round(vote_average)}/10</span>
          </p>
        </div>
        <Link
          to={`/movies/${id}`}
          state={location}
          className="w-full p-2 bg-teal-500 rounded-md transition-colors hover:bg-teal-600 text-center"
        >
          Read More
        </Link>
      </div>
    </li>
  );
};

export default MovieListItem;
