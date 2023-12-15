"use client";
import { useState, useEffect } from "react";
import Login from "./Login"; // Import your Login component
import Signup from "./Signup"; // Import your Signup component

export default function AuthModal() {
  const [isSignIn, setIsSignIn] = useState(true);

  // Function to toggle modal visibility
  const toggleModal = () => {
    const modal = document.getElementById("auth-modal");
    modal.classList.toggle("hidden");
  };

  // Function to handle switching between Sign In and Sign Up modes
  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
  };

  // Effect to close the modal when the component mounts
  useEffect(() => {
    const modal = document.getElementById("auth-modal");
    modal.classList.add("hidden");

    // Event listener to close the modal when clicking outside of it
    const handleOutsideClick = (event) => {
      if (event.target === modal) {
        toggleModal();
      }
    };

    // Event listener to close the modal when clicking the close button (X)
    const closeButton = document.getElementById("close-modal-button");
    const handleCloseButtonClick = () => {
      toggleModal();
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        toggleModal();
      }
    });

    closeButton.addEventListener("click", handleCloseButtonClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          toggleModal();
        }
      });

      closeButton.removeEventListener("click", handleCloseButtonClick);
    };
  }, []);

  return (
    <>
      <button
        data-modal-target="auth-modal"
        data-modal-toggle="auth-modal"
        className="text-white hover:text-gray-600"
        type="button"
        onClick={toggleModal}
      >
        {isSignIn ? "Sign In" : "Sign Up"}
      </button>

      <div
        id="auth-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed inset-0 z-50 flex items-center max-h-full bg-gray-900/80 overflow-y-auto justify-center"
      >
        <div className="relative w-full max-w-sm rounded-lg shadow-lg">
          {/* Modal content */}
          <div>
            {/* Modal body */}
            <div className="bg-white rounded-lg">
              <div className="flex justify-between p-2">
                <button
                  onClick={toggleAuthMode}
                  type="button"
                  className="text-gray-500 bg-purple-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-2 py-1 hover:text-gray-900 focus:z-10"
                >
                  {isSignIn ? "Sign Up" : "Sign In"}
                </button>

                <button
                  id="close-modal-button"
                  type="button"
                  className="text-gray-500 bg-purple-300 hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-2 py-1 hover:text-gray-900 focus:z-10"
                  data-modal-hide="auth-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="border-t-2 border-purple-100">
                {isSignIn ? (
                  <>
                    <Login />
                  </>
                ) : (
                  <>
                    <Signup />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
