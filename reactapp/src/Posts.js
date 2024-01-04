import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";

const Posts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const post=posts.posts

  useEffect(() => {
    fetchUserPosts(userId);
  });

  const fetchUserPosts = () => {
    const URL = `https://dummyjson.com/posts`;
    axios
      .get(URL)
      .then((res) => {
        setPosts(res.data);
        console.log(posts)
      })
      .catch((err) => {
        console.log(err)
      });
  };
  console.log(posts);

  return (
    <div className="main">
      <div>
      </div>
      {post?.map((post) => {
        return (
          <div className="card">
            <h2>{post.id}</h2>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
