import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom'
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsersData();
  }, []);

  const fetchUsersData = () => {
    const URL = `https://jsonplaceholder.typicode.com/users/`;
    axios
      .get(URL)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {});
  };
  console.log(users);

  return (
    <div className="main">
      <div className="card" key={users.id}>
        <h1>Users</h1>
        {users.map((user) => {
          return (
            <div>
              {user.id}
              <br />
              {user.name}
              <br />
              {user.email}
              {/* <Link to={`user/${user.id}/posts`}></Link> */}
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
