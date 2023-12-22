"use client";
import { useState } from "react";

export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !description) {
      setError("All fields required.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        console.log("Post created successfully!");
      } else {
        setError("Failed to create post. Please try again.");
      }
    } catch (error) {
      console.error("Error during post creation: ", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center p-2">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded shadow-md p-4 w-full max-w-lg"
      >
        <div className="mb-4">
          <label htmlFor="titleInput">Title:</label>
          <input
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            name="title"
            id="titleInput"
            placeholder="Title"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="descriptionInput">Description:</label>
          <input
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            name="description"
            id="descriptionInput"
            placeholder="Description"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-gray-100 hover:text-gray-900 focus:z-10 font-medium text-sm py-1 px-2 hover:bg-gray-100 rounded-lg border w-full border-gray-200"
          disabled={loading}
        >
          {loading ? "Creating Post..." : "Create Post"}
        </button>
        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
