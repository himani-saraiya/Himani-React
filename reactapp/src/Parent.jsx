import React, { useEffect } from 'react'

const Parent = ({children}) => {
  const cond = false
  return (
    <>
      {children}

      {cond && <p>condition is true</p>}
      
    </>
  )
}

export default Parent


// useEffect(cb, depsList)