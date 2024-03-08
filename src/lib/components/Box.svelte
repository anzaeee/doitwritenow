<script lang="ts">
  export let author: string;
  export let content: string;
</script>

<div class="review-box rounded-lg w-auto h-auto p-5 m-5 bg-slate-50">
  <div class="flex flex-col flex-grow">
    <div class="author text-xl font-bold text-secondary">{author}</div>
    <div class="content text-md font-semibold text-neutral-700">{content}</div>
  </div>
</div>

<style>
  .review-box {
    border: 1px solid #ccc;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
  }

  .review-box:hover {
    transform: translateY(-3px);
  }

  .author {
    margin-bottom: 5px; /* Add some margin between author and content */
  }
</style>
