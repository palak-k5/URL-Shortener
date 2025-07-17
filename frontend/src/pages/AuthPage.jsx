import React, { useState } from "react";
import UrlForm from "../components/UrlForm";
import FireflyBackground from "../components/FireflyBackground";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

const AuthPage = () => {
        const [login, setLogin] = useState(false)
 
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
        {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
      </div>
    </div>
  );
};

export default AuthPage;
