import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Users from './Users'
import Posts from './Posts'
import Comments from './Comments'
import ProductList from './ProductList'
import Login from './Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from './Products'
import MUI from './MUI'
import Child from './Child'



const num = 5
const App = () => {
  return (
    <>
    
    {num % 2 === 0  && <p>Hi</p>}

    <Child name={"Rachit"}>

      <p>hi</p>
      
      <h1>thi</h1>

    </Child>


    {/* <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<MUI></MUI>}/>
        <Route path='/user/:userId/posts' element={<Posts/>}/>
        <Route path='/post/:postId/comments' element={<Comments/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>

    <ToastContainer/> */}

    </>
  )
}

export default App