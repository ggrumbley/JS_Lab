import * as React from 'react';
import { ACTIONS, Todo, useTodoMVC } from '../TodoMVC.state';
import { selectVisible } from '../TodoMVC.hooks';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = () => {
  const {
    state: { todos, filterState },
    dispatch,
  } = useTodoMVC();

  const visibleTodos = selectVisible(todos, filterState);
  const areAllCompleted = todos.length && todos.every((todo) => todo.completed);
  const removeTodo = (id: string) => dispatch({ type: ACTIONS.DELETE_TODO, id });
  const updateTodo = (todo: Todo) => dispatch({ type: ACTIONS.EDIT_TODO, payload: todo });

  return (
    <section className="main">
      <input
        type="checkbox"
        id="toggle-all"
        className="toggle-all"
        checked={areAllCompleted || false}
        readOnly
      />
      <label htmlFor="toggle-all" onClick={() => dispatch({ type: ACTIONS.COMPLETE_ALL_TODOS })} />
      <ul className="todo-list">
        {visibleTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onUpdate={updateTodo} onRemove={removeTodo} />
        ))}
      </ul>
    </section>
  );
};
