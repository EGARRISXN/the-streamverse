"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditPostForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newDescription,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update post.");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
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
            onChange={(event) => setNewTitle(event.target.value)}
            value={newTitle}
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="descriptionInput">Description:</label>
          <input
            onChange={(event) => setNewDescription(event.target.value)}
            value={newDescription}
            type="text"
            id="description"
            placeholder="Description"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button className="bg-purple-600 text-gray-100 hover:text-gray-900 focus:z-10 font-medium text-sm py-1 px-2 hover:bg-gray-100 rounded-lg border w-full border-gray-200">
          Update Post
        </button>
      </form>
    </div>
  );
}
