/* Import padrao react */
import React from 'react'

/* 
Import link das rotas instanciados no App.jsx
link - instancia a funcao
to - qual url chamar
*/
import { Link } from 'react-router-dom'

/* Import Css */
import './topo.css'

const Topo = () => {
    const user = true
    
    let imagem_topo = 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    
    return (
        <section className="topo">

            <div className="topo__esquerda">
                <i className="topo__icon fab fa-facebook-square"></i>
                <i className="topo__icon fab fa-twitter-square"></i>
                <i className="topo__icon fab fa-pinterest-square"></i>
                <i className="topo__icon fab fa-instagram-square"></i>
            </div>

            <div className="topo__meio">
                <ul className="topo__lista">
                    <li className="topo__lista__item"><Link className='link' to={'/'}>HOME</Link></li>
                    <li className="topo__lista__item"><Link className='link' to={'/'}>SOBRE</Link></li>
                    <li className="topo__lista__item"><Link className='link' to={'/'}>CONTATO</Link></li>
                    <li className="topo__lista__item"><Link className='link' to={'/write'}>ESCREVER</Link></li>
                    <li className="topo__lista__item">{user && 'SAIR'}</li>
                </ul>
            </div>

            <div className="topo__direita">
                {
                    user ? (<img className="topo__img" src={imagem_topo} alt="Imagem"/>) :(
                        <>
                            <Link className='links link' to={'/login'}>LOGIN</Link>
                            <Link className='links link' to={'/register'}>REGISTER</Link>
                        </>
                    )
                }
                
                <i className="topo__searchicon fas fa-search"></i>
            </div>
        </section>
    )
}

export default Topo