import _ from "lodash";

import {
  FETCH_POSTS,
  CREATE_POST,
  FETCH_POST,
  DELETE_POST
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case DELETE_POST:
      // look at the state object for the same key from the action.payload and delete that match
      // and return a new object w/o that property
      return _.omit(state, action.payload);
    case FETCH_POST:
      // const post = action.payload;
      // const newState =  { ...state, };
      // newState[post.id] = post;
      // return newState;

      return { ...state, [action.payload.id]: action.payload };
    case FETCH_POSTS:
      return _.mapKeys(action.payload, "id");
    default:
      return state;
  }
};
