import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [perPage, setPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalData, setTotalData] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetchProducts()
  }, [currentPage, perPage])


  const getPagination = ()=>{
    const totalPages = Math.ceil(totalData/perPage)
    const pagination = []
    for(let i = 1; i<=totalPages; i++){
      pagination.push(<button onClick={()=>setCurrentPage(i)}>{i}</button>)
    }

    return pagination
  }

  const fetchProducts = ()=>{
    const URL = `https://dummyjson.com/products?limit=${perPage}&skip=${(currentPage-1)*perPage}`
    setIsLoading(true)
    axios.get(URL).then(res=>{
      console.log(res)
      setProducts(res.data.products)
      setTotalData(res.data.total)
      setIsLoading(false)
    }).catch(err=>{
      console.log(err)
      setIsLoading(false)
    })
  }





  return (
    <>{ isLoading ? "Loading..." :  <div>
    {products.map(product=>{
      return (<div>
        {product.title}
        {product.description}
        {product.price}

        <hr/>
      </div>)
    })}

<label>Dispaly per page : </label>
<select onChange={(e)=>setPerPage(e.target.value)}>
<option>5</option>
<option>10</option>
<option>20</option>
<option>50</option>
</select>

{
getPagination()
}

  </div>}
    
    </>
  )
}

export default ProductList