<script>
  import { nanoid } from 'nanoid';
  import './TodoMVC.css';

  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;
  const TODOS_API = 'https://jsonplaceholder.typicode.com/users/1/todos?_limit=5';

  const STORAGE_KEY = 'SVELTE_TODOS';

  const FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed',
  };

  let todos = [];
  let currentFilter = FILTERS.ALL;
  let editing = null;

  try {
    todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (err) {
    todos = [];
  }

  const updateView = () => {
    console.log(window.location.hash);
    currentFilter = FILTERS.ALL;
    if (window.location.hash === `#/${FILTERS.ACTIVE}`) {
      currentFilter = FILTERS.ACTIVE;
    }

    if (window.location.hash === `#/${FILTERS.COMPLETED}`) {
      currentFilter = FILTERS.COMPLETED;
    }
  };

  window.addEventListener('hashchange', updateView);

  updateView();

  const addTodo = (e) => {
    if (e.which === ENTER_KEY) {
      todos = todos.concat({
        id: nanoid(),
        title: e.target.value,
        completed: false,
      });
      e.target.value = '';
    }
  };

  const handleEdit = (e) => {
    if (e.which === ENTER_KEY) e.target.blur();
    if (e.which === ESCAPE_KEY) editing = null;
  };

  const submitEdit = (e, index) => {
    todos[index].title = e.target.value;
    editing = null;
  };

  const removeTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
  };

  const toggleAll = (e) => {
    todos = todos.map((todo) => ({
      ...todo,
      completed: e.target.checked,
    }));
  };

  const clearCompleted = () => {
    todos = todos.filter((todo) => !todo.completed);
  };

  const fetchTodos = async () => {
    const res = await fetch(TODOS_API);
    const newTodos = await res.json();

    newTodos.forEach(({ title, completed }) => {
      todos = todos.concat({
        id: nanoid(),
        title,
        completed,
      });
    });

    console.log(newTodos);
    console.log(todos);
  };

  $: filtered =
    currentFilter === FILTERS.ALL
      ? todos
      : currentFilter === FILTERS.COMPLETED
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed);

  $: remaining = todos.filter((todo) => !todo.completed).length;

  $: completedCount = todos.filter((todo) => todo.completed).length;

  $: try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (err) {
    console.error(err, 'Whoops!');
  }
</script>

<section>
  <div class="todoapp">
    <header class="header">
      <h1 on:click={fetchTodos}>todos&nbsp;🚀</h1>
      <input
        type="text"
        class="new-todo"
        placeholder="What needs to be done?"
        on:keydown={addTodo}
      />
    </header>

    {#if !!todos.length}
      <section class="main">
        <input
          type="checkbox"
          id="toggle-all"
          class="toggle-all"
          on:change={toggleAll}
          checked={completedCount === todos.length}
        />
        <label for="toggle-all" />
        <ul class="todo-list">
          {#each filtered as todo, index (todo.id)}
            <li class:completed={todo.completed} class:editing={editing === todo.id}>
              <div class="view">
                <input type="checkbox" class="toggle" bind:checked={todo.completed} />
                <label for="edit" on:dblclick={() => (editing = todo.id)}>{todo.title}</label>
                <button class="destroy" on:click={() => removeTodo(todo.id)} />
              </div>
              {#if editing === todo.id}
                <input
                  value={todo.title}
                  id="edit"
                  class="edit"
                  on:keydown={handleEdit}
                  on:blur={(e) => submitEdit(e, index)}
                />
              {/if}
            </li>
          {/each}
        </ul>
      </section>
    {/if}

    {#if !!todos.length}
      <footer class="footer">
        <span class="todo-count">
          <strong>{remaining}</strong>
          <span>&nbsp;{remaining === 1 ? 'item' : 'items'}&nbsp;left</span>
        </span>
        <ul class="filters">
          {#each Object.values(FILTERS) as filter}
            <li>
              <a
                href={`#/${filter === FILTERS.ALL ? '' : filter}`}
                class:selected={currentFilter === filter}>{filter}</a
              >
            </li>
          {/each}
        </ul>
        {#if !!completedCount}
          <button class="clear-completed" on:click={clearCompleted}>Clear completed</button>
        {/if}
      </footer>
    {/if}
  </div>

  <footer class="info">
    <p data-testid="instruction">Double-click to edit a todo</p>
    <p>
      Created by <a href="http://github.com/ggrumbley/">ggrumbley</a>
    </p>
    <p>
      Part of <a href="http://todomvc.com">TodoMVC</a>
    </p>
  </footer>
</section>
