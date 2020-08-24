import { merge } from 'lodash';
import { LOGOUT_CURRENT_USER } from '../actions/session_api_actions';
import { 
  RECEIVE_NEWSFEED_POSTS, 
  RECEIVE_WALL_POSTS, 
  RECEIVE_POST, 
  REMOVE_POST, 
  REMOVE_POSTS } from '../actions/post_api_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_WALL_POSTS:
      return merge({}, state, action.posts);
    case RECEIVE_NEWSFEED_POSTS:
      return merge({}, state, action.posts);
    case RECEIVE_POST:
      return merge({}, state, { [action.post.id]: action.post });
    case REMOVE_POST:
      let newState = merge({}, state);
      delete newState[action.postId]
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    case REMOVE_POSTS: 
      return {};
    default:
      return state;
  }
};

export default postsReducer;