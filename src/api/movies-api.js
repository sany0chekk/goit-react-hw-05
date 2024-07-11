import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjEwYjhjMjY1YWE0NWFiMzViODg3NjA4OTIzMjIyMiIsIm5iZiI6MTcyMDcwMjE5NS44Mjg0MzksInN1YiI6IjY2M2JjY2JlYmRjMjJhNDAxNjAxMDk3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D-AhUBIkvIEKutOGg4wTLCfm0KAmxqOMu0EWtvds_js";
const defaultParams = {
  language: "en-US",
};

const getTrandingMovies = async () => {
  const response = await axios.get("/trending/movie/day", defaultParams);
  return response.data;
};

const getSearchMovies = async (query, page = 1) => {
  const response = await axios.get(`/search/movie`, {
    ...defaultParams,
    params: {
      query,
      page,
    },
  });
  return response.data;
};

const getMovieDetails = async (id) => {
  const response = await axios.get(`/movie/${id}`, defaultParams);
  return response.data;
};

const getMovieCast = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data;
};

const getMovieReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
};

export {
  getTrandingMovies,
  getSearchMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
};
