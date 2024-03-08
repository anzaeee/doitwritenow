<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  let isOpen = false;
  const dispatch = createEventDispatcher();

  // Function to toggle the accordion
  function toggleAccordion() {
    isOpen = !isOpen;
  }

  // Close the accordion when clicking outside of it
  function handleClickOutside(event) {
    const target = event.target;
    const accordion = document.getElementById("accordion");

    if (accordion && !accordion.contains(target)) {
      isOpen = false;
    }
  }

  onMount(() => {
    // Add event listener to handle click outside of the accordion
    window.addEventListener("click", handleClickOutside);

    // Cleanup function to remove the event listener when component is destroyed
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });
</script>

<div id="accordion" class="accordion">
  <div class="accordion-header" on:click={toggleAccordion}>
    <div class="accordion-title">
      <slot name="label">Accordion Title</slot>
    </div>
    <div class="accordion-icon">{isOpen ? "-" : "+"}</div>
  </div>
  {#if isOpen}
    <div class="accordion-content">
      <slot />
    </div>
  {/if}
</div>

<style>
  .accordion {
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .accordion-header {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    background-color: #f0f0f0;
  }

  .accordion-title {
    flex-grow: 1;
    font-weight: bold;
  }

  .accordion-icon {
    margin-left: auto;
  }

  .accordion-content {
    padding: 10px;
    border-top: 1px solid #ccc;
  }
</style>
