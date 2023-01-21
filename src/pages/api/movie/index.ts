import { getMovies } from "@/lib/movie";

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    message: "Movies list",
    length: getMovies().length,
    movies: getMovies(),
  });
}
