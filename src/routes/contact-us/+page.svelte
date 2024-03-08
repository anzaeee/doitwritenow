<script>
  let name = "";
  let email = "";
  let message = "";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert("Email sent successfully");
    } else {
      alert("Error sending email");
    }
  };
</script>

<form on:submit={handleSubmit}>
  <label>
    Name:
    <input type="text" bind:value={name} required />
  </label>
  <label>
    Email:
    <input type="email" bind:value={email} required />
  </label>
  <label>
    Message:
    <textarea bind:value={message} required></textarea>
  </label>
  <button type="submit">Send</button>
</form>
