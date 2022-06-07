import { Component, createSignal, createEffect } from 'solid-js';

const [count, setCount] = createSignal(0);

createEffect(() => {
  console.log(`⚡ ${count()} ⚡`);
});

const increment = () => {
  setCount((draft) => draft + 1);
};

export const Counter: Component = () => (
  <div>
    <div>Current count: {count()}</div>

    <button onClick={increment}>Increment</button>
  </div>
);
