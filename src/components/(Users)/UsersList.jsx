async function fetchUsers() {
  try {
    const response = await fetch("http://localhost:3000/api/users", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return response.json();
  } catch (error) {
    console.log("Error loading users: ", error);
    return { users: [] };
  }
}

const UsersList = async () => {
  const data = await fetchUsers();

  if (!data || !data.users || !Array.isArray(data.users)) {
    console.log("No valid users found");
    return <div>No valid users found</div>;
  }

  return (
    <div className="flex justify-center items-center p-2">
      <div className="bg-white rounded shadow-md p-4 w-full max-w-lg h-full">
        <h2 className="text-2xl text-center font-bold mb-4">Users</h2>
        <hr className="mb-4" />
        <ul>
          {data.users.map((user) => (
            <li key={user._id} className="mb-2">
              <h3 className="text-lg font-semibold">{user.username}</h3>
              <p className="text-gray-600">{user.genre}</p>
              <p className="text-gray-600">{user.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersList;
