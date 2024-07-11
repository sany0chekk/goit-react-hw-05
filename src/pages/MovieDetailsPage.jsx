import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../api/movies-api";
import MovieDetailsNavigation from "../components/MovieDetailsNavigation";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState({});

  const {
    poster_path,
    original_title,
    genres = [],
    budget,
    overview,
    release_date,
    vote_average,
  } = movie;

  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await getMovieDetails(movieId);
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetails();
  }, [movieId]);

  return (
    <div className="">
      <Link
        to={backLinkRef.current}
        className="block max-w-28 text-center p-2 bg-teal-500 rounded-md transition-colors hover:bg-teal-600 mb-5"
      >
        Go back
      </Link>
      <div className="flex flex-col items-center md:flex-row gap-5 bg-neutral-600 p-4 rounded-md mb-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className="block max-w-full h-auto md:max-w-72 rounded-md"
        />
        <div className="flex flex-col items-center text-center md:text-left md:items-start">
          <h2 className="font-bold text-xl mb-2">{original_title}</h2>
          {genres.length > 0 && (
            <ul className="flex gap-2 mb-4">
              {genres.map((genre) => (
                <li key={genre.id}>
                  <p className="p-1 bg-sky-600 rounded-md text-xs uppercase">
                    {genre.name}
                  </p>
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-col mb-10">
            <p className="font-normal text-md">
              Released: <span className="opacity-60">{release_date}</span>
            </p>
            {budget > 0 && (
              <p className="font-normal text-md">
                Budget: <span className="opacity-60">{budget}$</span>
              </p>
            )}
            <p className="font-normal text-md">
              Rating:{" "}
              <span className="opacity-60">{Math.floor(vote_average)}/10</span>
            </p>
          </div>
          <p className="font-light text-md">{overview}</p>
        </div>
      </div>
      <div className="">
        <MovieDetailsNavigation />
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
