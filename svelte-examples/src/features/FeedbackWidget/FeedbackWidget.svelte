<script>
  import FeedbackForm from './components/FeedbackForm.svelte';
  import FeedbackList from './components/FeedbackList.svelte';
  import FeedbackStats from './components/FeedbackStats.svelte';

  let feedback = [
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 2,
      rating: 9,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 3,
      rating: 8,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
  ];

  const handleDelete = (e) => {
    const itemId = e.detail;
    feedback = feedback.filter((item) => item.id !== itemId);
  };

  const handleAddFeedback = (e) => {
    const feedbackItem = e.detail;
    feedback = [feedbackItem, ...feedback];
  };

  $: count = feedback.length;
  $: average = feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length;
</script>

<main>
  <div class="container">
    <FeedbackForm on:add-feedback={handleAddFeedback} />
    <FeedbackStats {count} {average} />
    <FeedbackList {feedback} on:delete-feedback={handleDelete} />
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
    /* height: 800px; */
  }

  .container {
    max-width: 768px;
    margin: 100px auto;
    padding: 0 20px;
  }
</style>
