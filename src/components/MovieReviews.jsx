import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../api/movies-api";

import Loader from "./Loader";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  const defaultImg =
    "https://dummyimage.com/100x100/cdcdcd/000.jpg&text=No+photo";

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-5 bg-neutral-600 p-4 rounded-md">
          {reviews.length > 0 ? (
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 flex-wrap">
              {reviews.map(
                ({
                  id,
                  author_details: { name, username, avatar_path },
                  content,
                }) => {
                  return (
                    <li key={id} className="bg-neutral-500 rounded-md p-4">
                      <div className="flex items-center gap-4 mb-5">
                        <img
                          src={
                            avatar_path
                              ? `https://image.tmdb.org/t/p/original/${avatar_path}`
                              : defaultImg
                          }
                          alt={name}
                          className="w-20 h-20 rounded-full"
                        />
                        <div>
                          <p>{name}</p>
                          <p>@{username}</p>
                        </div>
                      </div>
                      <p>{content}</p>
                    </li>
                  );
                }
              )}
            </ul>
          ) : (
            <p>List is empty!</p>
          )}
        </div>
      )}
    </>
  );
};

export default MovieReviews;
