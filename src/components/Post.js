import { Component } from "react";

import axios from "axios";

class Post extends Component {
  state = {
    post: {},
  };

  componentDidMount() {
    this.getPost();
  }

  async getPost() {
    const res = await axios.get(
      `http://localhost:8000/posts/${this.props.match.params.id}`
    );
    this.setState({ post: res.data });
  }

  renderHTML() {
    return { __html: this.state.post.html };
  }

  renderPost() {
    return <div dangerouslySetInnerHTML={this.renderHTML()}></div>;
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

  render() {
    return (
      <div>
        <h3>{this.state.post.title}</h3>
        <p>{this.renderDate(this.state.post.createdAt)}</p>
        <p>{this.state.post.tags && this.renderTags(this.state.post.tags)}</p>
        {this.renderPost()}
      </div>
    );
  }
}

export default Post;
