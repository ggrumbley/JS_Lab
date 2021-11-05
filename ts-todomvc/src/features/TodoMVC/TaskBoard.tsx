import * as React from 'react';
import { TaskInput } from './TaskInput';
import { TaskList } from './TaskList';

export const TaskBoard = () => (
  <>
    <TaskInput />
    <TaskList />
  </>
);
