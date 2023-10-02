import React, { useState } from 'react'

const initialState = [
  { name: "username", value: "" },
  { name: "email", value: "" },
  { name: "password", value: "" },
]

// [...formInputs, {name:""}]

// const initState = {
//   username:{value:"", isValid:false},
//  email:{},
// }



const MultiFieldForm = () => {
  const [formInputs, setFormInputs] = useState(initialState)

  const getValue = (name) => {
    // return formInputs.find(el=>el.name === name).value
    const formObj = formInputs.find(el => el.name === name)
    return formObj.value

  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    console.log("name : ", name, " value : ", value)

    const newInputs = formInputs.map(formField => {

      // if(el.name === name) return {...el, value}

      // return el

      if (formField.name === name) {
        const valueObj = { ...formField, value: value }
        return valueObj
      } else {
        return formField
      }
    })

    setFormInputs(newInputs)

  }

  return (
    <div>
      <input
        type={"text"}
        name="username"
        value={getValue("username")}
        onChange={handleInputChange}
      />
      <br />


      <input
        type={"text"}
        name="email"
        value={getValue("email")}
        onChange={handleInputChange}
      />
      <br />

      <input
        type={"text"}
        name="password"
        value={getValue("password")}
        onChange={handleInputChange}
      />
      <br />


    </div>
  )
}

export default MultiFieldForm