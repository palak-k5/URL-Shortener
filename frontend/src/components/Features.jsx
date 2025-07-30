import React from 'react'
import { Button } from './ui/button'

const Features = () => {
  return (
    <div className="w-full px-4 mt-10">
      <div className="bg-white/5 text-gray-300 rounded-xl py-8 px-6 shadow-lg backdrop-blur-md text-sm md:text-base max-w-4xl mx-auto flex flex-col items-center space-y-8">

        <h2 className="text-xl font-bold text-white">What You Get With Our URL Shortener

</h2>

        {/* Grid with 2 columns for features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-center">
          
          <div>
            <div className="text-white text-lg font-semibold">📎 Custom Short URLs</div>
            <p className="text-gray-400 text-sm">Create easy-to-share, memorable links tailored to your needs.</p>
          </div>

          <div>
            <div className="text-white text-lg font-semibold">📊 Real-time Analytics</div>
            <p className="text-gray-400 text-sm">Track link clicks, locations, and engagement instantly.</p>
          </div>

          <div>
            <div className="text-white text-lg font-semibold">📈 Personalized Dashboard</div>
            <p className="text-gray-400 text-sm">Manage, edit, and monitor all your shortened links in one place.</p>
          </div>

          <div>
            <div className="text-white text-lg font-semibold">🧾 QR Code Generation</div>
            <p className="text-gray-400 text-sm">Generate downloadable QR codes for every short URL.</p>
          </div>

        </div>

        {/* Unlock section */}
        <div className="text-xl text-white font-semibold pt-4">Unlock all features</div>

        <div className="flex gap-3 flex-wrap justify-center">
          <Button className="bg-amber-50 text-cyan-950">Login</Button>
          <Button className="bg-amber-50 text-cyan-950">Register</Button>
        </div>

      </div>
    </div>
  )
}

export default Features
