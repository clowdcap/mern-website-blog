/* Import padrao react */
import React from 'react'

/* 
Import link das rotas instanciados no App.jsx
link - instancia a funcao
to - qual url chamar
*/
import { Link } from 'react-router-dom'

/* Import css */
import './register.css'

const Register = () => {
  return (
    <section className="register center">
        <span className="register__titulo">Cadastro</span>
        <form className="register__form">
            <label>Usuário</label>
            <input className="register__input" type="text" placeholder="Digite seu nome" />
            <label>E-Mail</label>
            <input className="register__input" type="text" placeholder="Digite seu email..." />
            <label>Senha</label>
            <input className="register__input" type="password" placeholder="Digite sua senha..." />
            <button className="register__button">Cadastrar</button>
        </form>

        <button className="login__button__register">
          <Link to="/login" className='link'>Login</Link>
        </button>
        
    </section>
  )
}

export default Register