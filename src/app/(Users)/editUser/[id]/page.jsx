import EditUserForm from "@/components/(Users)/EditUserForm";

const getUserById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditUser({ params }) {
  const { id } = params;
  const { user } = await getUserById(id);
  const { name, username, password, genre, bio } = user;

  return (
    <EditUserForm
      id={id}
      name={name}
      username={username}
      password={password}
      genre={genre}
      bio={bio}
    />
  );
}
