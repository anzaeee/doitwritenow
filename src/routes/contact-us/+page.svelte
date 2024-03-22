<script>
  let status = "";
  const handleSubmit = async event => {
    event.preventDefault(); // Prevent form submission
    
    status = 'Submitting...';
    const formData = new FormData(event.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: json
      });
      
      const result = await response.json();
      if (result.success) {
        console.log(result);
        status = result.message || "Success";
      } else {
        status = "Submission failed";
      }
    } catch (error) {
      console.error("Error:", error);
      status = "Error submitting form";
    }
  }
</script>

<div class="space-y-8 mx-auto px-4 md:px-8 lg:px-16 xl:px-20 min-h-screen justify-center align-center">
  <div class="flex flex-col justify-center items-center space-y-8 gap-10 border-t">
    <div class="text-4xl md:text-6xl mt-8 text-primary font-bold space-y-8 fade-in text-center">
      Contact Us
    </div>
    <div class="text-xl md:text-2xl space-y-4 font-medium text-neutral-750 fade-in">
      Have a question? Reach out to us! We are eager to help you.
    </div>
    <form on:submit|preventDefault={handleSubmit} class="form-group px-2 w-full md:w-3/4 lg:w-1/2 xl:w-1/3 fade-in">
      <div class="flex flex-col md:flex-row w-full">
      <input type="hidden" name="access_key" value="808d2cef-012e-425a-aec5-65e9e067b1c1">
        <input id="nameInput" name="name" class="rounded-input bg-slate-100 w-full mb-4 md:mb-0 md:mr-4" type="text" placeholder="Name" required />
        <input id="emailInput" name="email" class="rounded-input bg-slate-100 w-full" type="email" placeholder="Email" required />
      </div>
      <div class="form-group mt-5">
        <textarea id="messageInput" name="message" class="rounded-input bg-slate-100 w-full" placeholder="Message" rows="4" required></textarea>
      </div>

      <button id="submitButton" type="button" class="bg-slate-800 hover:bg-slate-900 text-white rounded-input cursor-pointer w-full" onclick="sendEmail()">
        Send Message
      </button>
    </form>
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
