"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const RemoveUserButton = ({ id }) => {
  const router = useRouter();
  const removeUser = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const response = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeUser} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveUserButton;
