import { Component } from "react";

import axios from "axios";

import PostListItem from "./PostListItem";

class PostList extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.getPosts();
  }

  async getPosts() {
    const res = await axios.get("http://localhost:8000/posts");

    this.setState({ posts: res.data });
  }

  renderDate(dateString) {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const monthNames = [
      "January",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(dateString);

    return `${dayNames[date.getDay()]} ${
      monthNames[date.getMonth()]
    } ${date.getDate()} ${date.getFullYear()}`;
  }

  renderTags(tags) {
    return tags.map((tag) => {
      return <span key={tag}>{tag}, </span>;
    });
  }

  renderList() {
    return this.state.posts.map((post) => {
      return <PostListItem key={post._id} post={post} />;
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

export default PostList;
