import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-teal-500 text-white">
      <div className="flex flex-col justify-between py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link
            to="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <span className="self-center text-2xl font-semibold">Logo</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-50">
              ADMISSION LINKS
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to="/">Download Form</Link>
              </li>
              <li>
                <Link to="/">Result</Link>
              </li>
              <li>
                <Link to="/">Research Work</Link>
              </li>
              <li>
                <Link to="/">Accounts Automation Form</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-50">Others</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/">Accounts Automation Form</Link>
              </li>
              <li>
                <Link to="/">Research Work</Link>
              </li>
              <li>
                <Link to="/">Result</Link>
              </li>
              <li>
                <Link to="/">Download Form</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-50">
              Useful Links
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to="/">Download Form</Link>
              </li>
              <li>
                <Link to="/">Accounts Automation Form</Link>
              </li>
              <li>
                <Link to="/">Research Work</Link>
              </li>
              <li>
                <Link to="/">Result</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-gray-50">সোশ্যাল মিডিয়া</div>
            <div className="flex justify-start space-x-3">
              <Link to="/" title="Facebook" className="flex items-center p-1">
                <Facebook />
              </Link>
              <Link to="/" title="Twitter" className="flex items-center p-1">
                <Twitter />
              </Link>
              <Link to="/" title="LinkedIn" className="flex items-center p-1">
                <LinkedIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-white">
        © 2023 NextSulation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
