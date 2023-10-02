import React, { useState } from 'react'

const Todo = () => {
  const [todo, setTodo] = useState("")
  const [tasks, setTasks] = useState([])


  const addNewTask = ()=>{
    setTasks([...tasks, todo])
    setTodo("")
  }

  return (
    <div>
      <h1>Add item in todo</h1>
      
      <input
        type={"text"}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
     
      <button onClick={addNewTask} >Save</button>
      <br />

      <ul>
        {tasks.map((task, ind) => {
          return (<li key={ind}>{task}</li>)
        })}
      </ul>

    </div>
  )
}

export default Todo