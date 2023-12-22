import Link from "next/link";
import RemoveUserButton from "./RemoveUserButton";
import { HiPencilAlt } from "react-icons/hi";

const UserCard = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <div className="p-2">
      <div
        key={user._id}
        className="rounded shadow-md bg-white p-4 w-full max-w-md"
      >
        <Link href={`/users/${user._id}`}>
          <div className="text-lg font-semibold">{user.name}</div>
        </Link>
        <p className="text-gray-600">
          {user.username}
          <br />
          {user.email}
          <br />
          {user.genre}
          <br />
          {user.bio}
          <br />
        </p>
        <div className="mt-4 flex justify-between">
          <Link href={`/users/edit/${user._id}`}>
            <HiPencilAlt size={24} />
          </Link>
          <RemoveUserButton id={user._id} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
