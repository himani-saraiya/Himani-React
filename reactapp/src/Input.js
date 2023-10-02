import React, { useState } from 'react'

const Input = () => {
  const [inpValue, setInpValue] = useState("")

  return (
    <>
      <input
        type={"text"}
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
      />

      {inpValue}
    </>
  )
}

export default Input