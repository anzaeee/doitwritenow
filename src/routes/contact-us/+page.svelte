<script>
  function sendEmail() {
    var name = document.getElementById("nameInput").value.trim();
    var email = document.getElementById("emailInput").value.trim();
    var message = document.getElementById("messageInput").value.trim();

    // Check if all required fields are filled
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Construct the email body with placeholders replaced by actual values
    var body =
      "Quotation received from " +
      name +
      " and " +
      email +
      ". Message: " +
      message;

    // Show success message after sending the email
    alert("Email sent successfully!");

    // Construct the mailto link with pre-filled fields
    var mailtoLink =
      "mailto:doitwritenow@protonmail.com" +
      "?subject=Message from " +
      encodeURIComponent(name) +
      "&body=" +
      encodeURIComponent(body);

    // Open the user's default email client
    window.location.href = mailtoLink;
  }
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
        onclick="sendEmail()"
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
