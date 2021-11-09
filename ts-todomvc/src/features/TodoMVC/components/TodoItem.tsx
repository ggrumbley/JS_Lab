import * as React from 'react';
import classnames from 'classnames';

import { Todo } from '../TodoMVC.state';

interface Props {
  todo: Todo;
  onUpdate: () => {};
  onRemove: () => {};
}

export const TodoItem: React.FC<Props> = ({ todo, onUpdate, onRemove }) => {
  const { completed, text: todoText } = todo;
  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState(todoText);

  return (
    <li className={classnames({ completed, editing })}>
      <div className="view">
        <input type="checkbox" className="toggle" checked={completed} />
        <label>{todoText}</label>
        <button className="destroy" />
      </div>
      {editing && <input type="text" className="edit" value={text} />}
    </li>
  );
};
