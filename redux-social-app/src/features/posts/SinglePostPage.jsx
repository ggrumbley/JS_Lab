import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Spinner } from '../../components/Spinner';
import { PostAuthor, TimeAgo, ReactionButtons, useGetPostQuery } from '.';

export const SinglePostPage = () => {
  const { postId } = useParams();
  const { data: post, isFetching, isSuccess } = useGetPostQuery(postId);

  return (
    <section>
      {isFetching ? (
        <Spinner text="Loading..." />
      ) : isSuccess ? (
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
      ) : (
        <h2>Post not found!</h2>
      )}
    </section>
  );
};
