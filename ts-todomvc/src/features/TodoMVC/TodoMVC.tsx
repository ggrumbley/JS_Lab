import * as React from 'react';

import { useTodoMVC } from './TodoMVC.state';
import { Header } from './components/Header';
import { Copyright } from './components/Copyright';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';

import './TodoMVC.css';

// TODO: Add useLocalStorage hook and useEffect for persistance

export const TodoMVC = () => {
  const {
    state: { todos },
    dispatch,
  } = useTodoMVC();
  return (
    <>
      <section className="todoapp">
        <Header />
        {!!todos.length && (
          <>
            <TodoList />
            <Footer />
          </>
        )}
      </section>
      <Copyright />
    </>
  );
};
