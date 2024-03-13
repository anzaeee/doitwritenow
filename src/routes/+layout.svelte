<script>
  import "../app.css";
  import WhatsappWidget from "$lib/components/WhatsappWidget.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Header/>
<slot />
<div class="relative">
  <div class="fixed bottom-10 right-5">
    <WhatsappWidget />
  </div>
</div>
<Footer/>
