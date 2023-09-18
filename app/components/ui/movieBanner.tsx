import { Link } from "@remix-run/react";
import type { Movie } from "~/api/movies";

type MovieBannerProps = {
  movie: Movie;
};

export default function MovieBanner({ movie }: MovieBannerProps) {
  return (
    <div className="w-full h-full flex justify-between items-revert bg-[#141bed1a] flex-col sm:flex-row">
      <div className="w-full h-full flex flex-col justify-between items-start gap-0 sm:gap-[108px]">
        <Link to="/movies" className="text-white p-5 text-2xl hover:underline">
          Go Back
        </Link>
        <div className="text-6xl font-bold flex justify-between text-white bg-slate-700/60 p-5 w-full">
          <div>{movie.title}</div>
          <div className="hidden sm:block">{movie.released}</div>
        </div>
        </div>
        <div>
          <img
            src={movie.imageurl[0]}
            className="w-[230px] h-[280px] m-auto"
            alt={movie.title}
          />
        </div>
    </div>
  );
}
