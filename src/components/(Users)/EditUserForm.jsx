"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditUserForm({
  id,
  name,
  username,
  password,
  bio,
  genre,
}) {
  const [newName, setNewName] = useState(name);
  const [newUsername, setNewUsername] = useState(username);
  const [newPassword, setNewPassword] = useState(password);
  const [newBio, setNewBio] = useState(bio);
  const [newGenre, setNewGenre] = useState(genre);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newName,
          newUsername,
          newPassword,
          newBio,
          newGenre,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update user");
      }

      router.refresh();
      router.push("/");
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
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        className="h-10 w-60 sm:w-96 text-sm text-gray-600 font-medium rounded-lg placeholder-gray-400 outline-none px-2 py-1 border-2 focus:ring-2 focus:ring-purple-400"
        type="name"
        placeholder="Name"
      />

      <input
        onChange={(e) => setNewUsername(e.target.value)}
        value={newUsername}
        className="h-10 w-60 sm:w-96 text-sm text-gray-600 font-medium rounded-lg placeholder-gray-400 outline-none px-2 py-1 border-2 focus:ring-2 focus:ring-purple-400"
        type="text"
        placeholder="Username"
      />

      <input
        onChange={(e) => setNewPassword(e.target.value)}
        value={newPassword}
        className="h-10 w-60 sm:w-96 text-sm text-gray-600 font-medium rounded-lg placeholder-gray-400 outline-none px-2 py-1 border-2 focus:ring-2 focus:ring-purple-400"
        type="password"
        placeholder="Password"
      />

      <input
        onChange={(e) => setNewBio(e.target.value)}
        value={newBio}
        className="h-10 w-60 sm:w-96 text-sm text-gray-600 font-medium rounded-lg placeholder-gray-400 outline-none px-2 py-1 border-2 focus:ring-2 focus:ring-purple-400"
        type="text"
        placeholder="Bio"
      />

      <input
        onChange={(e) => setNewGenre(e.target.value)}
        value={newGenre}
        className="h-10 w-60 sm:w-96 text-sm text-gray-600 font-medium rounded-lg placeholder-gray-400 outline-none px-2 py-1 border-2 focus:ring-2 focus:ring-purple-400"
        type="text"
        placeholder="Genre"
      />

      <button className="text-gray-500 bg-purple-300 hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-2 py-1 hover:text-gray-900 focus:z-10 w-full">
        Update User
      </button>
    </form>
  );
}
