/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";
import type { V2_MetaFunction, LoaderFunction } from "@remix-run/node";
import { useSubmit, Link, useLoaderData, Form } from "@remix-run/react";
import type { Movie } from "~/api/movies";
import { getMovies } from "~/api/movies";
import MovieCard from "~/components/ui/movieCard";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  const tag = url.searchParams.get("tag");

  return getMovies(search, tag);
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "Movies", description: "List of movies" }];
};

export default function MoviesIndex() {
  const movies = useLoaderData<Movie[]>();
  const tags: string[] = [
    "Action",
    "Thriller",
    "Comedy",
    "Adventure",
    "Drama",
    "Animation",
    "Sci-Fi",
    "Horror",
    "History",
    "Mystery",
    "Sport",
    "Fantasy",
    "Crime",
    "Family",
  ];

  const submit = useSubmit();
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = () => {
    if (formRef) {
      submit(formRef.current, { replace: true });
    }
  }; 

  return (
    <>
      <div onChange={handleChange} className="flex relative flex-row-reverse bg-[#121212] h-[130px] sm:h-auto">
        <Form
          ref={formRef}
          method="get"
          id="filter-form"
          reloadDocument
          className="py-5 mx-0 sm:mx-7"
        >
          <select
            form="filter-form"
            name="tag"
            defaultValue={""}
            className="text-black w-24 sm:w-fit rounded-[10px] h-9 sm:h-full py-2 px-3 mx-3"
          >
            <option value="">All</option>
            {tags.map((tag) => (
              <option value={tag} key={tag}>
                {tag}
              </option>
            ))}
          </select>
          <input
            type="search"
            name="search"
            placeholder="Type a title..."
            className="border-2 rounded-[10px] mx-2 py-2 px-3 text-black w-fit"
          />
        </Form>
        <Link
          to="/movies"
          className="absolute top-20 sm:top-6 font-bold text-2xl left-[40%] sm:left-[10%]"
        >
          Movies
        </Link>
      </div>
      <div className="font-sans grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4 justify-items-center">
        {movies.length != 0 ? (
          movies.map((movie) => <MovieCard movie={movie} key={movie.imdbid} />)
        ) : (
          <div className="m-auto absolute text-gray-300 font-bold text-2xl">
            Sorry we can't get the movies now, please try again later :(
          </div>
        )}
      </div>
    </>
  );
}
