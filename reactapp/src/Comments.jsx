import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Comments = () => {
  const {postId} = useParams()
  const [comments, setComments] = useState([])

  useEffect(()=>{
    fetchCommentsByPostId(postId)
  }, [])
  
  const fetchCommentsByPostId = (postId)=>{
    const URL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    axios.get(URL).then(res=>{
        setComments(res.data)
    }).catch(err=>{

    })
  }

  return (
    <div>Comments

      {comments.map(comment=>{
        return (<div>
          <p>comment by : {comment.name}</p>
          <p>user email : {comment.email}</p>
          <p>comment : {comment.body}</p>
          <hr/>
        </div>)
      })}

    </div>
  )
}

export default Comments