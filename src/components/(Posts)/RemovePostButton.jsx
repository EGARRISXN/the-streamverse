"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const RemovePostButton = ({ id }) => {
  const router = useRouter();
  const removePost = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removePost} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemovePostButton;
