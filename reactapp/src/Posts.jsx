import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Posts = () => {
  const {userId} = useParams()
  const [posts, setPosts] = useState([])

  const fetchUserPosts = (userId)=>{
    const URL = `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    axios.get(URL).then(res=>{
      setPosts(res.data)
    }).catch(err=>{

    })
  }

  useEffect(()=>{
    fetchUserPosts(userId)
  }, [])
  return (
    <div>
      {posts.map(post=>{
        return (<div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}/comments`}>View Comments</Link>
            <hr/>
        </div>)
      })}
    </div>
  )
}

export default Posts