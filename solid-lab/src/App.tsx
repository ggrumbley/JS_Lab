import type { Component } from 'solid-js';

import { Bookshelf } from './features/Bookshelf';
import { Counter } from './features/Counter';

export const App: Component = () => (
  <>
    <Bookshelf name="Gary" />
    <Counter />
  </>
);
