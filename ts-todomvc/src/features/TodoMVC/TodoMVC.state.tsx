import * as React from 'react';
import produce from 'immer';
import { nanoid } from 'nanoid';

// * Purposely demonstrating string enum here
export enum ACTIONS {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  EDIT_TODO = 'EDIT_TODO',
  COMPLETE_TODO = 'COMPLETE_TODO',
  COMPLETE_ALL_TODOS = 'COMPLETE_ALL_TODOS',
  CLEAR_COMPLETED = 'CLEAR_COMPLETED',
  SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER',
}

// * Purposely demonstrating const emum here
export const FILTERS = {
  SHOW_ALL: 'show_all',
  SHOW_COMPLETED: 'show_completed',
  SHOW_ACTIVE: 'show_active',
};

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface StoreState {
  todos: Todo[];
  filterState: string;
}

export const INITIAL_STATE = {
  todos: [
    { id: '0', text: 'Buy milk', completed: true },
    { id: '1', text: 'Eat tacos', completed: false },
    { id: '2', text: 'Brew tea', completed: false },
  ],
  filterState: FILTERS.SHOW_ALL,
};

export const storeReducer = produce((draft, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      draft.todos.push({
        id: nanoid(),
        text: action.text,
        completed: false,
      });
      break;
    case ACTIONS.DELETE_TODO:
      draft.todos.filter((todo) => todo.id !== action.payload);
      break;
    case ACTIONS.EDIT_TODO:
      draft.todos.map((todo) => (todo.id === action.id ? { ...todo, text: action.text } : todo));
      break;
    case ACTIONS.COMPLETE_TODO:
      draft.todos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );
      break;
    case ACTIONS.COMPLETE_ALL_TODOS:
      const areAllMarked = draft.todos.every((todo) => todo.completed);
      draft.todos.map((todo) => ({ ...todo, completed: !areAllMarked }));
      break;
    case ACTIONS.CLEAR_COMPLETED:
      const unCompletedTodos = draft.todos.filter((todo) => todo.completed === false);
      draft.todos = unCompletedTodos;
      break;
    case ACTIONS.SET_VISIBILITY_FILTER:
      draft.filterState = action.payload;
      break;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}, INITIAL_STATE);

/*
  Setup Store Provider
  Setup useStore Context
  Export Both
*/
type ContextType = {
  state: StoreState;
  dispatch?: any;
};

const StoreContext = React.createContext<ContextType>({ state: { ...INITIAL_STATE } });

export const TodoMVCProvider: React.FC = ({ children }) => {
  // Get state and dispatch from Reacts new API useReducer.
  const [state, dispatch] = React.useReducer(storeReducer, INITIAL_STATE);

  const storeValue = React.useMemo(() => {
    // Debug Logging
    console.info('STATE =>', state);
    console.info('DISPATCH =>', dispatch);

    return { state, dispatch };
  }, [state, dispatch]);

  // Render state, dispatch and special case actions
  return <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>;
};

export const useTodoMVC = () => React.useContext(StoreContext);
