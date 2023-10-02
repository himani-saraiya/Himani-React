// only numbers are allowed
// only 10 inputs are allowed
// if 10 digits are entered and number is not valid then make it's border color red, 
// green , if numbers are valid


import React, { useEffect, useState } from 'react'

const INDIAN_MOBILE_REGEX = /^[789]\d{9}$/

const getFormattedNum = (number)=>{
    // (987) 123-1234

  if(number.length > 6){
    const firstThree = number.substr(0, 3)
    const secondThree = number.substr(3, 3)
    const remaining = number.substr(6)
    return `(${firstThree}) ${secondThree}-${remaining}`

  }else if(number.length > 3){
    const firstThree = number.substr(0, 3)
    const secondThree = number.substr(3)
    return `(${firstThree}) ${secondThree}`

  }

  return number
  

}

const getNumbersFromFormattedStr = (str)=>{
  str = str.replaceAll(" ", "")
  const splitted = str.split("")
  const filtered = splitted.filter(el=>!isNaN(el))
  const joined = filtered.join("")  
  console.log("splitted : ", splitted, " filtered : ", filtered, " joined : ", joined)
  return joined
}



const MobileInput = () => {
  const [value, setValue] = useState("")
  const [isValid, setIsValid] = useState(false)


  useEffect(() => {
    if (value.length >= 10) {
      if (value.match(INDIAN_MOBILE_REGEX)) {
        setIsValid(true)
      } else {
        setIsValid(false)
      }
    }

  }, [value])





  const handleChange = (e) => {
    // if (!isNaN(e.target.value)) {
      console.log("value : ", e.target.value)
      const num = getNumbersFromFormattedStr(e.target.value)
      const formattedNum = getFormattedNum(num)
      console.log("num : ", num, " formatted num : ", formattedNum)
      setValue(formattedNum)
    // }
  }

  const getClass = ()=>{
    if(value.length >= 10){
      if(isValid) return "valid"

      if(!isValid) return "invalid"
      
      return ""
    }
  }


  return (
    <div>
      <input
        type="text"
        className={getClass()}
        // maxLength={10}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default MobileInput

