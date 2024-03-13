<script>
</script>

<div
  class="flex flex-col justify-center items-center space-y-8 gap-10 border-t"
>
  <div class="text-4xl text-primary mt-10 font-bold fade-in">Contact Us</div>
  <div class="form-group flex flex-row">
    <label class="label" for="name">Name:</label>
    <input
      class="rounded-input bg-slate-100"
      type="text"
      id="name"
      name="name"
      required
    />
    <label class="label ml-10" for="email">Email:</label>
    <input
      class="rounded-input bg-slate-100"
      type="email"
      id="email"
      name="email"
      required
    />
  </div>
  <div class="form-group flex flex-row items-center">
    <label class="label" for="message">Message:</label>
    <textarea
      class="rounded-input bg-slate-100 w-full"
      id="message"
      name="message"
      rows="4"
      required
    ></textarea>
  </div>
  <input
    class="bg-slate-700 hover:bg-slate-900 text-white rounded-input cursor-pointer w-full"
    type="submit"
    value="Send Message"
  />
</div>

<style>
  .rounded-input {
    border-radius: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
  }

  .label {
    margin-right: 0.5rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }
</style>
