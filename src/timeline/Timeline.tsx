import React, { useState } from 'react'
import Post from './post/Post'

function Timeline() {
  const [posts, setPosts] = useState([{img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"}])
  return (
    <div className='timeline'>
      {posts.map((post) => <Post postImg = {post.img}/> )}
    </div>
  )
}

export default Timeline