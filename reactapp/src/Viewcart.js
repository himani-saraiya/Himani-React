import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Viewcart = () => {
  const [view, setView] = useState([]);
  const views = view.users;
  useEffect(() => {
    handleView();
  });

  const handleView = () => {
    const URL = `https://dummyjson.com/users`;
    axios
      .get(URL)
      .then((res) => {
        setView(res.data);
        console.log(view);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(view);
  return (
    <div>
      <h1>Users</h1>
      <div>
        <button className="btn btn-primary">
          <Link style={{ color: "white" }} to={`/`}>
            Go to main page
          </Link>
        </button>
      </div>
      <div className="main">
        {views?.map((el) => {
          return [
            <div className="card">
              <p>
                firstName:{el.firstName}
                <br />
                lastName:{el.lastName}
                <br />
                username:{el.username}
                <br />
                password:{el.password}
                <br />
                email:{el.email}
                <br />
              </p>
            </div>,
          ];
        })}

        <button onClick={handleView}></button>
      </div>
    </div>
  );
};

export default Viewcart;
