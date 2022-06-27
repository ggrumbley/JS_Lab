import React from 'react';
import { useAddReactionMutation } from '.';

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
  poop: '💩',
};

export const ReactionButtons = ({ post }) => {
  const [addReaction] = useAddReactionMutation();

  const reactionButtons = Object.entries(reactionEmoji).map(([reaction, emoji]) => (
    <button
      key={reaction}
      type="button"
      className="muted-button reaction-button"
      onClick={() => addReaction({ postId: post.id, reaction })}
    >
      {emoji} {post.reactions[reaction]}
    </button>
  ));

  return <div>{reactionButtons}</div>;
};
