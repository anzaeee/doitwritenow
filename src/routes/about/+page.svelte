<script>
  import Accordion from "$lib/components/Accordion.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<!-- <Accordion>
  <div slot="label">Accordion Label</div>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna sit
    amet dui ultricies elementum.
  </div>
</Accordion> -->

<Header />
<div
  class="flex flex-col justify-center items-center space-y-8 h-auto w-auto border-t"
>
  <div class="flex flex-col justify-center items-center gap-10 fade-in mt-10">
    <div class="text-2xl font-medium">Coming Soon</div>
  </div>
</div>
<Footer />
