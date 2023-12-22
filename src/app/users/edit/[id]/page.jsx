"use client";
import { useState, useEffect } from "react";
import EditUserForm from "@/components/(Users)/EditUserForm";

async function getUserById(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to get user.");
    }

    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const EditUser = ({ params }) => {
  const { id } = params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await getUserById(id);
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

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
};

export default EditUser;
