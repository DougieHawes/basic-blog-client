import React from "react";

const Post = ({
  key,
  title,
  creator,
  message,
  createdAt,
  tags,
  likes,
  image,
}) => {
  const tagArray = tags.length ? tags : "";

  console.log(tagArray);

  return (
    <div className="post" key={key}>
      <div className="post-image-container">
        <img className="post-image" src={image} alt="" />
      </div>
      <div className="post-text-container">
        <h3>{title}</h3>
        <h4>by {creator}</h4>
        <p>{message}</p>
        <p>shared {createdAt}</p>
      </div>
      <div className="post-details-container">
        <div>{tagArray}</div>
        <div>{likes}</div>
      </div>
    </div>
  );
};

export default Post;
