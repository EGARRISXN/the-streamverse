"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import AuthModal from "@/components/(Authentication)/AuthModal";

const NavBar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [authPage, setAuthPage] = useState("signin");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  const handleAuthLinkClick = (page) => {
    setAuthPage(page);
    router.push(`/${page}`);
  };

  return (
    <nav className="lg:px-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="/logo.png"
              className="x"
              alt="Streamverse Logo"
              width={40}
              height={40}
            />
            <span className="self-center text-white hover:text-gray-300 text-xl whitespace-nowrap">
              StreamVerse
            </span>
          </div>
        </Link>

        <button
          onClick={toggleDropdown}
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white bg-purple-500 rounded-lg lg:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-dropdown"
          aria-expanded={isDropdownOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full lg:block lg:w-auto ${
            isDropdownOpen ? "block" : "hidden"
          }`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col p-4 lg:p-0 mt-4 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0">
            <li>
              <Link href="/">
                <div className="block py-2 px-3 text-white hover:text-gray-300 lg:p-0">
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="block py-2 px-3 text-white hover:text-gray-300 lg:p-0">
                  About
                </div>
              </Link>
            </li>
            <li>
              <Link href="/movies">
                <div className="block py-2 px-3 text-white hover:text-gray-300 lg:p-0">
                  Movies
                </div>
              </Link>
            </li>
            <li>
              {!session ? (
                <>
                  <Link href={`/${authPage}`}>
                    <div
                      className="block py-2 px-3 cursor-pointer text-white hover:text-gray-300 lg:p-0"
                      onClick={() =>
                        handleAuthLinkClick(
                          authPage === "signin" ? "signup" : "signin"
                        )
                      }
                    >
                      {authPage === "signin" ? "Sign In" : "Sign Up"}
                    </div>
                  </Link>
                </>
              ) : (
                <>
                  {session.user?.username}
                  <button
                    onClick={handleSignOut}
                    className="block py-2 px-3 text-white hover:text-gray-300 lg:p-0"
                  >
                    Sign Out
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
