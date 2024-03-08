<script lang="ts">
  import Button from "./Button.svelte";
</script>

<div class="flex flex-row w-screen h-auto justify-between mt-5">
  <div class=" flex flex-row gap-4 pd-2 ml-10">
    <Button link="/">Home</Button>
    <Button link="/about">About</Button>
    <Button link="/testimonials">Testimonials</Button>
  </div>
  <div class="flex flex-row gap-4 pd-2 mr-10">
    <Button link="/contact-us">Contact Us</Button>
    <Button>Chat With Us</Button>
  </div>
</div>
