import React from 'react'
import PostForm from '../Components/PostForm'
import FilterPosts from '../Components/FilterPosts'
import SinglePostCard from '../Components/SinglePostCard'
import { post } from '../plugins/http'

const IndexPage = () => {

  const [posts, setPosts] = React.useState([])



  React.useEffect( ()=> {
    const getPosts = async() => {
      const res = await post('find', {username: ""})
      setPosts(res.posts)
    }
    getPosts()
  }, [])

  const postRemoved = (id) => {
    let myPosts = [...posts]
    myPosts = myPosts.filter(myPost => myPost._id !== id)
    setPosts(myPosts)
  }

  return (
<div className='mainWrapper'>
    <FilterPosts setPosts={setPosts} />
    <PostForm /> 

    <div className='cardsWrapper'>
      {posts.map((post,i) =>  <SinglePostCard key={i} post={post} postRemoved={postRemoved} /> )}
     
    </div>

</div>
  )
}

export default IndexPage