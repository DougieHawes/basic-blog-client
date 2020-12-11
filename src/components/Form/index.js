import React, { useState } from "react";

import FileBase from "react-file-base64";

import { useDispatch } from "react-redux";

import { createPost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          placeholder="enter name..."
        />
        <input
          className="input"
          type="text"
          name="title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          placeholder="enter post title..."
        />
        <textarea
          className="input text-area"
          type="text"
          name="message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          placeholder="enter message..."
        />
        <input
          className="input"
          type="text"
          name="tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          placeholder="enter tags separted by a comma..."
        />
        <FileBase
          className="input"
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
        <button className="clear-button" onClick={clear}>
          clear
        </button>
      </form>
    </div>
  );
};

export default Form;
