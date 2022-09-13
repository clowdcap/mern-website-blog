/* Import Css */
import './posts.css'

/* Import components */
import Post from './../post/Post'

const Posts = () => {
  return (
    <section className="posts">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </section>
  )
}

export default Posts


