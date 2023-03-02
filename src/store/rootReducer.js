import { combineReducers } from '@reduxjs/toolkit';
import courseSliceReducer from './courses/index';
import authorsSliceReducer from './authors/index';
import userSliceReducer from './user/index';

export default combineReducers({
  course: courseSliceReducer,
  author: authorsSliceReducer,
  user: userSliceReducer,
});
