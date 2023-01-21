import Spotlight from "@/components/shared/spotlight";

import type { Data as MovieData } from "../pages/api/movie";

export default async function HomePage() {
  var movies: MovieData = await getMovies();

  return (
    <div>
      <Spotlight movie={movies.movies[13]} />
    </div>
  );

  async function getMovies() {
    return fetch("http://localhost:3000/api/movie")
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
}
