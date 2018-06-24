import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";
import Spinner from "./spinner/Spinner";

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deletePost(id, this.props.history);
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <Spinner />;
    }

    return (
      <div className="text-center mt-5">
        <div className="mb-3">
          <Link className="btn btn-secondary pull-xs-right" to="/">
            Back To Index
          </Link>

          <button
            className="btn btn-danger d-block"
            onClick={this.onDeleteClick.bind(this)}
          >
            Delete Post
          </button>
        </div>

        <div className="list-group list-group-flush">
          <h3 className="list-group-item">
            <strong>Title:</strong> {post.title}
          </h3>
          <h6 className="list-group-item">
            <strong>Categories:</strong> {post.categories}
          </h6>
          <p className="list-group-item">
            <strong>Content:</strong> {post.content}
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostsShow);
