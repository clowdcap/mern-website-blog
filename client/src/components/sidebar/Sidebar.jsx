/* Import padrao react */
import React from 'react'

/* Import Css */
import './sidebar.css'

/* Import Hooks */
import { useState, useEffect } from 'react'

/* Import axios */
import axios from 'axios'

const Sidebar = () => {
    const [cats, setCats] = useState([])
    
    useEffect(()=> {
        const getCats = async ()=> {
            const res = await axios.get('/categories')
            console.log('Categorias: ', res.data)
            setCats(res.data)
        }
        getCats()
    }, [])

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

                    {cats.map((c)=> (
                        <li className="sidebar__lista__item">
                            <a href="#home" to="/posts?cat=Life" className="link">{c.name}</a>
                        </li>
                    ))}


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