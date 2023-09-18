import { Link } from "@remix-run/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import type { Movie } from "~/api/movies";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="group hover:scale-105 hover:shadow-2xl animation-duration-2000 p-0 w-fit border-none relative">
      <CardHeader className="hidden group-hover:block absolute top-1 right-1">
        <div className="hover:cursor-default text-white text-xl font-bold rounded-[10px] bg-slate-700/60 p-2">
          {movie.released}
        </div>
      </CardHeader>
      <CardContent className="p-0 m-0">
        <Link
          title={movie.title}
          to={movie.imdbid}
          className="m-0 p-0 w-fit"
          prefetch="intent"
        >
          <img
            src={movie.imageurl[0]}
            alt={movie.title}
            className="m-0 w-64 rounded-t-[10px]"
          />
        </Link>
      </CardContent>
      <CardFooter className="p-0 bg-[#7e53d7a6] pt-3 rounded-b-[10px]">
        <CardTitle className="m-1 mr-0 h-[30px] w-[240px] text-ellipsis whitespace-nowrap overflow-hidden hover:cursor-default ">
          {movie.title}
        </CardTitle>
      </CardFooter>
    </Card>
  );
}
