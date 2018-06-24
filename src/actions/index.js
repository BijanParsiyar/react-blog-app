import axios from "axios";

import { FETCH_POSTS, FETCH_POST, CREATE_POST, DELETE_POST } from "./types";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=Hiya324";

export const fetchPosts = () => dispatch => {
  axios.get(`${ROOT_URL}/posts${API_KEY}`).then(res => {
    dispatch({
      type: FETCH_POSTS,
      payload: res.data
    });
  });
};

export const createPost = (values, history) => dispatch => {
  axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(res => {
    dispatch({
      type: CREATE_POST,
      payload: res.data
    });
    history.push("/");
  });
};

export const fetchPost = id => dispatch => {
  axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then(res => {
    dispatch({
      type: FETCH_POST,
      payload: res.data
    });
  });
};

export const deletePost = (id, history) => dispatch => {
  axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(res => {
    dispatch({
      type: DELETE_POST,
      payload: id
    });
    history.push("/");
  });
};
