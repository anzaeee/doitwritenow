<!-- Review.svelte -->
<script>
  export let author;
  export let content;
</script>

<div class="review-box">
  <div class="author">{author}</div>
  <div class="content">{content}</div>
</div>

<style>
  .review-box {
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
  }

  .review-box:hover {
    transform: translateY(-3px);
  }

  .author {
    font-weight: bold;
  }
</style>
