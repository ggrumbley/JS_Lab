import * as React from 'react';
import logo from '../assets/logo.svg';
import { Counter } from '../features/Counter';
import { Pokemon } from '../features/Pokemon';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vite TypeScript React Redux Tailwind Boilerplate</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Pokemon />
      </header>
    </div>
  );
}

export default App;
