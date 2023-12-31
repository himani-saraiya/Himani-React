import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";

const Posts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

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
    <div>
      {posts.map((post) => {
        return (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
