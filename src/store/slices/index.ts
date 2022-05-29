import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from 'src/store/slices/auth.slice';
import { commonReducer } from 'src/store/slices/common.slice';

export const rootReducer = combineReducers({
  commonReducer,
  authReducer,
});
