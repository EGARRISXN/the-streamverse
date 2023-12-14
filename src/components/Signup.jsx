"use client";
import { useState } from "react";

const Signup = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    genre: "",
    bio: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    // window.location.assign("/dashboard"); // Commented out since you mentioned it shouldn't redirect yet
  };

  return (
    <div className="flex justify-center items-center p-2">
      <form
        className="bg-white rounded shadow-md p-4 w-full"
        onSubmit={handleFormSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="nameInput"
          >
            Name
          </label>
          <input
            name="name"
            value={formState.name}
            onChange={handleChange}
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nameInput"
            placeholder="Jane Doe"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-1"
            htmlFor="emailInput"
          >
            Email address
          </label>
          <input
            value={formState.email}
            type="email"
            onChange={handleChange}
            name="email"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="emailInput"
            placeholder="JaneDoe86@mail.com"
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
            value={formState.username}
            onChange={handleChange}
            name="username"
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="usernameInput"
            placeholder="Janedoe86"
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
            value={formState.password}
            onChange={handleChange}
            name="password"
            type="password"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="passwordInput"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-purple-600 text-gray-100 hover:text-gray-900 focus:z-10 font-medium text-sm py-1 px-2 hover:bg-gray-100 rounded-lg border border-gray-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
