import "./style.min.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import PostList from "./components/PostList";
import Post from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <div className="app">DougsDevBlog</div>
      <Switch>
        <Route exact path="/posts" component={PostList} />
        <Route exact path="/posts/:id" component={Post} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
