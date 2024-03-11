<script>
  import "../app.css";
  import WhatsappWidget from "$lib/components/WhatsappWidget.svelte";
</script>

<slot />

<div class="relative">
  <div class="absolute bottom-5 right-5">
    <WhatsappWidget />
  </div>
</div>
