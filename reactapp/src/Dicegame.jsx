import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const getDiceNumber = () => {
  return (Math.floor(Math.random()*3414)%6) + 1
}

const notify = (msg) => toast.error(msg);


const Dicegame = () => {
  const [chances, setChances] = useState(0)
  const [target, setTarget] = useState(0)
  const [score, setScore] = useState(0)
  const [rollCount, setRollCount] = useState(0)
  const [diceNum, setDiceNum] = useState(0)

  const handleDiceRoll = ()=>{
    const diceNumber = getDiceNumber()
    
    setDiceNum(diceNumber)
    setRollCount(rollCount+1)
    setScore(score+diceNumber)

  }

  useEffect(()=>{
    if(rollCount !=0 && (rollCount >= chances || score >= target)) notify("game over !")
  }, [rollCount, score ])


   

  return (
    <div>
      <Nav/>
      <input 
      type={"number"} 
      placeholder="chances"
      value={chances}
      onChange={e=>setChances(e.target.value)}
      ></input>


      <input 
      type={"number"}
      placeholder="target"
      value={target}
      onChange={e=>setTarget(e.target.value)}
      ></input>

      <br></br>

      <p>Remaining Chances : {chances-rollCount}</p>

      <h1>Score : {score}</h1>

      <h6>Dice Number : {diceNum}</h6>
      <button 
      disabled={!(chances-rollCount > 0 && (target>0) && target<chances*6) }
      onClick={handleDiceRoll}
      >Roll</button>
      <ToastContainer
        position="bottom-center"
      />
    </div>
  )
}

export default Dicegame