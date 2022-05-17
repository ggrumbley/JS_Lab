<script>
  import Inventory from './features/Inventory/Inventory.svelte';
</script>

<main>
  <div class="app-container">
    <div class="game-screen">Game Screen</div>
    <div class="player-actions">Actions</div>
    <Inventory />
  </div>
</main>

<style>
  :root {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  .app-container {
    display: grid;
    grid-template-areas:
      'GameScreen GameScreen'
      'PlayerActions Inventory';
    grid-template-columns: 600px 600px;
    grid-template-rows: 400px 205px;
    gap: 3vh 1vw;
    justify-content: center;
    background-color: #fff;
    padding-top: 3vh;
  }

  .game-screen {
    grid-area: GameScreen;
    background-color: aqua;
  }

  .player-actions {
    grid-area: PlayerActions;
    background-color: lightsalmon;
  }
</style>
