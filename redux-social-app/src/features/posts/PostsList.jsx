import React from 'react';
import { Link } from 'react-router-dom';

import { PostAuthor, TimeAgo, ReactionButtons } from '.';
import { Spinner } from '../../components/Spinner';
import { useGetPostsQuery } from '../api';

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
  const { data, isLoading, isSuccess, isError, error } = useGetPostsQuery();

  const sortedPosts = React.useMemo(() => {
    const posts = data?.posts ?? [];

    return posts.slice().sort((a, b) => b.date.localeCompare(a.date));
  }, [data]);

  let content;

  if (isLoading) {
    content = <Spinner text="Loading..." />;
  }

  if (isError) {
    content = <div>{error.toString()}</div>;
  }

  if (isSuccess) {
    content = sortedPosts.map((post) => <PostExcerpt key={post.id} post={post} />);
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};
