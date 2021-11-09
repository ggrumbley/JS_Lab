import * as React from 'react';

import { useTodoMVC, ACTIONS } from '../TodoMVC.state';

const ENTER_KEY = 'Enter';

export const Header: React.FC = () => {
  const { dispatch } = useTodoMVC();
  const [text, setText] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== ENTER_KEY) return;

    dispatch({
      type: ACTIONS.ADD_TODO,
      text,
    });
    setText('');
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onInput={handleChange}
        onKeyUp={handleSubmit}
      />
    </header>
  );
};
