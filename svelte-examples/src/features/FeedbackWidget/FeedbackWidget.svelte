<script>
  import FeedbackForm from './components/FeedbackForm.svelte';
  import FeedbackList from './components/FeedbackList.svelte';
  import FeedbackStats from './components/FeedbackStats.svelte';
</script>

<main>
  <div class="container">
    <FeedbackForm />
    <FeedbackStats />
    <FeedbackList />
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  main {
    font-family: 'Poppins', sans-serif;
    background-color: #202142;
    line-height: 1.6;
    color: #fff;
    padding: 20px;
  }

  .container {
    max-width: 768px;
    margin: 100px auto;
    padding: 0 20px;
  }
</style>
