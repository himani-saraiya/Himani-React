import React, { useState, useEffect } from 'react'

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [isValid, setIsValid] = useState(false)

  const validateName = ()=>{
    return name.length != 0
  }

  const validateEmail = ()=>{
    return email.length != 0
  }

  useEffect(()=>{
    const isValidForm = validateEmail() && validateName()
    setIsValid(isValidForm)
  },[name, email])

  return (
    <div>
      <input 
      type={"text"}
      value={name}
      onChange={e=>setName(e.target.value)}
      ></input>
      <br/>

      <input
      type={"text"}
      value={email}
      onChange={e=>setEmail(e.target.value)}
      ></input>
      <br/>

      <button disabled={!isValid}>Submit</button>


    </div>
  )
}

export default Form