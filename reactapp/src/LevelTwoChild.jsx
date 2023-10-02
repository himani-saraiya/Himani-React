import React, { useContext } from 'react'
import { AppCtx } from './App'

const LevelTwoChild = () => {
 const {cart, setCart} = useContext(AppCtx)
 
//  console.log(`into level two : : `, ctx)
  return (
    <div>

      <button onClick={()=>setCart([...cart, Math.random()])}>add to cart</button>
    </div>
  )
}

export default LevelTwoChild