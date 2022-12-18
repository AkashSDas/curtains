import { faker } from "@faker-js/faker";

function getMovieData() {
  return {
    id: faker.helpers.unique(faker.datatype.string),
    title: faker.random.words(faker.datatype.number({ min: 1, max: 3 })),
    year: faker.datatype.number({ min: 1900, max: 2021 }),
    rating: faker.datatype.number({ min: 0, max: 10, precision: 0.1 }),
    rated: faker.helpers.arrayElement(["G", "PG", "PG-13", "R", "NC-17", "A"]),
    runtime: faker.datatype.number({ min: 60, max: 240 }),
    genres: faker.helpers
      .shuffle([
        "Action",
        "Adventure",
        "Animation",
        "Biography",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Family",
        "Fantasy",
        "Film-Noir",
        "History",
        "Horror",
        "Music",
        "Musical",
        "Mystery",
        "Romance",
        "Sci-Fi",
        "Sport",
        "Thriller",
        "War",
        "Western",
      ])
      .slice(0, faker.datatype.number({ min: 1, max: 3 })),
    description:
      faker.lorem.paragraphs(faker.datatype.number({ min: 1, max: 3 })) +
      " " +
      faker.lorem.paragraphs(faker.datatype.number({ min: 1, max: 3 })),
    trailer: faker.internet.url(),
    movie: faker.internet.url(),
    quality: faker.helpers.arrayElement(["HD", "SD"]),
    images: [
      { URL: faker.image.imageUrl(), type: "poster" },
      { URL: faker.image.imageUrl(), type: "banner" },
    ],
  };
}

export var movies = Array.from({ length: 15 }, getMovieData);
