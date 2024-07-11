import { NavLink } from "react-router-dom";

const Navigation = () => {
  const linkStyles = ({ isActive }) =>
    `p-3 bg-neutral-600 font-semibold text-white text-sm rounded-md transition hover:opacity-50 ${
      isActive ? "bg-neutral-500" : "bg-neutral-600"
    }`;

  return (
    <nav className="p-4 bg-neutral-700 rounded-md flex justify-center items-center gap-3">
      <NavLink to="/" className={linkStyles}>
        Home
      </NavLink>
      <NavLink to="/movies" className={linkStyles}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
