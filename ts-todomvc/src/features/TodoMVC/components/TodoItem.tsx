import * as React from 'react';
import classnames from 'classnames';

import { ACTIONS, Todo } from '../TodoMVC.state';

interface Props {
  todo: Todo;
  onUpdate?: (arg0: Todo) => {};
  onRemove?: (arg0: string) => {};
}

export const TodoItem: React.FC<Props> = ({ todo, onUpdate = () => {}, onRemove = () => {} }) => {
  const { id, completed, text: todoText } = todo;
  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState(todoText);

  const handleToggle = () => {
    console.log('TOGGLE');
    console.log(completed);
    onUpdate({ id, completed: !completed, text: todoText });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    onUpdate({ id, text, completed });
    setEditing(false);
  };

  return (
    <li className={classnames({ completed, editing })}>
      <div className="view">
        <input type="checkbox" className="toggle" checked={completed} onChange={handleToggle} />
        <label onDoubleClick={() => setEditing(true)}>{todoText}</label>
        <button className="destroy" onClick={() => onRemove(id)} />
      </div>
      {editing && (
        <input
          type="text"
          className="edit"
          value={text}
          onInput={handleChange}
          onBlur={handleBlur}
        />
      )}
    </li>
  );
};
