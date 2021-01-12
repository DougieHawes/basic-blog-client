import { Component } from "react";

import { Link } from "react-router-dom";

class PostListItem extends Component {
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
    const { post } = this.props;

    return (
      <Link to={`/posts/${post._id}`}>
        <h1>{post.title}</h1>
        <p>{this.renderDate(post.createdAt)}</p>
        <p>{this.renderTags(post.tags)}</p>
        <p>{post.html}</p>
      </Link>
    );
  }
}

export default PostListItem;
