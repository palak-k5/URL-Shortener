import React from 'react'
import { Button } from './components/ui/button'
import HomePage from './pages/HomePage'
import { Outlet } from '@tanstack/react-router'
import NavBar from './components/NavBar'

const App = () => {
  return (
      <> 
      <NavBar/>
      <Outlet/>
  </>

  )
}

export default App
