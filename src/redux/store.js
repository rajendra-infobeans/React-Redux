import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import dashboardReducer from './Dashboard';
import usersReducers from './Users';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dashboard: dashboardReducer,
    users: usersReducers,
  },
})