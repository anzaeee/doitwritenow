<script>
  import Box from "$lib/components/Box.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let reviews = [
    {
      author: "John Doe",
      content:
        "Working with DIWN was an absolute pleasure. Our ghostwriting team not only delivered exceptional content but also took the time to understand our vision and goals. The end result exceeded our expectations, and we couldn't be happier with the outcome. We highly recommend them to anyone in need of professional ghostwriting services.",
    },
    {
      author: "Jane Doe",
      content:
        "The content provided by DIWN was top-notch. Their attention to detail and ability to capture the essence of my message were impressive. I will definitely be using their services again in the future.",
    },
    {
      author: "Alice Smith",
      content:
        "DIWN exceeded my expectations with their ghostwriting services. They were professional, timely, and produced content that perfectly aligned with my brand's voice. I highly recommend their services to anyone in need of quality writing.",
    },
    {
      author: "Bob Johnson",
      content:
        "I was blown away by the quality of work provided by DIWN. Their ghostwriting services are second to none, and I can't thank them enough for bringing my ideas to life.",
    },
    {
      author: "Eve White",
      content:
        "DIWN's ghostwriting team is exceptional. They took the time to understand my project requirements and delivered outstanding results. I will definitely be a returning customer.",
    },
    {
      author: "Sam Brown",
      content:
        "The ghostwriting services provided by DIWN were outstanding. Their team was professional, responsive, and delivered high-quality work within the agreed-upon timeframe. I highly recommend them to anyone in need of ghostwriting services.",
    },
    {
      author: "Emily Green",
      content:
        "DIWN's ghostwriting services exceeded my expectations. They were able to capture my voice and style perfectly, resulting in content that truly resonated with my audience. I look forward to working with them again in the future.",
    },
    {
      author: "Michael Davis",
      content:
        "DIWN's ghostwriting team is top-notch. They provided excellent communication throughout the process and delivered content that exceeded my expectations. I highly recommend their services to anyone looking for professional ghostwriting.",
    },
    {
      author: "Sarah Wilson",
      content:
        "I couldn't be happier with the ghostwriting services provided by DIWN. They were able to take my ideas and turn them into engaging content that surpassed my expectations. I highly recommend them to anyone in need of quality writing.",
    },
  ];
</script>

<Header />

<div class="flex flex-col justify-center items-center space-y-8 border-t">
  <div class="flex flex-col justify-center items-center gap-10 mt-10">
    <div class="text-4xl text-primary font-bold fade-in">
      Learn what our clients are saying about us
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4 fade-in">
    {#each reviews as review}
      <Box author={review.author} content={review.content} />
    {/each}
  </div>
</div>
<Footer />

<style>
  .grid {
    width: 100%;
  }
</style>
