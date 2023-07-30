import React, { useState } from 'react';
import './ProductCardStyle.css';
const ProductCard = ({ imgUrl, title, price, onAddToCart }) => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
    if (typeof onAddToCart === 'function') {
      onAddToCart();
    }
  };

  return (
    <div className="product-card">
      <img src={imgUrl} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart ({cartCount})
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
