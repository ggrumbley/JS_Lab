import { configureStore } from '@reduxjs/toolkit';

import { postsReducer } from '../features/posts';
import { usersReducer } from '../features/users';
import { notificationsReducer } from '../features/notifications';
import { apiSlice } from '../features/api';

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
