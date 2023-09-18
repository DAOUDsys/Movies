import type {LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from "@remix-run/react";
import type { Movie } from "~/api/movies";
import { getMovieById } from "~/api/movies";
import MovieBanner from "~/components/ui/movieBanner";

export const loader: LoaderFunction = async ({ params }) => {
  const movie = await getMovieById(params.movieId!);
  return movie;
};

// @ts-ignore
export const meta: MetaFunction = ({ data }) => {
  return [{ title: data.title, description: data.description }];
};

export default function MovieDetails() {
  const movie = useLoaderData<Movie>();
  
  return (
    <>
      <MovieBanner movie={movie} />
      <div className='m-3 mr-0'>
        <div className='flex justify-between'>
        <h2 className='font-bold text-xl'>Movies story</h2>
        <div className='text-center w-[200px] bg-amber-500'>
        <p className='text-lg font-medium text-black'>IMDB Rate: {movie.imdbrating}/10</p>
        </div>
        </div>
        <p className='text-[#d3d3d3] font-medium text-lg'>{movie.synopsis}</p>
      </div>
      
    </>
  );
}

export function ErrorBoundary({ error }: any) {
  console.error(error);
  return (
    <html lang="en">
      <body>
        <div className="mb-3">
          <div className="text-3xl mb-2">Details</div>
          <div className="p-4 rounded shadow-lg border bg-rose-200 border-rose-600">
            <div className="text-gray-700 font-bold text-xl mb-2">
              Uh oh... Sorry something went wrong!
            </div>
            <p>{error?.message}</p>
          </div>
        </div>
      </body>
    </html>
  );
}