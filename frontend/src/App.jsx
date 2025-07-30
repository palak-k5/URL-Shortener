import React from 'react'
import { Button } from './components/ui/button'
import HomePage from './pages/HomePage'
import { Outlet } from '@tanstack/react-router'
import NavBar from './components/NavBar'
import { useSelector } from 'react-redux'
import { Toaster } from './components/ui/sonner'
import Footer from './components/Footer'

const App = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
      <> 
      {!isAuthenticated && <NavBar />}
            <Toaster richColors />

      <Outlet/>

      <Footer/>

  </>

  )
}

export default App
