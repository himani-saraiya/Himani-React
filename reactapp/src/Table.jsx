

import React from 'react'

const Table = ({headings, data}) => {
  return (
    <div>

      <table border={"1"} width="100%">
        <thead>
          <tr>
            {headings.map(headObj=><th>{headObj.title}</th>)}
          </tr>

        </thead>
        <tbody>
          {data.map(rowData=>{
            return (<tr>
              {headings.map(tableData=>{
                return <td>{rowData[tableData.key]}</td>
              })}
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table


// headings => [{title:"Name", key:"name"}, {title:"User Name", key:"username"}]
//data =[]
