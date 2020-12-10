import React from "react";

import { useSelector } from "react-redux";

import Post from "./Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <div className="posts">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
