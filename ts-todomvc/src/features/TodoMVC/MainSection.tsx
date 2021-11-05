import * as React from 'react';
import { useTodoMVC } from './TodoMVC.state';
export const MainSection: React.FC = () => {
  const {
    state: { todos },
  } = useTodoMVC();

  return <section className="main">{JSON.stringify(todos)}</section>;
};
