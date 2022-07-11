import { delegate, getURLHash, insertHTML, emptyElement } from './helpers.js';
import { TodoStore } from './store.js';

const Todos = new TodoStore('todos-2022');

console.log(Todos);

const App = {
  $: {
    input: document.querySelector('[data-todo="new"]'),
    toggleAll: document.querySelector('[data-todo="toggle-all"]'),
    clear: document.querySelector('[data-todo="clear-completed"]'),
    list: document.querySelector('[data-todo="list"]'),
    count: document.querySelector('[data-todo="count"]'),
    setActiveFilter: (filter) => {
      document
        .querySelectorAll('[data-todo="filters"] a')
        .forEach((el) => el.classList.remove('selected')),
        document
          .querySelector(`[data-todo="filters"] [href="#/${filter}"]`)
          .classList.add('selected');
    },
    showMain: (show) =>
      (document.querySelector('[data-todo="main"]').style.display = show ? 'block' : 'none'),
    showClear: (show) =>
      (document.querySelector('[data-todo="clear-completed"]').style.display = show
        ? 'block'
        : 'none'),
    showFooter: (show) =>
      (document.querySelector('[data-todo="main"]').style.display = show ? 'block' : 'none'),
    displayCount: (count) => {
      emptyElement(App.$.count);
      insertHTML(
        App.$.count,
        `
        <strong>${count}</strong>
        ${count === 1 ? 'item' : 'items'} left
      `,
      );
    },
  },
};
