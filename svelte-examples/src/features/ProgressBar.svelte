<script>
  // From SvelteDocs#Motion
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });

  const steps = [0, 0.25, 0.5, 0.75, 1];
</script>

<progress value={$progress} />

{#each steps as step}
  <button on:click={() => progress.set(step)}>
    {step * 100}%
  </button>
{/each}

<style>
  progress {
    display: block;
    width: 100%;
  }
</style>
