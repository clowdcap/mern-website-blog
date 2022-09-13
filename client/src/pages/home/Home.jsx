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

/*
Estrutura da pagina Home
Css apenas indica que a class home tem display flex

header
posts | sidebar
possivelmente um footer - futuramente

Uso dos Hooks
*/
const Home = () => {

    /* useState */
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        const fetchPosts = async ()=> {
            const res = await axios.get('/posts')
            console.log(res)
        }
        fetchPosts()
    }, [])

    return (
        <>
            <Header />
            <section className="home center">
                <Posts />
                <Sidebar />
            </section>
        </>
    )
}

export default Home