<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Header />
<div
  class="flex flex-col justify-center items-center space-y-8 border-t h-auto w-auto"
>
  <div class="flex flex-col justify-center items-center gap-10 fade-in mt-10">
    <div class="text-6xl text-primary font-bold">We Write, You Win.</div>
    <div class="text-2xl font-medium">
      Offering ghostwriting services such that your work stands out from the
      rest.
    </div>
  </div>
  <div>
    <a
      href="/contact-us"
      class="bg-neutral-900 text-white py-2 px-4 rounded-md hover:bg-neutral-700"
      >Contact Us</a
    >
  </div>
  <div class="w-1/3 h-1/2 m-10">
    <img src="src/lib/images/heroimg.jpg" alt="Waves" />
  </div>
</div>
<Footer />
