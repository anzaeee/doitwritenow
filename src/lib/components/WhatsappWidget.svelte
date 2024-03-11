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
  <div class="whatsapp-text">Chat With Us</div>
</div>

<style>
  .whatsapp-container {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .whatsapp-text {
    display: none;
    position: absolute;
    background-color: #ffffff;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    bottom: -30px;
    right: -30px;
    z-index: 1;
  }

  .whatsapp-container:hover .whatsapp-text {
    display: inline-block;
  }
</style>
