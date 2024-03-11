<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
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

<Header />
<div class="flex flex-col justify-center items-center space-y-8 border-t">
  <div class="flex flex-col justify-center items-center gap-10 mt-10">
    <div class="text-4xl text-primary font-bold fade-in">Our Services</div>
    <div class="text-xl space-y-4 font-medium text-neutral-750">
      Offering ghostwriting services such that your work stands out from the
      rest.
    </div>

    <div class="grid grid-cols-3 align-center gap-4 fade-in">
      {#each reviews as review}
        <Box author={review.author} content={review.content} />
      {/each}
    </div>
  </div>
  <div>
    <a
      href="/contact-us"
      class="bg-neutral-900 text-white py-2 px-4 rounded-md hover:bg-neutral-700"
      >Contact Us</a
    >
  </div>
</div>
<Footer />
