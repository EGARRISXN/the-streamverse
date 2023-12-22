import { authConfig } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import UserCard from "@/components/(Users)/UserCard";

const Profile = async () => {
  const session = await getServerSession(authConfig);

  if (!session) {
    redirect("/");
  }

  const { user } = session;

  return (
    <div>
      <h1 className="text-xl text-white text-center font-semibold">
        {session && session !== null
          ? " Welcome! You Signed In Successfully!"
          : "You are not Signed In."}
      </h1>
      <h2 className="text-2xl text-center text-yellow-100 font-semibold">
        This is your Profile Page.
      </h2>
      <UserCard user={user} />
    </div>
  );
};

export default Profile;
