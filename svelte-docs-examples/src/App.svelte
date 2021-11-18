<script>
  import Counter from './features/Counter.svelte';
  import TodoMVC from './features/TodoMVC.svelte';
  import PhotoAlbum from './features/PhotoAlbum.svelte';
  import ChatBot from './features/ChatBot.svelte';
  import Draggable from './features/Draggable.svelte';
</script>

<main>
  <Counter />
  <TodoMVC />
  <ChatBot />
  <PhotoAlbum />
  <Draggable top={50} left={50}>
    <h1>Drag Me!</h1>
    <h2>💩💩💩</h2>
  </Draggable>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
</style>
