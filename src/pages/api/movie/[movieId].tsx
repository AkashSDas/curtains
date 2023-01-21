import { getMovie } from "@/lib/movie";

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  var movieId = req.query.movieId as string;
  var movie = getMovie(movieId);
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  return res.status(200).json({ message: "Movie found", movie });
}
