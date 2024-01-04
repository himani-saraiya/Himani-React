import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Comments = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);

  // const com=comments.comments
  useEffect(() => {
    fetchCommentsByPostId();
  }, []);

  const fetchCommentsByPostId = () => {
    const URL = `https://dummyjson.com/comments/${postId}`;
    axios
      .get(URL)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(comments);

  return (
    <div className="main">
      <div>
        <button className="btn btn-black">
          <Link style={{ color: "white" }} to={`/`}>
            Go to main page
          </Link>
        </button>
      </div>
      <div className="card" key={comments.id}>
        <h1>{comments.body}</h1>
        <h1>{comments.id}</h1>
        <h1>{comments.postId}</h1>
        <h1>{comments.user}</h1>
      </div>
    </div>
  );
};

export default Comments;
