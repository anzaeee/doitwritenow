<script lang="ts">
  import HeaderItem from "./HeaderItem.svelte";
</script>

<div class="flex flex-row w-screen h-auto justify-between my-5 justify-center">
  <div class="flex flex-row gap-4 p-2 ml-10">
    <HeaderItem link="/">Home</HeaderItem>
    <HeaderItem link="/about">About</HeaderItem>
    <HeaderItem link="/services">Services</HeaderItem>
    <HeaderItem link="/testimonials">Testimonials</HeaderItem>
  </div>
  <div class="flex flex-row gap-4 p-2 mr-10">
    <HeaderItem link="/contact-us">Contact Us</HeaderItem>
    <HeaderItem
      link="https://wa.me/13477169628"
      target="_blank"
      rel="noopener noreferrer">Chat With Us</HeaderItem
    >
  </div>
</div>

<style>
  .w-screen {
    width: 100vw;
  }

  .h-auto {
    height: auto;
  }

  @media (max-width: 640px) {
    .flex-row {
      flex-direction: column;
    }

    .justify-between {
      justify-content: center;
    }

    .ml-10,
    .mr-10 {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }

    .gap-4 {
      gap: 1rem;
    }

    .p-2 {
      padding: 0.5rem;
    }
  }
</style>
