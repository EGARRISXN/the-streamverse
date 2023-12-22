import Link from "next/link";
import RemovePostButton from "./RemovePostButton";
import { HiPencilAlt } from "react-icons/hi";

const PostCard = ({ post }) => {
  if (!post) {
    return null;
  }

  return (
    <div className="p-2">
      <div
        key={post._id}
        className="rounded shadow-md bg-white p-4 w-full max-w-md"
      >
        <Link href={`/posts/${post._id}`}>
          <h3 className="text-lg font-semibold">{post.title}</h3>
        </Link>
        <p className="text-gray-600">{post.description}</p>
        <div className="mt-4 flex justify-between">
          <Link href={`/posts/edit/${post._id}`}>
            <HiPencilAlt size={24} />
          </Link>
          <RemovePostButton id={post._id} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
