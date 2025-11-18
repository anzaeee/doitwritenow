<script lang="ts">
  import WhatsappLogo from "$lib/images/WhatsappLogo.svelte";

  function openWhatsAppChat() {
    const phoneNumber = "13477169628";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank", "width=500,height=600");
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openWhatsAppChat();
    }
  }
</script>

<div
  class="whatsapp-container"
  on:click={openWhatsAppChat}
  on:keydown={handleKeyDown}
  role="button"
  tabindex="0"
  aria-label="Open WhatsApp chat"
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
