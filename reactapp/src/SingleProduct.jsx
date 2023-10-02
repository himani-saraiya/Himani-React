import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const SingleProduct = () => {
  const {id} = useParams()

  const [product, setProduct] = useState(null)

  useEffect(()=>{
    const url = `https://fakestoreapi.com/products/${id}`
    axios.get(url).then(res=>{
      setProduct(res.data)
    }).catch(err=>{

    })
  }, [])

 
  return (
    <>
    {product === null ? <p>Loading...</p> : (
      <div>
        <h1>{product.title}</h1>
        <img src={product.image} width="150px"></img>
        <p>Price : {product.price}</p>
        <p>{product.description}</p>
      </div>
    )}
    </>
  )
}

export default SingleProduct



// get all posts 
// GET https://jsonplaceholder.typicode.com/posts/


// get comments of specific post
// GET https://jsonplaceholder.typicode.com/posts/<post-id>/comments


// get all users list 
// GET https://jsonplaceholder.typicode.com/users/


// get details of single user
// GET https://jsonplaceholder.typicode.com/users/<user-id>


// get posts of single user
// GET https://jsonplaceholder.typicode.com/users/<user-id>/posts


// get comment of a user
// GET https://jsonplaceholder.typicode.com/users/<user-id>/comments




