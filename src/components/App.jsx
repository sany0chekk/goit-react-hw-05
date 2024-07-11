import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import { lazy, Suspense } from "react";
import Loader from "./Loader";

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const MovieCast = lazy(() => import("./MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews"));

const App = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col gap-4">
      <Navigation />

      <div className="bg-neutral-700 rounded-md p-4">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
