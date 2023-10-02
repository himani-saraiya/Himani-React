import React,{useContext} from 'react'
import { AppCtx } from './App'

const Header = () => {

  const {cart} = useContext(AppCtx)

  return (
    <div>

      Itmes in cart : {cart.length}
    </div>
  )
}

export default Header