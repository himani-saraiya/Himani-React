import React, { useEffect, useState } from 'react'
import Child from './Child'
import Wallet from './Wallet'
import ColorPicker from './ColorPicker'
import Form from './Form'
import Dicegame from './Dicegame'
import Tictactoe from './Tictactoe'

import './global.css';

const App = () => {
  const [count, setCount] = useState(0)
  const [secondCount, setSecondCount] = useState(0)


  useEffect(() => {
    console.log("parent use effect 1 is running")
   
  }, [])


  useEffect(() => {
    console.log("parent use effect 2 is running")
  }, [count])


  useEffect(() => {
    console.log("parent use effect 3 is running")
  }, [secondCount, count])


  return (
    <div>
      {/* Count : {count}
      <button onClick={() => setCount(count + 1)}>Inc Count</button>

      <br /><br /><br />

      Second Count : {secondCount}
      <button onClick={() => setSecondCount(secondCount + 1)}>Inc Count</button> */}

{/* <Child/> */}

    {/* <ColorPicker/> */}
    {/* <Form/> */}

    {/* <Dicegame/> */}
    <Tictactoe/>

    </div>
  )
}

export default App