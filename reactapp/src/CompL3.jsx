import React, {useContext} from 'react'
import { appCtx } from './App'

const CompL3 = () => {
  const {count, setCount} = useContext(appCtx)
  return (
    <div>
      {count}
      <button onClick={()=>setCount((count)=>count+1)}>Increase Count</button>
      </div>
  )
}

export default CompL3