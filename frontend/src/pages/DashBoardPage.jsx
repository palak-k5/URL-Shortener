import FireflyBackground from '../components/FireFlyBackground'
import UrlForm from '../components/UrlForm'
import UserUrls from '../components/UserUrl'
import Navbar from '../components/Navbar' // Import your Navbar component
import React from 'react'
import Footer from '@/components/Footer'

const DashBoardPage = () => {
  return (
    <div className="relative min-h-screen w-full">
      <FireflyBackground />

      {/* Navbar at the top */}
      <Navbar appName="URL Shortener" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-start w-full pt-16 md:pt-20">
        <UrlForm />
        <UserUrls />
      </div>

    </div>
  )
}

export default DashBoardPage