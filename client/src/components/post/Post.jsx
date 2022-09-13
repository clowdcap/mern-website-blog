/* Import padrao react */
import React from 'react'

/* Import Css */
import './post.css'

/* Import Link do router-dom */
import {Link} from 'react-router-dom'


const Post = ({post}) => {
    /* Setando uma img padrao utilizado na construcao base do front-end */
    let imagem_topo = 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'

    /* Define a rota geral, caso queria escolher uma img aqui de dentro */
    const PF = "http://localhost:5000/images/"

    return (
        /* 
        Ordenação das situações da apresentacao dos posts na pagina
        
        > Img do post
        
        > Info do post
          - Categoria
          - Titulo
          - Data de Postagem
        
        > Descricao
        */
        <section className="post">
            
            {post.photo && <img className="post__img" src={post.photo} alt="Imagem" />}

            <div className="post__info">

                <div className="post__cats">
                    {post.categories.map((c) => (
                        <span className="post__cat">
                            <a href="#top" className="link">{c.name}</a>
                        </span>
                    ))}
                </div>
                
            
                <span className="post__title">
                    <Link to={`/post/${post._id}`} className="link">
                            {post.title}

                    </Link>
                </span>

                <hr />      

                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <hr />  
            <p className="postDesc">
            {post.description}
            </p>
        </section>
    )
}

export default Post
