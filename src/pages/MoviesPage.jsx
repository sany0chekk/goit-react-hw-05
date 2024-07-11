import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import SearchMovies from "../components/SearchMovies";
import { useSearchParams } from "react-router-dom";
import { getSearchMovies } from "../api/movies-api";
import Loader from "../components/Loader";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchValue = searchParams.get("movie") ?? "";

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await getSearchMovies(searchParams);
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchMovies();
  }, [searchParams]);

  const handleSearchSubmit = (query) => {
    searchParams.set("movie", query);
    setSearchParams(searchParams);
  };

  return (
    <>
      <SearchMovies onSubmit={handleSearchSubmit} />
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
