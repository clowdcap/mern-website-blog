/* Import padrao react e Hooks - useState e useEffect */
import React, { useState, useEffect } from 'react'

/* Import components */
import Header from './../../components/header/Header'
import Sidebar from './../../components/sidebar/Sidebar'
import Posts from './../../components/posts/Posts'

/* Import CSS */
import './home.css'

/* Import Axios */
import axios from 'axios'

/* Import router-dom */
import { useLocation } from 'react-router-dom'

/*
Estrutura da pagina Home
Css apenas indica que a class home tem display flex

header
posts | sidebar
possivelmente um footer - futuramente

Uso dos Hooks
*/
const Home = () => {

    /* 
    useState
    */
    const [posts, setPosts] = useState([])
    const location = useLocation

    useEffect(()=> {
        const fetchPosts = async ()=> {

            /*
            Em res - armazenado todos os dados requisitados na rota '/posts' 
            */
            const res = await axios.get('/posts')

            /* 
            Mostra essa resposta no console 
            */
            console.log('Posts: ', res.data)

            /* 
            Apos pegar dados do post aplica-lo no estado 
            */
            setPosts(res.data)
        }
        fetchPosts()
    }, [])

    return (
        <>
            <Header />
            <section className="home center">
                <Posts posts={posts} />
                <Sidebar />
            </section>
        </>
    )
}

export default Home