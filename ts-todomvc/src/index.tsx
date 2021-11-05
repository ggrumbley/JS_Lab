import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CounterProvider } from './features/Counter/Counter.state';
import { TodoMVCProvider } from './features/TodoMVC/TodoMVC.state';
import App from './App/App';

ReactDOM.render(
  <React.StrictMode>
    <CounterProvider>
      <TodoMVCProvider>
        <App />
      </TodoMVCProvider>
    </CounterProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
