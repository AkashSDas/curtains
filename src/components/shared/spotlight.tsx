import Image from "next/image";
import Link from "next/link";

import { PlayIcon } from "@/components/shared/icons";

import type { Data as MovieData } from "@/lib/movie";
interface Props {
  movie: MovieData["movies"][0];
}

export default function Spotlight({ movie }: Props) {
  return (
    <section className="w-full">
      <div className="w-full h-[500px] relative">
        {/* Content */}
        <div className="z-20 absolute w-full h-full flex items-end px-8 pb-8">
          <div className="w-full h-full flex flex-col gap-2 justify-end">
            <div className="text-4xl font-cubano text-text1">{movie.title}</div>
            <button className="icon flex gap-3 items-center px-4 rounded-lg h-11 bg-primary w-fit hover:opacity-90 active:opacity-80">
              <PlayIcon size="size_5" />
              <Link
                href={`/watch/movie/${movie.id}`}
                className="font-head text-text1"
              >
                Watch Now
              </Link>
            </button>
          </div>
        </div>

        {/* Mask */}
        <div className="z-10 absolute w-full h-full flex items-end">
          <div className="w-full h-full bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <Image
          src={movie.bannerURL}
          alt={movie.title}
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
