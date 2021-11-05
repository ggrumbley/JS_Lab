import * as React from 'react';
import { useTaskBoard, ACTIONS, Task } from './TaskBoard.state';

interface Props {
  task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  return <div>{task.text}</div>;
};

export const TaskList: React.FC = () => {
  const {
    state: { tasks },
  } = useTaskBoard();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
};
