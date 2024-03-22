<script>

  let reviews = [
    {
      author: "Book Writing",
      content:
        "We assist you in crafting narratives across diverse categories like fiction, non-fiction, memoirs, guidebooks, commerce-related, and beyond.",
    },
    {
      author: "Content Writing",
      content:
        "We assist you in crafting SEO-friendly blogs and articles for your website.",
    },
    {
      author: "Speechwriting",
      content:
        "Crafting compelling speeches tailored to your audience and occasion.",
    },
    {
      author: "Scriptwriting",
      content:
        "Creating engaging scripts for various mediums including film, television, and video.",
    },
    {
      author: "Biography Writing",
      content:
        "Bringing your life story to life with our professional biography writing services.",
    },
    {
      author: "Fiction Ghostwriting",
      content:
        "We create captivating fiction stories, novels, and scripts under your name.",
    },
    {
      author: "Non-Fiction Ghostwriting",
      content:
        "Transforming your ideas and expertise into informative and engaging non-fiction books.",
    },
    {
      author: "Memoir Ghostwriting",
      content:
        "Preserving your memories and experiences with our personalized memoir ghostwriting service.",
    },
    {
      author: "Ghostwriting Consulting",
      content:
        "Providing expert guidance and strategies to help you navigate the ghostwriting process.",
    },
    {
      author: "SEO Optimization",
      content:
        "Optimizing your content to improve search engine visibility and drive traffic to your website.",
    },
  ];

  import Box from "$lib/components/Box.svelte";
</script>

<div class="flex flex-col justify-center items-center space-y-8 border-t">
  <div class="flex flex-col justify-center items-center gap-10 mt-10">
    <div class="text-4xl md:text-6xl  text-primary font-bold fade-in">Our Services</div>
    <div class="text-xl  md:text-2xl space-y-4 font-medium text-neutral-750 fade-in">
      Offering ghostwriting services such that your work stands out from the rest.
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 fade-in max-w-7xl mx-auto px-4">
      {#each reviews as review}
        <Box author={review.author} content={review.content} />
      {/each}
    </div>
  </div>
  <div>
    <a
      href="https://wa.me/13477169628"
      class="bg-neutral-900 text-white py-2 px-4 rounded-md hover:bg-neutral-700"
      >Chat With Us</a
    >
  </div>
</div>

<style>
  .grid {
    width: 100%;
  }
</style>
