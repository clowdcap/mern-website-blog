/* Import padrao react */
import React from 'react'
import { useState, useEffect } from 'react'

/* Import axios */
import axios from 'axios'

/* Import useLocation */
import { useLocation } from 'react-router-dom'

/* Import Css */
import './singlepost.css'

const Single_Post = () => {
    let imagem = 'https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'

    /* Localiza o dado ao entrar em um objeto (post) */
    const location = useLocation()

    /* Pega o Id gerado do post */
    const path = location.pathname.split('/')[2]

    /* Imprime no console o valor desse ID do post aberto */
    console.log('ID Post acessado: ' + path)


    
    /* 
    useState
    */
    const [post, setPost] = useState({})

    /* 
    Pega a resposta do post selecionado e traz em uma promisse, os dados do objeto em si
    Logo possibilita trabalhar os dados separadamente pra seu respectivo post

    > post tem um dado
    > setPost muda esse dado pelo useEffect
        Que basicamente faz a requisicao ao servidor para retornar o dado.
    > A variavel para os parametros do post é = post
        post._id
        post.title ...
    */
    useEffect(()=> {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            console.log('Post Selecionado: ', res.data)
            setPost(res.data)
        }
        getPost()
    }, [])

    return (
        <section className="single__post">
        <div className="single__post__wrapper">
            {post.photo && (
                <img className="single__post__img" src={post.photo} alt="Imagem" />
            )}
            <h1 className="single__post__titulo">
                {post.title}
            <div className="single__post__edit">
                <i className="single__post__icon far fa-edit"></i>
                <i className="single__post__icon far fa-trash-alt"></i>
            </div>
            </h1>
            <div className="single__post__info">
                <span>
                    Author:
                    <b className="single__post__autor">
                        <a href="#home" alt="home" className="link">
                            {post.username}
                        </a>
                    </b>
                </span>
                <span>{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="single__post__desc">
                {post.description}
            </p>
        </div>
        </section>
    )
}

export default Single_Post