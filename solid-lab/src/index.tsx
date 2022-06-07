/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import { App } from './App';

const root: HTMLElement | null = document.getElementById('root');

if (root) {
  render(() => <App />, root);
}
