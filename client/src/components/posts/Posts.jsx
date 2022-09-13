/* Import Css */
import './posts.css'

/* Import components */
import Post from './../post/Post'

const Posts = ({posts}) => {
  return (
    /* 
    Parametro posts, dados que recebe da requisicao ao servidor 
    Fazendo um map, instancia que cada post na lista total de post como (p)
    e dentro do Post, colocar esses dados
    */
    <section className="posts">
      {posts.map((p) => (
        <Post post={p}/>
      ))}
       
    </section>
  )
}

export default Posts


