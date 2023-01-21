import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  length: number;
  movies: {
    id: number;
    title: string;
    year: number;
    rating: number;
    votes: number;
    running_times: number;
    description: string;
    posterURL: string;
    bannerURL: string;
    smallPosterURL: string;
  }[];
};

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    message: "Movies list",
    length: getMovies().length,
    movies: getMovies(),
  });
}

function getMovies(): Data["movies"] {
  return [
    {
      id: 1,
      title: "Swim for health",
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
    {
      id: 2,
      title: "Winter Sports",
      year: 2005,
      rating: 7.2,
      votes: 437114,
      running_times: 1620,
      description:
        "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      posterURL: "/posters/winter-sports",
      bannerURL: "/banners/winter-sports",
      smallPosterURL: "/small-posters/winter-sports",
    },
    {
      id: 3,
      title: "Kodak",
      year: 2005,
      rating: 7.2,
      votes: 437114,
      running_times: 1620,
      description:
        "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      posterURL: "/posters/kodak",
      bannerURL: "/banners/kodak",
      smallPosterURL: "/small-posters/kodak",
    },
    {
      id: 4,
      title: "Braniff International Airways",
      year: 2005,
      rating: 7.2,
      votes: 437114,
      running_times: 1620,
      description:
        "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      posterURL: "/posters/braniff-international-airways",
      bannerURL: "/banners/braniff-international-airways",
      smallPosterURL: "/small-posters/braniff-international-airways",
    },
    {
      id: 5,
      title: "Casion",
      year: 2005,
      rating: 7.2,
      votes: 437114,
      running_times: 1620,
      description:
        "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      posterURL: "/posters/casion",
      bannerURL: "/banners/casion",
      smallPosterURL: "/small-posters/casion",
    },
    {
      id: 6,
      title: "Fire wrecks a forest",
      year: 2005,
      rating: 7.2,
      votes: 437114,
      running_times: 1620,
      description:
        "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      posterURL: "/posters/fire-wrecks-a-fores",
      bannerURL: "/banners/fire-wrecks-a-fores",
      smallPosterURL: "/small-posters/fire-wrecks-a-fores",
    },
    {
      id: 7,
      title: "Knowledge",
      year: 2005,
      rating: 7.2,
      votes: 437114,
      running_times: 1620,
      description:
        "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      posterURL: "/posters/knowledge",
      bannerURL: "/banners/knowledge",
      smallPosterURL: "/small-posters/knowledge",
    },
    {
      id: 8,
      title: "The Fall",
      year: 2005,
      rating: 7.2,
      votes: 437114,
      running_times: 1620,
      description:
        "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      posterURL: "/posters/the-fall",
      bannerURL: "/banners/the-fall",
      smallPosterURL: "/small-posters/the-fall",
    },
    {
      id: 9,
      title: "Dead may rise again",
      year: 2005,
      rating: 7.2,
      votes: 437114,
      running_times: 1620,
      description:
        "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      posterURL: "/posters/dead-may-rise-again",
      bannerURL: "/banners/dead-may-rise-again",
      smallPosterURL: "/small-posters/dead-may-rise-again",
    },
    {
      id: 10,
      title: "Inflation",
      year: 2005,
      rating: 7.2,
      votes: 437114,
      running_times: 1620,
      description:
        "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      posterURL: "/posters/inflation",
      bannerURL: "/banners/inflation",
      smallPosterURL: "/small-posters/inflation",
    },
    {
      id: 11,
      title: "Kill Them",
      year: 2005,
      rating: 7.2,
      votes: 437114,
      running_times: 1620,
      description:
        "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      posterURL: "/posters/kill-them",
      bannerURL: "/banners/kill-them",
      smallPosterURL: "/small-posters/kill-them",
    },
    {
      id: 12,
      title: "Seal Force",
      year: 2005,
      rating: 7.2,
      votes: 437114,
      running_times: 1620,
      description:
        "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      posterURL: "/posters/seal-force",
      bannerURL: "/banners/seal-force",
      smallPosterURL: "/small-posters/seal-force",
    },
    {
      id: 13,
      title: "The Mountains",
      year: 2005,
      rating: 7.2,
      votes: 437114,
      running_times: 1620,
      description:
        "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      posterURL: "/posters/the-mountains",
      bannerURL: "/banners/the-mountains",
      smallPosterURL: "/small-posters/the-mountains",
    },
    {
      id: 14,
      title: "Recruiting Stations",
      year: 2005,
      rating: 7.2,
      votes: 437114,
      running_times: 1620,
      description:
        "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
      posterURL: "/posters/recruiting-stations",
      bannerURL: "/banners/recruiting-stations",
      smallPosterURL: "/small-posters/recruiting-stations",
    },
  ];
}
