import { FILTERS, Todo } from './TodoMVC.state';

export const selectCompleted = (todos: Todo[]): Todo[] => todos.filter((todo) => todo.completed);

export const selectNotCompleted = (todos: Todo[]): Todo[] =>
  todos.filter((todo) => !todo.completed);

export const selectVisible = (todos: Todo[], filter: string): Todo[] => {
  switch (filter) {
    case FILTERS.SHOW_ALL:
      return [...todos];
    case FILTERS.SHOW_COMPLETED:
      return selectCompleted(todos);
    case FILTERS.SHOW_ACTIVE:
      return selectNotCompleted(todos);
    default:
      return [...todos];
  }
};
