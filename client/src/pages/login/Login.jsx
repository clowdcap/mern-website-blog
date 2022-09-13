/* import padrao react */
import React from 'react'

/* 
Import link das rotas instanciados no App.jsx
link - instancia a funcao
to - qual url chamar
*/
import { Link } from 'react-router-dom'

/* Import Css */
import './login.css'

const Login = () => {
  return (
    <section className="login center">
        <span className="login__titulo">Login</span>
        <form className="login__form">
          <label>Email</label>
          <input className="login__input" type="text" placeholder="Enter your email..." />
          <label>Password</label>
          <input className="login__input" type="password" placeholder="Enter your password..." />
          <button className="login__button">Login</button>
        </form>
        <button className="login__register__button">
          <Link to="/register" className='link'>Register</Link>
        </button>
    </section>
  )
}

export default Login