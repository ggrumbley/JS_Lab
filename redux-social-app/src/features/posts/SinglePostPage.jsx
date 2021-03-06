import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { PostAuthor, TimeAgo, ReactionButtons, selectPostById } from '.';

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;
  const post = useSelector((state) => selectPostById(state, postId));

  return (
    <section>
      {!post ? (
        <h2>Post not found!</h2>
      ) : (
        <article className="post">
          <h2>{post.title}</h2>
          <div>
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date} />
          </div>
          <p className="post-content">{post.content}</p>
          <ReactionButtons post={post} />
          <Link to={`/editPost/${post.id}`} className="button muted-button">
            Edit Post
          </Link>
        </article>
      )}
    </section>
  );
};
