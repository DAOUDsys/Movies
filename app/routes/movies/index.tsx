/* eslint-disable @typescript-eslint/no-unused-vars */
import type {
  LinksFunction,
  V2_MetaFunction,
  LoaderFunction,
} from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { Movie } from "~/api/movies";
import { getMovies } from "~/api/movies";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

export const loader: LoaderFunction = async () => {
  return getMovies(1);
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "Movies", description: "List of movies" }];
};

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: "styles" }];
// };

export default function MoviesIndex() {
  const movies = useLoaderData<Movie[]>();
  
  return (
    <>
    <div>
      <h1>Movies</h1>
      
    </div>
      <div className="font-sans grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {movies.length != 0 ? (
          movies.map((movie) => (
            <Card className={`w-[300px] bg-[url('${movie.imageurl[0]}')] hover:scale-105 hover:shadow-2xl`} key={movie.imdbid}>
                <CardHeader className="hidden">
                <div>{movie.released}</div>
                </CardHeader>
              <CardContent>
                {/* <Link to={`/movie/${movie.imdbid}`}> */}
                  {/* <img src={movie.imageurl[0]} alt={movie.title} /> */}
                {/* </Link> */}
              </CardContent>
              <CardFooter className="hidden">
                <CardTitle>{movie.title}</CardTitle>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="m-auto">
            Sorry we can't get the movies now, please try again later :(
          </div>
        )}
      </div>
    </>
  );
}