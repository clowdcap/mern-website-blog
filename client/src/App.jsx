/* Import padrao do react */
import React from 'react'

/* Importando biliotecas que auxiliara nas rotas */
import { Routes, Route } from "react-router-dom"

/* Import Css */
import './app.css'

/* Import components */
import Topo from './components/topo/Topo'

/* Import pages */
import Home from './pages/home/Home'
import Write from './pages/write/Write'
import Single from './pages/single/Single'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'


const App = () => {
/* 
user = true - Substitui o ato do usuario estar logado
sendo utilizado apenas para testes, ate integrar api com client
*/
  const user = true

  /*
  Routes - ROTAS - Gerencia todas as rotas (conjunto)
  Route - ROTA - Gerencia uma rota (unitario)

  path - define o nome da rota na url
  element - define qual page importada abrir, noc caso com condicional
  caso o usuario esta logado ou nao, e como acima foi criado o user,
  simula o login.
  */
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