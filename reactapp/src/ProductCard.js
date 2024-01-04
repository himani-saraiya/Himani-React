import React from 'react'

const ProductCard = ({imgUrl, title, price, productId, onAddToCart, isInCart}) => {
  return (
    <div className='product-card'>
      <img src={imgUrl} alt=""/>
      <h4>{title}</h4>
      <p>{price}</p>
      {isInCart ?  
      <button disabled>Added to Cart</button>:
      <button onClick={()=>onAddToCart(productId)}>Add To Cart</button>
      }

    </div>
    
  )
}

export default ProductCard