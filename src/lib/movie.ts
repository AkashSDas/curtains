export type Data = {
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
    src: string;
  }[];
};

var data: Data["movies"] = [
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
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
    posterURL: "/posters/winter-sports.png",
    bannerURL: "/banners/winter-sports.png",
    smallPosterURL: "/small-posters/winter-sports.png",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
    posterURL: "/posters/kodak.png",
    bannerURL: "/banners/kodak.png",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    smallPosterURL: "/small-posters/kodak.png",
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
    posterURL: "/posters/braniff-international-airways.png",
    bannerURL: "/banners/braniff-international-airways.png",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",

    smallPosterURL: "/small-posters/braniff-international-airways.png",
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
    posterURL: "/posters/casion.png",
    bannerURL: "/banners/casion.png",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",

    smallPosterURL: "/small-posters/casion.png",
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
    posterURL: "/posters/fire-wrecks-a-fores.png",
    bannerURL: "/banners/fire-wrecks-a-fores.png",
    smallPosterURL: "/small-posters/fire-wrecks-a-fores.png",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
    posterURL: "/posters/knowledge.png",
    bannerURL: "/banners/knowledge.png",
    smallPosterURL: "/small-posters/knowledge.png",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
    posterURL: "/posters/the-fall.png",
    bannerURL: "/banners/the-fall.png",
    smallPosterURL: "/small-posters/the-fall.png",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
    posterURL: "/posters/dead-may-rise-again.png",
    bannerURL: "/banners/dead-may-rise-again.png",
    smallPosterURL: "/small-posters/dead-may-rise-again.png",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
    posterURL: "/posters/inflation.png",
    bannerURL: "/banners/inflation.png",
    smallPosterURL: "/small-posters/inflation.png",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
    posterURL: "/posters/kill-them.png",
    bannerURL: "/banners/kill-them.png",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",

    smallPosterURL: "/small-posters/kill-them.png",
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
    posterURL: "/posters/seal-force.png",
    bannerURL: "/banners/seal-force.png",
    smallPosterURL: "/small-posters/seal-force.png",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
    posterURL: "/posters/the-mountains.png",
    bannerURL: "/banners/the-mountains.png",
    smallPosterURL: "/small-posters/the-mountains.png",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
    posterURL: "/posters/recruiting-stations.png",
    bannerURL: "/banners/recruiting-stations.png",
    smallPosterURL: "/small-posters/recruiting-stations.png",
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
];

export function getMovies(): Data["movies"] {
  return data;
}

export function getMovie(id: string): Data["movies"][0] | undefined {
  return data.find(function findById(movie) {
    return movie.id == parseInt(id);
  });
}
