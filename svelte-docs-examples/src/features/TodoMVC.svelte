<script>
  import './TodoMVC.css';

  let todos = [
    { done: false, text: 'finish Svelte tutorial' },
    { done: true, text: 'build an app' },
    { done: false, text: 'world domination' }
  ];

  const addTodo = () => {
    todos = todos.concat({ done: false, text: ''})
  }

  const clearTodos = () => {
    todos = todos.filter(todo => !todo.done)
  }

  $: remaining = todos.filter(todo => !todo.done).length
  $: completedCount = todos.filter(todo => todo.done).length

</script>
<section>
  <div class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input type="text" class="new-todo" placeholder="What needs to be done?">
    </header>
    <section class="main">
      <input type="checkbox" id="toggle-all" class="toggle-all">
      <label for="toggle-all"></label>
      <ul class="todo-list">
        {#each todos as todo}
          <li class:completed={todo.done}>
            <div class="view" >
              <input type="checkbox" class="toggle" bind:checked={todo.done} />
              <label>{todo.text}</label>
              <button class="destroy"></button>
            </div>
          </li>
        {/each}
      </ul>
    </section>
    <footer class="footer">
    <span class="todo-count">
      <strong>{remaining}</strong>
      <span>&nbsp;{remaining === 1 ? 'item' : 'items'}&nbsp;left</span>
    </span>
    <ul class="filters">
      <li><a href="./#"></a></li>
    </ul>
    {#if !!completedCount}
      <button class="clear-completed" on:click={clearTodos}>Clear completed</button>
    {/if}
    </footer>
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

