import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    message: "Movies list",
    length: getMovies().length,
    movies: getMovies(),
  });
}

function getMovies() {
  return [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      rating: 9.2,
      votes: 678790,
      running_times: 8520,
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL: "/posters/swim-for-health.png",
      bannerURL: "/banners/swim-for-health.png",
      smallPosterURL: "/small-posters/swim-for-health.png",
    },
  ];
}
