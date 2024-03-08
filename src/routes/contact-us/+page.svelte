<script>
  let email = "";
  let name = "";
  let message = "";
</script>

<div class="flex flex-col justify-center items-center space-y-10">
  <div class="text-xl font-bold">Contact Us</div>
  <div class="flex flex-row">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />
    <label for="name">Email:</label>
    <input type="text" id="name" name="email" required />
  </div>
  <label for="name">Message:</label>
  <input type="text" id="name" name="message" required />
  <input type="submit" value="Send Message" />
</div>
