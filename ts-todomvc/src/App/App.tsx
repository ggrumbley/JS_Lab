import * as React from 'react';

import logo from '../assets/logo.svg';
import './App.css';
import { Counter } from '../features/Counter/Counter';
import { TodoMVC } from '../features/TodoMVC/TodoMVC';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
      <TodoMVC />
    </div>
  );
}

export default App;
