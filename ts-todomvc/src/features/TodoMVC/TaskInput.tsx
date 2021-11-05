import * as React from 'react';
import { useTaskBoard, ACTIONS } from './TaskBoard.state';

interface Props {
  onAddTask?: string;
}

export const TaskInput: React.FC<Props> = ({ onAddTask = '' }) => {
  const [text, setText] = React.useState('');
  const { dispatch } = useTaskBoard();

  return (
    <>
      <input placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText('');
          dispatch({
            type: ACTIONS.ADD_TASK,
            payload: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
};
