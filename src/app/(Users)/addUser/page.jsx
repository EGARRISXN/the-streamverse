"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [genre, setGenre] = useState("");
  const [bio, setBio] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !username || !email || !password || !genre || !bio) {
      alert("Required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, username, email, password, genre, bio }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-fit justify-center items-center mx-auto"
    >
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="h-10 w-60 sm:w-96 text-sm text-gray-600 font-medium rounded-lg placeholder-gray-400 outline-none px-2 py-1 border-2 focus:ring-2 focus:ring-purple-400"
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        className="h-10 w-60 sm:w-96 text-sm text-gray-600 font-medium rounded-lg placeholder-gray-400 outline-none px-2 py-1 border-2 focus:ring-2 focus:ring-purple-400"
        type="text"
        placeholder="Username"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="h-10 w-60 sm:w-96 text-sm text-gray-600 font-medium rounded-lg placeholder-gray-400 outline-none px-2 py-1 border-2 focus:ring-2 focus:ring-purple-400"
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="h-10 w-60 sm:w-96 text-sm text-gray-600 font-medium rounded-lg placeholder-gray-400 outline-none px-2 py-1 border-2 focus:ring-2 focus:ring-purple-400"
        type="password"
        placeholder="Password"
      />
      <input
        onChange={(e) => setGenre(e.target.value)}
        value={genre}
        className="h-10 w-60 sm:w-96 text-sm text-gray-600 font-medium rounded-lg placeholder-gray-400 outline-none px-2 py-1 border-2 focus:ring-2 focus:ring-purple-400"
        type="text"
        placeholder="Genre"
      />
      <input
        onChange={(e) => setBio(e.target.value)}
        value={bio}
        className="h-10 w-60 sm:w-96 text-sm text-gray-600 font-medium rounded-lg placeholder-gray-400 outline-none px-2 py-1 border-2 focus:ring-2 focus:ring-purple-400"
        type="text"
        placeholder="Bio"
      />

      <button
        type="submit"
        className="text-gray-500 bg-purple-300 hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-2 py-1 hover:text-gray-900 focus:z-10 w-full"
      >
        Add User
      </button>
    </form>
  );
}
