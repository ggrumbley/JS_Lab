import * as React from 'react';

import { Header } from '../components/Header/Header';
import { Counter } from '../features/Counter/Counter';
import { TodoMVC } from '../features/TodoMVC/TodoMVC';

function App() {
  return (
    <>
      <Header>
        <Counter />
      </Header>
      <TodoMVC />
    </>
  );
}

export default App;
