<script lang="ts">
  import HeaderItem from "./HeaderItem.svelte";
</script>

<div
  class="flex flex-row w-screen h-auto justify-between my-5 justify-center"
>
  <div class="flex flex-row gap-4 p-2 ml-10">
    <HeaderItem link="/">Home</HeaderItem>
    <HeaderItem link="/about">About</HeaderItem>
    <HeaderItem link="/services">Services</HeaderItem>
    <HeaderItem link="/testimonials">Testimonials</HeaderItem>
  </div>
  <div class="flex flex-row gap-4 p-2 mr-10">
    <HeaderItem link="/contact-us">Contact Us</HeaderItem>
    <HeaderItem link="https://wa.me/923369555887">Chat With Us</HeaderItem>
  </div>
</div>
