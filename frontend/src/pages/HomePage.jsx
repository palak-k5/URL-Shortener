import React from "react";
import UrlForm from "../components/UrlForm";

const HomePage = () => {
  return (
<div className="min-h-screen flex items-center justify-center bg-indigo-200 px-4">
  <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
    <UrlForm />
  </div>
</div>
  );
};

export default HomePage;
