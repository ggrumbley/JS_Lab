<script lang="ts">
  import type { PipePair } from './game';
  export let pipe: PipePair;
</script>

{#if pipe.show}
  <section
    style="left: {pipe.left}px; top: {pipe.topPipe.top}px; width: {pipe.width}px; height: {pipe
      .topPipe.height}px;"
    class="top-pipe pipe"
  />
  <section
    style="left: {pipe.left}px; top: {pipe.bottomPipe.top}px; width: {pipe.width}px; height: {pipe
      .bottomPipe.height}px;"
    class="top-bottom pipe"
  />
{/if}

<style>
  .pipe {
    position: absolute;
    background-color: palegreen;
  }
</style>
