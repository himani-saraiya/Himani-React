// import React, { useState } from 'react'
// import Memoized from './Memoized'
// import CompL1 from './CompL1'

// const appCtx = React.createContext()

// const App = () => {
//   const [count, setCount] = useState(0)
//   return (
//     <Memoized/>
//   //  <appCtx.Provider value={{count, setCount}}>
//   //    <CompL1 ></CompL1>
//   //  </appCtx.Provider>
//   )
// }


// export {appCtx}
// export default App






import React, {useState} from 'react'
import CompLvl1 from './CompLvl1'

const App = () => {

  const [count, setCount] = useState(0)
  console.log("comp app renders...")
  return (<>
    <div>App : {count} </div>
    <button onClick={()=>setCount(count+1)}>click</button>

    <CompLvl1/>
    </>
  )

}

export default App