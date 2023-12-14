"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthModal from "./AuthModal";

export default function NavBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="x">
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
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white bg-purple-500 rounded-lg md:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 "
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
          className={`w-full md:block md:w-auto ${
            isDropdownOpen ? "block" : "hidden"
          }`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link href="/">
                <div
                  className="block py-2 px-3 text-white bg-transparent hover:text-gray-300 md:p-0 "
                  aria-current="page"
                >
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="block py-2 px-3 text-white bg-transparent hover:text-gray-300 md:p-0 ">
                  About
                </div>
              </Link>
            </li>
            <li>
              <Link href="/movies">
                <div className="block py-2 px-3 text-white bg-transparent hover:text-gray-300 md:p-0 ">
                  Movies
                </div>
              </Link>
            </li>
            <li>
              <div className="block py-2 px-3 md:p-0 ">
                <AuthModal />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
