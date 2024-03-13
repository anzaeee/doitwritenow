<script>
  import "../app.css";
  import WhatsappWidget from "$lib/components/WhatsappWidget.svelte";
</script>

<slot />

<div class="relative">
  <div class="fixed bottom-10 right-5">
    <WhatsappWidget />
  </div>
</div>
