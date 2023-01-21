import MoviesList from "@/components/movie/movies-list";
import Spotlight from "@/components/shared/spotlight";

import type { Data as MovieData } from "../lib/movie";

export default async function HomePage() {
  var movies: MovieData = await getMovies();

  return (
    <div className="mb-36">
      <Spotlight movie={movies.movies[13]} />
      <MoviesList movies={movies.movies} />
    </div>
  );

  async function getMovies() {
    return fetch(`${process.env.BACKEND_URL}/movie`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
}
