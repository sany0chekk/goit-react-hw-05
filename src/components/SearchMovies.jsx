import { useState } from "react";

const SearchMovies = ({ value, onSubmit }) => {
  const [searchValue, setValue] = useState(value ?? "");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.query.value);
  };

  return (
    <form
      className="flex items-center justify-center gap-2 mb-5 h-10"
      onSubmit={handleSubmit}
    >
      <input
        name="query"
        type="text"
        value={searchValue}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Movie name..."
        className="h-full p-4 outline-none bg-neutral-500 rounded-md transition-colors border border-neutral-700 focus:border-neutral-400"
      />
      <button className="h-full rounded-md px-4 bg-teal-500 transition-colors hover:bg-teal-600">
        Search
      </button>
    </form>
  );
};

export default SearchMovies;
