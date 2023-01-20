export default async function HomePage() {
  var movies = await getMovies();

  return (
    <div>
      <img src={movies.movies[0].posterURL} alt="" className="h-12 w-64 " />
      <p>{movies.movies[0].posterURL}</p>
    </div>
  );
}

async function getMovies() {
  return fetch("http://localhost:3000/api/movie")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}
