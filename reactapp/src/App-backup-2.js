import React, { useState } from 'react'
import Header from './Header'
import Products from './Products'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import ColorPicker from './ColorPicker'
import Dicegame from './Dicegame'
import Tictactoe from './Tictactoe'
import Nav from './Nav'
import SingleProduct from './SingleProduct'
import Home from './Home'
import Layout from './Layout'


const AppContext = React.createContext(null)

const App = () => {
  const [cart, setCart] = useState([])
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path='/products' element={<Products />} />
        {/* <Route path='/product' element={<SingleProduct/>} /> */}

        <Route path='/product/:id' element={<SingleProduct/>}/>

      </Routes>
    </BrowserRouter>


    // <AppContext.Provider value={{cart, setCart}}>
    //   <Header cartCount={cart.length}/>
    //   <Products/> 
    // </AppContext.Provider>

  )
}


export default App
export { AppContext }