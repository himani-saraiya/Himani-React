import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const URL = 'https://fakestoreapi.com/products';

const GetData = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get(URL)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <button onClick={fetchProducts}>Fetch</button>
      <div className='d-flex wrap'>
        {products.map((product) => (
          <ProductCard
            imgUrl={product.image}
            title={product.title}
            price={product.price}
            key={product.id} 
          />
        ))}
      </div>
    </>
  );
};

export default GetData;
