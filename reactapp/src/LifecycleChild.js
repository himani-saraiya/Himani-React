import React, { useEffect, useContext } from 'react'
import { AppCtx } from './App'
import LevelTwoChild from './LevelTwoChild'

const LifecycleChild = () => {
  const { visible, setVisible } = useContext(AppCtx)



  useEffect(() => {
    console.log("Child : useEffect")

    return () => {
      //cleanup code
      console.log("Child : is going to unmount")
    }

  }, [])

  return (
    <div>
      LifecycleChild
      <button onClick={() => setVisible(!visible)}>{visible ? "Hide" : "Show"}</button>
      {/* <Provider> */}
      <LevelTwoChild />
      {/* </Provider> */}

    </div>
  )
}

export default LifecycleChild