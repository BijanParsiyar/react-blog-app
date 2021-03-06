import { combineReducers } from "redux";

import { reducer as formReducer } from "redux-form";
import postsReducer from "./reducer_posts";

export default combineReducers({
  posts: postsReducer,
  form: formReducer
});
