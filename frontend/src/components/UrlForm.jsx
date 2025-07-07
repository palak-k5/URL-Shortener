import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const UrlForm = () => {
    
const [url,setValue]=useState("Demo Url");
console.log(url);

  return (
    <div className=" flex items-center justify-center bg-indigo-200">
      <Card className="w-full max-w-md p-4 shadow-lg ">

        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="url" className="text-sm font-medium text-gray-700">
              Enter your URL
            </Label>
            <Input
              id="url"
              type="url"
              placeholder="https://example.com/very/long-url"
            />
          </div>

          <Button className="w-full">Shorten URL</Button>
           {/* {error && (
  <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
    {error}
  </div>
)} */}
        {/* {shortUrl && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Your shortened URL:</h2>
            <div className="flex items-center">
              <input
                type="text"
                readOnly
                value={shortUrl}
                className="flex-1 p-2 border border-gray-300 rounded-l-md bg-gray-50"
              />
               <button
                onClick={handleCopy}
                className={`px-4 py-2 rounded-r-md transition-colors duration-200 ${
                  copied 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )} */}

        </CardContent>
      </Card>
    </div>
  );
};

export default UrlForm;
