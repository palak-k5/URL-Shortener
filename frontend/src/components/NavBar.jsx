// components/NavBar.tsx
import React from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
<nav className="max-w-5xl mx-auto flex items-center justify-between 
               bg-green-100  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100
               px-6 py-3 text-cyan-950 shadow-lg rounded-3xl mt-4">  {/* <div className="max-w-2xl  mx-auto flex justify-between items-center"> */}
        {/* Logo & App Name */}
        <div className="flex items-center gap-1">
          <span className="text-2xl">🔗</span>
          <Link to="/" className="text-xl font-bold ">
            URL Shortener
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Login & Register Buttons */}
          <Link to="/login">
            <Button
              className="text-md text-amber-50 bg-cyan-950  hover:bg-cyan-800"
            >
              Login
            </Button>
          </Link>
          <Link to="/auth">
            <Button
              className="text-md  bg-cyan-950  hover:bg-cyan-800 text-amber-50"
            >
              Register
            </Button>
          </Link>

          {/* Dropdown with animation */}
          <DropdownMenu>
<DropdownMenuTrigger >
              <Button className="text-md text-amber-50 bg-cyan-950 hover:bg-cyan-800">Feature</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#1c1c1c] text-white border border-gray-700 mt-2 p-2 w-52">
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <DropdownMenuItem className="hover:bg-gray-800">
                  Overview
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800">
                  Analytics
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800">
                  Pricing
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800">
                  Support
                </DropdownMenuItem>
              </motion.div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
