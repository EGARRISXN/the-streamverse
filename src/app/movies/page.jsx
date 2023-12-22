import MoviesSearchBar from "@/components/(Movies)/MovieSearchBar";
import MovieOptions from "@/components/(Movies)/MovieOptions";
import MovieResults from "@/components/(Movies)/MovieResults";

export default async function AllMovies({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const apiKey = process.env.TMDB_API_KEY;
  const response = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${apiKey}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  const results = data.results;
  console.log(results);

  return (
    <main className="max-w-screen-xl flex flex-col justify-center px-4">
      <MoviesSearchBar />
      <div className="flex mx-auto flex-row p-4">
        <MovieOptions title="Trending" param="fetchTrending" />
        <MovieOptions title="Top Rated" param="fetchTopRated" />
      </div>
      <MovieResults results={results} />
    </main>
  );
}
