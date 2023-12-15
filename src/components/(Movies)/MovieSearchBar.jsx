"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col xl:flex-row mx-auto xl:mx-16 pt-8"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search Movies.."
        className="h-10 w-60 sm:w-96 xl:w-60 text-sm text-gray-600 font-medium rounded-lg placeholder-gray-400 outline-none px-2 py-1 border-2 focus:ring-2 focus:ring-purple-400"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-sm font-bold xl:hidden text-purple-400 disabled:text-gray-400 px-2 py-1"
      >
        Search
      </button>
      <button
        disabled={!search}
        type="submit"
        className="text-sm font-bold hidden xl:block text-purple-400 disabled:text-gray-400 px-2 py-1"
      >
        Go!
      </button>
    </form>
  );
}
