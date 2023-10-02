import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const initValue = ["", "", "", "", "", "", "", "", ""]

const Tictactoe = () => {

  const [gridValues, setGridValues] = useState(initValue)
  const [chance, setChance] = useState("X")

  useEffect(() => {
    winningAlgo()
  }, [gridValues])

  const winningAlgo = () => {
    const winningPos = [
      [0, 1, 2], [3, 4, 5],
      [6, 7, 8], [0, 3, 6],
      [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]

    if (gridValues[0] == "" && gridValues[4] == "" && gridValues[8] == "") return

    winningPos.forEach(pos => {
      console.log(pos)
      console.log(gridValues)
      if (gridValues[pos[0]] == gridValues[pos[1]] && gridValues[pos[1]] == gridValues[pos[2]]) {
        console.log(`${gridValues[pos[0]]} won !!`)
      }
    })

  }

  const handleGridClick = (ind) => {
    console.log(ind)
    const gridValuesCpy = [...gridValues]

    if (gridValues[ind] !== "") return

    if (chance == "X") {
      gridValuesCpy[ind] = "X"
      setChance("O")
    } else {
      gridValuesCpy[ind] = "O"
      setChance("X")
    }

    setGridValues(gridValuesCpy)
  }




  return (
    <div>
      <Nav/>
      Tic Tac Toe
      <div className='d-flex'>
        <div
          className='p-5 border'
          onClick={() => handleGridClick(0)}
        >{gridValues[0]}</div>
        <div
          className='p-5 border'
          onClick={() => handleGridClick(1)}
        >{gridValues[1]}</div>
        <div
          className='p-5 border'
          onClick={() => handleGridClick(2)}
        >{gridValues[2]}</div>
      </div>

      <div className='d-flex'>
        <div
          className='p-5 border'
          onClick={() => handleGridClick(3)}
        >{gridValues[3]}</div>
        <div
          className='p-5 border'
          onClick={() => handleGridClick(4)}
        >{gridValues[4]}</div>
        <div
          className='p-5 border'
          onClick={() => handleGridClick(5)}
        >{gridValues[5]}</div>
      </div>


      <div className='d-flex'>
        <div
          className='p-5 border'
          onClick={() => handleGridClick(6)}
        >{gridValues[6]}</div>
        <div
          className='p-5 border'
          onClick={() => handleGridClick(7)}
        >{gridValues[7]}</div>
        <div
          className='p-5 border'
          onClick={() => handleGridClick(8)}
        >{gridValues[8]}</div>
      </div>
    </div>
  )
}

export default Tictactoe