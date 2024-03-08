<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="space-y-10">
  <Header />
  <slot />
  <Footer />
</div>
