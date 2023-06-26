import { combineReducers } from '@reduxjs/toolkit';
import errandsReduce from './modules/errandsSlice';
import userReducer from './modules/userSlice';

export const combinedReducers = combineReducers({
  errands: errandsReduce,
  user: userReducer
});
