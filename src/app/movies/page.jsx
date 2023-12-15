import SearchBar from "@/components/(Movies)/SearchBar";
import Results from "@/components/(Movies)/MovieResults";
import MovieOptions from "@/components/(Movies)/MovieOptions";

const API_KEY = "93d064eaaeea0b2a09e2e20af37a5993";

export default async function Movies({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;
  console.log(results);

  return (
    <main className="max-w-screen-xl flex flex-col justify-center px-4">
      <SearchBar />
      <div className="flex mx-auto flex-row p-4">
        <MovieOptions title="Trending" param="fetchTrending" />
        <MovieOptions title="Top Rated" param="fetchTopRated" />
      </div>
      <Results results={results} />
    </main>
  );
}
