import Movie from './Movie';

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const response = await data.json();
  console.log(response.results[0].adult);

  return (
    <main className="min-h-screen">
      {/* <h1 className="text-lg text-center">Hello Next 13 🔥</h1> */}
      <div className="grid gap-16 grid-cols-fluid">
        {response.results.map((movie) => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          );
        })}
      </div> 
    </main>
  );
}
