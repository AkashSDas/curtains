import type { Data as MovieData } from "@/lib/movie";
import Image from "next/image";
import Link from "next/link";

interface Props {
  movies: MovieData["movies"];
}

export default function MoviesList({ movies }: Props) {
  function renderMovie(movie: MovieData["movies"][0]) {
    return <MovieCard key={movie.id} movie={movie} />;
  }

  return (
    <section className="m-8">
      <h2 className="font-head text-lg text-text1 mb-6">Movies</h2>
      <div className="w-full overflow-x-scroll overflow-y-clip flex gap-4">
        {movies.map(renderMovie)}
      </div>
    </section>
  );
}

function MovieCard({ movie }: { movie: MovieData["movies"][0] }) {
  return (
    <Link href={`/watch/movie/${movie.id}`} className="relative group">
      <div className="relative w-[180px] h-[240px] rounded-xl cursor-pointer overflow-hidden">
        <Image
          src={movie.posterURL}
          alt={movie.title}
          fill
          className="rounded-xl object-cover w-full h-full group-hover:scale-110 transition-all"
        />
      </div>

      <div className="hidden group-hover:block transition-all bg-bg bg-opacity-90 text-center w-full px-1 py-2 rounded-xl rounded-t-none absolute bottom-0 z-10">
        {movie.title}
      </div>
    </Link>
  );
}
