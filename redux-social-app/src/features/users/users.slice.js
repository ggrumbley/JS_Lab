import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';

import { apiSlice } from '../../app/api.slice';

const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      transformResponse: (responseData) => {
        return usersAdapter.setAll(initialState, responseData);
      },
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;

export const selectUsersResult = apiSlice.endpoints.getUsers.select();

const selectUsersData = createSelector(selectUsersResult, (usersResult) => usersResult.data);

export const { selectAll: selectAllUsers, selectById: selectUserById } = usersAdapter.getSelectors(
  (state) => selectUsersData(state) ?? initialState,
);
