import React from 'react'

const Button = ({ label, disabled, onClick }) => {

  return (
    <button
      disabled={disabled}
      // onClick={abc}
      // onClick = {()=>abc()}
      onClick = {()=>{
        onClick()
      }}
      >{label}</button>
      
  )
}

export default Button




// const A = 10
// const B = 20
// const C = 30

// export default B
// export default A


// // default export 
// // named export