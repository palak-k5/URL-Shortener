import React from "react";
import UrlForm from "../components/UrlForm";
import FireflyBackground from "../components/FireflyBackground";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

import { useRouterState } from "@tanstack/react-router";
import Footer from "@/components/Footer";
import { Feather } from "lucide-react";
import Features from "@/components/Features";

const AuthPage = () => {
  const search = useRouterState({
    select: (state) => state.location.search,
  });

  const mode = search.mode; // 'register' or undefined

  return (
    <div className="relative min-h-screen flex items-start justify-center overflow-hidden">
      <FireflyBackground />
      <div className="flex flex-col items-center z-10 pt-16 md:pt-20">
        <div className="text-center text-white mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            The Ultimate URL Shortener
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-300">
            Create clean, short links in seconds. Simple, fast, and reliable for all your needs.
          </p>
        </div>
        {mode === "register" ? <RegisterForm /> : <LoginForm />}
        <Features/>
      </div>
              <Footer/>

    </div>
  );
};

export default AuthPage;
