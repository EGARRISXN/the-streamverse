"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [genre, setGenre] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const handleSignUpSuccess = () => {
    handleSignUpSuccess();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !username || !email || !password || !genre || !bio) {
      setError("All fields required.");
      return;
    }

    if (password.length < 5) {
      setError("Password must be at least 5 characters.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, username, email, password, genre, bio }),
      });

      if (response.status === 400) {
        setError("User already registered");
      }
      if (response.status === 200) {
        console.log("User created");
        handleSignUpSuccess();
      }
    } catch (error) {
      setError("Error creating user: ", error);
      console.log(error);
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="flex justify-center items-center p-2">
        <form
          className="bg-white rounded shadow-md p-4 w-full max-w-sm"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="nameInput"
            >
              Name
            </label>
            <input
              onChange={(event) => setName(event.target.value)}
              type="text"
              name="name"
              id="nameInput"
              placeholder="Name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="emailInput"
            >
              Email
            </label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              name="email"
              id="emailInput"
              placeholder="Email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="usernameInput"
            >
              Username
            </label>
            <input
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              name="username"
              id="usernameInput"
              placeholder="Username"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="passwordInput"
            >
              Password
            </label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              name="password"
              id="passwordInput"
              placeholder="Password"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="genreInput"
            >
              Favroite Genre
            </label>
            <input
              onChange={(event) => setGenre(event.target.value)}
              type="text"
              name="genre"
              id="genreInput"
              placeholder="Favorite Genre"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="bioInput"
            >
              Bio
            </label>
            <input
              onChange={(event) => setBio(event.target.value)}
              type="text"
              name="bio"
              id="bioInput"
              placeholder="Bio"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-gray-100 hover:text-gray-900 focus:z-10 font-medium text-sm py-1 px-2 hover:bg-gray-100 rounded-lg border w-full border-gray-200"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    )
  );
};

export default SignupForm;
