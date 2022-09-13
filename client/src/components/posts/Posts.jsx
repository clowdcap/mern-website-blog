/* Import Css */
import './posts.css'

/* Import components */
import Post from './../post/Post'

const Posts = ({posts}) => {
  return (
    <section className="posts">
      {posts.map((p) => (
        <Post post={p}/>
      ))}
       
    </section>
  )
}

export default Posts


