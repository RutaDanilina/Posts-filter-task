import React from 'react'
import {post} from '../plugins/http'


const PostForm = () => {

    const titleRef = React.useRef()
    const imgRef = React.useRef()
    const usernameRef = React.useRef()
    const descriptionRef = React.useRef()

    const addPost = async() => {
    const blogPost= {
      title: titleRef.current.value,
      img: imgRef.current.value,
      username: usernameRef.current.value,
      description: descriptionRef.current.value
    }

    const res = await post('addPost', blogPost)
    console.log(res)

    titleRef.current.value = ''
    imgRef.current.value = ''
    usernameRef.current.value = ''
    descriptionRef.current.value = ''
   }

  return (
    <div className='PostForm'>
      <input ref={titleRef} type="text" name="title" id="title" placeholder='Title' />
      <input ref={imgRef} type="text" name="img" id="img" placeholder='Img URL' />
      <input ref={usernameRef} type="text" name="username" id="username" placeholder='Username' />
      <input ref={descriptionRef} type="text" name="description" id="description" placeholder='Description' />
      <input className='btn' onClick={addPost} type="submit" value="POST" />
    </div>
  )
}

export default PostForm