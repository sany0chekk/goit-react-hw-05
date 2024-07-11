import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../api/movies-api";
import Loader from "./Loader";

const MovieCast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieCast(movieId);
        setCast(response.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+photo";

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-5 bg-neutral-600 p-4 rounded-md">
          {cast.length > 0 ? (
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 flex-wrap">
              {cast.map(({ id, profile_path, original_name, character }) => {
                return (
                  <li
                    key={id}
                    className="bg-neutral-500 rounded-md overflow-hidden flex flex-col"
                  >
                    <img
                      src={
                        profile_path
                          ? `https://image.tmdb.org/t/p/original/${profile_path}`
                          : defaultImg
                      }
                      alt={original_name}
                    />
                    <div className="p-4 mt-auto">
                      <h2 className="text-center font-bold text-xl">
                        {original_name}
                      </h2>
                      <p className="text-center text-lg">
                        Role: <span className="opacity-60">{character}</span>
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>List is empty!</p>
          )}
        </div>
      )}
    </>
  );
};

export default MovieCast;
