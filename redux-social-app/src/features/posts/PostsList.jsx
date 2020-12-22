import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { PostAuthor, TimeAgo, ReactionButtons, fetchPosts, selectPostById, selectPostIds } from '.';

const PostExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  );
};

export const PostsList = () => {
  const dispatch = useDispatch();
  const orderedPostIds = useSelector(selectPostIds);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const content = (status) => {
    if (status === 'loading' || status === 'idle') return <div className="loader">Loading...</div>;
    if (status === 'failed') return <div>{error}</div>;

    return orderedPostIds.map((postId) => <PostExcerpt key={postId} postId={postId} />);
  };

  return (
    <section>
      <h2>Posts</h2>
      {content(postStatus)}
    </section>
  );
};
