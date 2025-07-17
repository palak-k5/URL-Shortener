import React from "react";
import UrlForm from "../components/UrlForm";
import FireflyBackground from "../components/FireflyBackground";

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full">
      <FireflyBackground />

      {/* Container for the content, stacked vertically */}
      <div className="relative z-10 flex flex-col items-center justify-start w-full pt-24 md:pt-32">
        
        {/* Your New Text Block */}
        <div className="text-center text-white mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            The Ultimate URL Shortener
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-300">
            Create clean, short links in seconds. Simple, fast, and reliable for all your needs.
          </p>
        </div>

        {/* Your Existing Form */}
        <UrlForm />

      </div>
    </div>
  );
};

export default HomePage;
