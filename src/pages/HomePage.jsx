import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { getTrandingMovies } from "../api/movies-api";
import Loader from "../components/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovie = async () => {
      try {
        setIsLoading(true);
        const response = await getTrandingMovies();
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovie();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        movies.length > 0 && <MovieList movies={movies} />
      )}
    </>
  );
};

export default HomePage;
