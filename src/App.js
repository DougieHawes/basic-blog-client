import "./style.min.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import PostList from "./components/PostList";

function App() {
  return (
    <BrowserRouter>
      <div className="app">DougsDevBlog</div>
      <Switch>
        <Route exact path="/posts" component={PostList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
