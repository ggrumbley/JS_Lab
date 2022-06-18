import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Spinner } from '../../components/Spinner';
import { useGetPostQuery } from '../api';

import { PostAuthor, TimeAgo, ReactionButtons } from '.';

export const SinglePostPage = () => {
  const { postId } = useParams();
  const { data, isFetching, isSuccess } = useGetPostQuery(postId);

  return (
    <section>
      {isFetching ? (
        <Spinner text="Loading..." />
      ) : isSuccess ? (
        <article className="post">
          <h2>{data.post.title}</h2>
          <div>
            <PostAuthor userId={data.post.user} />
            <TimeAgo timestamp={data.post.date} />
          </div>
          <p className="post-content">{data.post.content}</p>
          <ReactionButtons post={data.post} />
          <Link to={`/editPost/${data.post.id}`} className="button muted-button">
            Edit Post
          </Link>
        </article>
      ) : (
        <h2>Post not found!</h2>
      )}
    </section>
  );
};
