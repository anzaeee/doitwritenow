<script>
  import { onMount } from "svelte";

  let name = "";
  let email = "";
  let message = "";

  onMount(() => {
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", (event) => {
      event.preventDefault();

      name = document.getElementById("nameInput").value;
      email = document.getElementById("emailInput").value;
      message = document.getElementById("messageInput").value;

      if (name && email && message) {
        // Replace with your form collector endpoint
        fetch("https://formcollector.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });
  });
</script>

<div
  class="space-y-8 mx-auto px-4 md:px-8 lg:px-16 xl:px-20 min-h-screen justify-center align-center"
>
  <div
    class="flex flex-col justify-center items-center space-y-8 gap-10 border-t"
  >
    <div
      class="text-4xl md:text-6xl mt-8 text-primary font-bold space-y-8 fade-in text-center"
    >
      Contact Us
    </div>
    <div
      class="text-xl md:text-2xl space-y-4 font-medium text-neutral-750 fade-in"
    >
      Have a question? Reach out to us! We are eager to help you.
    </div>
    <div class="form-group px-2 w-full md:w-3/4 lg:w-1/2 xl:w-1/3 fade-in">
      <div class="flex flex-col md:flex-row w-full">
        <input
          id="nameInput"
          class="rounded-input bg-slate-100 w-full mb-4 md:mb-0 md:mr-4"
          type="text"
          placeholder="Name"
          required
        />
        <input
          id="emailInput"
          class="rounded-input bg-slate-100 w-full"
          type="email"
          placeholder="Email"
          required
        />
      </div>
      <div class="form-group mt-5">
        <textarea
          id="messageInput"
          class="rounded-input bg-slate-100 w-full"
          placeholder="Message"
          rows="4"
          required
        ></textarea>
      </div>

      <button
        id="submitButton"
        class="bg-slate-800 hover:bg-slate-900 text-white rounded-input cursor-pointer w-full"
      >
        Send Message
      </button>
    </div>
  </div>
</div>

<style>
  .rounded-input {
    border-radius: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  *:focus {
    outline: none;
  }
</style>
