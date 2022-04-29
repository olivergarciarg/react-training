import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth.js';
import counterSlice from './counter.js'

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authReducer
  }
});

export default store;