<script>
  import logo from '../assets/svelte.png'

  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<section>
  <img src={logo} alt="Svelte Logo" />

  <div>
    <h1>Counter</h1>

    <button on:click={increment}>
      Clicks: {count}
    </button>
  </div>

</section>


<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }



  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }

  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
