<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Header />
<div class="flex flex-col justify-center items-center space-y-8 border-t h-auto w-auto">
  <div class="flex flex-col justify-center items-center gap-10 fade-in mt-10">
    <div class="text-4xl md:text-6xl text-primary font-bold text-center">We Write, You Win.</div>
    <div class="text-lg md:text-2xl font-medium text-center">
      Offering ghostwriting services such that your work stands out from the rest.
    </div>
  </div>
  <div>
    <a
      href="/contact-us"
      class="bg-neutral-900 text-white py-2 px-4 rounded-md hover:bg-neutral-700"
      >Contact Us</a
    >
  </div>
  <div class="w-full md:w-1/2 m-10">
    <img
      src="https://www.pexels.com/photo/person-holding-white-ceramic-be-happy-painted-mug-851213"
      alt="Person holding a white ceramic mug with 'Be Happy' painted on it"
      class="w-full"
    />
  </div>
</div>
<Footer />

<style>
@media (min-width: 768px) {
  .text-primary {
    font-size: 6rem;
  }
  .font-medium {
    font-size: 1.5rem;
  }
}
</style>
