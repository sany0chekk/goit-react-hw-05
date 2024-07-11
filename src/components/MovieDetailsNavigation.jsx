import { NavLink } from "react-router-dom";

const MovieDetailsNavigation = () => {
  const linkStyles = ({ isActive }) =>
    `p-3 bg-neutral-600 font-semibold text-white text-sm rounded-md transition hover:opacity-50 ${
      isActive ? "bg-neutral-500" : "bg-neutral-600"
    }`;

  return (
    <div className="flex gap-4">
      <NavLink to="cast" className={linkStyles}>
        Cast
      </NavLink>
      <NavLink to="reviews" className={linkStyles}>
        Reviews
      </NavLink>
    </div>
  );
};

export default MovieDetailsNavigation;
