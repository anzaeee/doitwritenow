<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import WhatsappWidget from "$lib/components/WhatsappWidget.svelte";
</script>

<Header />
<slot />

<div class="relative">
  <div class="absolute bottom-0 right-5">
    <WhatsappWidget/>
  </div>
</div>

<Footer />
