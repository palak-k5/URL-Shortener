import React from 'react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

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

<motion.div
  className="text-center text-white font-semibold text-base md:text-lg px-4"
>
  {["All", "features", "are", "just", "one", "step", "away", "—", "join", "us", "or", "sign", "in!"].map((word, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: i * 0.09 }}
      className="inline-block mr-1 text-amber-300"
    >
      {word}
    </motion.span>
  ))}
</motion.div>


      </div>
    </div>
  )
}

export default Features
