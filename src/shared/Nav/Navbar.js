import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-teal-500 text-white">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <span className="ml-2 text-2xl font-bold tracking-wide text-center">
              <p>KH</p>
              <p className="text-sm">School & Collage</p>
            </span>
          </Link>
          <ul className="flex items-center hidden gap-4 lg:flex">
            <li>
              <Link to="/about" className="font-medium tracking-wide">
                আমাদের সম্পর্কে
              </Link>
            </li>
            <li>
              <Link to="/teachers" className="font-medium tracking-wide">
                শিক্ষক
              </Link>
            </li>

            <li>
              <Link to="/notice" className="font-medium tracking-wide">
                বিজ্ঞপ্তি
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="font-medium tracking-wide">
                গ্যালারী
              </Link>
            </li>
            <li>
              <Link to="/routine" className="font-medium tracking-wide">
                রুটিন
              </Link>
            </li>
            <li>
              <Link to="/smc" className="font-medium tracking-wide">
                এসএমসি
              </Link>
            </li>
            <li>
              <Link to="/result" className="font-medium tracking-wide">
                রেজাল্ট
              </Link>
            </li>
            <li>
              <Link to="/contact" className="font-medium tracking-wide">
                যোগাযোগ
              </Link>
            </li>
            <li>
            {
              localStorage.getItem('user') ? <Link to="/admin" className="font-medium tracking-wide">এডমিন</Link>  : ''
              }
            </li>
            
          </ul>
          <div className="lg:hidden">
            <button
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <MenuIcon />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-50">
                <div className="p-5 bg-teal-500 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <span className="ml-2 text-2xl font-bold tracking-wide   uppercase">
                          Logo
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <CloseIcon />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/about"
                          className="font-medium tracking-wide   text-xl"
                        >
                          আমাদের সম্পর্কে
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/teachers"
                          className="font-medium tracking-wide   text-xl"
                        >
                          শিক্ষক
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          to="/student"
                          className="font-medium tracking-wide   text-xl"
                        >
                          ছাত্র-ছাত্রী
                        </Link>
                      </li> */}
                      <li>
                        <Link
                          to="/notice"
                          className="font-medium tracking-wide   text-xl"
                        >
                          বিজ্ঞপ্তি
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/gallery"
                          className="font-medium tracking-wide"
                        >
                          গ্যালারী
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/routine"
                          className="font-medium tracking-wide"
                        >
                          রুটিন
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="font-medium tracking-wide"
                        >
                          যোগাযোগ
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
    </div>
  );
};

export default Navbar;
