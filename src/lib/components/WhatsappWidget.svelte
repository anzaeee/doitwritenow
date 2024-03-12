<script lang="ts">
  import WhatsappLogo from "$lib/images/WhatsappLogo.svelte";

  function openWhatsAppChat() {
    const phoneNumber = "your-phone-number";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank", "width=500,height=600");
  }
</script>

<div
  class="whatsapp-container"
  on:click={openWhatsAppChat}
  role="button"
  tabindex="0"
>
  <WhatsappLogo />
</div>

<style>
  .whatsapp-container {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }
</style>
