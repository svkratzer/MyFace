import { combineReducers } from 'redux';
import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer"
import commentsReducer from "./comments_reducer"
import friendsReducer from './friends_reducer'
import reactsReducer from "./reacts_reducer"
import searchResultsReducer from './search_results_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  friends: friendsReducer,
  reacts: reactsReducer,
  search: searchResultsReducer
});

export default entitiesReducer;