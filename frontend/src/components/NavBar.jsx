// components/NavBar.tsx
import React from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="max-w-5xl mx-auto flex items-center justify-between 
               bg-green-100  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100
               px-6 py-3 text-cyan-950 shadow-lg rounded-3xl mt-4"> 
     <div className="flex items-center gap-1 ">
          <span className="text-2xl">🔗</span>
          <Link to="/" className="text-xl font-bold ">
            URL Shortener
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Login & Register Buttons */}
          <Link to="/auth">
            <Button
              className="text-md text-amber-50 bg-cyan-950  hover:bg-cyan-800"
            >
              Login
            </Button>
          </Link>
          <Link to="/auth?mode=register">
            <Button
              className="text-md  bg-cyan-950  hover:bg-cyan-800 text-amber-50"
            >
              Register
            </Button>
          </Link>

        </div>
      </div>
    );
};

export default NavBar;
