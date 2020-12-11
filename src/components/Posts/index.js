import React from "react";

import moment from "moment";

import { useSelector } from "react-redux";

import Post from "./Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  return posts.length ? (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post._id}
          title={post.title}
          creator={post.creator}
          message={post.message}
          createdAt={moment(post.createdAt).fromNow()}
          tags={post.tags}
          image={post.selectedFile}
          likes={post.likeCount}
        />
      ))}
    </div>
  ) : (
    <div>loading</div>
  );
};

export default Posts;
