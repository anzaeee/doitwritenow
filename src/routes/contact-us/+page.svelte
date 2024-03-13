<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Header />

<div class="flex flex-col justify-center items-center space-y-8 gap-10 border-t">
  <div class="text-4xl text-primary mt-10 font-bold fade-in">Contact Us</div>
  <div class= "form-group px-2">
  <div class="flex flex-row">
    <input
      class="rounded-input bg-slate-100"
      type="text"
      placeholder="Name"
      required
    />
    <input
      class="rounded-input bg-slate-100 ml-10"
      type="email"
      placeholder="Email"
      required
    />
  </div>
  <div class="form-group flex flex-row items-center mt-5">
    <textarea
      class="rounded-input bg-slate-100 w-full"
      placeholder="Message"
      rows="4"
      required
    ></textarea>
  </div>

  <input
    class="bg-slate-800 hover:bg-slate-900 text-white rounded-input cursor-pointer w-full"
    type="submit"
    value="Send Message"
  />
</div>
  </div>

<Footer />

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
