import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <section className="sidebar">
        <div className="sidebar__item">
            <span className="sidebar__titulo">Sobre Mim</span>
            <img src="https://revistacult.uol.com.br/home/wp-content/uploads/2018/10/arte-revista-cult.jpg" alt="" />
            <p>
                Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                amet ex esse.Sunt eu ut nostrud id quis proident.
            </p>
        </div>
        
        <div className="sidebar__item">
            <span className="sidebar__titulo">Categorias</span>
            <ul className="sidebar__lista">
                <li className="sidebar__lista__item">
                    <a href="#home" to="/posts?cat=Life" className="link">Life</a>
                </li>

                <li className="sidebar__lista__item">
                    <a href="#home" to="/posts?cat=Musica" className="link">Musica</a>
                </li>

                <li className="sidebar__lista__item">
                    <a href="#home" to="/posts?cat=Esporte" className="link">Esporte</a>
                </li>

                <li className="sidebar__lista__item">
                    <a href="#home" to="/posts?cat=Estilo" className="link">Estilo</a>
                </li>

                <li className="sidebar__lista__item">
                    <a href="#home" to="/posts?cat=Tecnologia" className="link">Tecnologia</a>
                </li>
                
                <li className="sidebar__lista__item">
                    <a href="#home" to="/posts?cat=Cinema" className="link">Cinema</a>
                </li>
            </ul>
        </div>

        <div className="sidebar__item">
            <div className="sidebar__titulo">Nos siga</div>
            <div className="sidebar__social">
                <i className="sidebar__icon fab fa-facebook-square"></i>
                <i className="sidebar__icon fab fa-instagram-square"></i>
                <i className="sidebar__icon fab fa-pinterest-square"></i>
                <i className="sidebar__icon fab fa-twitter-square"></i>
            </div>
        </div>


    </section>
  )
}

export default Sidebar