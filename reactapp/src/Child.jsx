import React, { useEffect } from 'react'

const Child = ({name, children}) => {
  useEffect(()=>{
    console.log("Effect  1 of child")
  })

  useEffect(()=>{
    console.log("Effect 2 of child")
  }, [])

  
  return (
    <div>Child</div>
  )
}

export default Child
