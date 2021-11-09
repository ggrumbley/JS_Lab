import * as React from 'react';
import classnames from 'classnames';

import { useTodoMVC, ACTIONS, FILTERS } from '../TodoMVC.state';
import { selectNotCompleted, selectCompleted } from '../TodoMVC.hooks';
import classNames from 'classnames';

const FILTER_TITLES = [
  { key: FILTERS.SHOW_ALL, value: 'All' },
  { key: FILTERS.SHOW_ACTIVE, value: 'Active' },
  { key: FILTERS.SHOW_COMPLETED, value: 'Completed' },
];

export const Footer: React.FC = () => {
  const {
    state: { todos, filterState },
    dispatch,
  } = useTodoMVC();
  const completedCount = selectCompleted(todos).length;
  const itemsLeft = selectNotCompleted(todos).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong>
        <span>&nbsp;{itemsLeft === 1 ? 'item' : 'items'}&nbsp;left</span>
      </span>
      <ul className="filters">
        {FILTER_TITLES.map((title) => (
          <li key={title.key}>
            <a
              href="./#"
              className={classnames({ selected: title.key === filterState })}
              onClick={() => dispatch({ type: ACTIONS.SET_VISIBILITY_FILTER, filter: title.key })}
            >
              {title.value}
            </a>
          </li>
        ))}
      </ul>
      {!!completedCount && (
        <button
          className="clear-completed"
          onClick={() => dispatch({ type: ACTIONS.CLEAR_COMPLETED })}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};
