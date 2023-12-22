import { authConfig } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import UserCard from "@/components/(Users)/UserCard";
import CreatePost from "@/components/(Posts)/CreatePostForm";
import PostsList from "@/components/(Posts)/PostsList";

const Dashboard = async () => {
  const session = await getServerSession(authConfig);

  if (!session) {
    redirect("/");
  }

  const { user } = session;

  return (
    <div>
      <h1 className="text-center text-xl font-semibold text-white">
        {session && session !== null
          ? " Welcome! You Signed In Successfully"
          : "You are not Signed In."}
      </h1>
      <h2 className="text-2xl text-center text-yellow-100 font-semibold">
        This is your Dashboard Page.
      </h2>
      <div className="grid lg:grid-cols-2 p-4">
        <div className="x">
          <UserCard user={user} />
        </div>

        <div className="flex flex-col">
          <CreatePost />
          <PostsList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
