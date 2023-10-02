import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import ProductCard from './ProductCard'
import Loading from './Loading'
import { Link, useNavigate } from 'react-router-dom'


const URL = "https://fakestoreapi.com/products"

const Products = () => {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{
    const authToken = localStorage.getItem("__authToken__")
    
    if(authToken == null){
      navigate("/login")
    }
    
  }, [])


  useEffect(()=>{
    fetchProducts()
  }, [])

  useEffect(()=>{
    console.log(cart)
  }, [cart])


  const onAddToCart = (productId)=>{
    console.log(`${productId} added to cart`)
    setCart([...cart, productId])
  }

  const fetchProducts = () => {
    axios.get(URL).then(res => {
      setProducts(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <>
    <button onClick={fetchProducts}>fetch</button>
      <div className='d-flex wrap'>

        {
          products.length == 0 ? <Loading/> : products.map(product => {
            return (
              <Link to={`/product/${product.id}`}>
              <ProductCard
              imgUrl={product.image}
              title={product.title}
              price={product.price}
              productId={product.id}
              isInCart={cart.includes(product.id)}
              onAddToCart = {onAddToCart}
            />
              </Link>
            )
          })
        }
      </div>
    </>
  )
}

export default Products