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
  console.log(movie);
  
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
