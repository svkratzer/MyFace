import { RECEIVE_USERS, CLEAR_USERS } from '../actions/user_api_actions'
import { merge } from 'lodash';

const _defaultResults = {};

const searchResultsReducer = (state = _defaultResults, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case CLEAR_USERS:
      return {};
    default:
      return state;
  }
};

export default searchResultsReducer;