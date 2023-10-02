import React, {useState, memo} from 'react'
import CompLvl2 from './CompLvl2'

const CompLvl1 = () => {

  const [count, setCount] = useState(0)
  console.log("comp l1 renders...")
  return (<>
    <div>CompLvl1 : {count} </div>
    <button onClick={()=>setCount(count+1)}>click</button>
    <CompLvl2/>
    </>
  )

}

export default memo(CompLvl1)

// useMemo
// useCallback
// pure Component (not pure function)



//uncotrolled and controlled

// error boundaries

// custom hooks
// react predefined hooks
// portals


// how react works
// folder structure

// typescript
// storybook

