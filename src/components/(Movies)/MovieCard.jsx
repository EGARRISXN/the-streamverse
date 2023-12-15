import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function MovieCard({ result }) {
  return (
    <div className="p-4 m-2 bg-white flex flex-col justify-center text-center items-center hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 transition-shadow duration-200 group overflow-hidden">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w300${
            result.poster_path || result.backdrop_path
          }`}
          width={300}
          height={500}
          className="rounded object-cover object-center group-hover:opacity-80 w-fit transition-opacity duration-200 mx-auto"
          style={{
            maxWidth: "100%",
            height: "350px",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
        ></Image>
      </Link>
      <div className="px-2">
        <h2 className="truncate overflow-hidden text-lg font-bold my-2">
          {result.title || result.name}
        </h2>
        <p className="line-clamp-2 text-sm my-2">{result.overview}</p>
        <p className="flex flex-row mx-auto justify-center my-2">
          {result.release_date || result.first_air_date}
          <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
        </p>
      </div>
      <div className="flex flex-row justify-center items-center space-x-4">
        <button className="text-gray-500 bg-purple-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-4 py-1 hover:text-gray-900 focus:z-10 mt-2">
          <Link href={`/movie/${result.id}`}>View</Link>
        </button>
        <button className="text-gray-500 bg-purple-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-4 py-1 hover:text-gray-900 focus:z-10 mt-2">
          <Link href="/">Add</Link>
        </button>
      </div>
    </div>
  );
}
