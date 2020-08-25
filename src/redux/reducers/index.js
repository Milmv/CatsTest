import { combineReducers } from 'redux';

import title from './title';
import cats from './cats';

const rootReducer = combineReducers({
  title,
  cats,
});

export default rootReducer;