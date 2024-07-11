import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import SearchMovies from "../components/SearchMovies";
import { useSearchParams } from "react-router-dom";
import { getSearchMovies } from "../api/movies-api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("movie") ?? "";

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        const response = await getSearchMovies(searchParams);
        setMovies(response.results);
      } catch (error) {
        console.log(error);
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
      <SearchMovies value={searchValue} onSubmit={handleSearchSubmit} />
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
