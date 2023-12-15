import Link from "next/link";
import RemoveUserButton from "./RemoveUserButton";
import { HiPencilAlt } from "react-icons/hi";

const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading users: ", error);
    return { users: [] };
  }
};

export default async function UsersList() {
  const { users } = await getUsers();

  if (!users || !users.length) {
    return <div>No users found</div>;
  }

  return (
    <>
      {users.map((u) => (
        <div
          key={u._id}
          className="p-4 border-2 rounded-lg text-center border-purle-300 m-4 mx-auto flex flex-col justify-between h-72 w-72 text-gray-300"
        >
          <div className="border-2">
            <h2 className="font-bold text-2xl">{u.username}</h2>
          </div>

          <div className="border-2 h-full w-full justify-center flex flex-col">
            {u.bio}
          </div>

          <div className="mt-4 flex justify-between">
            <Link href={`/editUser/${u._id}`}>
              <HiPencilAlt size={24} />
            </Link>
            <RemoveUserButton id={u._id} />
          </div>
        </div>
      ))}
    </>
  );
}
