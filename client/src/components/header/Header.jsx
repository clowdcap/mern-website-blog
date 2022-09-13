/* Import padrao react */
import React from 'react'

/* Import Css */
import './header.css'

const Header = () => {
  let imagem_header = 'https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  return (
    <header className="header center">
      <div className="header__titulos">
        <span className='header__titulos__pequeno' >React & Node</span>
        <span className='header__titulos__grande' >Blog</span>
      </div>
      <img src={imagem_header} alt="Imagem" className="header__image" />

    </header>
  )
}

export default Header