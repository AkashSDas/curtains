import Image from "next/image";

import VideoPlayer from "@/components/shared/video-player.client";
import { Data as MovieData, getMovie } from "@/lib/movie";

interface Props {
  params: { movieId?: string };
}

export default function WatchMoviePage({ params }: Props) {
  if (!params.movieId) return <div>Movie not found</div>;

  var movie = getMovie(params.movieId);
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <main className="mb-28">
      <VideoPlayer src={movie.src} />
      <Info movie={movie} />
    </main>
  );
}

function Info({ movie }: { movie: MovieData["movies"][0] }) {
  return (
    <section className="flex gap-16 ml-8 mt-8 rounded-xl">
      {/* Poster */}
      <div className="w-[120px] h-[160px] relative">
        <Image
          src={movie.smallPosterURL}
          alt={movie.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-4">
        <h3 className="font-head text-text1 text-[25px]">{movie.title}</h3>
        <div className="flex gap-3 items-center">
          <span className="text-sm font-medium">2012</span>
          <span className="text-sm font-medium bg-card rounded-sm px-[3px] py-[1px]">
            A
          </span>
          <span className="text-sm font-medium">2h 45m</span>
          <span className="text-sm font-medium bg-card rounded-sm px-[3px] py-[1px]">
            HD
          </span>
        </div>

        <p className="w-full max-w-[600px] leading-[135%]">
          {movie.description}
        </p>
      </div>
    </section>
  );
}
