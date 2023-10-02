import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetchUsersData()
  }, [])

  const fetchUsersData = ()=>{
    const URL = `https://jsonplaceholder.typicode.com/users/`
    axios.get(URL).then(res=>{
      setUsers(res.data)
    }).catch(err=>{

    })
  }

  return (
    <div>
      <h1>Users</h1>
      {users.map(user=>{
        return <div>
          {user.name}
          {user.email}
          <Link to={`user/${user.id}/posts`}>Show Posts</Link>
<hr/>
        </div>
      })}
    </div>
  )
}

export default Users