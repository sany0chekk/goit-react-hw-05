import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center">
      <h2 className="mb-3 text-teal-600 font-bold text-xl md:text-5xl lg:text-9xl">
        404
      </h2>
      <p className="mb-2 font-bold text-xl lg:text-3xl">{`Something's missing.`}</p>
      <p className="mb-4 text-xl font-light">{`Sorry, we can't find that page. You'll find lots to explore on the home page.`}</p>
      <Link
        to={"/"}
        className="inline-block p-4 bg-teal-500 rounded-md transition-colors hover:bg-teal-600"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
