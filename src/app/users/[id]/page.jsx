import UserCard from "@/components/(Users)/UserCard";

async function getUserById(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`Failed to get user. Status: ${response.status}`);
    }
    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

const UserById = async ({ params }) => {
  const { id } = params;
  const user = await getUserById(id);

  return (
    <div className="flex justify-center items-center p-2">
      <div className="bg-white rounded shadow-md p-4 w-full">
        <UserCard user={user} />
      </div>
    </div>
  );
};

export default UserById;
