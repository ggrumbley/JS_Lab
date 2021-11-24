<script lang="ts">
  import type { Bird } from './game';
  export let bird: Bird;
</script>

<section
  style="width: {bird.size}px; height: {bird.size}px; top: {bird.top}px; left: {bird.left}px;"
  id="bird"
/>

<style>
  #bird {
    border: solid black 1px;
    background-color: yellow;
    position: absolute;
  }
</style>
