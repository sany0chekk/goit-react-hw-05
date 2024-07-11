import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { getTrandingMovies } from "../api/movies-api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovie = async () => {
      try {
        const response = await getTrandingMovies();
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingMovie();
  }, []);

  return <>{movies.length > 0 && <MovieList movies={movies} />}</>;
};

export default HomePage;
