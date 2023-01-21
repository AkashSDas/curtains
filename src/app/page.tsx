import MoviesList from "@/components/movie/movies-list";
import Spotlight from "@/components/shared/spotlight";

import { getMovies } from "../lib/movie";

export default async function HomePage() {
  var movies = getMovies();

  return (
    <div className="mb-36">
      <Spotlight movie={movies[13]} />
      <MoviesList movies={movies} />
    </div>
  );
}
