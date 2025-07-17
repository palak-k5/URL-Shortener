import React, { useState } from "react";
import UrlForm from "../components/UrlForm";
import FireflyBackground from "../components/FireflyBackground";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

const AuthPage = () => {
        const [login, setLogin] = useState(false)
 
  return (

    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FireflyBackground />

      {/* <div className="w-full max-w-md bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg z-10">
        <h1 className="text-3xl font-bold text-center mb-4 ">🔗 URL Shortener</h1><br></br>
      </div> */}
      {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}

    // </div>
  );
};

export default AuthPage;
