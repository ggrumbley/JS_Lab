import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { PostAuthor, TimeAgo, ReactionButtons, useGetPostsQuery } from '.';
import { Spinner } from '../../components/Spinner';

let PostExcerpt = ({ post }) => {
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
  const { data: posts = [], isLoading, isSuccess, isError, isFetching, error } = useGetPostsQuery();

  const sortedPosts = React.useMemo(() => {
    return posts.slice().sort((a, b) => b.date.localeCompare(a.date));
  }, [posts]);

  let content;

  if (isLoading) {
    content = <Spinner text="Loading..." />;
  }

  if (isError) {
    content = <div>{error.toString()}</div>;
  }

  if (isSuccess) {
    content = (
      <div className={classnames('posts-container', { disabled: isFetching })}>
        {sortedPosts.map((post) => (
          <PostExcerpt key={post.id} post={post} />
        ))}
      </div>
    );
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};
