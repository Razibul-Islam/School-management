import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="relative flex items-center justify-between">
        <Link to="/" class="inline-flex items-center">
          <span class="ml-2 text-2xl font-bold tracking-wide text-gray-800 uppercase">
            Logo
          </span>
        </Link>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/about"
              class="font-medium tracking-wide text-gray-700 text-xl"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/teachers"
              class="font-medium tracking-wide text-gray-700 text-xl"
            >
              Teachers
            </Link>
          </li>
          <li>
            <Link
              to="/student"
              class="font-medium tracking-wide text-gray-700 text-xl"
            >
              Students
            </Link>
          </li>
          <li>
            <Link
              to="/notice"
              class="font-medium tracking-wide text-gray-700 text-xl"
            >
              Notice
            </Link>
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </button>
          {isMenuOpen && (
            <div class="absolute top-0 left-0 w-full z-50">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" class="inline-flex items-center">
                      <span class="ml-2 text-2xl font-bold tracking-wide text-gray-800 uppercase">
                        Logo
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <CloseIcon />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <Link
                        to="/about"
                        class="font-medium tracking-wide text-gray-700 text-xl"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/teachers"
                        class="font-medium tracking-wide text-gray-700 text-xl"
                      >
                        Teachers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/student"
                        class="font-medium tracking-wide text-gray-700 text-xl"
                      >
                        Students
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/notice"
                        class="font-medium tracking-wide text-gray-700 text-xl"
                      >
                        Notice
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
