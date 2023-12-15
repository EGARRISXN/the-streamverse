"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function MovieOptions({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link href={`/movies/?genre=${param}`} passHref>
        <div
          className={`m-4 text-gray-200 hover:text-purple-300 font-medium text-2xl sm:text-2xl lg:text-3xl ${
            genre && genre === param
              ? "underline underline-offset-8 decoration-2 decoration-purple-100"
              : ""
          }`}
        >
          {title}
        </div>
      </Link>
    </div>
  );
}
