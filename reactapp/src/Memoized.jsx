import React, {useState} from 'react'

const knownResults = {}

const memoizedFn = (inp) =>{

  if(inp in knownResults){
     console.log("from memoization")
    return knownResults[inp]
  }

  //calculate
  console.log("calculating...")
  const res = inp*inp*inp*inp
  knownResults[inp] = res
  return res
}


const Memoized = () => {
  const [number, setNumber] = useState(0)
  return (
    <div>
      <input 
      type="number" 
      value={number}
      onChange={e=>setNumber(e.target.value)}
        />

        <button onClick={()=>memoizedFn(parseInt(number))}>click</button>
    </div>
  )
}

export default Memoized