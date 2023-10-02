import React from 'react'

const students = [
  { name: "Ayush", currentRole: "Student" },
  { name: "Deepak", currentRole: "Student" },
  { name: "Gourav", currentRole: "Student" },
  { name: "Himani", currentRole: "Working Professional" },
  { name: "Parinita", currentRole: "Student" },
]


const listElems = students.map((el, ind) => {
  return <div key={ind}>{el.name}</div>
})

console.log(listElems)

const ListComp = () => {
  return (
    <div>
        {listElems}
    </div>
  )
}

export default ListComp