import axios from 'axios'
import React from 'react'
const BASE_URL = "https://api.smartlearningdestination.com"

const AxiosApis = () => {
  const URL = `${BASE_URL}/institute/v1/all-institutes`
  const dataToSend = {
    "limit": "5",
    "query": "",
    "params": [
        "name",
        "specialization"
    ],
    "page": "1",
    "filterBy": [
        {
            "fieldName": "name",
            "value": []
        }
    ],
    "orderBy": "name",
    "orderByValue": 1,
    "isPaginationRequired": false
}
  const fetchData = ()=>{
    axios.post()
    // axios.post(URL, dataToSend )
  }
  return (
    <div>AxiosApis</div>
  )
}
  
export default AxiosApis