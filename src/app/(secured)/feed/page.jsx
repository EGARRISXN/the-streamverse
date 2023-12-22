import { authConfig } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import UserCard from "@/components/(Users)/UserCard";
import PostCard from "@/components/(Posts)/PostCard";

async function getUsers() {
  try {
    const response = await fetch("http://localhost:3000/api/users", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users.");
    }

    return response.json();
  } catch (error) {
    console.log("Error loading users: ", error);
  }
}

async function getPosts() {
  try {
    const response = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts.");
    }

    return response.json();
  } catch (error) {
    console.log("Error loading posts: ", error);
  }
}

const Feed = async () => {
  const session = await getServerSession(authConfig);
  const userData = await getUsers();
  const postData = await getPosts();

  if (!session) {
    redirect("/");
  }

  if (!userData?.users) {
    return <p>No users.</p>;
  }

  if (!postData?.posts) {
    return <p>No posts.</p>;
  }

  const users = userData.users;
  const posts = postData.posts;

  return (
    <div>
      <h1 className="text-xl text-white text-center font-semibold">
        {session && session !== null
          ? " Welcome! You Signed In Successfully"
          : "You are not Signed In."}
      </h1>
      <h2 className="text-2xl text-center text-yellow-100 font-semibold">
        This is your Feed Page.
      </h2>
      <div className="lg:grid grid-cols-2">
        <div className="w-60">
          <h1 className="text-white">Users</h1>
          {users.map((user, index) => (
            <UserCard id={index} key={index} user={user} />
          ))}
        </div>
        <div className="w-60">
          <h1 className="text-white">Posts</h1>
          {posts.map((post, index) => (
            <PostCard id={index} key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
