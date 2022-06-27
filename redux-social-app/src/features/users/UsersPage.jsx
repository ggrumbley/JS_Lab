import React from 'react';
import { createSelector } from '@reduxjs/toolkit';

import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { selectUserById } from '.';
import { useGetPostsQuery } from '../posts';

export const UsersPage = () => {
  const { userId } = useParams();

  const user = useSelector((state) => selectUserById(state, userId));

  const selectPostsForUser = React.useMemo(
    () =>
      createSelector(
        (res) => res.data,
        (res, userId) => userId,
        (data, userId) => data?.filter((post) => post.user === userId) ?? [],
      ),
    [],
  );

  const { postsForUser } = useGetPostsQuery(undefined, {
    selectFromResult: (result) => ({
      // We can optionally include the other metadata fields from the result here
      ...result,
      // Include a field called `postsForUser` in the hook result object,
      // which will be a filtered list of posts
      postsForUser: selectPostsForUser(result, userId),
    }),
  });

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user.name}</h2>
      <ul>{postTitles}</ul>
    </section>
  );
};
