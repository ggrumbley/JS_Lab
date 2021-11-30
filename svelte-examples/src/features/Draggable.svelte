<script>
  export let left = 30;
  export let top = 30;
  export let moving = false;

  $: console.log('moving:', moving);
  $: console.log('top:', top);
  $: console.log('left:', left);

  const startMoving = () => {
    moving = true;
  };

  const stopMoving = () => {
    moving = false;
  };

  const move = (e) => {
    if (!moving) return;

    left += e.movementX;
    top += e.movementY;
  };
</script>

<svelte:window on:mouseup={stopMoving} />

<section
  on:mousedown={startMoving}
  on:mousemove={move}
  class="draggable"
  style="left: {left}px; top: {top}px;"
>
  <slot />
</section>

<style>
  .draggable {
    user-select: none;
    position: absolute;
    border: solid 1px gray;
    cursor: move;
  }
</style>
