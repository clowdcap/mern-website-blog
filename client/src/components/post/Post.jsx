/* Import padrao react */
import React from 'react'

/* Import Css */
import './post.css'

const Post = () => {
    let imagem_topo = 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    
    return (
        <section className="post">
            <img className="post__img" src={imagem_topo} alt="Imagem" />

            <div className="post__info">
                <div className="post__cats">
                    <span className="post__cat">
                        <a href="#top" className="link">Music</a>
                    </span>
                    <span className="post__cat">
                        <a href="#top" className="link">Life</a>
                    </span>
                </div>

                <span className="post__title">
                    <a href="#top" className="link">
                        Lorem ipsum dolor sit amet
                    </a>
                </span>

                <hr />      

                <span className="postDate">1 hour ago</span>
            </div>
            
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </section>
    )
}

export default Post