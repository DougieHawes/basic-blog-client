import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";

import "./style.min.css";

import Form from "./components/Form";
import Posts from "./components/Posts";

const App = () => {
  const [showForm, setForm] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="app">
      <h1 className="title">Basic-Blog</h1>
      <button className="form-toggler" onClick={() => setForm(!showForm)}>
        {showForm ? "CLOSE FORM" : "NEW POST"}
      </button>
      <div className="body">
        {showForm && <Form />}
        <Posts />
      </div>
    </div>
  );
};

export default App;
