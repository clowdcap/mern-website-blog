import React from 'react'
import './app.css'
import Topo from './components/topo/Topo'
import Home from './pages/home/Home'
import Write from './pages/write/Write'
import Single from './pages/single/Single'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'


import { Routes, Route } from "react-router-dom"


const App = () => {
  const user = true
  return (
    <>

        <Topo />
          
        <Routes>
          <Route path="/" exact element={<Home />} />
          
          <Route path="/login" element={user ? <Home/> : < Login/>} />
          <Route path="/register" element={user ? <Home/> : <Register/>} />
          
          <Route path="/write" element={user ? <Write/> : <Login/>} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/settings" element={user ? <Settings/> : <Login/>} />

        </Routes>
       
  
      
    </>
  )
}

export default App