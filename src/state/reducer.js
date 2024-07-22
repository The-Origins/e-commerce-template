import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';
import sessionReducer from './session';
import snackBarReducer from './snackBar';
import currencyReducer from './currency';

const storeReducer = combineReducers({
  user: userReducer,
  session:sessionReducer,
  snackBar: snackBarReducer,
  currency: currencyReducer,
});

export default storeReducer;
