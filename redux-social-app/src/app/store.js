import { configureStore } from '@reduxjs/toolkit';

import { notificationsReducer } from '../features/notifications';
import { apiSlice } from './api.slice';

export default configureStore({
  reducer: {
    notifications: notificationsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
