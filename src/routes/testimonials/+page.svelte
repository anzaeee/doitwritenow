<script>
  import Review from './Review.svelte';
</script>

<div class="flex flex-col justify-center items-center space-y-20">
  <div class="flex flex-col justify-center items-center gap-10 mt-20">
    <div class="text-4xl text-primary font-bold fade-in">Learn what our clients are saying about us</div>
  </div>

  <div class="grid grid-cols-3 gap-4">
    {#each reviews as review}
      <Review author={review.author} content={review.content} />
    {/each}
  </div>
</div>

<style>
  .grid {
    width: 100%;
  }
</style>

<script>
  let reviews = [
    { author: 'John Doe', content: 'Review 1' },
    { author: 'Jane Doe', content: 'Review 2' },
    { author: 'Alice Smith', content: 'Review 3' },
    { author: 'Bob Johnson', content: 'Review 4' },
    { author: 'Eve White', content: 'Review 5' },
    { author: 'Sam Brown', content: 'Review 6' },
    { author: 'Emily Green', content: 'Review 7' },
    { author: 'Michael Davis', content: 'Review 8' },
    { author: 'Sarah Wilson', content: 'Review 9' }
  ];
</script>
