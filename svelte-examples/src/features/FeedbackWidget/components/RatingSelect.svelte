<script>
  import { createEventDispatcher } from 'svelte';

  export let scale = 10;
  let selected = 10;

  const ratingScale = [...Array(scale)].map((_, i) => i + 1);

  const dispatch = createEventDispatcher();

  const onChange = (e) => {
    selected = e.currentTarget.value;
    dispatch('rating-select', selected);
  };
</script>

<ul class="rating">
  {#each ratingScale as ratingNum}
    <li>
      <input
        type="radio"
        id={`radio${ratingNum}`}
        name="rating"
        value={ratingNum}
        on:change={onChange}
        checked={selected === ratingNum}
      />
      <label for={`radio${ratingNum}`}>{ratingNum}</label>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
  }

  .rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
  }

  .rating li {
    position: relative;
    background: #f4f4f4;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    border: 1px #eee solid;
    transition: 0.3s;
  }

  .rating li label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rating li:hover {
    background: #ff6a95;
    color: #fff;
  }

  /* Make actual radio select invisible */
  [type='radio'] {
    opacity: 0;
  }

  /* Use the sibling select */
  [type='radio']:checked ~ label {
    background: #ff6a95;
    color: #fff;
  }
</style>
