import React, { useState } from 'react'
import Nav from './Nav'

const ColorPicker = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  return (
    <div>
      <Nav/>
      <h1>ColorPicker</h1>
      <button disabled></button>

      <label htmlFor='red'>Red</label>
      0
      <input type={"range"}
        id="red"
        value={red}
        max={255}
        onChange={e => setRed(e.target.value)}
      />
      255<br />


      <label htmlFor='green'>Green</label>
      0 <input type={"range"} id="green"
      max={255}
        value={green}
        onChange={e => setGreen(e.target.value)}
      />255<br />

      <label htmlFor='blue'>Blue</label>
      0 <input type={"range"} id="blue"
        value={blue}
        max={255}
        onChange={e => setBlue(e.target.value)}
      />255<br />

      <div style={{ height: '100px', width: '100px', border: "1px solid black", background:`rgb(${red},${blue},${green})` }}></div>
      {`red : ${red}, green : ${green}, blue : ${blue}`}
    </div>

  )
}

export default ColorPicker