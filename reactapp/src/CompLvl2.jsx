


import React, {useState, memo} from 'react'

const CompLvl2 = () => {

  const [count, setCount] = useState(0)
  console.log("comp l2 renders...")
  return (<>
    <div>CompLvl2 : {count} </div>
    <button onClick={()=>setCount(count+1)}>click</button>
    </>
  )

}

export default memo(CompLvl2)