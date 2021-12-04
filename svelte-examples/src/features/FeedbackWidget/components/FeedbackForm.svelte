<script>
  import { nanoid } from 'nanoid';
  import { createEventDispatcher } from 'svelte';

  import RatingSelect from './RatingSelect.svelte';
  import Card from './Card.svelte';
  import Button from './Button.svelte';

  const dispatch = createEventDispatcher();

  let min = 10;
  let rating = 10;
  let text = '';
  let disabled = true;
  let message;

  $: isInvalidLength = text.trim().length <= min;

  const handleInput = () => {
    if (isInvalidLength) {
      message = `Text must be at least ${min} characters`;
      disabled = true;
      return;
    }

    message = null;
    disabled = false;
  };

  const handleSelect = (e) => (rating = e.detail);
  const handleSubmit = () => {
    if (isInvalidLength) return;

    const newFeedback = {
      id: nanoid(),
      text,
      rating: +rating,
    };

    dispatch('add-feedback', newFeedback);
    text = '';
  };
</script>

<Card>
  <header>
    <h2>How would you rate your experience?</h2>
  </header>
  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleSelect} />
    <div class="input-group">
      <input
        type="text"
        on:input={handleInput}
        bind:value={text}
        placeholder="Tell us how we did!"
      />
      <Button type="submit" {disabled}>Submit</Button>
    </div>
    {#if message}
      <div class="message">{message}</div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
    margin-right: 8px;
  }

  input:focus {
    outline: none;
  }

  .message {
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>
