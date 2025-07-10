import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { createShortUrl } from '@/api/shortUrl.api';

const UrlForm = () => {
    
const [url,setUrl]=useState("https://www.google.com");
const [shortUrl,setShortUrl]=useState(null);
const [isCopied, setIsCopied] = useState(false);

console.log(url);

const handleSubmit = async(e) => {
  e.preventDefault();
  const data=await createShortUrl(url);
setShortUrl(data.short_url);
//   console.log("Saved and Submitted URL:", data);
};

  return (
    <div className=" flex items-center justify-center bg-indigo-200">
      <Card className="w-full max-w-md p-4 shadow-lg ">
        <CardContent className="flex flex-col gap-4">
          <form  className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="url" className="text-sm font-medium text-gray-700">
                Enter your URL
              </Label>
              <Input
                id="url"
                type="url"
                required
                value={url}
                onInput={(event)=>setUrl(event.target.value)}
                placeholder="https://example.com/very/long-url"
              /> 
            </div>

            <Button  onClick={handleSubmit}type="submit" className="w-full">Shorten URL</Button>
          </form>

           {/* {error && (
  <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
    {error}
  </div>
)} */}
        {shortUrl && (
  <div className="mt-6 space-y-2">
    <h2 className="text-lg font-semibold">Your shortened URL:</h2>
    <div className="flex items-center gap-2">
      <Input
        type="text"
        readOnly
        value={shortUrl}
        className="flex-1 cursor-default"
      />

<Button
  onClick={() => {
    navigator.clipboard.writeText(shortUrl);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  }}
  className={isCopied ? "bg-green-600 text-white hover:bg-green-700" : "border border-input hover:bg-accent hover:text-accent-foreground"}
>
  {isCopied ? (
    <>
      <Check className="w-4 h-4 mr-2" />
      Copied!
    </>
  ) : (
    <>
      <Copy className="w-4 h-4 mr-2" />
      Copy
    </>
  )}
</Button>
    </div>
  </div>
)}

        </CardContent>
      </Card>
    </div>
  );
};

export default UrlForm;

